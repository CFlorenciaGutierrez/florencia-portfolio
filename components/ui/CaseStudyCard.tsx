import { ArrowRight, Palette } from 'lucide-react';
import { useTranslations } from 'next-intl';

import type { CaseStudy } from '@/data/caseStudies';
import type { Locale } from '@/data/projects';
import { Link } from '@/i18n/routing';

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
  locale: Locale;
};

export function CaseStudyCard({ caseStudy, locale }: CaseStudyCardProps) {
  const t = useTranslations('caseStudies');

  return (
    <article className="card-border rounded-lg p-6 transition hover:-translate-y-1 hover:border-cyan-300/35">
      <p className="font-mono text-sm text-cyan-300">{caseStudy.type}</p>
      <h3 className="mt-4 text-2xl font-semibold text-slate-50">
        {caseStudy.name}
      </h3>
      <p className="mt-4 leading-7 text-slate-300">
        {caseStudy.description[locale]}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {caseStudy.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded bg-slate-800 px-2.5 py-1.5 font-mono text-xs text-slate-300"
          >
            {technology}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
        <Link
          href={`/case-studies/${caseStudy.slug}`}
          className="inline-flex items-center gap-2 font-semibold text-cyan-200 transition hover:text-cyan-100"
        >
          {t('viewDetail')}
          <ArrowRight aria-hidden="true" size={16} />
        </Link>
        {caseStudy.links.behance ? (
          <a
            href={caseStudy.links.behance}
            className="inline-flex items-center gap-2 text-slate-300 transition hover:text-cyan-200"
          >
            <Palette aria-hidden="true" size={16} />
            {t('behance')}
          </a>
        ) : null}
      </div>
    </article>
  );
}
