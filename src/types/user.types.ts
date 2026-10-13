// 🟡 Jefferson - Tipos de Usuario
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type UserRole = 'admin' | 'user' | 'guest';

export const UserRole = {
  ADMIN: 'admin' as const,
  USER: 'user' as const,
  GUEST: 'guest' as const,
};

export interface UserProfile extends User {
  bio?: string;
  phone?: string;
  address?: string;
}

export interface AuthUser {
  user: User;
  token: string;
  refreshToken: string;
}
