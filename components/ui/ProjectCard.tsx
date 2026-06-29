import { ArrowRight, Code2, PlayCircle } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import type { Locale, Project } from '@/data/projects';
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
          {preview?.startsWith('/') ? (
            <Image
              src={preview}
              alt={`${project.name} preview`}
              fill
              className="project-preview-media object-cover"
              sizes="(min-width: 1024px) 360px, 100vw"
            />
          ) : (
            <div className="project-preview-media flex h-full items-center justify-center bg-[linear-gradient(135deg,rgba(94,234,212,0.08),rgba(15,23,42,0.2))] p-5 text-center font-mono text-xs leading-6 text-slate-400">
              {preview ?? 'COMPLETAR_SCREENSHOT'}
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
            {project.links.github ? (
              <a
                href={project.links.github}
                className="inline-flex items-center gap-2 text-slate-300 transition hover:text-cyan-200"
              >
                <Code2 aria-hidden="true" size={16} />
                {t('github')}
              </a>
            ) : null}
            {project.links.video ? (
              <a
                href={project.links.video}
                className="inline-flex items-center gap-2 text-slate-300 transition hover:text-cyan-200"
              >
                <PlayCircle aria-hidden="true" size={16} />
                {t('video')}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
