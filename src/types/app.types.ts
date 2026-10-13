// 🟡 Jefferson - Tipos generales de la aplicación

export interface AppState {
  isLoading: boolean;
  error: string | null;
  theme: Theme;
}

export type Theme = 'light' | 'dark' | 'auto';

export const Theme = {
  LIGHT: 'light' as const,
  DARK: 'dark' as const,
  AUTO: 'auto' as const,
};

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  icon?: string;
  children?: NavigationItem[];
}

export interface FormField {
  name: string;
  value: string | number | boolean;
  error?: string;
  touched?: boolean;
}

export type TipoUsuario = 'Estudiante' | 'Docente';
export type RolUsuario = 'admin' | 'usuario';
export type EstadoPrestamo = 'Activo' | 'Devuelto';

export interface Categoria {
  id: string;
  nombre: string;
}

export interface Libro {
  id: string;
  titulo: string;
  autor: string;
  isbn: string;
  categoriaId: string;
  stock: number;
}

export interface Usuario {
  id: string;
  nombres: string;
  apellidos: string;
  codigo: string;
  correo: string;
  tipo: TipoUsuario;
  rol: RolUsuario;
}

export interface Prestamo {
  id: string;
  usuarioId: string;
  libroId: string;
  fechaPrestamo: string;
  fechaLimite: string;
  fechaDevolucion?: string;
  estado: EstadoPrestamo;
}
