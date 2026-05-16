import tiendaImage from "../assets/projects/tienda.svg";
import travelGenieImage from "../assets/projects/travelgenie.webp";
import portfolioImage from "../assets/projects/portfolio.webp";

export const projects = [
    {
        title: 'E-commerce MERN',
        description:
            'Aplicación e-commerce para joyería con frontend en React, backend en Node.js/Express y base de datos MongoDB.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'API REST'],
        githubUrl: 'https://github.com/',
        demoUrl: 'https://demo.com',
        image: tiendaImage,
    },
    {
        title: 'Travel Genie',
        description:
            'Aplicación de recomendaciones de viaje usando AWS Lambda, API Gateway y Amazon Bedrock.',
        technologies: ['AWS Lambda', 'API Gateway', 'Amazon Bedrock', 'JavaScript'],
        githubUrl: 'https://github.com/',
        demoUrl: 'https://demo.com',
        image: travelGenieImage,
    },
    {
        title: 'Portfolio Web',
        description:
            'Portfolio personal desarrollado con React, TypeScript y Vite, desplegado con Vercel.',
        technologies: ['React', 'TypeScript', 'Vite', 'Vercel'],
        githubUrl: 'https://github.com/',
        demoUrl: 'https://demo.com',
        image: portfolioImage,
    },
];