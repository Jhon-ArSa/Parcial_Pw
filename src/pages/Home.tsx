// 🔵 John - Página Home
import { useState } from 'react';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Modal } from '../components/common/Modal';
import './Home.css';

export const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleGetStarted = () => {
    window.location.hash = '/dashboard';
  };

  const handleLearnMore = () => {
    setShowModal(true);
  };

  return (
    <div className="home-page fade-in">
      <section className="hero-section">
        <h1 className="hero-title">Bienvenido a Parcial App</h1>
        <p className="hero-subtitle">
          Proyecto colaborativo desarrollado por John, Gabriel y Jefferson
        </p>
        <div className="hero-actions">
          <Button variant="primary" size="large" onClick={handleGetStarted}>
            Comenzar
          </Button>
          <Button variant="outline" size="large" onClick={handleLearnMore}>
            Saber más
          </Button>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Características del Proyecto</h2>
        <div className="features-grid">
          <Card variant="elevated" hoverable>
            <Card.Header>
              <h3>🔵 Componentes UI</h3>
            </Card.Header>
            <Card.Body>
              <p>Componentes reutilizables y diseño responsive desarrollado por John</p>
              <ul className="feature-list">
                <li>Button, Card, Input, Modal</li>
                <li>Layout responsive</li>
                <li>Sistema de estilos con CSS Variables</li>
              </ul>
            </Card.Body>
          </Card>

          <Card variant="elevated" hoverable>
            <Card.Header>
              <h3>🟢 Lógica de Negocio</h3>
            </Card.Header>
            <Card.Body>
              <p>Hooks personalizados y gestión de estado por Gabriel</p>
              <ul className="feature-list">
                <li>useAuth, useFetch, useForm</li>
                <li>Context API</li>
                <li>Validaciones y formatters</li>
              </ul>
            </Card.Body>
          </Card>

          <Card variant="elevated" hoverable>
            <Card.Header>
              <h3>🟡 Integración API</h3>
            </Card.Header>
            <Card.Body>
              <p>Servicios y configuración del proyecto por Jefferson</p>
              <ul className="feature-list">
                <li>Axios configurado</li>
                <li>Servicios de API</li>
                <li>Sistema de tipos TypeScript</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Acerca del Proyecto">
        <div style={{ padding: '1rem 0' }}>
          <h3>🚀 Parcial App</h3>
          <p style={{ marginBottom: '1rem' }}>
            Este es un proyecto colaborativo desarrollado con React, TypeScript y Vite,
            donde cada miembro del equipo tiene responsabilidades específicas.
          </p>
          
          <h4>Equipo de Desarrollo:</h4>
          <ul>
            <li><strong>🔵 John</strong> - Frontend Components & UI</li>
            <li><strong>🟢 Gabriel</strong> - Business Logic & State Management</li>
            <li><strong>🟡 Jefferson</strong> - Services & API Integration</li>
          </ul>

          <div style={{ marginTop: '1.5rem' }}>
            <Button fullWidth onClick={() => setShowModal(false)}>
              Entendido
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
