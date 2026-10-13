// 🟡 Jefferson
export interface ServiceResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface StorageKeys {
  CATEGORIAS: string;
  LIBROS: string;
  USUARIOS: string;
  PRESTAMOS: string;
  SESION: string;
}
