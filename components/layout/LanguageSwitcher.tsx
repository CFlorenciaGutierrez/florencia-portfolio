'use client';

import { useLocale } from 'next-intl';

import { Link, usePathname } from '@/i18n/routing';

const labels = {
  es: 'ES',
  en: 'EN'
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div
      className="flex rounded-md border border-slate-700/80 p-1"
      aria-label="Language selector"
    >
      {(['es', 'en'] as const).map((item) => (
        <Link
          key={item}
          href={pathname}
          locale={item}
          className={`rounded px-2.5 py-1 text-xs font-semibold transition ${
            locale === item
              ? 'bg-cyan-300 text-slate-950'
              : 'text-slate-300 hover:text-cyan-200'
          }`}
          aria-current={locale === item ? 'true' : undefined}
        >
          {labels[item]}
        </Link>
      ))}
    </div>
  );
}
