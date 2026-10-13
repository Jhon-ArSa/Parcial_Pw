// 🟡 Jefferson
export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",

  // Admin
  ADMIN_DASHBOARD: "/admin",
  ADMIN_LIBROS: "/admin/libros",
  ADMIN_CATEGORIAS: "/admin/categorias",
  ADMIN_USUARIOS: "/admin/usuarios",
  ADMIN_PRESTAMOS: "/admin/prestamos",

  // Usuario
  USER_DASHBOARD: "/usuario",
  USER_BUSCAR: "/usuario/buscar",
  USER_MIS_PRESTAMOS: "/usuario/prestamos",
  USER_HISTORIAL: "/usuario/historial",
  USER_COMPROBANTE: "/usuario/comprobante/:id",
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
