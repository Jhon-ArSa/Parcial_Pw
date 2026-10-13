// 🔵 John - Página Dashboard (Placeholder)
import { Card } from '../components/common/Card';
import './Dashboard.css';

export const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      <p className="dashboard-subtitle">Panel de control del usuario</p>

      <div className="dashboard-grid">
        <Card variant="elevated">
          <Card.Header>
            <h3>Estadísticas</h3>
          </Card.Header>
          <Card.Body>
            <p>Aquí se mostrarán las estadísticas del usuario</p>
          </Card.Body>
        </Card>

        <Card variant="elevated">
          <Card.Header>
            <h3>Actividad Reciente</h3>
          </Card.Header>
          <Card.Body>
            <p>Aquí se mostrará la actividad reciente</p>
          </Card.Body>
        </Card>

        <Card variant="elevated">
          <Card.Header>
            <h3>Accesos Rápidos</h3>
          </Card.Header>
          <Card.Body>
            <p>Aquí se mostrarán los accesos rápidos</p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
