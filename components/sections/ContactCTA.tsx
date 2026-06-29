import { BriefcaseBusiness, Code2, Mail, Network, Palette } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { ExternalLinkButton } from '@/components/ui/ExternalLinkButton';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function ContactCTA() {
  const t = useTranslations('contact');

  return (
    <AnimatedSection id="contact" className="section-shell scroll-mt-24 py-24">
      <SectionHeading eyebrow={t('eyebrow')} title={t('title')} />
      <div className="card-border rounded-lg p-6 sm:p-8">
        <p className="max-w-2xl text-lg leading-8 text-slate-300">
          {t('body')}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:florencia.carolina.gutierrez@gmail.com"
            className="inline-flex items-center gap-2 rounded-md bg-cyan-300 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <Mail aria-hidden="true" size={16} />
            {t('email')}
          </a>
          <ExternalLinkButton href="COMPLETAR_LINKEDIN">
            <Network aria-hidden="true" size={16} />
            {t('linkedin')}
          </ExternalLinkButton>
          <ExternalLinkButton href="COMPLETAR_GITHUB">
            <Code2 aria-hidden="true" size={16} />
            {t('github')}
          </ExternalLinkButton>
          <ExternalLinkButton href="COMPLETAR_BEHANCE">
            <Palette aria-hidden="true" size={16} />
            {t('behance')}
          </ExternalLinkButton>
          <ExternalLinkButton href="COMPLETAR_LINK_CV">
            <BriefcaseBusiness aria-hidden="true" size={16} />
            {t('cv')}
          </ExternalLinkButton>
        </div>
      </div>
    </AnimatedSection>
  );
}
