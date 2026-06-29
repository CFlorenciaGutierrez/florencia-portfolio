import { useTranslations } from 'next-intl';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SkillGroup } from '@/components/ui/SkillGroup';
import { skillGroups } from '@/data/skills';

export function Skills() {
  const t = useTranslations('skills');

  return (
    <AnimatedSection id="skills" className="section-shell scroll-mt-24 py-24">
      <SectionHeading
        eyebrow={t('eyebrow')}
        title={t('title')}
        description={t('description')}
      />
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <SkillGroup
            key={group.key}
            title={t(group.key)}
            skills={group.skills}
          />
        ))}
      </div>
    </AnimatedSection>
  );
}
