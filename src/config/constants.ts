// 🟡 Jefferson - Constantes de la aplicación - Biblioteca Virtual
import type { StorageKeys } from '../types/api.types';

export const APP_NAME = 'Biblioteca Virtual';
export const APP_VERSION = '1.0.0';

export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  TIMEOUT: 30000,
  RETRY_ATTEMPTS: 3,
};

export const STORAGE_KEYS: StorageKeys = {
  AUTH_TOKEN: 'auth_token',
  REFRESH_TOKEN: 'refresh_token',
  USER_DATA: 'user_data',
  THEME: 'theme',
  LANGUAGE: 'language',
  CATEGORIAS: 'biblioteca_categorias',
  LIBROS: 'biblioteca_libros',
  USUARIOS: 'biblioteca_usuarios',
  PRESTAMOS: 'biblioteca_prestamos',
  SESION: 'biblioteca_sesion',
};

export const ROUTES = {
  HOME: '/',
  CATALOG: '/catalogo',
  ABOUT: '/about',
  DASHBOARD: '/dashboard',
  LOGIN: '/login',
  REGISTER: '/register',
  NOT_FOUND: '*',
  ADMIN_DASHBOARD: '/admin',
  ADMIN_LIBROS: '/admin/libros',
  ADMIN_CATEGORIAS: '/admin/categorias',
  ADMIN_USUARIOS: '/admin/usuarios',
  ADMIN_PRESTAMOS: '/admin/prestamos',
  USER_DASHBOARD: '/usuario',
  USER_BUSCAR: '/usuario/buscar',
  USER_MIS_PRESTAMOS: '/usuario/prestamos',
  USER_HISTORIAL: '/usuario/historial',
  USER_COMPROBANTE: '/usuario/comprobante/:id',
} as const;

export const VALIDATION_RULES = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD_MIN_LENGTH: 8,
  USERNAME_MIN_LENGTH: 3,
  PHONE_REGEX: /^\+?[1-9]\d{1,14}$/,
};

export const DIAS_PRESTAMO = 7;

export const TIPOS_USUARIO = ['Estudiante', 'Docente'] as const;

export const ROLES = {
  ADMIN: 'admin',
  USUARIO: 'usuario',
} as const;

export const ESTADOS_PRESTAMO = {
  ACTIVO: 'Activo',
  DEVUELTO: 'Devuelto',
} as const;

export const MENSAJES = {
  CODIGO_DUPLICADO: 'El código universitario ya está registrado',
  CORREO_DUPLICADO: 'El correo electrónico ya está registrado',
  STOCK_AGOTADO: 'No hay stock disponible para este libro',
  CAMPOS_REQUERIDOS: 'Todos los campos son obligatorios',
  NO_ENCONTRADO: 'Registro no encontrado',
  CREADO: 'Registro creado correctamente',
  ACTUALIZADO: 'Registro actualizado correctamente',
  ELIMINADO: 'Registro eliminado correctamente',
} as const;
