// 🔵 John - Componente Card
import { type ReactNode, type HTMLAttributes } from 'react';
import './Card.css';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'none' | 'small' | 'medium' | 'large';
  hoverable?: boolean;
}

export const Card = ({
  children,
  variant = 'default',
  padding = 'medium',
  hoverable = false,
  className = '',
  ...props
}: CardProps) => {
  const classNames = [
    'card',
    `card-${variant}`,
    `card-padding-${padding}`,
    hoverable && 'card-hoverable',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

// Sub-componentes para estructura
Card.Header = ({ children, className = '', ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={`card-header ${className}`} {...props}>
    {children}
  </div>
);

Card.Body = ({ children, className = '', ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={`card-body ${className}`} {...props}>
    {children}
  </div>
);

Card.Footer = ({ children, className = '', ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={`card-footer ${className}`} {...props}>
    {children}
  </div>
);
