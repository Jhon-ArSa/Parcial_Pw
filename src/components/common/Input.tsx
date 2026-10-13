// 🔵 John - Componente Input
import { InputHTMLAttributes, forwardRef } from 'react';
import './Input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, fullWidth = false, className = '', ...props }, ref) => {
    const inputClasses = [
      'input-field',
      error && 'input-error',
      fullWidth && 'input-full-width',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={`input-wrapper ${fullWidth ? 'input-wrapper-full-width' : ''}`}>
        {label && (
          <label className="input-label" htmlFor={props.id || props.name}>
            {label}
            {props.required && <span className="input-required">*</span>}
          </label>
        )}
        <input ref={ref} className={inputClasses} {...props} />
        {error && <span className="input-error-text">{error}</span>}
        {!error && helperText && <span className="input-helper-text">{helperText}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
