import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { DetailPage } from '@/components/ui/DetailPage';
import { getProject, projects, type Locale } from '@/data/projects';
import { routing } from '@/i18n/routing';

type ProjectPageProps = {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((project) => ({
      locale,
      slug: project.slug
    }))
  );
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.name} | Florencia Gutierrez`,
    description: project.description[locale],
    openGraph: {
      title: `${project.name} | Florencia Gutierrez`,
      description: project.description[locale],
      type: 'article'
    }
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return <DetailPage item={project} locale={locale} variant="project" />;
}
