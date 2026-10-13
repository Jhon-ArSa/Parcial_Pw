// 🟡 Jefferson - Configuración de rutas - Biblioteca Virtual
import type { NavigationItem } from '../types/app.types';
import { ROUTES } from './constants';

export const navigationItems: NavigationItem[] = [
  {
    id: 'home',
    label: 'Inicio',
    path: ROUTES.HOME,
    icon: '🏠',
  },
  {
    id: 'catalogo',
    label: 'Catálogo',
    path: ROUTES.CATALOG,
    icon: '📚',
  },
  {
    id: 'dashboard',
    label: 'Mi Biblioteca',
    path: ROUTES.DASHBOARD,
    icon: '👤',
  },
  {
    id: 'about',
    label: 'Acerca de',
    path: ROUTES.ABOUT,
    icon: 'ℹ️',
  },
];

export const publicRoutes = [ROUTES.HOME, ROUTES.ABOUT, ROUTES.LOGIN, ROUTES.REGISTER, ROUTES.CATALOG];
export const privateRoutes = [ROUTES.DASHBOARD];
