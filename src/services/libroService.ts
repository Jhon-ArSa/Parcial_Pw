import { dataService } from "./dataService";
import { STORAGE_KEYS, MENSAJES } from "../config/constants";
import type { Libro } from "../types/app.types";
import type { ServiceResponse } from "../types/api.types";

export interface LibroFormData {
  titulo: string;
  autor: string;
  isbn: string;
  categoriaId: string;
  stock: number;
}

export const libroService = {
  getAll(): Libro[] {
    return dataService.getAll<Libro>(STORAGE_KEYS.LIBROS);
  },

  getById(id: string): Libro | null {
    return dataService.getById<Libro>(STORAGE_KEYS.LIBROS, id);
  },

  getByIsbn(isbn: string): Libro | null {
    return this.getAll().find((l) => l.isbn === isbn) ?? null;
  },

  getByCategoria(categoriaId: string): Libro[] {
    return this.getAll().filter((l) => l.categoriaId === categoriaId);
  },

  buscar(termino: string, categoriaId?: string): Libro[] {
    const t = termino.trim().toLowerCase();
    return this.getAll().filter((l) => {
      const coincideTexto =
        !t ||
        l.titulo.toLowerCase().includes(t) ||
        l.autor.toLowerCase().includes(t);
      const coincideCat = !categoriaId || l.categoriaId === categoriaId;
      return coincideTexto && coincideCat;
    });
  },

  create(data: LibroFormData): ServiceResponse<Libro> {
    if (!data.titulo || !data.autor || !data.isbn || !data.categoriaId) {
      return { success: false, error: MENSAJES.CAMPOS_REQUERIDOS };
    }
    if (data.stock < 0) {
      return { success: false, error: "El stock no puede ser negativo" };
    }
    if (this.getByIsbn(data.isbn)) {
      return { success: false, error: "El ISBN ya está registrado" };
    }
    const nuevo: Libro = {
      id: dataService.generateId("L-"),
      ...data,
    };
    return dataService.create<Libro>(STORAGE_KEYS.LIBROS, nuevo);
  },

  update(id: string, data: LibroFormData): ServiceResponse<Libro> {
    const actual = this.getById(id);
    if (!actual) return { success: false, error: MENSAJES.NO_ENCONTRADO };

    if (!data.titulo || !data.autor || !data.isbn || !data.categoriaId) {
      return { success: false, error: MENSAJES.CAMPOS_REQUERIDOS };
    }
    if (data.stock < 0) {
      return { success: false, error: "El stock no puede ser negativo" };
    }

    const dup = this.getByIsbn(data.isbn);
    if (dup && dup.id !== id) {
      return { success: false, error: "El ISBN ya está registrado" };
    }

    return dataService.update<Libro>(STORAGE_KEYS.LIBROS, {
      ...actual,
      ...data,
    });
  },

  // Descuenta stock al prestar
  decrementarStock(id: string): ServiceResponse<Libro> {
    const libro = this.getById(id);
    if (!libro) return { success: false, error: MENSAJES.NO_ENCONTRADO };
    if (libro.stock <= 0)
      return { success: false, error: MENSAJES.STOCK_AGOTADO };

    return dataService.update<Libro>(STORAGE_KEYS.LIBROS, {
      ...libro,
      stock: libro.stock - 1,
    });
  },

  // Aumenta stock al devolver
  incrementarStock(id: string): ServiceResponse<Libro> {
    const libro = this.getById(id);
    if (!libro) return { success: false, error: MENSAJES.NO_ENCONTRADO };

    return dataService.update<Libro>(STORAGE_KEYS.LIBROS, {
      ...libro,
      stock: libro.stock + 1,
    });
  },

  remove(id: string): ServiceResponse<string> {
    return dataService.remove<Libro>(STORAGE_KEYS.LIBROS, id);
  },
};
