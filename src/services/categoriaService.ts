import { dataService } from "./dataService";
import { STORAGE_KEYS, MENSAJES } from "../config/constants";
import type { Categoria } from "../types/app.types";
import type { ServiceResponse } from "../types/api.types";

export const categoriaService = {
  getAll(): Categoria[] {
    return dataService.getAll<Categoria>(STORAGE_KEYS.CATEGORIAS);
  },

  getById(id: string): Categoria | null {
    return dataService.getById<Categoria>(STORAGE_KEYS.CATEGORIAS, id);
  },

  getByNombre(nombre: string): Categoria | null {
    return (
      this.getAll().find(
        (c) => c.nombre.toLowerCase() === nombre.toLowerCase(),
      ) ?? null
    );
  },

  create(nombre: string): ServiceResponse<Categoria> {
    const limpio = nombre.trim();
    if (!limpio) return { success: false, error: MENSAJES.CAMPOS_REQUERIDOS };
    if (this.getByNombre(limpio)) {
      return { success: false, error: "La categoría ya existe" };
    }
    const nueva: Categoria = {
      id: dataService.generateId("C-"),
      nombre: limpio,
    };
    return dataService.create<Categoria>(STORAGE_KEYS.CATEGORIAS, nueva);
  },

  update(id: string, nombre: string): ServiceResponse<Categoria> {
    const actual = this.getById(id);
    if (!actual) return { success: false, error: MENSAJES.NO_ENCONTRADO };

    const limpio = nombre.trim();
    if (!limpio) return { success: false, error: MENSAJES.CAMPOS_REQUERIDOS };

    const dup = this.getByNombre(limpio);
    if (dup && dup.id !== id) {
      return { success: false, error: "La categoría ya existe" };
    }

    return dataService.update<Categoria>(STORAGE_KEYS.CATEGORIAS, {
      ...actual,
      nombre: limpio,
    });
  },

  remove(id: string): ServiceResponse<string> {
    return dataService.remove<Categoria>(STORAGE_KEYS.CATEGORIAS, id);
  },
};
