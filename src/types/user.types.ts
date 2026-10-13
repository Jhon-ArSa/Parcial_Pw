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

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}

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
