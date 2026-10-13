// 🟡 Jefferson - Servicio de usuarios
import { apiService } from './api';
import type { User, UserProfile } from '../types/user.types';
import type { PaginatedResponse } from '../types/api.types';

export class UserService {
  async getUsers(page: number = 1, pageSize: number = 10): Promise<PaginatedResponse<User>> {
    return apiService.getPaginated<User>('/users', page, pageSize);
  }

  async getUserById(id: string): Promise<User> {
    return apiService.get<User>(`/users/${id}`);
  }

  async updateUser(id: string, data: Partial<UserProfile>): Promise<User> {
    return apiService.put<User>(`/users/${id}`, data);
  }

  async deleteUser(id: string): Promise<void> {
    return apiService.delete<void>(`/users/${id}`);
  }

  async updateProfile(data: Partial<UserProfile>): Promise<User> {
    return apiService.put<User>('/users/profile', data);
  }

  async changePassword(oldPassword: string, newPassword: string): Promise<void> {
    return apiService.post<void>('/users/change-password', {
      oldPassword,
      newPassword,
    });
  }
}

export const userService = new UserService();
