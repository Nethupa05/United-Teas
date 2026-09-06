export default function SectionHeading({
  title,
  lede,
  align = "left",
  tone = "dark",
  className = "",
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = tone === "light" ? "text-ivory" : "text-forest-dark";
  const ledeColor = tone === "light" ? "text-cream/80" : "text-muted";

  return (
    <div className={`max-w-xl ${alignClass} ${className}`}>
      <h2 className={`text-3xl md:text-[2.35rem] leading-[1.15] ${titleColor}`}>{title}</h2>
      {lede && <p className={`mt-4 text-[1.05rem] leading-relaxed ${ledeColor}`}>{lede}</p>}
    </div>
  );
}
