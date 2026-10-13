// 🟢 Gabriel - Contexto general de la aplicación
import { createContext, useContext, type ReactNode, useState } from 'react';
import type { AppState } from '../types/app.types';
import { Theme } from '../types/app.types';

interface AppContextType extends AppState {
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AppState>({
    isLoading: false,
    error: null,
    theme: Theme.LIGHT,
  });

  const setLoading = (isLoading: boolean) => {
    setState((prev) => ({ ...prev, isLoading }));
  };

  const setError = (error: string | null) => {
    setState((prev) => ({ ...prev, error }));
  };

  return (
    <AppContext.Provider value={{ ...state, setLoading, setError }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp debe usarse dentro de un AppProvider');
  }
  return context;
};
