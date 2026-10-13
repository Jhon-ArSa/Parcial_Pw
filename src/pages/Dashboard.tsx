// 🔵 John - Página Dashboard
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { useApp } from '../context/AppContext';
import './Dashboard.css';

export const Dashboard = () => {
  const { isLoading } = useApp();

  const stats = [
    { label: 'Proyectos', value: '12', color: '#3b82f6' },
    { label: 'Tareas Completadas', value: '48', color: '#10b981' },
    { label: 'En Progreso', value: '7', color: '#f59e0b' },
  ];

  const recentActivity = [
    { action: 'Completó tarea "Diseño de UI"', time: 'Hace 2 horas', user: 'John' },
    { action: 'Creó nuevo hook useAuth', time: 'Hace 4 horas', user: 'Gabriel' },
    { action: 'Configuró servicio de API', time: 'Hace 6 horas', user: 'Jefferson' },
  ];

  const quickActions = [
    { label: 'Nuevo Proyecto', icon: '➕' },
    { label: 'Ver Tareas', icon: '📋' },
    { label: 'Configuración', icon: '⚙️' },
  ];

  return (
    <div className="dashboard-page fade-in">
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p className="dashboard-subtitle">Bienvenido de nuevo! 👋</p>
        </div>
        <Button variant="primary">Nueva Tarea</Button>
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
        {/* Actividad Reciente */}
        <Card variant="elevated">
          <Card.Header>
            <h3>Actividad Reciente</h3>
          </Card.Header>
          <Card.Body>
            {isLoading ? (
              <p>Cargando...</p>
            ) : (
              <ul className="activity-list">
                {recentActivity.map((activity, index) => (
                  <li key={index} className="activity-item">
                    <div className="activity-info">
                      <strong>{activity.user}</strong> {activity.action}
                    </div>
                    <div className="activity-time">{activity.time}</div>
                  </li>
                ))}
              </ul>
            )}
          </Card.Body>
        </Card>

        {/* Accesos Rápidos */}
        <Card variant="elevated">
          <Card.Header>
            <h3>Accesos Rápidos</h3>
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
    </div>
  );
};
