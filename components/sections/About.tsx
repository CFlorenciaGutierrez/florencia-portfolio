import { useTranslations } from 'next-intl';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function About() {
  const t = useTranslations('about');

  return (
    <AnimatedSection id="about" className="section-shell scroll-mt-24 py-24">
      <SectionHeading eyebrow={t('eyebrow')} title={t('title')} />
      <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr]">
        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          {t('body')}
        </p>
        <div className="card-border rounded-lg p-6">
          <p className="font-mono text-sm text-cyan-300">Design + Code</p>
          <p className="mt-4 text-base leading-7 text-slate-300">{t('note')}</p>
        </div>
      </div>
    </AnimatedSection>
  );
}
