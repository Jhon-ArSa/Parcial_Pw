// 🟡 Jefferson
// src/types/app.types.ts

export type TipoUsuario = "Estudiante" | "Docente";
export type RolUsuario = "admin" | "usuario";
export type EstadoPrestamo = "Activo" | "Devuelto";

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
  codigo: string; // único
  correo: string;
  tipo: TipoUsuario;
  rol: RolUsuario;
}

export interface Prestamo {
  id: string; // código único del préstamo
  usuarioId: string;
  libroId: string;
  fechaPrestamo: string; // ISO
  fechaLimite: string; // ISO
  fechaDevolucion?: string; // ISO, opcional
  estado: EstadoPrestamo;
}
