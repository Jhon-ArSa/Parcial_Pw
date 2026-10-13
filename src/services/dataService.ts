// 🟡 Jefferson - Servicio de datos genérico
import { apiService } from './api';
import type { PaginatedResponse } from '../types/api.types';

export class DataService<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async getAll(page?: number, pageSize?: number): Promise<T[] | PaginatedResponse<T>> {
    if (page !== undefined && pageSize !== undefined) {
      return apiService.getPaginated<T>(this.endpoint, page, pageSize);
    }
    return apiService.get<T[]>(this.endpoint);
  }

  async getById(id: string | number): Promise<T> {
    return apiService.get<T>(`${this.endpoint}/${id}`);
  }

  async create(data: Partial<T>): Promise<T> {
    return apiService.post<T>(this.endpoint, data);
  }

  async update(id: string | number, data: Partial<T>): Promise<T> {
    return apiService.put<T>(`${this.endpoint}/${id}`, data);
  }

  async delete(id: string | number): Promise<void> {
    return apiService.delete<void>(`${this.endpoint}/${id}`);
  }
}

// Ejemplo de uso:
// const productService = new DataService<Product>('/products');
// const categoryService = new DataService<Category>('/categories');
