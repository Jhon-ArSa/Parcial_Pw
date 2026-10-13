// 🟢 Gabriel - Utilidades de cálculos
export const calculations = {
  // Calcular promedio
  average: (numbers: number[]): number => {
    if (numbers.length === 0) return 0;
    return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
  },

  // Calcular suma
  sum: (numbers: number[]): number => {
    return numbers.reduce((sum, num) => sum + num, 0);
  },

  // Calcular porcentaje
  percentage: (value: number, total: number): number => {
    if (total === 0) return 0;
    return (value / total) * 100;
  },

  // Calcular diferencia porcentual
  percentageChange: (oldValue: number, newValue: number): number => {
    if (oldValue === 0) return 0;
    return ((newValue - oldValue) / oldValue) * 100;
  },

  // Redondear a decimales específicos
  round: (value: number, decimals: number = 2): number => {
    return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
  },

  // Calcular máximo
  max: (numbers: number[]): number => {
    return Math.max(...numbers);
  },

  // Calcular mínimo
  min: (numbers: number[]): number => {
    return Math.min(...numbers);
  },

  // Calcular mediana
  median: (numbers: number[]): number => {
    if (numbers.length === 0) return 0;
    const sorted = [...numbers].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
      return (sorted[middle - 1] + sorted[middle]) / 2;
    }
    return sorted[middle];
  },

  // Clampar valor entre min y max
  clamp: (value: number, min: number, max: number): number => {
    return Math.min(Math.max(value, min), max);
  },

  // Interpolar entre dos valores
  lerp: (start: number, end: number, t: number): number => {
    return start + (end - start) * t;
  },

  // Generar número aleatorio en rango
  random: (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  },

  // Generar entero aleatorio en rango
  randomInt: (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};
