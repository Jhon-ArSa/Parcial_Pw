// 🟡 Jefferson - Manejo centralizado de errores
export class AppError extends Error {
  public code?: string;

  constructor(message: string, code?: string) {
    super(message);
    this.name = "AppError";
    this.code = code;
  }
}

export const handleError = (error: unknown): string => {
  if (error instanceof AppError) return error.message;
  if (error instanceof Error) return error.message;
  return "Error desconocido";
};

export const throwIf = (condition: boolean, message: string) => {
  if (condition) throw new AppError(message);
};
