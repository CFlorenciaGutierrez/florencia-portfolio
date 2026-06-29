import { ArrowDown, Download, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/routing';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="section-shell flex min-h-screen items-center pt-28 pb-20">
      <div className="max-w-4xl">
        <p className="mb-4 font-mono text-base font-semibold text-cyan-300">
          {t('eyebrow')}
        </p>
        <h1 className="text-5xl font-semibold tracking-normal text-balance text-slate-50 sm:text-6xl lg:text-7xl">
          {t('name')}
        </h1>
        <p className="mt-5 text-3xl font-semibold tracking-normal text-balance text-slate-300 sm:text-4xl lg:text-5xl">
          {t('title')}
        </p>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
          {t('description')}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/#work"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            {t('viewProjects')}
            <ArrowDown aria-hidden="true" size={18} />
          </Link>
          <a
            href="COMPLETAR_LINK_CV"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-cyan-300/40 px-5 py-3 text-sm font-bold text-cyan-200 transition hover:bg-cyan-300/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            {t('downloadCv')}
            <Download aria-hidden="true" size={18} />
          </a>
          <a
            href="mailto:florencia.carolina.gutierrez@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 px-5 py-3 text-sm font-bold text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            {t('contact')}
            <Mail aria-hidden="true" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
