// 🟡 Jefferson - Servicio de autenticación
import { dataService } from "./dataService";
import { userService } from "./userService";
import { STORAGE_KEYS } from "../config/constants";
import type { Usuario } from "../types/app.types";
import type { LoginCredentials, SesionUsuario } from "../types/user.types";
import type { ServiceResponse } from "../types/api.types";

export const authService = {
  login({ codigo, correo }: LoginCredentials): ServiceResponse<Usuario> {
    const user = userService.getByCodigo(codigo);
    if (!user) return { success: false, error: "Usuario no encontrado" };
    if (user.correo !== correo)
      return { success: false, error: "Credenciales inválidas" };

    const sesion: SesionUsuario = { usuario: user, isAuthenticated: true };
    localStorage.setItem(STORAGE_KEYS.SESION, JSON.stringify(sesion));
    return { success: true, data: user };
  },

  logout(): void {
    localStorage.removeItem(STORAGE_KEYS.SESION);
  },

  getSesion(): SesionUsuario {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.SESION);
      if (!raw) return { usuario: null, isAuthenticated: false };
      return JSON.parse(raw) as SesionUsuario;
    } catch {
      return { usuario: null, isAuthenticated: false };
    }
  },

  isAdmin(): boolean {
    return this.getSesion().usuario?.rol === "admin";
  },
};
