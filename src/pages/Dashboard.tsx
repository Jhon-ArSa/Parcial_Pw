// 🔵 John - Página Dashboard - Biblioteca Virtual
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { useApp } from '../context/AppContext';
import './Dashboard.css';

export const Dashboard = () => {
  const { isLoading } = useApp();

  const stats = [
    { label: 'Libros Prestados', value: '5', color: '#3b82f6' },
    { label: 'Libros Leídos', value: '23', color: '#10b981' },
    { label: 'Días Restantes', value: '7', color: '#f59e0b' },
  ];

  const currentLoans = [
    { title: 'Cien Años de Soledad', dueDate: 'Vence en 7 días', author: 'Gabriel García Márquez' },
    { title: 'Don Quijote', dueDate: 'Vence en 5 días', author: 'Miguel de Cervantes' },
    { title: 'El Principito', dueDate: 'Vence en 3 días', author: 'Antoine de Saint-Exupéry' },
  ];

  const recommendations = [
    { title: '1984', author: 'George Orwell', category: 'Ciencia Ficción' },
    { title: 'Orgullo y Prejuicio', author: 'Jane Austen', category: 'Romance' },
    { title: 'Sapiens', author: 'Yuval Noah Harari', category: 'No Ficción' },
  ];

  const quickActions = [
    { label: 'Explorar Catálogo', icon: '📚' },
    { label: 'Mis Préstamos', icon: '📋' },
    { label: 'Renovar Libros', icon: '🔄' },
  ];

  return (
    <div className="dashboard-page fade-in">
      <div className="dashboard-header">
        <div>
          <h1>Panel de Usuario</h1>
          <p className="dashboard-subtitle">Bienvenido a tu biblioteca personal! 👋</p>
        </div>
        <Button variant="primary" onClick={() => window.location.hash = '/catalogo'}>
          Explorar Catálogo
        </Button>
      </div>

      {/* Estadísticas */}
      <div className="stats-grid">
        {stats.map((stat) => (
          <Card key={stat.label} variant="elevated" padding="large">
            <div className="stat-card">
              <div className="stat-value" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="dashboard-grid">
        {/* Préstamos Actuales */}
        <Card variant="elevated">
          <Card.Header>
            <h3>📖 Mis Préstamos Activos</h3>
          </Card.Header>
          <Card.Body>
            {isLoading ? (
              <p>Cargando...</p>
            ) : (
              <ul className="activity-list">
                {currentLoans.map((loan, index) => (
                  <li key={index} className="activity-item">
                    <div className="activity-info">
                      <strong>{loan.title}</strong>
                      <br />
                      <small>{loan.author}</small>
                    </div>
                    <div className="activity-time">{loan.dueDate}</div>
                  </li>
                ))}
              </ul>
            )}
          </Card.Body>
        </Card>

        {/* Recomendaciones */}
        <Card variant="elevated">
          <Card.Header>
            <h3>💡 Recomendaciones para Ti</h3>
          </Card.Header>
          <Card.Body>
            <ul className="activity-list">
              {recommendations.map((book, index) => (
                <li key={index} className="activity-item">
                  <div className="activity-info">
                    <strong>{book.title}</strong>
                    <br />
                    <small>{book.author}</small>
                  </div>
                  <div className="activity-time">
                    <span className="book-category-mini">{book.category}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      </div>

      {/* Accesos Rápidos */}
      <Card variant="elevated" style={{ marginTop: '2rem' }}>
        <Card.Header>
          <h3>🚀 Accesos Rápidos</h3>
        </Card.Header>
        <Card.Body>
          <div className="quick-actions">
            {quickActions.map((action) => (
              <button key={action.label} className="quick-action-btn">
                <span className="quick-action-icon">{action.icon}</span>
                <span className="quick-action-label">{action.label}</span>
              </button>
            ))}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
