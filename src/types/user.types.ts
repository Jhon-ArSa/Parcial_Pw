// 🟡 Jefferson
import type { Usuario, TipoUsuario, RolUsuario } from "./app.types";

export interface UsuarioFormData {
  nombres: string;
  apellidos: string;
  codigo: string;
  correo: string;
  tipo: TipoUsuario;
  rol?: RolUsuario;
}

export interface SesionUsuario {
  usuario: Usuario | null;
  isAuthenticated: boolean;
}

export interface LoginCredentials {
  codigo: string;
  correo: string;
}
