// 🟡 Jefferson - Tipos generales de la aplicación
export interface AppState {
  isLoading: boolean;
  error: string | null;
  theme: Theme;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
  AUTO = 'auto',
}

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
