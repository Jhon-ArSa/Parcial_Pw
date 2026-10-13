// 🟡 Jefferson - Servicio de datos genérico (Local Storage)
import type { ServiceResponse } from '../types/api.types';

export const dataService = {
  getAll<T>(key: string): T[] {
    try {
      const raw = localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T[]) : [];
    } catch {
      return [];
    }
  },

  saveAll<T>(key: string, items: T[]): ServiceResponse<T[]> {
    try {
      localStorage.setItem(key, JSON.stringify(items));
      return { success: true, data: items };
    } catch {
      return { success: false, error: 'Error al guardar en Local Storage' };
    }
  },

  create<T extends { id: string }>(key: string, item: T): ServiceResponse<T> {
    const items = this.getAll<T>(key);
    if (items.some((i) => i.id === item.id)) {
      return { success: false, error: 'ID duplicado' };
    }
    const updated = [...items, item];
    this.saveAll(key, updated);
    return { success: true, data: item };
  },

  update<T extends { id: string }>(key: string, item: T): ServiceResponse<T> {
    const items = this.getAll<T>(key);
    const idx = items.findIndex((i) => i.id === item.id);
    if (idx === -1) return { success: false, error: 'Registro no encontrado' };
    items[idx] = item;
    this.saveAll(key, items);
    return { success: true, data: item };
  },

  remove<T extends { id: string }>(key: string, id: string): ServiceResponse<string> {
    const items = this.getAll<T>(key);
    const filtered = items.filter((i) => i.id !== id);
    if (filtered.length === items.length) {
      return { success: false, error: 'Registro no encontrado' };
    }
    this.saveAll(key, filtered);
    return { success: true, data: id };
  },

  getById<T extends { id: string }>(key: string, id: string): T | null {
    return this.getAll<T>(key).find((i) => i.id === id) ?? null;
  },

  generateId(prefix = ''): string {
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    const time = Date.now().toString(36).toUpperCase();
    return `${prefix}${time}${random}`;
  },
};
