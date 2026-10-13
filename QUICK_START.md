# 🚀 Guía Rápida de Inicio - Parcial App

## ⚡ Setup en 3 Pasos

### 1. Instalar Dependencias
```bash
npm install
```

### 2. Configurar Entorno
```bash
cp .env.example .env
# Editar .env con tus configuraciones
```

### 3. Ejecutar Proyecto
```bash
npm run dev
```

✅ **Listo!** Abre http://localhost:5173

---

## 👥 ¿Quién Soy?

### 🔵 Si eres **John** (Frontend UI)

#### Tu zona de trabajo:
```
src/
├── components/     ← Tus componentes
├── pages/         ← Tus páginas
└── styles/        ← Tus estilos
```

#### Primeros pasos:
1. Revisar `src/components/common/Button.tsx`
2. Personalizar `src/styles/variables.css`
3. Modificar `src/pages/Home.tsx`
4. Ejecutar `npm run dev` y ver cambios

#### Comandos útiles:
```bash
# Tu branch
git checkout -b feature/ui-mi-feature

# Commits
git commit -m "[UI] Tu mensaje"

# Push
git push origin feature/ui-mi-feature
```

---

### 🟢 Si eres **Gabriel** (Business Logic)

#### Tu zona de trabajo:
```
src/
├── hooks/         ← Tus hooks
├── context/       ← Tus contextos
└── utils/         ← Tus utilidades
```

#### Primeros pasos:
1. Revisar `src/hooks/useAuth.ts`
2. Explorar `src/context/AuthContext.tsx`
3. Revisar validadores en `src/utils/validators.ts`
4. Probar hooks en componentes

#### Comandos útiles:
```bash
# Tu branch
git checkout -b feature/logic-mi-feature

# Commits
git commit -m "[LOGIC] Tu mensaje"

# Push
git push origin feature/logic-mi-feature
```

---

### 🟡 Si eres **Jefferson** (Services & API)

#### Tu zona de trabajo:
```
src/
├── services/      ← Tus servicios
├── config/        ← Tus configuraciones
├── types/         ← Tus tipos
└── lib/           ← Tus librerías
```

#### Primeros pasos:
1. Configurar `.env` con URL del backend
2. Revisar `src/lib/axios.ts`
3. Explorar `src/services/api.ts`
4. Definir endpoints en `src/config/constants.ts`

#### Comandos útiles:
```bash
# Tu branch
git checkout -b feature/api-mi-feature

# Commits
git commit -m "[API] Tu mensaje"

# Push
git push origin feature/api-mi-feature
```

---

## 📖 Archivos Importantes

### Para Todos:
- **TEAM_TASKS.md** - Reparto completo de tareas
- **REPARTO_DETALLADO.md** - Detalles por desarrollador
- **README_DEVELOPMENT.md** - Guía de desarrollo
- **PROJECT_OVERVIEW.md** - Resumen del proyecto

### Configuración:
- **.env.example** - Variables de entorno
- **package.json** - Dependencias del proyecto
- **tsconfig.json** - Configuración TypeScript

---

## 🔧 Comandos NPM

```bash
# Desarrollo (con hot reload)
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linter
npm run lint
```

---

## 📁 Estructura Simplificada

```
parcial/
├── src/
│   ├── components/ .......... 🔵 John (Componentes UI)
│   ├── pages/ ............... 🔵 John (Páginas)
│   ├── styles/ .............. 🔵 John (Estilos)
│   ├── hooks/ ............... 🟢 Gabriel (Hooks)
│   ├── context/ ............. 🟢 Gabriel (Contextos)
│   ├── utils/ ............... 🟢 Gabriel (Utilidades)
│   ├── services/ ............ 🟡 Jefferson (Servicios)
│   ├── config/ .............. 🟡 Jefferson (Config)
│   ├── types/ ............... 🟡 Jefferson (Tipos)
│   ├── lib/ ................. 🟡 Jefferson (Librerías)
│   ├── App.tsx .............. 🤝 Compartido
│   └── main.tsx ............. 🤝 Compartido
│
├── .env.example ............. Ejemplo de configuración
├── package.json ............. Dependencias
└── vite.config.ts ........... Configuración Vite
```

---

## 🎯 Primera Tarea de Cada Uno

### 🔵 John - Primera Tarea
**Objetivo**: Personalizar la página Home

1. Abrir `src/pages/Home.tsx`
2. Cambiar el título y descripción
3. Ajustar colores en `src/styles/variables.css`
4. Guardar y ver cambios en http://localhost:5173

**Tiempo estimado**: 15-30 minutos

---

### 🟢 Gabriel - Primera Tarea
**Objetivo**: Probar el hook useForm

1. Abrir `src/hooks/useForm.ts`
2. Crear un formulario de prueba en Home
3. Añadir validaciones personalizadas
4. Probar en el navegador

**Tiempo estimado**: 30-45 minutos

---

### 🟡 Jefferson - Primera Tarea
**Objetivo**: Configurar API

1. Crear archivo `.env` desde `.env.example`
2. Configurar VITE_API_BASE_URL
3. Revisar `src/services/api.ts`
4. Probar una llamada de prueba

**Tiempo estimado**: 30-45 minutos

---

## 🐛 Problemas Comunes

### Error: "Cannot find module 'axios'"
**Solución**: 
```bash
npm install
```

### Error: Puerto 5173 ocupado
**Solución**: 
```bash
# Cambiar puerto en vite.config.ts
# O cerrar el proceso que usa el puerto
```

### Error: Variables de entorno no funcionan
**Solución**: 
```bash
# Asegurarse que las variables empiecen con VITE_
# Reiniciar el servidor de desarrollo
```

---

## 📞 ¿Necesitas Ayuda?

### Por Área:
- 🔵 **UI/Estilos**: Preguntar a John
- 🟢 **Lógica/Hooks**: Preguntar a Gabriel  
- 🟡 **API/Servicios**: Preguntar a Jefferson

### Recursos:
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org)
- [Vite Docs](https://vite.dev)

---

## ✅ Checklist de Inicio

- [ ] Clonar el repositorio
- [ ] Ejecutar `npm install`
- [ ] Copiar `.env.example` a `.env`
- [ ] Ejecutar `npm run dev`
- [ ] Abrir http://localhost:5173
- [ ] Revisar archivos de mi área
- [ ] Leer TEAM_TASKS.md
- [ ] Crear mi primera branch
- [ ] Hacer mi primer commit

---

## 🎉 ¡Listo para empezar!

Cada uno tiene su área claramente definida. Trabaja en tu zona, haz commits frecuentes y comunícate con el equipo.

**Recuerda**: 
- 🔵 John: UI
- 🟢 Gabriel: Logic
- 🟡 Jefferson: API

---

**¡Feliz Coding! 🚀**
