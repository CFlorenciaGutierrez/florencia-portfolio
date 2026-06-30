import { Code2, Mail, Network, Palette } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { contactLinks, EMAIL_COMPOSE_URL } from '@/data/site';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-slate-800/80 py-10">
      <div className="section-shell flex flex-col gap-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>{t('copy')}</p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={EMAIL_COMPOSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir Gmail para escribir a Florencia Carolina Gutierrez"
            className="transition hover:text-cyan-200"
          >
            <Mail size={20} />
          </a>
          <a
            href={EMAIL_COMPOSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir Gmail para escribir a florencia.carolina.gutierrez@gmail.com"
            className="transition hover:text-cyan-200"
          >
            {contactLinks.email}
          </a>
          <a
            href={contactLinks.linkedin}
            aria-label="LinkedIn"
            className="transition hover:text-cyan-200"
          >
            <Network size={20} />
          </a>
          <a
            href={contactLinks.github}
            aria-label="GitHub"
            className="transition hover:text-cyan-200"
          >
            <Code2 size={20} />
          </a>
          <a
            href={contactLinks.behance}
            aria-label="Behance"
            className="transition hover:text-cyan-200"
          >
            <Palette size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
