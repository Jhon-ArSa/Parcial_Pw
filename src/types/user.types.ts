// 🟡 Jefferson - Tipos de Usuario
import type { Usuario, TipoUsuario, RolUsuario } from './app.types';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type UserRole = 'admin' | 'user' | 'guest';

export const UserRole = {
  ADMIN: 'admin' as const,
  USER: 'user' as const,
  GUEST: 'guest' as const,
};

export interface UserProfile extends User {
  bio?: string;
  phone?: string;
  address?: string;
}

export interface AuthUser {
  user: User;
  token: string;
  refreshToken: string;
}

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

export interface UiLoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}
