// 🔵 John - Componente Header
import './Header.css';

interface HeaderProps {
  title?: string;
  onMenuClick?: () => void;
}

export const Header = ({ title = 'Parcial App', onMenuClick }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          {onMenuClick && (
            <button className="header-menu-btn" onClick={onMenuClick} aria-label="Menu">
              <span className="hamburger-icon"></span>
            </button>
          )}
          <h1 className="header-title">{title}</h1>
        </div>
        <nav className="header-nav">
          {/* TODO: John - Agregar navegación */}
        </nav>
        <div className="header-actions">
          {/* TODO: John - Agregar acciones de usuario */}
        </div>
      </div>
    </header>
  );
};
