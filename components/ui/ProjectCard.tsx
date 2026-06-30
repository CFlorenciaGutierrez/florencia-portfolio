import { ArrowRight, Code2, Globe2, PlayCircle } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import type { Locale, Project } from '@/data/projects';
import { isPendingLink } from '@/data/site';
import { Link } from '@/i18n/routing';

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  index: number;
};

export function ProjectCard({ project, locale, index }: ProjectCardProps) {
  const t = useTranslations('work');
  const preview = project.screenshots[0];

  return (
    <article className="project-card card-border group rounded-lg p-6 focus-within:border-cyan-300/35 hover:-translate-y-1 hover:border-cyan-300/35">
      <div className="grid gap-6 lg:grid-cols-[0.36fr_1fr] lg:items-start">
        <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-slate-700/70 bg-slate-900/70">
          {preview?.src.startsWith('/') ? (
            <Image
              src={preview.src}
              alt={preview.alt}
              fill
              className="project-preview-media object-cover"
              sizes="(min-width: 1024px) 360px, 100vw"
            />
          ) : (
            <div className="project-preview-media flex h-full items-center justify-center bg-[linear-gradient(135deg,rgba(94,234,212,0.08),rgba(15,23,42,0.2))] p-5 text-center font-mono text-xs leading-6 text-slate-400">
              {/* TODO: Falta asociar un screenshot real para este proyecto. */}
              {preview?.src ?? 'Screenshot pendiente'}
            </div>
          )}
          <span className="absolute top-3 left-3 rounded bg-slate-950/80 px-2 py-1 font-mono text-xs text-cyan-200">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="project-title text-2xl font-semibold text-slate-50">
                {project.name}
              </h3>
              <p className="mt-1 font-mono text-sm text-slate-400">
                {project.type}
              </p>
            </div>
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
            >
              {t('viewDetail')}
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <p className="mt-5 max-w-3xl leading-7 text-slate-300">
            {project.description[locale]}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded bg-slate-800 px-2.5 py-1.5 font-mono text-xs text-slate-300"
              >
                {technology}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <ProjectLink
              href={project.links.github}
              label={t('github')}
              pendingLabel={t('pending')}
            >
              <Code2 aria-hidden="true" size={16} />
            </ProjectLink>
            <ProjectLink
              href={project.links.demo}
              label={t('demo')}
              pendingLabel={t('pending')}
            >
              <Globe2 aria-hidden="true" size={16} />
            </ProjectLink>
            <ProjectLink
              href={project.links.video}
              label={t('video')}
              pendingLabel={t('pending')}
            >
              <PlayCircle aria-hidden="true" size={16} />
            </ProjectLink>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectLink({
  href,
  label,
  pendingLabel,
  children
}: {
  href?: string;
  label: string;
  pendingLabel: string;
  children: React.ReactNode;
}) {
  if (!href) {
    return null;
  }

  if (isPendingLink(href)) {
    return (
      <span
        aria-disabled="true"
        className="inline-flex cursor-not-allowed items-center gap-2 text-slate-500"
        title={pendingLabel}
      >
        {children}
        {label}
        <span className="font-mono text-xs">{pendingLabel}</span>
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 text-slate-300 transition hover:text-cyan-200"
    >
      {children}
      {label}
    </a>
  );
}
