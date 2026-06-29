type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 font-mono text-sm font-semibold text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-normal text-slate-50 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
      ) : null}
    </div>
  );
}
