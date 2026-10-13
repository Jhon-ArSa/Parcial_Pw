// 🔵 John - Página 404
import { Button } from '../components/common/Button';
import './NotFound.css';

export const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2>Página no encontrada</h2>
        <p>Lo sentimos, la página que buscas no existe.</p>
        <Button onClick={() => (window.location.href = '/')}>
          Volver al inicio
        </Button>
      </div>
    </div>
  );
};
