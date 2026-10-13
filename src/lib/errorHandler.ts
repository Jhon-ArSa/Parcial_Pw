// 🟡 Jefferson - Manejo centralizado de errores
import type { ApiError } from '../types/api.types';

export class AppError extends Error {
  code?: string;
  statusCode?: number;
  
  constructor(
    message: string,
    code?: string,
    statusCode?: number
  ) {
    super(message);
    this.name = 'AppError';
    this.code = code;
    this.statusCode = statusCode;
  }
}

export const handleApiError = (error: unknown): ApiError => {
  if (error instanceof AppError) {
    return {
      message: error.message,
      code: error.code || 'UNKNOWN_ERROR',
    };
  }

  if (error instanceof Error) {
    return {
      message: error.message,
      code: 'GENERAL_ERROR',
    };
  }

  return {
    message: 'Ha ocurrido un error inesperado',
    code: 'UNKNOWN_ERROR',
  };
};

export const logError = (error: unknown, context?: string): void => {
  if (import.meta.env.DEV) {
    console.error(`[Error ${context ? `- ${context}` : ''}]:`, error);
  }
  // TODO: Integrar con servicio de logging (Sentry, LogRocket, etc.)
};
