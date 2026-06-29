import { Link } from '@/i18n/routing';

export default function NotFound() {
  return (
    <div className="section-shell flex min-h-screen flex-col justify-center py-24">
      <p className="font-mono text-sm text-cyan-300">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-slate-50">
        Page not found
      </h1>
      <Link
        href="/"
        className="mt-8 inline-flex w-fit rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950"
      >
        Back home
      </Link>
    </div>
  );
}
