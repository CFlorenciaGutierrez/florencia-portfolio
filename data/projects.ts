export type Locale = 'es' | 'en';

export type ExternalLinks = {
  github?: string;
  demo?: string;
  video?: string;
  behance?: string;
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
  screenshots: string[];
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
      'PostgreSQL'
    ],
    links: {
      github: 'COMPLETAR_GITHUB_TRACKIFLY',
      video: 'COMPLETAR_VIDEO_TRACKIFLY'
    },
    screenshots: [
      'COMPLETAR_SCREENSHOTS_TRACKIFLY_1',
      'COMPLETAR_SCREENSHOTS_TRACKIFLY_2'
    ],
    details: {
      es: {
        role: 'Full Stack Developer y UX/UI Designer',
        problem:
          'COMPLETAR_DESCRIPCION_PROBLEMA_TRACKIFLY: describir el desafio principal de logistica, trazabilidad o gestion.',
        solution:
          'COMPLETAR_DESCRIPCION_SOLUCION_TRACKIFLY: explicar como la plataforma resuelve el seguimiento y ordena la informacion.',
        process: [
          'Investigacion de necesidades y flujos principales.',
          'Definicion de arquitectura, pantallas clave y modelo de datos.',
          'Implementacion frontend, backend y validacion de la experiencia.'
        ],
        learnings: [
          'Integrar decisiones de UX con una arquitectura full stack.',
          'Priorizar claridad visual en procesos con muchos estados.'
        ]
      },
      en: {
        role: 'Full Stack Developer and UX/UI Designer',
        problem:
          'COMPLETAR_DESCRIPCION_PROBLEMA_TRACKIFLY: describe the core logistics, traceability or management challenge.',
        solution:
          'COMPLETAR_DESCRIPCION_SOLUCION_TRACKIFLY: explain how the platform supports tracking and organizes information.',
        process: [
          'Researched needs and core user flows.',
          'Defined architecture, key screens and data model.',
          'Implemented frontend, backend and UX validation.'
        ],
        learnings: [
          'Connecting UX decisions with full stack architecture.',
          'Prioritizing visual clarity in workflows with many states.'
        ]
      }
    }
  },
  {
    slug: 'cosmetic-app',
    name: 'Cosmetic App',
    type: 'Full Stack / Frontend',
    description: {
      es: 'Aplicacion orientada a productos cosmeticos, con foco en interfaz visual, experiencia de usuario y funcionalidad web.',
      en: 'Application focused on cosmetic products, visual interface, user experience and web functionality.'
    },
    technologies: ['COMPLETAR_TECNOLOGIAS_COSMETIC_APP'],
    links: {
      github: 'COMPLETAR_GITHUB_COSMETIC_APP',
      video: 'COMPLETAR_VIDEO_COSMETIC_APP'
    },
    screenshots: [
      'COMPLETAR_SCREENSHOTS_COSMETIC_APP_1',
      'COMPLETAR_SCREENSHOTS_COSMETIC_APP_2'
    ],
    details: {
      es: {
        role: 'Full Stack / Frontend Developer',
        problem:
          'COMPLETAR_DESCRIPCION_PROBLEMA_COSMETIC_APP: describir la necesidad de usuario o negocio.',
        solution:
          'COMPLETAR_DESCRIPCION_SOLUCION_COSMETIC_APP: explicar las funcionalidades y decisiones de interfaz.',
        process: [
          'Organizacion del contenido y jerarquia visual.',
          'Construccion de componentes reutilizables.',
          'Ajustes responsive y revision de usabilidad.'
        ],
        learnings: [
          'Cuidar consistencia visual en catalogos o productos.',
          'Traducir decisiones de diseno en componentes mantenibles.'
        ]
      },
      en: {
        role: 'Full Stack / Frontend Developer',
        problem:
          'COMPLETAR_DESCRIPCION_PROBLEMA_COSMETIC_APP: describe the user or business need.',
        solution:
          'COMPLETAR_DESCRIPCION_SOLUCION_COSMETIC_APP: explain features and interface decisions.',
        process: [
          'Organized content and visual hierarchy.',
          'Built reusable components.',
          'Adjusted responsive behavior and usability.'
        ],
        learnings: [
          'Keeping visual consistency in product experiences.',
          'Turning design decisions into maintainable components.'
        ]
      }
    }
  },
  {
    slug: 'medical-app',
    name: 'Medical App',
    type: 'Full Stack / Frontend',
    description: {
      es: 'Aplicacion relacionada al area medica/salud, enfocada en organizacion de informacion, usabilidad y experiencia clara para usuarios.',
      en: 'Health-related application focused on information organization, usability and a clear user experience.'
    },
    technologies: ['COMPLETAR_TECNOLOGIAS_MEDICAL_APP'],
    links: {
      github: 'COMPLETAR_GITHUB_MEDICAL_APP',
      video: 'COMPLETAR_VIDEO_MEDICAL_APP'
    },
    screenshots: [
      'COMPLETAR_SCREENSHOTS_MEDICAL_APP_1',
      'COMPLETAR_SCREENSHOTS_MEDICAL_APP_2'
    ],
    details: {
      es: {
        role: 'Full Stack / Frontend Developer',
        problem:
          'COMPLETAR_DESCRIPCION_PROBLEMA_MEDICAL_APP: describir el problema de organizacion, acceso o claridad.',
        solution:
          'COMPLETAR_DESCRIPCION_SOLUCION_MEDICAL_APP: explicar como se estructura la informacion y la experiencia.',
        process: [
          'Definicion de flujos simples y accesibles.',
          'Diseno de interfaz orientada a lectura clara.',
          'Implementacion y pruebas responsive.'
        ],
        learnings: [
          'Disenar con foco en claridad y confianza.',
          'Reducir friccion en experiencias con informacion sensible.'
        ]
      },
      en: {
        role: 'Full Stack / Frontend Developer',
        problem:
          'COMPLETAR_DESCRIPCION_PROBLEMA_MEDICAL_APP: describe the organization, access or clarity issue.',
        solution:
          'COMPLETAR_DESCRIPCION_SOLUCION_MEDICAL_APP: explain how information and experience are structured.',
        process: [
          'Defined simple and accessible flows.',
          'Designed an interface focused on readable information.',
          'Implemented and tested responsive behavior.'
        ],
        learnings: [
          'Designing with clarity and trust in mind.',
          'Reducing friction in experiences with sensitive information.'
        ]
      }
    }
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
