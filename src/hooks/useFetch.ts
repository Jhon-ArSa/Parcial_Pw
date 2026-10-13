// 🟢 Gabriel - Hook para fetching de datos
import { useState, useEffect, useCallback } from 'react';

interface UseFetchOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
  immediate?: boolean;
}

interface UseFetchReturn<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

export const useFetch = <T>(
  fetchFn: () => Promise<T>,
  options: UseFetchOptions<T> = {}
): UseFetchReturn<T> => {
  const { onSuccess, onError, immediate = true } = options;
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const executeFetch = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await fetchFn();
      setData(result);
      onSuccess?.(result);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Error desconocido');
      setError(error);
      onError?.(error);
    } finally {
      setIsLoading(false);
    }
  }, [fetchFn, onSuccess, onError]);

  useEffect(() => {
    if (immediate) {
      executeFetch();
    }
  }, [immediate, executeFetch]);

  return {
    data,
    isLoading,
    error,
    refetch: executeFetch,
  };
};
