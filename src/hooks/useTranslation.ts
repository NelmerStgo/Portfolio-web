// hooks/useTranslation.ts
import { useApp } from "../contexts/AppContext";

const translations = {
  es: {
    hero: {
      title: "Hola, soy",
      name: "Nelmer Santiago Padrón",
      subtitle: "Ingeniero en Sistemas Computacionales",
      description:
        "Apasionado por la tecnología y el software, con habilidades para trabajar eficazmente en equipos y bajo presión. Mi enfoque proactivo y rápido aprendizaje facilitan mi adaptación a nuevas tecnologías y metodologías.",
      ctaPrimary: "Ver Proyectos",
      ctaSecondary: "Contactar",
    },
    about: {
      title: "Sobre Mí",
      description:
        "Ingeniero en Sistemas Computacionales recién graduado con passion por el desarrollo de software, aplicaciones móviles y web. Capaz de adaptarme rápidamente y en constante aprendizaje. Busco contribuir creativamente en entornos de trabajo en equipo y proyectos tecnológicos.",
      education: {
        title: "Educación",
        items: [
          {
            degree: "Ingeniería en Sistemas Computacionales",
            institution: "Instituto Tecnológico del Istmo",
            period: "2019-2024",
          },
        ],
      },
      certifications: {
        title: "Certificaciones y Diplomas",
        items: [
          "Cisco NDG Linux Essentials",
          "Introduction to Data Science",
          "English for IT 1",
          "Learn-A-Thon 2023",
          "Fundamentos de Ciberseguridad",
        ],
      },
      skills: {
        title: "Habilidades Técnicas",
        categories: [
          {
            name: "Programación",
            items: ["Python", "Java", "JavaScript"],
          },
          {
            name: "Frontend",
            items: ["HTML", "CSS", "React"],
          },
          {
            name: "Mobile",
            items: ["React Native"],
          },
          {
            name: "Backend",
            items: ["Firebase", "PHP (básico)", "MySQL"],
          },
          {
            name: "Herramientas",
            items: ["Git", "GitHub", "Office 365"],
          },
          {
            name: "CMS",
            items: ["WordPress"],
          },
        ],
      },
      softSkills: {
        title: "Habilidades Personales",
        items: [
          "Adaptabilidad",
          "Iniciativa",
          "Integridad",
          "Trabajo en equipo bajo presión",
          "Creatividad",
          "Aprendizaje continuo",
        ],
      },
      languages: {
        title: "Idiomas",
        items: [
          { language: "Español", level: "Nativo" },
          { language: "Inglés", level: "Intermedio" },
        ],
      },
    },
    projects: {
      title: "Proyectos Destacados",
      items: [
        {
          title: "UnITI-App",
          description:
            "Aplicación móvil para los estudiantes del TecNM Campus Istmo. Desarrollada con React Native, Firebase y autenticación mediante Azure Microsoft.",
          technologies: ["React Native", "Firebase", "Azure"],
        },
        {
          title: "Sentiment Analysis",
          description:
            "Herramienta en Python que clasifica comentarios de videos en redes sociales como positivos o negativos usando técnicas de Machine Learning.",
          technologies: ["Python", "Machine Learning"],
        },
        {
          title: "Sistema Web para Gestión de Artículos",
          description:
            "Sitio web de administración de productos para tienda online, desarrollado con HTML, CSS, JavaScript y PHP.",
          technologies: ["HTML", "CSS", "JavaScript", "PHP"],
        },
        {
          title: "Gestión Web y SEO con CMS",
          description:
            "Optimización y mantenimiento de sitios web usando herramientas CMS (WordPress) con implementación de prácticas SEO.",
          technologies: ["WordPress", "SEO"],
        },
      ],
    },
    contact: {
      title: "Contacto",
      description: "¿Tienes un proyecto en mente? ¡Hablemos!",
      phone: "951-110-9070",
      email: "nelmerstgopadron@gmail.com",
      address:
        "Calle Segunda Sur 126, Santa María Jalapa del Marqués, Oaxaca, Mexico",
      linkedin: "linkedin.com/in/nelmer-santiago-padron",
      github: "NelmerStgo",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    hero: {
      title: "Hello, I'm",
      name: "Nelmer Santiago Padrón",
      subtitle: "Computer Systems Engineer",
      description:
        "Enthusiastic and committed recent graduate in Computer Systems Engineering. Passionate about software, mobile, and web development. Quick to adapt and constantly learning. I strive to contribute creatively to team-based environments and technology-driven projects.",
      ctaPrimary: "View Projects",
      ctaSecondary: "Get in Touch",
    },
    about: {
      title: "About Me",
      description:
        "Recent Computer Systems Engineering graduate passionate about software, mobile, and web development. Quick to adapt and constantly learning new technologies. I aim to contribute creatively to team-based environments and technology-driven projects.",
      education: {
        title: "Education",
        items: [
          {
            degree: "Bachelor's Degree in Computer Systems Engineering",
            institution: "Instituto Tecnológico del Istmo",
            period: "2019-2024",
          },
        ],
      },
      certifications: {
        title: "Certifications and Diplomas",
        items: [
          "Cisco NDG Linux Essentials",
          "Introduction to Data Science",
          "English for IT 1",
          "Learn-A-Thon 2023",
          "Cybersecurity Fundamentals",
        ],
      },
      skills: {
        title: "Technical Skills",
        categories: [
          {
            name: "Programming",
            items: ["Python", "Java", "JavaScript"],
          },
          {
            name: "Frontend",
            items: ["HTML", "CSS", "React"],
          },
          {
            name: "Mobile",
            items: ["React Native"],
          },
          {
            name: "Backend",
            items: ["Firebase", "PHP (basic)", "MySQL"],
          },
          {
            name: "Tools",
            items: ["Git", "GitHub", "Office 365"],
          },
          {
            name: "CMS",
            items: ["WordPress"],
          },
        ],
      },
      softSkills: {
        title: "Soft Skills",
        items: [
          "Adaptability",
          "Initiative",
          "Integrity",
          "Teamwork under pressure",
          "Creativity",
          "Continuous learning",
        ],
      },
      languages: {
        title: "Languages",
        items: [
          { language: "Spanish", level: "Native" },
          { language: "English", level: "Intermediate" },
        ],
      },
    },
    projects: {
      title: "Highlighted Projects",
      items: [
        {
          title: "UnITI-App",
          description:
            "Mobile app for TecNM Campus Istmo students. Developed with React Native, Firebase, and Microsoft Azure authentication.",
          technologies: ["React Native", "Firebase", "Azure"],
        },
        {
          title: "Sentiment Analysis",
          description:
            "Python tool that classifies social media video comments as positive or negative using Machine Learning techniques.",
          technologies: ["Python", "Machine Learning"],
        },
        {
          title: "Web Product Management",
          description:
            "Administration website for an online store. Developed with HTML, CSS, JavaScript, and PHP.",
          technologies: ["HTML", "CSS", "JavaScript", "PHP"],
        },
        {
          title: "Web Management & SEO",
          description:
            "Optimization and maintenance using WordPress CMS and SEO practices.",
          technologies: ["WordPress", "SEO"],
        },
      ],
    },
    contact: {
      title: "Contact",
      description: "Have a project in mind? Let's talk!",
      phone: "951-110-9070",
      email: "nelmerstgopadron@gmail.com",
      address:
        "Calle Segunda Sur 126, Santa María Jalapa del Marqués, Oaxaca, Mexico",
      linkedin: "linkedin.com/in/nelmer-santiago-padron",
      github: "NelmerStgo",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};

export const useTranslation = () => {
  const { language } = useApp();

  const t = (key: string) => {
    const keys = key.split(".");
    let value: any = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return { t, language };
};
