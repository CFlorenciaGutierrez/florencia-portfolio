export const contactLinks = {
  email: 'florencia.carolina.gutierrez@gmail.com',
  github: 'https://github.com/CFlorenciaGutierrez',
  linkedin: 'https://www.linkedin.com/in/florencia-carolina-gutierrez-',
  behance: 'https://www.behance.net/florencgutierr15'
};

export const EMAIL_COMPOSE_URL =
  'https://mail.google.com/mail/?view=cm&fs=1&to=florencia.carolina.gutierrez@gmail.com';

export const siteConfig = {
  // TODO: Completar con el dominio real del portfolio cuando este publicado.
  siteUrl: 'https://completar-dominio.com'
};

const pendingLinkPatterns = [
  'null',
  'undefined',
  'example.com',
  'github.com/example',
  'linkedin.com/example',
  'behance.net/example',
  'completar-dominio.com'
];

export function isPendingLink(href?: string | null) {
  if (!href) {
    return true;
  }

  const normalizedHref = href.trim().toLowerCase();

  return (
    normalizedHref === '#' ||
    normalizedHref.startsWith('completar_') ||
    pendingLinkPatterns.some((pattern) => normalizedHref.includes(pattern))
  );
}
