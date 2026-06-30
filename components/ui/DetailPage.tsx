import {
  ArrowLeft,
  Code2,
  Globe2,
  Palette,
  PenTool,
  PlayCircle
} from 'lucide-react';
import { useTranslations } from 'next-intl';

import { ExternalLinkButton } from '@/components/ui/ExternalLinkButton';
import { ImageGallery } from '@/components/ui/ImageGallery';
import type { CaseStudy } from '@/data/caseStudies';
import type { Locale, Project } from '@/data/projects';
import { Link } from '@/i18n/routing';

type DetailPageProps = {
  item: Project | CaseStudy;
  locale: Locale;
  variant: 'project' | 'caseStudy';
};

export function DetailPage({ item, locale, variant }: DetailPageProps) {
  const t = useTranslations('detail');
  const details = item.details[locale];

  return (
    <article className="section-shell pt-32 pb-24">
      <Link
        href={variant === 'project' ? '/#work' : '/#caseStudies'}
        className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
      >
        <ArrowLeft aria-hidden="true" size={16} />
        {variant === 'project' ? t('backProjects') : t('backCases')}
      </Link>
      <header className="max-w-4xl">
        <p className="font-mono text-sm text-cyan-300">{item.type}</p>
        <h1 className="mt-4 text-4xl font-semibold text-balance text-slate-50 sm:text-6xl">
          {item.name}
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          {item.description[locale]}
        </p>
      </header>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        <DetailBlock title={t('role')} body={details.role} />
        <div className="card-border rounded-lg p-6 md:col-span-2">
          <h2 className="text-lg font-semibold text-slate-50">
            {t('technologies')}
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {item.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded bg-slate-800 px-2.5 py-1.5 font-mono text-xs text-slate-300"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <DetailBlock title={t('problem')} body={details.problem} />
        <DetailBlock title={t('solution')} body={details.solution} />
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <ListBlock title={t('process')} items={details.process} />
        <ListBlock title={t('learnings')} items={details.learnings} />
      </div>

      <section className="mt-14">
        <h2 className="mb-5 text-2xl font-semibold text-slate-50">
          {t('screenshots')}
        </h2>
        <ImageGallery images={item.screenshots} title={item.name} />
      </section>

      <section className="mt-14">
        <h2 className="mb-5 text-2xl font-semibold text-slate-50">
          {t('links')}
        </h2>
        <div className="flex flex-wrap gap-3">
          {'github' in item.links && item.links.github ? (
            <ExternalLinkButton href={item.links.github} pendingLabel={t('pending')}>
              <Code2 aria-hidden="true" size={16} />
              GitHub
            </ExternalLinkButton>
          ) : null}
          {item.links.demo ? (
            <ExternalLinkButton href={item.links.demo} pendingLabel={t('pending')}>
              <Globe2 aria-hidden="true" size={16} />
              {t('demo')}
            </ExternalLinkButton>
          ) : null}
          {item.links.video ? (
            <ExternalLinkButton href={item.links.video} pendingLabel={t('pending')}>
              <PlayCircle aria-hidden="true" size={16} />
              {t('video')}
            </ExternalLinkButton>
          ) : null}
          {item.links.behance ? (
            <ExternalLinkButton href={item.links.behance} pendingLabel={t('pending')}>
              <Palette aria-hidden="true" size={16} />
              Behance
            </ExternalLinkButton>
          ) : null}
          {item.links.prototype ? (
            <ExternalLinkButton href={item.links.prototype} pendingLabel={t('pending')}>
              <PenTool aria-hidden="true" size={16} />
              {t('prototype')}
            </ExternalLinkButton>
          ) : null}
        </div>
      </section>
    </article>
  );
}

function DetailBlock({ title, body }: { title: string; body: string }) {
  return (
    <section className="card-border rounded-lg p-6">
      <h2 className="text-lg font-semibold text-slate-50">{title}</h2>
      <p className="mt-4 leading-7 text-slate-300">{body}</p>
    </section>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="card-border rounded-lg p-6">
      <h2 className="text-lg font-semibold text-slate-50">{title}</h2>
      <ul className="mt-4 space-y-3 text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-7">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
