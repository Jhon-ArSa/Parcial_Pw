// 🟡 Jefferson - Configuración de entorno
export const ENV = {
  MODE: import.meta.env.MODE,
  DEV: import.meta.env.DEV,
  PROD: import.meta.env.PROD,
  API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  API_KEY: import.meta.env.VITE_API_KEY || '',
} as const;

export const isDevelopment = ENV.MODE === 'development';
export const isProduction = ENV.MODE === 'production';

export const getEnvVar = (key: string, defaultValue: string = ''): string => {
  return import.meta.env[key] || defaultValue;
};
