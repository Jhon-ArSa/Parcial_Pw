// 🔵 John - Página Dashboard - Biblioteca Virtual
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { useApp } from '../context/AppContext';
import { authService } from '../services/authService';
import { libroService } from '../services/libroService';
import { prestamoService } from '../services/prestamoService';
import { userService } from '../services/userService';
import { formatters } from '../utils/formatters';
import { ESTADOS_PRESTAMO } from '../config/constants';
import './Dashboard.css';

export const Dashboard = () => {
  const { isLoading } = useApp();
  const sesion = authService.getSesion();
  const usuario =
    sesion.usuario ?? userService.getByCorreo('juan@unh.edu.pe') ?? null;

  const prestamos = usuario ? prestamoService.getByUsuario(usuario.id) : [];
  const activos = prestamos.filter((p) => p.estado === ESTADOS_PRESTAMO.ACTIVO);
  const historial = prestamos.filter((p) => p.estado === ESTADOS_PRESTAMO.DEVUELTO);
  const catalogo = libroService.getAll().filter((l) => l.stock > 0).slice(0, 3);

  const diasRestantes = (fechaLimite: string) => {
    const ms = new Date(fechaLimite).getTime() - Date.now();
    return Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24)));
  };

  const handleDevolver = (prestamoId: string) => {
    const res = prestamoService.devolver(prestamoId);
    alert(res.success ? 'Libro devuelto correctamente' : res.error);
    window.location.reload();
  };

  const stats = [
    { label: 'Libros Prestados', value: String(activos.length), color: '#3b82f6' },
    { label: 'Libros Leídos', value: String(historial.length), color: '#10b981' },
    { label: 'Días Restantes', value: String(activos[0] ? diasRestantes(activos[0].fechaLimite) : 0), color: '#f59e0b' },
  ];

  return (
    <div className="dashboard-page fade-in">
      <div className="dashboard-header">
        <div>
          <h1>Panel de Usuario</h1>
          <p className="dashboard-subtitle">
            Bienvenido{usuario ? `, ${usuario.nombres}` : ''} a tu biblioteca personal! 👋
          </p>
        </div>
        <Button variant="primary" onClick={() => (window.location.hash = '/catalogo')}>
          Explorar Catálogo
        </Button>
      </div>

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

      <div className="dashboard-grid">
        <Card variant="elevated">
          <Card.Header>
            <h3>📖 Mis Préstamos Activos</h3>
          </Card.Header>
          <Card.Body>
            {isLoading ? (
              <p>Cargando...</p>
            ) : activos.length === 0 ? (
              <p>No tienes préstamos activos.</p>
            ) : (
              <ul className="activity-list">
                {activos.map((loan) => {
                  const libro = libroService.getById(loan.libroId);
                  return (
                    <li key={loan.id} className="activity-item">
                      <div className="activity-info">
                        <strong>{libro?.titulo ?? 'Libro'}</strong>
                        <br />
                        <small>{libro?.autor}</small>
                        <br />
                        <small>Vence: {formatters.date(loan.fechaLimite)}</small>
                      </div>
                      <Button variant="outline" onClick={() => handleDevolver(loan.id)}>
                        Devolver
                      </Button>
                    </li>
                  );
                })}
              </ul>
            )}
          </Card.Body>
        </Card>

        <Card variant="elevated">
          <Card.Header>
            <h3>💡 Disponibles ahora</h3>
          </Card.Header>
          <Card.Body>
            <ul className="activity-list">
              {catalogo.map((book) => (
                <li key={book.id} className="activity-item">
                  <div className="activity-info">
                    <strong>{book.titulo}</strong>
                    <br />
                    <small>{book.autor}</small>
                  </div>
                  <div className="activity-time">
                    <span className="book-category-mini">Stock {book.stock}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      </div>

      <Card variant="elevated" style={{ marginTop: '2rem' }}>
        <Card.Header>
          <h3>🚀 Accesos Rápidos</h3>
        </Card.Header>
        <Card.Body>
          <div className="quick-actions">
            <button className="quick-action-btn" onClick={() => (window.location.hash = '/catalogo')}>
              <span className="quick-action-icon">📚</span>
              <span className="quick-action-label">Explorar Catálogo</span>
            </button>
            <button className="quick-action-btn">
              <span className="quick-action-icon">📋</span>
              <span className="quick-action-label">Mis Préstamos</span>
            </button>
            <button className="quick-action-btn">
              <span className="quick-action-icon">🔄</span>
              <span className="quick-action-label">Renovar Libros</span>
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
