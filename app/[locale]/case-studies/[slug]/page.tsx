import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { DetailPage } from '@/components/ui/DetailPage';
import { caseStudies, getCaseStudy } from '@/data/caseStudies';
import type { Locale } from '@/data/projects';
import { routing } from '@/i18n/routing';

type CaseStudyPageProps = {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    caseStudies.map((caseStudy) => ({
      locale,
      slug: caseStudy.slug
    }))
  );
}

export async function generateMetadata({
  params
}: CaseStudyPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return {};
  }

  return {
    title: `${caseStudy.name} | Florencia Gutierrez`,
    description: caseStudy.description[locale],
    openGraph: {
      title: `${caseStudy.name} | Florencia Gutierrez`,
      description: caseStudy.description[locale],
      type: 'article'
    }
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { locale, slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return <DetailPage item={caseStudy} locale={locale} variant="caseStudy" />;
}
