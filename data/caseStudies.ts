import type { DetailContent, ExternalLinks, Locale } from './projects';

export type CaseStudy = {
  slug: string;
  name: string;
  type: string;
  description: Record<Locale, string>;
  technologies: string[];
  links: ExternalLinks;
  screenshots: string[];
  details: Record<Locale, DetailContent>;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'carrefour-redesign',
    name: 'Carrefour Redesign',
    type: 'UX/UI Redesign',
    description: {
      es: 'Rediseno de experiencia e interfaz para mejorar la navegacion, claridad visual y flujo de usuario.',
      en: 'Experience and interface redesign to improve navigation, visual clarity and user flow.'
    },
    technologies: ['Figma', 'Wireframes', 'User Flows', 'Prototyping'],
    links: {
      behance: 'COMPLETAR_BEHANCE_CARREFOUR'
    },
    screenshots: [
      'COMPLETAR_SCREENSHOTS_CARREFOUR_1',
      'COMPLETAR_SCREENSHOTS_CARREFOUR_2'
    ],
    details: {
      es: {
        role: 'UX/UI Designer',
        problem:
          'COMPLETAR_DESCRIPCION_PROBLEMA_CARREFOUR: describir fricciones de navegacion, busqueda o compra.',
        solution:
          'COMPLETAR_DESCRIPCION_SOLUCION_CARREFOUR: explicar los cambios de jerarquia, interfaz y flujo.',
        process: [
          'Analisis de experiencia actual y puntos de friccion.',
          'Creacion de wireframes y prototipo navegable.',
          'Refinamiento visual con foco en accesibilidad.'
        ],
        learnings: [
          'Mejorar flujos existentes requiere criterio y foco.',
          'La claridad visual impacta directamente en la confianza.'
        ]
      },
      en: {
        role: 'UX/UI Designer',
        problem:
          'COMPLETAR_DESCRIPCION_PROBLEMA_CARREFOUR: describe navigation, search or checkout friction.',
        solution:
          'COMPLETAR_DESCRIPCION_SOLUCION_CARREFOUR: explain hierarchy, interface and flow improvements.',
        process: [
          'Analyzed current experience and friction points.',
          'Created wireframes and a clickable prototype.',
          'Refined visuals with accessibility in mind.'
        ],
        learnings: [
          'Improving existing flows requires focus and judgment.',
          'Visual clarity directly affects user trust.'
        ]
      }
    }
  },
  {
    slug: 'health-app',
    name: 'Health App',
    type: 'UX/UI Design',
    description: {
      es: 'Diseno de aplicacion de salud centrada en la claridad, accesibilidad y facilidad de uso.',
      en: 'Health app design centered on clarity, accessibility and ease of use.'
    },
    technologies: [
      'Figma',
      'Design Systems',
      'Prototyping',
      'Responsive Design'
    ],
    links: {
      behance: 'COMPLETAR_BEHANCE_HEALTH_APP'
    },
    screenshots: [
      'COMPLETAR_SCREENSHOTS_HEALTH_APP_1',
      'COMPLETAR_SCREENSHOTS_HEALTH_APP_2'
    ],
    details: {
      es: {
        role: 'UX/UI Designer',
        problem:
          'COMPLETAR_DESCRIPCION_PROBLEMA_HEALTH_APP: describir la necesidad de claridad, seguimiento o acceso.',
        solution:
          'COMPLETAR_DESCRIPCION_SOLUCION_HEALTH_APP: explicar la propuesta visual y funcional.',
        process: [
          'Definicion de usuarios, objetivos y flujos prioritarios.',
          'Wireframes de baja fidelidad y prototipo.',
          'Sistema visual simple, legible y consistente.'
        ],
        learnings: [
          'La accesibilidad debe estar presente desde el inicio.',
          'Las interfaces de salud necesitan lenguaje claro y directo.'
        ]
      },
      en: {
        role: 'UX/UI Designer',
        problem:
          'COMPLETAR_DESCRIPCION_PROBLEMA_HEALTH_APP: describe the need for clarity, tracking or access.',
        solution:
          'COMPLETAR_DESCRIPCION_SOLUCION_HEALTH_APP: explain the visual and functional proposal.',
        process: [
          'Defined users, goals and priority flows.',
          'Created low-fidelity wireframes and a prototype.',
          'Built a simple, readable and consistent visual system.'
        ],
        learnings: [
          'Accessibility should be present from the start.',
          'Health interfaces need clear and direct language.'
        ]
      }
    }
  }
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
