import { Code2, Mail, Network } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-slate-800/80 py-10">
      <div className="section-shell flex flex-col gap-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>{t('copy')}</p>
        <div className="flex gap-4">
          <a
            href="mailto:florencia.carolina.gutierrez@gmail.com"
            aria-label="Email"
            className="transition hover:text-cyan-200"
          >
            <Mail size={20} />
          </a>
          <a
            href="COMPLETAR_LINKEDIN"
            aria-label="LinkedIn"
            className="transition hover:text-cyan-200"
          >
            <Network size={20} />
          </a>
          <a
            href="COMPLETAR_GITHUB"
            aria-label="GitHub"
            className="transition hover:text-cyan-200"
          >
            <Code2 size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
