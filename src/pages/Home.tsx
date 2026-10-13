// 🔵 John - Página Home - Biblioteca Virtual
import { useState } from 'react';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Modal } from '../components/common/Modal';
import { Input } from '../components/common/Input';
import './Home.css';

export const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.location.hash = '/catalogo';
    }
  };

  const handleExplore = () => {
    window.location.hash = '/catalogo';
  };

  const handleLearnMore = () => {
    setShowModal(true);
  };

  return (
    <div className="home-page fade-in">
      <section className="hero-section">
        <h1 className="hero-title">📚 Biblioteca Virtual</h1>
        <p className="hero-subtitle">
          Tu portal de conocimiento digital. Miles de libros al alcance de un clic
        </p>
        
        {/* Buscador */}
        <div className="search-container">
          <Input
            type="text"
            placeholder="Buscar libros, autores, categorías..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            fullWidth
          />
          <Button variant="primary" size="large" onClick={handleSearch}>
            🔍 Buscar
          </Button>
        </div>

        <div className="hero-actions">
          <Button variant="primary" size="large" onClick={handleExplore}>
            Explorar Catálogo
          </Button>
          <Button variant="outline" size="large" onClick={handleLearnMore}>
            Cómo Funciona
          </Button>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Servicios de la Biblioteca</h2>
        <div className="features-grid">
          <Card variant="elevated" hoverable>
            <Card.Header>
              <h3>📖 Catálogo Digital</h3>
            </Card.Header>
            <Card.Body>
              <p>Accede a nuestra amplia colección de libros digitales</p>
              <ul className="feature-list">
                <li>Más de 10,000 títulos disponibles</li>
                <li>Búsqueda avanzada por categoría</li>
                <li>Recomendaciones personalizadas</li>
                <li>Nuevos títulos cada semana</li>
              </ul>
            </Card.Body>
          </Card>

          <Card variant="elevated" hoverable>
            <Card.Header>
              <h3>💳 Préstamos en Línea</h3>
            </Card.Header>
            <Card.Body>
              <p>Sistema de préstamo y devolución totalmente digital</p>
              <ul className="feature-list">
                <li>Préstamos de hasta 14 días</li>
                <li>Renovaciones automáticas</li>
                <li>Historial de préstamos</li>
                <li>Notificaciones de vencimiento</li>
              </ul>
            </Card.Body>
          </Card>

          <Card variant="elevated" hoverable>
            <Card.Header>
              <h3>👤 Gestión de Usuario</h3>
            </Card.Header>
            <Card.Body>
              <p>Administra tu cuenta y preferencias de lectura</p>
              <ul className="feature-list">
                <li>Perfil personalizado</li>
                <li>Lista de favoritos</li>
                <li>Historial de lectura</li>
                <li>Estadísticas personales</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="stats-section">
        <div className="stats-grid-home">
          <div className="stat-item">
            <div className="stat-number">10,000+</div>
            <div className="stat-label">Libros Disponibles</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5,000+</div>
            <div className="stat-label">Usuarios Activos</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Categorías</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Acceso Continuo</div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Cómo Funciona la Biblioteca Virtual">
        <div style={{ padding: '1rem 0' }}>
          <h3>📚 Bienvenido a tu Biblioteca Virtual</h3>
          <p style={{ marginBottom: '1rem' }}>
            Nuestra plataforma te permite acceder a miles de libros desde cualquier dispositivo, 
            en cualquier momento.
          </p>
          
          <h4>Pasos para Empezar:</h4>
          <ol style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Crea tu cuenta de usuario</li>
            <li style={{ marginBottom: '0.5rem' }}>Explora el catálogo de libros</li>
            <li style={{ marginBottom: '0.5rem' }}>Solicita préstamos digitales</li>
            <li style={{ marginBottom: '0.5rem' }}>Lee desde tu dispositivo favorito</li>
            <li style={{ marginBottom: '0.5rem' }}>Devuelve o renueva tus préstamos</li>
          </ol>

          <h4>Equipo de Desarrollo:</h4>
          <ul style={{ marginBottom: '1rem' }}>
            <li><strong>🔵 John</strong> - Interfaz de Usuario</li>
            <li><strong>🟢 Gabriel</strong> - Lógica de Negocio</li>
            <li><strong>🟡 Jefferson</strong> - Integración de Servicios</li>
          </ul>

          <div style={{ marginTop: '1.5rem' }}>
            <Button fullWidth onClick={() => setShowModal(false)}>
              Comenzar a Explorar
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
