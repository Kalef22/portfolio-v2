# DEV LOG - Portfolio V2

Documento de seguimiento del estado actual del portfolio. Su objetivo es dejar claro que hay implementado, que tecnologias usa el proyecto y que queda pendiente antes de considerarlo listo para produccion.

## Estado verificado

- Build de produccion: OK con `npm.cmd run build`.
- Lint: OK con `npm.cmd run lint`.
- Stack principal: React, TypeScript y Vite.
- UI actual: portfolio de una pagina con secciones Hero, About, Projects, Skills, Cloud/AWS, Timeline, Contact y Footer.

## Stack

- React 19
- TypeScript 6
- Vite 8
- Framer Motion
- React Icons
- vite-plugin-svgr
- ESLint

## Scripts disponibles

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

En Windows/PowerShell puede ser necesario usar `npm.cmd` si la politica de ejecucion bloquea `npm.ps1`.

## Hosting plan

- Frontend: Vercel
- Backend de futuros proyectos: Render
- Dominio: IONOS

## Arquitectura actual

```txt
src/
|-- assets/
|   |-- marcakalef.svg
|   `-- projects/
|       |-- tienda.svg
|       |-- travelgenie.webp
|       `-- portfolio.webp
|-- components/
|   |-- cloud/
|   |   |-- CloudSection.tsx
|   |   `-- cloudData.ts
|   |-- projects/
|   |   |-- ProjectCard.tsx
|   |   `-- ProjectModal.tsx
|   |-- timeline/
|   |   |-- Timeline.tsx
|   |   |-- TimelineItem.tsx
|   |   `-- timelineData.ts
|   |-- ui/
|   |   |-- CursorGlow.tsx
|   |   |-- GradientOrbs.tsx
|   |   `-- ScrollProgress.tsx
|   |-- Footer.tsx
|   |-- Navbar.tsx
|   `-- Reveal.tsx
|-- data/
|   |-- projects.ts
|   `-- skills.ts
|-- hooks/
|   |-- useActiveSection.ts
|   `-- useScrollReveal.ts
|-- sections/
|   |-- About.tsx
|   |-- Contact.tsx
|   |-- Hero.tsx
|   |-- Projects.tsx
|   `-- Skills.tsx
|-- styles/
|   `-- global.css
|-- App.tsx
|-- main.tsx
`-- vite-env.d.ts
```

## Funcionalidades implementadas

### Animaciones

- Componente reutilizable `Reveal.tsx` con Framer Motion.
- Animacion de entrada por viewport con `whileInView`.
- Soporte de `delay` por elemento.
- `viewport.once` activo para evitar repetir animaciones innecesariamente.
- Barra superior de progreso de scroll con `ScrollProgress.tsx`.
- Glow de cursor en desktop con `CursorGlow.tsx`.
- Orbs de fondo con `GradientOrbs.tsx`.
- Hook legacy `useScrollReveal.ts` usado por secciones con clase `.reveal`.

### Navbar

- Navbar fija con glassmorphism.
- Logo SVG importado como componente mediante SVGR.
- Estado visual al hacer scroll.
- Indicador de seccion activa con `useActiveSection.ts`.
- Menu responsive tipo hamburguesa.
- Cierre del menu mobile al hacer click fuera.
- Cierre del menu mobile al hacer scroll.
- Estados `hover`, `active` y `focus-visible`.

### Hero

- Presentacion principal con nombre, rol, descripcion, CTAs, redes y descarga de CV.
- Badge de disponibilidad.
- Texto con gradiente.
- Metricas visuales del perfil.
- Adaptacion responsive para mobile.

### Projects

- Datos centralizados en `src/data/projects.ts`.
- Cards separadas en `ProjectCard.tsx`.
- Modal separado en `ProjectModal.tsx`.
- Apertura del modal al hacer click en una card.
- Accesibilidad basica por teclado en cards con Enter y Space.
- Cierre del modal con Escape.
- Cierre del modal al hacer click en el overlay.
- Bloqueo del scroll del body mientras el modal esta abierto.
- Imagen ampliada, tecnologias y enlaces GitHub/Demo dentro del modal.
- Imagenes importadas desde `src/assets/projects/`.
- `loading="lazy"` y `decoding="async"` en imagenes de cards.

### Skills

- Lista de tecnologias centralizada en `src/data/skills.ts`.
- Grid responsive de cards.
- Iconos mediante `react-icons`.

### Cloud/AWS

- Seccion especifica `CloudSection.tsx`.
- Datos centralizados en `cloudData.ts`.
- Cards para EC2, S3, Lambda, API Gateway, IAM, CloudFront, Bedrock y arquitectura cloud.

### Timeline

- Timeline profesional con datos centralizados en `timelineData.ts`.
- Items alternados izquierda/derecha en desktop.
- Version vertical responsive en mobile.

### Contact

- CTA final con tarjeta visual.
- Acciones directas para email, LinkedIn y GitHub.
- Botones responsive.
- Integracion con `Reveal`.

### Footer

- Branding personal.
- Navegacion interna.
- Links sociales.
- Boton de volver arriba.
- Layout responsive.

## Estilos y UX

- Sistema visual centralizado en `src/styles/global.css`.
- Variables CSS para color, fondo, texto, bordes, tarjetas y glow.
- Scroll suave.
- Reset basico y `box-sizing`.
- `overflow-x: hidden` para evitar scroll horizontal.
- Estados accesibles con `focus-visible`.
- Media query principal para pantallas menores de 768px.

## Caracteristicas que cumple actualmente

- Portfolio responsive.
- Arquitectura por secciones y componentes.
- Datos separados de la presentacion en proyectos, skills, cloud y timeline.
- Animaciones reutilizables.
- Navegacion fija con estado activo.
- Modal interactivo para proyectos.
- Contacto profesional con enlaces reales.
- Build de produccion funcional.
- Lint sin errores.

## Pendientes recomendados

- Optimizar `src/assets/projects/tienda.svg`: actualmente genera un asset grande en build, de unos 4.38 MB sin gzip.
- Revisar los enlaces placeholder de demos (`https://demo.com`) antes de publicar.
- Revisar enlaces placeholder de proyectos, especialmente el GitHub generico de Travel Genie.
- Valorar eliminar o migrar completamente `useScrollReveal.ts` si todas las animaciones pasan a `Reveal.tsx`.
- Anadir `public/cv.pdf` si el boton "Descargar CV" debe funcionar en produccion.
- Anadir metadatos SEO y Open Graph en `index.html`.

## Commits registrados en el desarrollo

```bash
feat(ui): add premium global visual effects
fix(ui): corregir responsive y navegacion mobile
refactor(projects): reorganizar componentes de proyectos
feat(projects): anadir modal premium de proyectos
style(projects): mejorar animaciones y efectos del modal
perf(images): optimizar imagenes de proyectos
feat(contacto): mejorar seccion premium de contacto
feat(footer): anadir footer premium responsive
```

