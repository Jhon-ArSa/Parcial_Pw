// 🟡 Jefferson - Servicio de autenticación
import { apiService } from './api';
import type { AuthUser, User } from '../types/user.types';
import { STORAGE_KEYS } from '../config/constants';

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export class AuthService {
  async login(credentials: LoginCredentials): Promise<AuthUser> {
    const authUser = await apiService.post<AuthUser>('/auth/login', credentials);
    this.saveAuthData(authUser);
    return authUser;
  }

  async register(data: RegisterData): Promise<AuthUser> {
    const authUser = await apiService.post<AuthUser>('/auth/register', data);
    this.saveAuthData(authUser);
    return authUser;
  }

  async logout(): Promise<void> {
    try {
      await apiService.post('/auth/logout', {});
    } finally {
      this.clearAuthData();
    }
  }

  async getCurrentUser(): Promise<User | null> {
    try {
      return await apiService.get<User>('/auth/me');
    } catch {
      return null;
    }
  }

  async refreshToken(): Promise<string> {
    const refreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
    const response = await apiService.post<{ token: string }>('/auth/refresh', {
      refreshToken,
    });
    localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, response.token);
    return response.token;
  }

  private saveAuthData(authUser: AuthUser): void {
    localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, authUser.token);
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, authUser.refreshToken);
    localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(authUser.user));
  }

  private clearAuthData(): void {
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER_DATA);
  }

  getStoredUser(): User | null {
    const userData = localStorage.getItem(STORAGE_KEYS.USER_DATA);
    return userData ? JSON.parse(userData) : null;
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  }
}

export const authService = new AuthService();
