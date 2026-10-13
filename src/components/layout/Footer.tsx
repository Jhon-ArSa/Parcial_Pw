// 🔵 John - Componente Footer
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-text">
            © {currentYear} Parcial App. Todos los derechos reservados.
          </p>
          <p className="footer-team">
            Desarrollado por: John, Gabriel & Jefferson
          </p>
        </div>
      </div>
    </footer>
  );
};
