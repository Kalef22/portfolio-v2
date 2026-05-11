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