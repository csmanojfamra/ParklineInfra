interface SectionHeadingProps {
  overline?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  num?: string;
}

export default function SectionHeading({
  overline,
  title,
  titleHighlight,
  subtitle,
  align = "center",
  light = false,
  num,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const textColor = light ? "text-white" : "text-navy-800";
  const subColor = light ? "text-white/60" : "text-slate-500";

  return (
    <div className={`max-w-3xl ${alignClass} relative`}>
      {num && (
        <span
          className="absolute -left-8 top-1/2 -translate-y-1/2 font-display text-[8rem] leading-none text-navy-800/5 select-none pointer-events-none hidden lg:block"
          aria-hidden="true"
        >
          {num}
        </span>
      )}
      {overline && (
        <p className={`font-mono text-xs tracking-[0.2em] uppercase mb-3 text-gold-500`}>
          {overline}
        </p>
      )}
      <h2 className={`font-display text-4xl md:text-5xl leading-tight ${textColor}`}>
        {title}
        {titleHighlight && (
          <span className="text-gold-500"> {titleHighlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed ${subColor}`}>{subtitle}</p>
      )}
    </div>
  );
}
