// 🔵 John - Página About
import { Card } from '../components/common/Card';
import './About.css';

export const About = () => {
  const teamMembers = [
    {
      name: 'John',
      role: 'Frontend Components & UI',
      color: '#3b82f6',
      responsibilities: [
        'Componentes reutilizables',
        'Layouts y navegación',
        'Sistema de estilos',
        'Diseño responsive',
      ],
    },
    {
      name: 'Gabriel',
      role: 'Business Logic & State',
      color: '#10b981',
      responsibilities: [
        'Hooks personalizados',
        'Context API',
        'Validaciones',
        'Lógica de negocio',
      ],
    },
    {
      name: 'Jefferson',
      role: 'Services & API Integration',
      color: '#f59e0b',
      responsibilities: [
        'Integración con APIs',
        'Configuración del proyecto',
        'Tipos TypeScript',
        'Manejo de errores',
      ],
    },
  ];

  return (
    <div className="about-page">
      <section className="about-header">
        <h1>Acerca del Proyecto</h1>
        <p>
          Este es un proyecto colaborativo desarrollado con React, TypeScript y Vite,
          donde cada miembro del equipo tiene responsabilidades específicas.
        </p>
      </section>

      <section className="team-section">
        <h2>Nuestro Equipo</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <Card key={member.name} variant="elevated">
              <Card.Header>
                <div
                  className="member-avatar"
                  style={{ backgroundColor: member.color }}
                >
                  {member.name.charAt(0)}
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </Card.Header>
              <Card.Body>
                <ul className="responsibility-list">
                  {member.responsibilities.map((resp) => (
                    <li key={resp}>{resp}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};
