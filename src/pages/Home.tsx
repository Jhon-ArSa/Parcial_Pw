// 🔵 John - Página Home
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import './Home.css';

export const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <h1 className="hero-title">Bienvenido a Parcial App</h1>
        <p className="hero-subtitle">
          Proyecto colaborativo desarrollado por John, Gabriel y Jefferson
        </p>
        <div className="hero-actions">
          <Button variant="primary" size="large">
            Comenzar
          </Button>
          <Button variant="outline" size="large">
            Saber más
          </Button>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Características</h2>
        <div className="features-grid">
          <Card variant="elevated" hoverable>
            <Card.Header>
              <h3>🔵 Componentes UI</h3>
            </Card.Header>
            <Card.Body>
              <p>Componentes reutilizables y diseño responsive por John</p>
            </Card.Body>
          </Card>

          <Card variant="elevated" hoverable>
            <Card.Header>
              <h3>🟢 Lógica de Negocio</h3>
            </Card.Header>
            <Card.Body>
              <p>Hooks personalizados y gestión de estado por Gabriel</p>
            </Card.Body>
          </Card>

          <Card variant="elevated" hoverable>
            <Card.Header>
              <h3>🟡 Integración API</h3>
            </Card.Header>
            <Card.Body>
              <p>Servicios y configuración del proyecto por Jefferson</p>
            </Card.Body>
          </Card>
        </div>
      </section>
    </div>
  );
};
