import { About } from '@/components/sections/About';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Hero } from '@/components/sections/Hero';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { Skills } from '@/components/sections/Skills';
import { UxCaseStudies } from '@/components/sections/UxCaseStudies';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <SelectedWork />
      <UxCaseStudies />
      <Skills />
      <ContactCTA />
    </>
  );
}
