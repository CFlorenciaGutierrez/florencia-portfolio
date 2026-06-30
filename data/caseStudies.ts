import type {
  DetailContent,
  ExternalLinks,
  Locale,
  Screenshot
} from './projects';

export type CaseStudy = {
  slug: string;
  name: string;
  type: string;
  description: Record<Locale, string>;
  technologies: string[];
  links: ExternalLinks;
  screenshots: Screenshot[];
  details: Record<Locale, DetailContent>;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'carrefour-redesign',
    name: 'Carrefour Redesign',
    type: 'UX/UI Redesign',
    description: {
      es: 'Rediseño de experiencia e interfaz para mejorar la navegación, claridad visual y flujo de usuario.',
      en: 'Experience and interface redesign to improve navigation, visual clarity and user flow.'
    },
    technologies: ['Figma', 'Wireframes', 'User Flows', 'Prototyping'],
    links: {
      behance: 'https://www.behance.net/gallery/228797757/Rediseno-UXUI-para-Carrefour-Proyecto-final',
      prototype:
        'https://www.figma.com/proto/r7n9ijs4N4fxVl9RXuyq9d/Redesign-web-Carrefour?node-id=5-2&p=f&t=iQowXxPeBCjPnuut-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A2'
    },
    screenshots: [
      {
        src: '/images/case-studies/carrefour-redesign/home.png',
        alt: 'Pantalla home del rediseño web de Carrefour.'
      },
      {
        src: '/images/case-studies/carrefour-redesign/inicio-de-sesion.png',
        alt: 'Pantalla de inicio de sesion del rediseño web de Carrefour.'
      },
      {
        src: '/images/case-studies/carrefour-redesign/vista-de-productos.png',
        alt: 'Vista de productos del rediseño web de Carrefour.'
      }
    ],
    details: {
      es: {
        role: 'UX/UI Designer',
        problem:
          'Se detectaron múltiples problemas de usabilidad y navegación: botones muy pequeños que afectan la accesibilidad, un flujo repetitivo y tedioso para seleccionar la forma de envío y tipo de compra antes de agregar productos, demoras en la carga de la página (especialmente en promociones) y anuncios emergentes ("Lo más elegido") que interrumpen y cubren los resultados de búsqueda confundiendo al usuario.',
        solution:
          'Optimizar la experiencia de compra online mejorando la navegación general, simplificando el proceso de selección de entrega y agilizando el flujo de compra para reducir la sobrecarga visual de información junta, incrementando así la satisfacción del usuario y la conversión de ventas.',
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
          'Multiple usability and navigation issues were detected: tiny navigation buttons affecting accessibility, a repetitive and tedious workflow for selecting delivery methods and purchase types before adding items, page loading delays (especially in promotions), and intrusive pop-up ads ("Lo más elegido") that interrupt and cover search results, confusing the user.',
        solution:
          'Optimize the online shopping experience by improving overall navigation, simplifying the delivery selection process, and streamlining the checkout flow to reduce visual information clutter, thereby increasing user satisfaction and sales conversion.',
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
      es: 'Diseño de aplicación de salud centrada en la claridad, accesibilidad y facilidad de uso.',
      en: 'Health app design centered on clarity, accessibility and ease of use.'
    },
    technologies: [
      'Figma',
      'Design Systems',
      'Prototyping',
      'Responsive Design'
    ],
    links: {
      behance: 'https://www.behance.net/gallery/230832571/Cons-Pro-Diseno-UXUI-app-para-mejorar-tu-bienestar',
      prototype:
        'https://www.figma.com/proto/uIKYDuPsdlb4KFpGDbXQEC/Health-Care-App?node-id=2-8699&t=FxUVMUswiVZtl3pZ-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A8699'
    },
    screenshots: [
      {
        src: '/images/case-studies/health-app/home.png',
        alt: 'Pantalla home de Health App con resumen de salud.'
      },
      {
        src: '/images/case-studies/health-app/inicio.png',
        alt: 'Pantalla inicial del prototipo movil de Health App.'
      },
      {
        src: '/images/case-studies/health-app/seccion-consejo-de-nutricion.png',
        alt: 'Seccion de consejo de nutricion en Health App.'
      }
    ],
    details: {
  es: {
    role: 'UX/UI Designer',
    problem:
      'Existe una creciente preocupación por la salud alimentaria y el bienestar, sin embargo, muchas personas enfrentan barreras significativas para adoptar hábitos alimenticios más saludables de manera sostenible. Las aplicaciones existentes suelen imponer dietas restrictivas o exigir cambios radicales, lo que resulta poco realista y difícil de mantener a largo plazo, sumado a los costos y la falta de tiempo para planificar comidas nutritivas.',
    solution:
      'Una aplicación que motive a los usuarios de manera positiva y no invasiva, ofreciendo incentivos como puntos o estrellas por cada pequeño paso hacia una alimentación más saludable. Permite seguir el progreso y obtener recompensas tangibles (como personalizar un personaje virtual) para adoptar hábitos saludables de forma gradual y sostenible.',
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
      'There is a growing concern for dietary health and well-being, yet many people face significant barriers to adopting healthier eating habits sustainably. Existing applications often impose restrictive diets or demand radical changes, which is unrealistic and hard to maintain long-term, compounded by costs and a lack of time to plan nutritious meals.',
    solution:
      'An application that motivates users in a positive and non-invasive way, offering incentives like points or stars for each small step toward healthier eating. It allows users to track progress and earn tangible rewards (such as customizing a virtual character) to adopt healthy habits gradually and sustainably.',
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
