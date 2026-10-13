// 🟡 Jefferson - Constantes de la aplicación
export const APP_NAME = 'Parcial App';
export const APP_VERSION = '1.0.0';

export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  TIMEOUT: 30000,
  RETRY_ATTEMPTS: 3,
};

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  REFRESH_TOKEN: 'refresh_token',
  USER_DATA: 'user_data',
  THEME: 'theme',
  LANGUAGE: 'language',
} as const;

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  DASHBOARD: '/dashboard',
  LOGIN: '/login',
  REGISTER: '/register',
  NOT_FOUND: '*',
} as const;

export const VALIDATION_RULES = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD_MIN_LENGTH: 8,
  USERNAME_MIN_LENGTH: 3,
  PHONE_REGEX: /^\+?[1-9]\d{1,14}$/,
};
