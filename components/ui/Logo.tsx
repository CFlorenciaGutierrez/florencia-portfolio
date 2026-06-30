import { Link } from '@/i18n/routing';

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Florencia Gutierrez - Home"
      className="inline-flex h-10 items-center rounded-sm font-mono text-base font-semibold tracking-normal text-[var(--foreground)] transition-colors duration-200 ease-out hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
    >
      {'<FG />'}
    </Link>
  );
}
