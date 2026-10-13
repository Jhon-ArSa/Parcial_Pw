// 🟡 Jefferson - Servicio de autenticación (Local Storage + adapter de UI)
import { dataService } from './dataService';
import { userService } from './userService';
import { STORAGE_KEYS } from '../config/constants';
import type { Usuario } from '../types/app.types';
import type {
  AuthUser,
  LoginCredentials,
  RegisterData,
  SesionUsuario,
  UiLoginCredentials,
  User,
} from '../types/user.types';
import type { ServiceResponse } from '../types/api.types';

const toUser = (usuario: Usuario): User => ({
  id: usuario.id,
  name: `${usuario.nombres} ${usuario.apellidos}`.trim(),
  email: usuario.correo,
  role: usuario.rol === 'admin' ? 'admin' : 'user',
  createdAt: new Date(),
  updatedAt: new Date(),
});

const saveSesion = (usuario: Usuario) => {
  const sesion: SesionUsuario = { usuario, isAuthenticated: true };
  localStorage.setItem(STORAGE_KEYS.SESION, JSON.stringify(sesion));
  localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(toUser(usuario)));
  localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, `local-${usuario.id}`);
};

const clearSesion = () => {
  localStorage.removeItem(STORAGE_KEYS.SESION);
  localStorage.removeItem(STORAGE_KEYS.USER_DATA);
  localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
  localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
};

const toAuthUser = (usuario: Usuario): AuthUser => ({
  user: toUser(usuario),
  token: `local-${usuario.id}`,
  refreshToken: `refresh-${usuario.id}`,
});

export const authService = {
  loginWithCodigo({ codigo, correo }: LoginCredentials): ServiceResponse<Usuario> {
    const user = userService.getByCodigo(codigo);
    if (!user) return { success: false, error: 'Usuario no encontrado' };
    if (user.correo !== correo) return { success: false, error: 'Credenciales inválidas' };

    saveSesion(user);
    return { success: true, data: user };
  },

  async login({ email, password }: UiLoginCredentials): Promise<AuthUser> {
    const user =
      userService.getByCorreo(email) ?? userService.getByCodigo(password);

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    const correoOk = user.correo.toLowerCase() === email.toLowerCase();
    const codigoOk = user.codigo === password;
    if (!correoOk && !codigoOk) {
      throw new Error('Credenciales inválidas');
    }

    saveSesion(user);
    return toAuthUser(user);
  },

  async register({ name, email, password }: RegisterData): Promise<AuthUser> {
    const partes = name.trim().split(/\s+/);
    const nombres = partes[0] || 'Usuario';
    const apellidos = partes.slice(1).join(' ') || 'Biblioteca';

    const created = userService.create({
      nombres,
      apellidos,
      codigo: password,
      correo: email,
      tipo: 'Estudiante',
      rol: 'usuario',
    });

    if (!created.success || !created.data) {
      throw new Error(created.error || 'No se pudo registrar el usuario');
    }

    saveSesion(created.data);
    return toAuthUser(created.data);
  },

  async logout(): Promise<void> {
    clearSesion();
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

  getStoredUser(): User | null {
    const sesion = this.getSesion();
    if (sesion.usuario) return toUser(sesion.usuario);

    try {
      const raw = localStorage.getItem(STORAGE_KEYS.USER_DATA);
      return raw ? (JSON.parse(raw) as User) : null;
    } catch {
      return null;
    }
  },

  isAdmin(): boolean {
    return this.getSesion().usuario?.rol === 'admin';
  },

  isAuthenticated(): boolean {
    return this.getSesion().isAuthenticated;
  },

  generateGuestId(): string {
    return dataService.generateId('G-');
  },
};
