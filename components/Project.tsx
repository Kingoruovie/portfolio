export default function Project({
  icons,
  title,
  description,
  repo,
  live,
}: {
  icons: React.JSX.Element[];
  title: string;
  description: string;
  repo?: string;
  live?: string;
}) {
  return (
    <article className="border-1 border-foreground/15 rounded-sm grow">
      <div>
        {/* LOGOS */}
        <div className="flex flex-row items-center justify-center gap-4 py-8 border-b border-foreground/15">
          {icons.map((icon, index) => (
            <span key={index}>{icon}</span>
          ))}
        </div>
        {/* Description */}
        <div className="px-4 pt-8 pb-6 bg-foreground/5">
          <div className="">
            <h2 className="font-bold font-mono mb-2">{title}</h2>
            <p className="text-foreground/70 text-[15px]">{description}</p>
          </div>
          {/* Link if applicable  */}
          <div className="text-sm font-bold flex flex-row gap-2 mt-4 ml-0">
            {repo && (
              <a
                href={repo}
                className="bg-primary/50 p-1 border-1 border-primary/20 rounded-sm"
              >
                View Repo
              </a>
            )}
            {live && (
              <a
                href={live}
                className="bg-cyan-500/50 p-1 border-1 border-cyan-500/20 rounded-sm"
              >
                View Live
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
