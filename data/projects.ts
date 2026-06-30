export type Locale = 'es' | 'en';

export type ExternalLinks = {
  github?: string;
  demo?: string;
  video?: string;
  behance?: string;
  prototype?: string;
};

export type Screenshot = {
  src: string;
  alt: string;
};

export type DetailContent = {
  role: string;
  problem: string;
  solution: string;
  process: string[];
  learnings: string[];
};

export type Project = {
  slug: string;
  name: string;
  type: string;
  description: Record<Locale, string>;
  technologies: string[];
  links: ExternalLinks;
  screenshots: Screenshot[];
  details: Record<Locale, DetailContent>;
};

export const projects: Project[] = [
  {
    slug: 'trackifly',
    name: 'Trackifly',
    type: 'Full Stack / UX/UI',
    description: {
      es: 'Plataforma de logistica y seguimiento de envios desarrollada como proyecto final academico.',
      en: 'Logistics and shipment tracking platform developed as an academic final project.'
    },
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'PostgreSQL',
      'Mercado Pago API'
    ],
    links: {
      github: 'https://github.com/trackifly-app',
      demo: 'https://front-tracki-fly.vercel.app/es',
      video: 'https://youtu.be/xL3FVzq0kAE?si=0OndGlzx4ofKN6u1'
    },
    screenshots: [
      {
        src: '/images/projects/trackifly/home-claro.png',
        alt: 'Pantalla home de Trackifly en modo claro con resumen de envios.'
      },
      {
        src: '/images/projects/trackifly/home-oscuro.png',
        alt: 'Pantalla home de Trackifly en modo oscuro con panel de seguimiento.'
      },
      {
        src: '/images/projects/trackifly/inicio-de-sesion.png',
        alt: 'Pantalla de inicio de sesion de Trackifly.'
      }
    ],
    details: {
  es: {
    role: 'Full Stack Developer y UX/UI Designer',
    problem:
      'La gestión de envíos suele estar fragmentada entre cotización, pagos, seguimiento y administración, dificultando la trazabilidad y la experiencia del usuario.',
    solution:
      'TrackiFly centraliza todo el proceso logístico mediante cotizaciones dinámicas, seguimiento en tiempo real, pagos con Mercado Pago y administración por roles en una única plataforma.',
    process: [
      'Investigación de necesidades y flujos principales.',
      'Diseño de interfaces, arquitectura y modelo de datos.',
      'Implementación Full Stack e iteración de la experiencia de usuario.'
    ],
    learnings: [
      'Integrar decisiones de UX con una arquitectura Full Stack.',
      'Priorizar claridad visual en flujos con múltiples estados.'
    ]
  },
  en: {
    role: 'Full Stack Developer and UX/UI Designer',
    problem:
      'Shipment management is often fragmented across quoting, payments, tracking, and administration, creating a complex user experience.',
    solution:
      'TrackiFly centralizes the logistics workflow with dynamic quotes, real-time tracking, Mercado Pago payments, and role-based management in a single platform.',
    process: [
      'Researched user needs and logistics workflows.',
      'Designed interfaces, architecture, and data model.',
      'Implemented the full stack solution and refined the user experience.'
    ],
    learnings: [
      'Connecting UX decisions with full stack architecture.',
      'Prioritizing visual clarity in complex workflows.'
    ]
  }
}
  },
  {
    slug: 'cosmetic-app',
    name: 'Cosmetic App',
    type: 'Frontend',
    description: {
     es: 'Aplicación e-commerce de cosméticos enfocada en construir una experiencia de compra completa mediante una interfaz responsive e integrada con una API REST.',
     en: 'Cosmetics e-commerce application focused on delivering a complete shopping experience through a responsive interface integrated with a REST API.'
    },
    technologies: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Express',
    'PostgreSQL',
    'Yup'
  ],
    links: {
      github: 'https://github.com/CFlorenciaGutierrez/E-commerce-Beauty',
    },
    screenshots: [
      {
        src: '/images/projects/cosmetic-app/home.png',
        alt: 'Pantalla home de Cosmetic App con catalogo de productos.'
      },
      {
        src: '/images/projects/cosmetic-app/carrito.png',
        alt: 'Pantalla de carrito de compras de Cosmetic App.'
      },
      {
        src: '/images/projects/cosmetic-app/perfil.png',
        alt: 'Pantalla de perfil de usuario de Cosmetic App.'
      }
    ],
     details: {
    es: {
      role: 'Frontend Developer',
      problem:
        'El desafío consistía en desarrollar desde cero el frontend de un e-commerce funcional, consumiendo una API existente e implementando una experiencia de compra completa e intuitiva.',
      solution:
        'Se desarrolló una interfaz responsive que permite registro, autenticación, exploración de productos, gestión del carrito, persistencia de sesión y finalización de compras mediante la integración con una API REST.',
      process: [
        'Definición de identidad visual e interfaz.',
        'Construcción de componentes reutilizables y diseño responsive.',
        'Integración con la API, autenticación y funcionalidades del carrito.'
      ],
      learnings: [
        'Construir una aplicación frontend completa consumiendo una API REST.',
        'Gestionar estados complejos y persistencia de datos del usuario.',
        'Desarrollar interfaces reutilizables y escalables.'
      ]
    },
    en: {
      role: 'Frontend Developer',
      problem:
        'The challenge was to build the frontend of a functional e-commerce application from scratch while consuming an existing REST API and providing a complete shopping experience.',
      solution:
        'Developed a responsive interface supporting user authentication, product browsing, shopping cart management, session persistence, and checkout through REST API integration.',
      process: [
        'Defined the visual identity and user interface.',
        'Built reusable responsive components.',
        'Integrated authentication, REST APIs, and shopping cart functionality.'
      ],
      learnings: [
        'Building a complete frontend application powered by a REST API.',
        'Managing complex application state and user session persistence.',
        'Creating reusable and scalable UI components.'
      ]
    }
  }
  },
  {
    slug: 'medical-app',
    name: 'Medical App',
    type: 'Full Stack',
    description: {
      es: 'Aplicación web para la gestión de turnos médicos, desarrollada de forma Full Stack con autenticación, reserva y administración de citas.',
    en: 'Full Stack web application for managing medical appointments, featuring authentication, appointment scheduling, and user management.'
    },
    technologies: [
    'React',
    'Vite',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Express',
    'PostgreSQL'
  ],
    links: {
      github: 'https://github.com/CFlorenciaGutierrez/medical-appointments-app',
    },
    screenshots: [
      {
        src: '/images/projects/medical-app/home.png',
        alt: 'Pantalla home de Medical App con contenido principal de salud.'
      },
      {
        src: '/images/projects/medical-app/registro.png',
        alt: 'Pantalla de registro de usuario de Medical App.'
      }
    ],
     details: {
    es: {
      role: 'Full Stack Developer',
      problem:
        'Los usuarios necesitaban una forma simple y organizada de registrarse, iniciar sesión y gestionar turnos médicos desde una única plataforma.',
      solution:
        'Se desarrolló una aplicación Full Stack que permite autenticación de usuarios, reserva y cancelación de turnos, visualización del historial y validación de disponibilidad mediante una interfaz clara y una API REST.',
      process: [
        'Diseño de la arquitectura de la aplicación y modelo de datos.',
        'Desarrollo del frontend y backend con integración mediante API REST.',
        'Implementación de autenticación, gestión de turnos y validaciones.'
      ],
      learnings: [
        'Desarrollar una aplicación Full Stack desde cero.',
        'Diseñar APIs REST e integrar frontend y backend.',
        'Modelar datos y gestionar reglas de negocio para reservas.'
      ]
    },
    en: {
      role: 'Full Stack Developer',
      problem:
        'Users needed a simple way to register, log in, and manage medical appointments through a single platform.',
      solution:
        'Built a Full Stack application that enables user authentication, appointment scheduling, cancellation, appointment history, and availability validation through a REST API and an intuitive interface.',
      process: [
        'Designed the application architecture and database model.',
        'Developed both frontend and backend integrated through a REST API.',
        'Implemented authentication, appointment management, and business validations.'
      ],
      learnings: [
        'Building a Full Stack application from scratch.',
        'Designing REST APIs and integrating frontend with backend.',
        'Modeling data and implementing business rules for appointment scheduling.'
      ]
    }
  }
 }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
