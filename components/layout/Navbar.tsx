'use client';

import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { Link } from '@/i18n/routing';
import { Logo } from '@/components/ui/Logo';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Navbar() {
  const t = useTranslations('nav');
  const [open, setOpen] = useState(false);

  const items = [
    { href: '/#about', label: t('about') },
    { href: '/#work', label: t('work') },
    { href: '/#caseStudies', label: t('caseStudies') },
    { href: '/#skills', label: t('skills') },
    { href: '/#contact', label: t('contact') }
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-800/80 bg-[#07111f]/88 backdrop-blur">
      <nav
        className="section-shell flex min-h-16 items-center justify-between gap-4"
        aria-label={t('aria')}
      >
        <Logo />
        <div className="hidden items-center gap-7 md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-700 text-slate-200 md:hidden"
          aria-label={open ? t('close') : t('open')}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-slate-800 bg-[#07111f] md:hidden">
          <div className="section-shell flex flex-col gap-4 py-5">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-1 text-sm font-medium text-slate-200"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>
        </div>
      ) : null}
    </header>
  );
}
