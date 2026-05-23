import tiendaImage from "../assets/projects/tienda.webp";
import travelGenieImage from "../assets/projects/travelgenie.webp";
import portfolioImage from "../assets/projects/portfolio.webp";
import underConstruction from "../assets/projects/under_construction.webp";
import clinicsys from "../assets/projects/clinicsys.webp";

export const projects = [
    {
        title: "Portfolio Web",
        status: "Produccion activa",
        description:
            "Portfolio personal desarrollado con React, TypeScript y Vite. Incluye arquitectura por componentes, animaciones con Framer Motion, diseño responsive, SEO preparado y despliegue previsto en Vercel.",
        technologies: ["React", "TypeScript", "Vite", "Framer Motion", "Vercel"],
        githubUrl: "https://github.com/Kalef22/portfolio-v2",
        demoUrl: "https://kalef.es/",
        image: portfolioImage,
    },
    {
        title: "E-commerce MERN",
        status: "En desarrollo",
        description:
            "Proyecto e-commerce en desarrollo con React, Node.js, Express y MongoDB. Actualmente sirve como proyecto principal para practicar arquitectura full-stack moderna.",
        technologies: ["React", "Node.js", "Express", "MongoDB", "API REST"],
        githubUrl: "https://github.com/Kalef22/e-commerce",
        demoUrl: "",
        image: underConstruction,
    },
    {
        title: "Joyeria Victoria",
        status: "Demo online",
        description:
            "Sitio web de joyería desplegado bajo dominio propio con diseño responsive y enfoque visual premium para mostrar productos y presencia online.",
        technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        githubUrl: "https://github.com/Kalef22/tienda_online",
        demoUrl: "https://joyeriavictoria.kalef.es/",
        image: tiendaImage,
    },
    {
        title: "ClinicSys",
        status: "Demo admin disponible",
        description:
            "Sistema web orientado a gestión clínica, desarrollado con PHP, MySQL, HTML, CSS y JavaScript. Proyecto desplegado bajo dominio propio.",
        technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
        githubUrl: "https://github.com/Kalef22/clinicsys",
        demoUrl: "https://clinicsys.kalef.es/index.php",

        demoCredentials: {
            username: "kalef@kalef.com",
            password: "0102",
        },

        demoNotice:
            "Entorno demo de práctica. Los datos pueden modificarse o reiniciarse por otros usuarios.",

        image: clinicsys,
    },
    {
        title: "Travel Genie AI",
        status: "IA endpoint desactivado",
        description:
            "Aplicación de recomendaciones de viaje integrada con AWS Lambda, API Gateway y Amazon Bedrock. El endpoint IA está actualmente deshabilitado para evitar costes de infraestructura cloud.",
        technologies: [
            "AWS Lambda",
            "API Gateway",
            "Amazon Bedrock",
            "JavaScript",
            "AWS",
            "Cloud Architecture",
        ],
        githubUrl: "https://github.com/Kalef22",
        demoUrl: "https://travelgenie.kalef.es/",
        image: travelGenieImage,
    },
];