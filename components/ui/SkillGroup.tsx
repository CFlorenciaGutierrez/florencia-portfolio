type SkillGroupProps = {
  title: string;
  skills: string[];
};

export function SkillGroup({ title, skills }: SkillGroupProps) {
  return (
    <div className="card-border rounded-lg p-6">
      <h3 className="mb-5 text-lg font-semibold text-slate-50">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-md bg-slate-800/80 px-3 py-2 text-sm text-slate-300 ring-1 ring-slate-700/70"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
