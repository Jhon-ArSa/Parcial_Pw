import { dataService } from "./dataService";
import { libroService } from "./libroService";
import { userService } from "./userService";
import {
  STORAGE_KEYS,
  MENSAJES,
  DIAS_PRESTAMO,
  ESTADOS_PRESTAMO,
} from "../config/constants";
import type { Prestamo } from "../types/app.types";
import type { ServiceResponse } from "../types/api.types";

export interface ComprobanteDigital {
  codigoPrestamo: string;
  nombreUsuario: string;
  tituloLibro: string;
  fechaPrestamo: string;
  fechaLimite: string;
}

export const prestamoService = {
  getAll(): Prestamo[] {
    return dataService.getAll<Prestamo>(STORAGE_KEYS.PRESTAMOS);
  },

  getById(id: string): Prestamo | null {
    return dataService.getById<Prestamo>(STORAGE_KEYS.PRESTAMOS, id);
  },

  getByUsuario(usuarioId: string): Prestamo[] {
    return this.getAll().filter((p) => p.usuarioId === usuarioId);
  },

  getActivosByUsuario(usuarioId: string): Prestamo[] {
    return this.getByUsuario(usuarioId).filter(
      (p) => p.estado === ESTADOS_PRESTAMO.ACTIVO,
    );
  },

  getHistorialByUsuario(usuarioId: string): Prestamo[] {
    return this.getByUsuario(usuarioId).sort(
      (a, b) =>
        new Date(b.fechaPrestamo).getTime() -
        new Date(a.fechaPrestamo).getTime(),
    );
  },

  // Registrar préstamo + generar comprobante
  solicitar(usuarioId: string, libroId: string): ServiceResponse<Prestamo> {
    const usuario = userService.getById(usuarioId);
    if (!usuario) return { success: false, error: "Usuario no encontrado" };

    const libro = libroService.getById(libroId);
    if (!libro) return { success: false, error: "Libro no encontrado" };
    if (libro.stock <= 0)
      return { success: false, error: MENSAJES.STOCK_AGOTADO };

    // Evitar préstamo duplicado activo del mismo libro por el mismo usuario
    const yaActivo = this.getActivosByUsuario(usuarioId).some(
      (p) => p.libroId === libroId,
    );
    if (yaActivo) {
      return {
        success: false,
        error: "Ya tienes un préstamo activo de este libro",
      };
    }

    const hoy = new Date();
    const limite = new Date();
    limite.setDate(hoy.getDate() + DIAS_PRESTAMO);

    const nuevo: Prestamo = {
      id: dataService.generateId("P-"),
      usuarioId,
      libroId,
      fechaPrestamo: hoy.toISOString(),
      fechaLimite: limite.toISOString(),
      estado: ESTADOS_PRESTAMO.ACTIVO,
    };

    // 1) descontar stock
    const stockRes = libroService.decrementarStock(libroId);
    if (!stockRes.success) return { success: false, error: stockRes.error };

    // 2) guardar préstamo
    const res = dataService.create<Prestamo>(STORAGE_KEYS.PRESTAMOS, nuevo);
    if (!res.success) {
      // rollback de stock
      libroService.incrementarStock(libroId);
      return res;
    }
    return res;
  },

  devolver(prestamoId: string): ServiceResponse<Prestamo> {
    const prestamo = this.getById(prestamoId);
    if (!prestamo) return { success: false, error: MENSAJES.NO_ENCONTRADO };
    if (prestamo.estado === ESTADOS_PRESTAMO.DEVUELTO) {
      return { success: false, error: "El préstamo ya fue devuelto" };
    }

    libroService.incrementarStock(prestamo.libroId);

    return dataService.update<Prestamo>(STORAGE_KEYS.PRESTAMOS, {
      ...prestamo,
      estado: ESTADOS_PRESTAMO.DEVUELTO,
      fechaDevolucion: new Date().toISOString(),
    });
  },

  // Genera el objeto del comprobante digital
  generarComprobante(prestamoId: string): ComprobanteDigital | null {
    const prestamo = this.getById(prestamoId);
    if (!prestamo) return null;

    const usuario = userService.getById(prestamo.usuarioId);
    const libro = libroService.getById(prestamo.libroId);
    if (!usuario || !libro) return null;

    return {
      codigoPrestamo: prestamo.id,
      nombreUsuario: `${usuario.nombres} ${usuario.apellidos}`,
      tituloLibro: libro.titulo,
      fechaPrestamo: prestamo.fechaPrestamo,
      fechaLimite: prestamo.fechaLimite,
    };
  },
};
