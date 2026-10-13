// 🟡 Jefferson - Servicio de usuarios
import { dataService } from "./dataService";
import { STORAGE_KEYS, MENSAJES } from "../config/constants";
import type { Usuario } from "../types/app.types";
import type { UsuarioFormData } from "../types/user.types";
import type { ServiceResponse } from "../types/api.types";

export const userService = {
  getAll(): Usuario[] {
    return dataService.getAll<Usuario>(STORAGE_KEYS.USUARIOS);
  },

  getById(id: string): Usuario | null {
    return dataService.getById<Usuario>(STORAGE_KEYS.USUARIOS, id);
  },

  getByCodigo(codigo: string): Usuario | null {
    return this.getAll().find((u) => u.codigo === codigo) ?? null;
  },

  getByCorreo(correo: string): Usuario | null {
    return this.getAll().find((u) => u.correo === correo) ?? null;
  },

  create(data: UsuarioFormData): ServiceResponse<Usuario> {
    if (this.getByCodigo(data.codigo)) {
      return { success: false, error: MENSAJES.CODIGO_DUPLICADO };
    }
    if (this.getByCorreo(data.correo)) {
      return { success: false, error: MENSAJES.CORREO_DUPLICADO };
    }
    const nuevo: Usuario = {
      id: dataService.generateId("U-"),
      nombres: data.nombres,
      apellidos: data.apellidos,
      codigo: data.codigo,
      correo: data.correo,
      tipo: data.tipo,
      rol: data.rol ?? "usuario",
    };
    return dataService.create<Usuario>(STORAGE_KEYS.USUARIOS, nuevo);
  },

  update(id: string, data: UsuarioFormData): ServiceResponse<Usuario> {
    const actual = this.getById(id);
    if (!actual) return { success: false, error: MENSAJES.NO_ENCONTRADO };

    const dupCodigo = this.getByCodigo(data.codigo);
    if (dupCodigo && dupCodigo.id !== id) {
      return { success: false, error: MENSAJES.CODIGO_DUPLICADO };
    }
    const dupCorreo = this.getByCorreo(data.correo);
    if (dupCorreo && dupCorreo.id !== id) {
      return { success: false, error: MENSAJES.CORREO_DUPLICADO };
    }

    const actualizado: Usuario = {
      ...actual,
      ...data,
      rol: data.rol ?? actual.rol,
    };
    return dataService.update<Usuario>(STORAGE_KEYS.USUARIOS, actualizado);
  },

  remove(id: string): ServiceResponse<string> {
    return dataService.remove<Usuario>(STORAGE_KEYS.USUARIOS, id);
  },
};
