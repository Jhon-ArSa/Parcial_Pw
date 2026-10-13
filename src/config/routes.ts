// 🟡 Jefferson - Configuración de rutas
import type { NavigationItem } from '../types/app.types';
import { ROUTES } from './constants';

export const navigationItems: NavigationItem[] = [
  {
    id: 'home',
    label: 'Inicio',
    path: ROUTES.HOME,
    icon: 'home',
  },
  {
    id: 'about',
    label: 'Acerca de',
    path: ROUTES.ABOUT,
    icon: 'info',
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: ROUTES.DASHBOARD,
    icon: 'dashboard',
  },
];

export const publicRoutes = [ROUTES.HOME, ROUTES.ABOUT, ROUTES.LOGIN, ROUTES.REGISTER];
export const privateRoutes = [ROUTES.DASHBOARD];
