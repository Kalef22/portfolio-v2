# DEV LOG — Portfolio V2

## Stack
- React
- TypeScript
- Vite

## Hosting plan
- Frontend: Vercel
- Backend futuros proyectos: Render
- Dominio: IONOS

---

# Arquitectura actual

src/
├── assets/
│   └── marcakalef.svg
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ProjectCard.tsx
│
├── hooks/
│   └── useScrollReveal.ts
│
├── sections/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── Contact.tsx
│
├── data/
│   ├── skills.ts
│   └── projects.ts
│
├── styles/
│   └── global.css
│
├── App.tsx
├── main.tsx
└── vite-env.d.ts

---

# Librerías instaladas

## UI / Visual
- react-icons

## SVG Components
- vite-plugin-svgr

---

# Funcionalidades actuales

## Layout
- Navbar fija
- Hero section
- About section
- Skills section
- Projects section
- Footer
- Arquitectura modular
- Responsive mobile

## Hero
- CTA buttons
- Botón descargar CV
- Links GitHub y LinkedIn
- Estado visual “Disponible para proyectos”
- Glow effects
- Hero stats dashboard
- Animaciones hover

## Navbar
- Glassmorphism
- Blur background
- SVG logo como componente React
- Hover effects en logo
- Responsive navbar

## Skills
- Grid responsive
- Iconos dinámicos
- Hover animations
- Glass cards

## Projects
- Project cards modernas
- Imágenes reales de proyectos
- Hover effects
- Tech badges
- Responsive grid

## Animaciones
- Scroll reveal animations
- Hover transitions
- Glow effects
- Pulse animation

## Diseño visual
- Identidad visual verde basada en logo
- Estética luxury-tech/cloud
- Fondo tecnológico con grid
- Glassmorphism UI
- Neon glow green effects
- Dark futuristic UI

---

# Assets actuales

public/
├── projects/
│   ├── ecommerce.jpg
│   └── travel-genie.jpg

src/
├── assets/
│   └── marcakalef.svg

---

# Estado actual del portfolio

## Identidad visual
- Tema dark premium
- Verde neón tecnológico
- Estética cloud / AI / SaaS
- Inspiración tipo:
  - NVIDIA
  - dashboards cloud
  - AI startups
  - luxury tech UI

## Tecnologías destacadas
- React
- TypeScript
- Node.js
- Express
- MongoDB
- AWS
- Git/GitHub

---

# Proyectos actuales

## E-commerce MERN
- React
- Node.js
- Express
- MongoDB
- API REST

## Travel Genie
- AWS Lambda
- API Gateway
- Amazon Bedrock
- JavaScript

## Portfolio Web
- React
- TypeScript
- Vite
- Vercel

---

# Configuración técnica añadida

## SVG React Components
Configurado:
- vite-plugin-svgr
- vite-env.d.ts

Uso:
```tsx
import Logo from '../assets/marcakalef.svg?react';

---

# Actualización — Timeline, Cloud y mejoras visuales

## Nuevas secciones añadidas

### Timeline profesional
Se añadió una nueva sección de experiencia y formación profesional.

Nueva estructura:

src/components/
├── timeline/
│   ├── Timeline.tsx
│   ├── TimelineItem.tsx
│   └── timelineData.ts

### Información añadida al timeline
- Desarrollo de Aplicaciones Web (2022 - 2024)
- Prácticas en Hospital 12 de Octubre (2024)
- Arquitecto de Soluciones en la Nube con AWS (2025)
- Data Engineer con AWS (2025)
- Bootcamp Full-Stack (enero - marzo 2026)
- Piscina 42 Madrid (abril - mayo 2026)
- Aceptado como alumno en 42 Madrid
- Formación actual en inglés

### Características visuales del timeline
- Timeline alternado izquierda/derecha
- Línea central animada
- Timeline responsive
- Cards glassmorphism
- Hover effects
- Reveal animations
- Diseño profesional tipo SaaS/cloud

---

## Nueva sección Cloud & AWS

Nueva estructura:

src/components/
├── cloud/
│   ├── CloudSection.tsx
│   └── cloudData.ts

### Servicios y conceptos añadidos
- EC2
- S3
- Lambda
- API Gateway
- IAM
- CloudFront
- Bedrock
- Arquitectura Cloud

### Diseño visual
- Cards glassmorphism
- Hover premium
- Glow effects
- Responsive grid
- Integración visual con el resto del portfolio

---

# Mejoras visuales en proyectos

## Mejoras añadidas
- Hover premium en cards
- Zoom suave en imágenes
- Mejora de sombras y glow
- Botones GitHub/Demo mejorados
- Mejor jerarquía visual
- Mejores badges tecnológicos

## Assets actualizados

public/
├── projects/
│   ├── tienda.svg
│   └── travelgenie.jpg

---

# Organización y refactorización CSS

## global.css reorganizado
Se reorganizó completamente el archivo CSS global:

- Variables globales
- Reset/base
- Navbar
- Hero
- Sections
- Skills
- Projects
- Timeline
- Cloud section
- Footer
- Scroll reveal
- Responsive

## Mejoras realizadas
- Comentarios organizativos
- Eliminación de estilos duplicados
- Mejor mantenimiento
- Estructura más profesional
- Mejor legibilidad del código

---

# Librerías instaladas

## Animaciones
- framer-motion

Actualmente instalado pero todavía no integrado activamente.
Se utilizará posteriormente para:
- microinteracciones
- stagger animations
- reveal avanzado
- floating animations
- transiciones premium

---

# Arquitectura actualizada

src/
├── assets/
│   └── marcakalef.svg
│
├── components/
│   ├── cloud/
│   │   ├── CloudSection.tsx
│   │   └── cloudData.ts
│   │
│   ├── timeline/
│   │   ├── Timeline.tsx
│   │   ├── TimelineItem.tsx
│   │   └── timelineData.ts
│   │
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ProjectCard.tsx
│
├── hooks/
│   └── useScrollReveal.ts
│
├── sections/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── Contact.tsx
│
├── data/
│   ├── skills.ts
│   └── projects.ts
│
├── styles/
│   └── global.css
│
├── App.tsx
├── main.tsx
└── vite-env.d.ts

---

# Estado actual del portfolio

Actualmente el portfolio ya tiene una apariencia:
- moderna
- profesional
- cloud/frontend oriented
- tipo SaaS/AI startup
- visualmente consistente
- preparada para recruiters

El portfolio ya no parece:
- un proyecto académico básico
- una landing genérica
- un tutorial simple

Empieza a proyectar:
- identidad profesional
- frontend moderno
- perfil cloud
- desarrollador full-stack junior serio

---

# Próximos pasos recomendados

## Visual/UI
- Mejorar Contact section
- Añadir glow dinámico
- Añadir cursor effects
- Mejorar navbar avanzada
- Integrar Framer Motion
- Añadir Open Graph visuals

## Portfolio
- Añadir links reales GitHub
- Añadir demos reales
- Añadir CV final
- Añadir screenshots optimizados

## Deploy
- Deploy en Vercel
- Configurar dominio kalef.es
- Añadir SEO
- Añadir favicon personalizado
- Añadir metadata Open Graph

## Futuro
- Backend propio
- Blog técnico
- Dashboard admin
- CMS/headless