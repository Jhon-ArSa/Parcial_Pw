# 🚀 Parcial App - Proyecto Colaborativo

![React](https://img.shields.io/badge/React-19.2.8-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-blue)
![Vite](https://img.shields.io/badge/Vite-8.3.0-purple)

Proyecto desarrollado colaborativamente por **John**, **Gabriel** y **Jefferson** utilizando React, TypeScript y Vite.

---

## 👥 Equipo de Desarrollo

| Desarrollador | Rol | Responsabilidad |
|--------------|-----|-----------------|
| 🔵 **John** | Frontend UI | Componentes, Páginas, Estilos |
| 🟢 **Gabriel** | Business Logic | Hooks, Contextos, Utilidades |
| 🟡 **Jefferson** | Services & API | Servicios, Config, Tipos |

---

## 📚 Documentación

### Para Empezar:
- **[QUICK_START.md](QUICK_START.md)** - Guía rápida de inicio (¡Empieza aquí!)
- **[TEAM_TASKS.md](TEAM_TASKS.md)** - Reparto detallado de tareas

### Documentación Completa:
- **[REPARTO_DETALLADO.md](REPARTO_DETALLADO.md)** - Análisis por desarrollador
- **[PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md)** - Resumen del proyecto
- **[RESUMEN_EJECUTIVO.md](RESUMEN_EJECUTIVO.md)** - Resumen ejecutivo
- **[README_DEVELOPMENT.md](README_DEVELOPMENT.md)** - Guía de desarrollo

---

## 🚀 Inicio Rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar entorno
cp .env.example .env

# 3. Ejecutar en desarrollo
npm run dev
```

Abre http://localhost:5173 para ver la aplicación.

---

## 📁 Estructura del Proyecto

```
src/
├── 🔵 components/    # John - Componentes UI
│   ├── common/       # Botones, Cards, Inputs, etc.
│   └── layout/       # Header, Footer
├── 🔵 pages/         # John - Páginas
├── 🔵 styles/        # John - Estilos globales
├── 🟢 hooks/         # Gabriel - Hooks personalizados
├── 🟢 context/       # Gabriel - Context API
├── 🟢 utils/         # Gabriel - Utilidades
├── 🟡 services/      # Jefferson - Servicios de API
├── 🟡 config/        # Jefferson - Configuración
├── 🟡 types/         # Jefferson - Tipos TypeScript
└── 🟡 lib/           # Jefferson - Librerías
```

---

## 🛠️ Comandos Disponibles

```bash
npm run dev      # Modo desarrollo
npm run build    # Build para producción
npm run preview  # Preview del build
npm run lint     # Linter
```

---

## 📋 Reparto de Responsabilidades

### 🔵 John - Frontend Components & UI
- Componentes reutilizables (Button, Card, Input, Modal, Loader)
- Layout (Header, Footer)
- Páginas (Home, About, Dashboard, NotFound)
- Sistema de estilos y variables CSS

### 🟢 Gabriel - Business Logic & State
- Hooks (useAuth, useFetch, useForm, useLocalStorage)
- Contextos (Auth, Theme, App)
- Validadores y formatters
- Lógica de negocio

### 🟡 Jefferson - Services & API
- Integración con APIs
- Servicios (auth, user, data)
- Configuración del proyecto
- Tipos e interfaces TypeScript

---

## 🔀 Workflow Git

### Branches:
- `main` - Producción
- `develop` - Desarrollo
- `feature/ui-*` - Features de John
- `feature/logic-*` - Features de Gabriel
- `feature/api-*` - Features de Jefferson

### Commits:
```bash
[UI] mensaje      # John
[LOGIC] mensaje   # Gabriel
[API] mensaje     # Jefferson
```

---

## 📦 Tecnologías

- **React 19.2.8** - Framework UI
- **TypeScript 6.0.2** - Type safety
- **Vite 8.3.0** - Build tool
- **Axios** - HTTP client
- **ESLint** - Linter

---

## ✨ Características

- ✅ Componentes reutilizables
- ✅ Hooks personalizados
- ✅ Context API para estado global
- ✅ Integración con API
- ✅ Sistema de tipos TypeScript
- ✅ Validaciones de formularios
- ✅ Manejo de errores centralizado
- ✅ Tema claro/oscuro
- ✅ Diseño responsive

---

## 📝 Convenciones

### Código:
- Usar TypeScript estricto
- Componentes funcionales con hooks
- Props tipadas
- CSS Modules o archivos CSS separados

### Commits:
- Commits frecuentes y descriptivos
- Usar prefijos según área ([UI], [LOGIC], [API])
- Mensajes en español

---

## 🤝 Contribuir

1. Crear branch según tu área
2. Hacer commits con el prefijo correcto
3. Crear Pull Request
4. Esperar revisión del equipo

---

## 📞 Contacto

- **UI/UX**: John
- **Lógica**: Gabriel
- **API/Servicios**: Jefferson

---

## 📄 Licencia

Este proyecto es parte de un parcial académico.

---

**Desarrollado con ❤️ por John, Gabriel y Jefferson**
