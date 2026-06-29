import { useLocale, useTranslations } from 'next-intl';

import { ProjectCard } from '@/components/ui/ProjectCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { projects, type Locale } from '@/data/projects';

export function SelectedWork() {
  const t = useTranslations('work');
  const locale = useLocale() as Locale;

  return (
    <AnimatedSection id="work" className="section-shell scroll-mt-24 py-24">
      <SectionHeading
        eyebrow={t('eyebrow')}
        title={t('title')}
        description={t('description')}
      />
      <div className="project-list grid gap-5">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            locale={locale}
            index={index}
          />
        ))}
      </div>
    </AnimatedSection>
  );
}
