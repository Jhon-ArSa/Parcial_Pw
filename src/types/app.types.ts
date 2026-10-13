// 🟡 Jefferson - Tipos generales de la aplicación
export interface AppState {
  isLoading: boolean;
  error: string | null;
  theme: Theme;
}

export type Theme = 'light' | 'dark' | 'auto';

export const Theme = {
  LIGHT: 'light' as const,
  DARK: 'dark' as const,
  AUTO: 'auto' as const,
};

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  icon?: string;
  children?: NavigationItem[];
}

export interface FormField {
  name: string;
  value: string | number | boolean;
  error?: string;
  touched?: boolean;
}
