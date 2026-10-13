// 🟡 Jefferson - Tipos de API y almacenamiento
export interface ServiceResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface StorageKeys {
  AUTH_TOKEN: string;
  REFRESH_TOKEN: string;
  USER_DATA: string;
  THEME: string;
  LANGUAGE: string;
  CATEGORIAS: string;
  LIBROS: string;
  USUARIOS: string;
  PRESTAMOS: string;
  SESION: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  errors?: ApiError[];
}

export interface ApiError {
  field?: string;
  message: string;
  code: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface RequestConfig {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  data?: unknown;
  params?: Record<string, string | number>;
  headers?: Record<string, string>;
}
