// 🔵 John - Página 404
import { Button } from '../components/common/Button';
import './NotFound.css';

export const NotFound = () => {
  const goHome = () => {
    window.location.hash = '/';
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="not-found-page fade-in">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2>Página no encontrada</h2>
        <p>Lo sentimos, la página que buscas no existe o ha sido movida.</p>
        
        <div className="not-found-actions">
          <Button variant="primary" size="large" onClick={goHome}>
            Volver al inicio
          </Button>
          <Button variant="outline" size="large" onClick={goBack}>
            Ir atrás
          </Button>
        </div>
        
        <div className="not-found-suggestions">
          <p>Páginas sugeridas:</p>
          <ul>
            <li><a href="#/">Inicio</a></li>
            <li><a href="#/about">Acerca de</a></li>
            <li><a href="#/dashboard">Dashboard</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
