import { ArrowUpRight } from 'lucide-react';

import { isPendingLink } from '@/data/site';

type ExternalLinkButtonProps = {
  href: string;
  children: React.ReactNode;
  pendingLabel?: string;
};

export function ExternalLinkButton({
  href,
  children,
  pendingLabel = 'Pendiente'
}: ExternalLinkButtonProps) {
  if (isPendingLink(href)) {
    return (
      <span
        aria-disabled="true"
        className="inline-flex cursor-not-allowed items-center gap-2 rounded-md border border-slate-700/70 px-4 py-2 text-sm font-semibold text-slate-500"
        title={pendingLabel}
      >
        {children}
        <span className="font-mono text-xs">{pendingLabel}</span>
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-md border border-cyan-300/30 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-200 hover:bg-cyan-300/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
    >
      {children}
      <ArrowUpRight aria-hidden="true" size={16} />
    </a>
  );
}
