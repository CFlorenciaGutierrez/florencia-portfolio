import { useLocale, useTranslations } from 'next-intl';

import { CaseStudyCard } from '@/components/ui/CaseStudyCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { caseStudies } from '@/data/caseStudies';
import type { Locale } from '@/data/projects';

export function UxCaseStudies() {
  const t = useTranslations('caseStudies');
  const locale = useLocale() as Locale;

  return (
    <AnimatedSection
      id="caseStudies"
      className="section-shell scroll-mt-24 py-24"
    >
      <SectionHeading
        eyebrow={t('eyebrow')}
        title={t('title')}
        description={t('description')}
      />
      <div className="grid gap-5 md:grid-cols-2">
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard
            key={caseStudy.slug}
            caseStudy={caseStudy}
            locale={locale}
          />
        ))}
      </div>
    </AnimatedSection>
  );
}
