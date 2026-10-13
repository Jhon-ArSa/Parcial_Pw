# 🚀 Guía de Desarrollo - Parcial App

## 📦 Instalación

```bash
npm install
```

## 🔧 Configuración

1. Copiar `.env.example` a `.env`:
```bash
cp .env.example .env
```

2. Configurar las variables de entorno según tu entorno de desarrollo

## 🏃 Comandos Disponibles

```bash
# Desarrollo
npm run dev

# Build
npm run build

# Preview
npm run preview

# Lint
npm run lint
```

## 📁 Estructura del Proyecto

Ver `TEAM_TASKS.md` para el reparto detallado de responsabilidades.

## 👥 Equipo y Responsabilidades

### 🔵 John - Frontend Components & UI
- Componentes en `src/components/`
- Páginas en `src/pages/`
- Estilos en `src/styles/`

### 🟢 Gabriel - Business Logic & State
- Hooks en `src/hooks/`
- Contextos en `src/context/`
- Utilidades en `src/utils/`

### 🟡 Jefferson - Services & API
- Servicios en `src/services/`
- Configuración en `src/config/`
- Tipos en `src/types/`
- Librerías en `src/lib/`

## 🔀 Workflow Git

### Branches
- `main` - Producción
- `develop` - Desarrollo
- `feature/ui-*` - Features de John
- `feature/logic-*` - Features de Gabriel
- `feature/api-*` - Features de Jefferson

### Commits
Usar prefijos según responsabilidad:
- John: `[UI] descripción`
- Gabriel: `[LOGIC] descripción`
- Jefferson: `[API] descripción`

## 📝 TODO por Desarrollador

### John:
- [ ] Implementar componentes restantes (si es necesario)
- [ ] Mejorar responsive design
- [ ] Añadir animaciones
- [ ] Optimizar estilos

### Gabriel:
- [ ] Completar hooks personalizados
- [ ] Implementar store si es necesario
- [ ] Añadir más validadores
- [ ] Testing de lógica de negocio

### Jefferson:
- [ ] Configurar API real
- [ ] Implementar refresh token
- [ ] Añadir más servicios según necesidades
- [ ] Documentar endpoints

## 🧪 Testing

```bash
# TODO: Agregar comandos de testing cuando se configure
```

## 📚 Recursos

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Vite Documentation](https://vite.dev/)
