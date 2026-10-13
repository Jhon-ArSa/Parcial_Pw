// 🔵 John - Componente de Navegación
import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { navigationItems } from '../../config/routes';
import './Navigation.css';

interface NavigationProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const Navigation = ({ isOpen = true, onClose }: NavigationProps) => {
  const { theme, toggleTheme } = useTheme();
  const [activeItem, setActiveItem] = useState('home');

  const handleNavClick = (id: string, path: string) => {
    setActiveItem(id);
    // En una app real, usar React Router aquí
    window.location.hash = path;
    onClose?.();
  };

  return (
    <nav className={`navigation ${isOpen ? 'navigation-open' : 'navigation-closed'}`}>
      <div className="navigation-header">
        <h2>Menu</h2>
        {onClose && (
          <button className="navigation-close" onClick={onClose} aria-label="Cerrar menú">
            ×
          </button>
        )}
      </div>

      <ul className="navigation-list">
        {navigationItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.path}
              className={`navigation-item ${activeItem === item.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id, item.path);
              }}
            >
              {item.icon && <span className="navigation-icon">{item.icon}</span>}
              <span className="navigation-label">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="navigation-footer">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'} Cambiar Tema
        </button>
      </div>
    </nav>
  );
};
