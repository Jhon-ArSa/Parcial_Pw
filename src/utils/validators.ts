// 🟢 Gabriel - Utilidades de validación
import { VALIDATION_RULES } from '../config/constants';

export const validators = {
  required: (value: unknown): string | undefined => {
    if (!value || (typeof value === 'string' && value.trim() === '')) {
      return 'Este campo es requerido';
    }
    return undefined;
  },

  email: (value: string): string | undefined => {
    if (!value) return 'El email es requerido';
    if (!VALIDATION_RULES.EMAIL_REGEX.test(value)) {
      return 'Email inválido';
    }
    return undefined;
  },

  minLength: (min: number) => (value: string): string | undefined => {
    if (!value) return 'Este campo es requerido';
    if (value.length < min) {
      return `Debe tener al menos ${min} caracteres`;
    }
    return undefined;
  },

  maxLength: (max: number) => (value: string): string | undefined => {
    if (value && value.length > max) {
      return `No debe exceder ${max} caracteres`;
    }
    return undefined;
  },

  password: (value: string): string | undefined => {
    if (!value) return 'La contraseña es requerida';
    if (value.length < VALIDATION_RULES.PASSWORD_MIN_LENGTH) {
      return `La contraseña debe tener al menos ${VALIDATION_RULES.PASSWORD_MIN_LENGTH} caracteres`;
    }
    if (!/[A-Z]/.test(value)) {
      return 'Debe contener al menos una mayúscula';
    }
    if (!/[a-z]/.test(value)) {
      return 'Debe contener al menos una minúscula';
    }
    if (!/[0-9]/.test(value)) {
      return 'Debe contener al menos un número';
    }
    return undefined;
  },

  confirmPassword: (password: string) => (value: string): string | undefined => {
    if (!value) return 'Confirme su contraseña';
    if (value !== password) {
      return 'Las contraseñas no coinciden';
    }
    return undefined;
  },

  phone: (value: string): string | undefined => {
    if (!value) return undefined; // Campo opcional
    if (!VALIDATION_RULES.PHONE_REGEX.test(value)) {
      return 'Número de teléfono inválido';
    }
    return undefined;
  },

  url: (value: string): string | undefined => {
    if (!value) return undefined; // Campo opcional
    try {
      new URL(value);
      return undefined;
    } catch {
      return 'URL inválida';
    }
  },

  number: (value: string | number): string | undefined => {
    if (value === '' || value === null || value === undefined) {
      return 'Este campo es requerido';
    }
    if (isNaN(Number(value))) {
      return 'Debe ser un número válido';
    }
    return undefined;
  },

  min: (min: number) => (value: number): string | undefined => {
    if (value < min) {
      return `El valor mínimo es ${min}`;
    }
    return undefined;
  },

  max: (max: number) => (value: number): string | undefined => {
    if (value > max) {
      return `El valor máximo es ${max}`;
    }
    return undefined;
  },
};

// Función para combinar múltiples validadores
export const combineValidators = (
  ...validatorFns: Array<(value: unknown) => string | undefined>
) => {
  return (value: unknown): string | undefined => {
    for (const validator of validatorFns) {
      const error = validator(value);
      if (error) return error;
    }
    return undefined;
  };
};
