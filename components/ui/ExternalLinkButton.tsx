import { ArrowUpRight } from 'lucide-react';

type ExternalLinkButtonProps = {
  href: string;
  children: React.ReactNode;
};

export function ExternalLinkButton({
  href,
  children
}: ExternalLinkButtonProps) {
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
