// 🟡 Jefferson
import type { StorageKeys } from "../types/api.types";

export const STORAGE_KEYS: StorageKeys = {
  CATEGORIAS: "biblioteca_categorias",
  LIBROS: "biblioteca_libros",
  USUARIOS: "biblioteca_usuarios",
  PRESTAMOS: "biblioteca_prestamos",
  SESION: "biblioteca_sesion",
};

export const DIAS_PRESTAMO = 7;

export const TIPOS_USUARIO = ["Estudiante", "Docente"] as const;

export const ROLES = {
  ADMIN: "admin",
  USUARIO: "usuario",
} as const;

export const ESTADOS_PRESTAMO = {
  ACTIVO: "Activo",
  DEVUELTO: "Devuelto",
} as const;

export const MENSAJES = {
  CODIGO_DUPLICADO: "El código universitario ya está registrado",
  CORREO_DUPLICADO: "El correo electrónico ya está registrado",
  STOCK_AGOTADO: "No hay stock disponible para este libro",
  CAMPOS_REQUERIDOS: "Todos los campos son obligatorios",
  NO_ENCONTRADO: "Registro no encontrado",
  CREADO: "Registro creado correctamente",
  ACTUALIZADO: "Registro actualizado correctamente",
  ELIMINADO: "Registro eliminado correctamente",
} as const;
