import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { siteConfig } from '@/data/site';
import { routing } from '@/i18n/routing';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Florencia Gutierrez | Full Stack Developer & UX/UI Designer',
  description:
    'Portfolio de Florencia Gutierrez, desarrolladora Full Stack con experiencia en UX/UI Design, enfocada en crear productos digitales claros, funcionales y centrados en el usuario.',
  openGraph: {
    title: 'Florencia Gutierrez | Full Stack Developer & UX/UI Designer',
    description:
      'Full Stack Developer con base en UX/UI Design, enfocada en crear productos digitales claros, funcionales y centrados en el usuario.',
    type: 'website',
    locale: 'es_AR',
    siteName: 'Florencia Gutierrez Portfolio'
  },
  metadataBase: new URL(siteConfig.siteUrl)
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-cyan-300 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
          >
            Skip to content
          </a>
          <CustomCursor />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
