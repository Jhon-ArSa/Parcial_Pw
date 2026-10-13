// 🟡 Jefferson - Servicio base de API
import axiosInstance from '../lib/axios';
import type { ApiResponse, PaginatedResponse } from '../types/api.types';
import { handleApiError, logError } from '../lib/errorHandler';

export class ApiService {
  async get<T>(url: string, params?: Record<string, unknown>): Promise<T> {
    try {
      const response = await axiosInstance.get<ApiResponse<T>>(url, { params });
      return response.data.data;
    } catch (error) {
      logError(error, `GET ${url}`);
      throw handleApiError(error);
    }
  }

  async post<T>(url: string, data: unknown): Promise<T> {
    try {
      const response = await axiosInstance.post<ApiResponse<T>>(url, data);
      return response.data.data;
    } catch (error) {
      logError(error, `POST ${url}`);
      throw handleApiError(error);
    }
  }

  async put<T>(url: string, data: unknown): Promise<T> {
    try {
      const response = await axiosInstance.put<ApiResponse<T>>(url, data);
      return response.data.data;
    } catch (error) {
      logError(error, `PUT ${url}`);
      throw handleApiError(error);
    }
  }

  async delete<T>(url: string): Promise<T> {
    try {
      const response = await axiosInstance.delete<ApiResponse<T>>(url);
      return response.data.data;
    } catch (error) {
      logError(error, `DELETE ${url}`);
      throw handleApiError(error);
    }
  }

  async getPaginated<T>(
    url: string,
    page: number = 1,
    pageSize: number = 10
  ): Promise<PaginatedResponse<T>> {
    try {
      const response = await axiosInstance.get<ApiResponse<PaginatedResponse<T>>>(url, {
        params: { page, pageSize },
      });
      return response.data.data;
    } catch (error) {
      logError(error, `GET_PAGINATED ${url}`);
      throw handleApiError(error);
    }
  }
}

export const apiService = new ApiService();
