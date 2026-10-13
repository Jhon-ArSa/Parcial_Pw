// 🟢 Gabriel - Hook para manejo de formularios
import { useState, ChangeEvent, FormEvent } from 'react';

interface ValidationRules<T> {
  [key: string]: (value: T[keyof T]) => string | undefined;
}

interface UseFormReturn<T> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleBlur: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent) => void;
  setFieldValue: (field: keyof T, value: T[keyof T]) => void;
  resetForm: () => void;
  isValid: boolean;
}

export const useForm = <T extends Record<string, unknown>>(
  initialValues: T,
  onSubmit: (values: T) => void | Promise<void>,
  validationRules?: ValidationRules<T>
): UseFormReturn<T> => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});

  const validate = (field: keyof T, value: T[keyof T]): string | undefined => {
    if (!validationRules || !validationRules[field as string]) {
      return undefined;
    }
    return validationRules[field as string](value);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const fieldValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setValues((prev) => ({ ...prev, [name]: fieldValue }));

    // Validar en tiempo real si el campo ya fue tocado
    if (touched[name as keyof T]) {
      const error = validate(name as keyof T, fieldValue as T[keyof T]);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const error = validate(name as keyof T, values[name as keyof T]);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validar todos los campos
    const newErrors: Partial<Record<keyof T, string>> = {};
    let hasErrors = false;

    if (validationRules) {
      Object.keys(values).forEach((key) => {
        const error = validate(key as keyof T, values[key as keyof T]);
        if (error) {
          newErrors[key as keyof T] = error;
          hasErrors = true;
        }
      });
    }

    setErrors(newErrors);
    setTouched(
      Object.keys(values).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );

    if (!hasErrors) {
      await onSubmit(values);
    }
  };

  const setFieldValue = (field: keyof T, value: T[keyof T]) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  const isValid = Object.keys(errors).length === 0;

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    resetForm,
    isValid,
  };
};
