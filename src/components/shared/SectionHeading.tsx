type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  titleAs?: "h1" | "h2";
};

export function SectionHeading({ eyebrow, title, description, align = "left", tone = "dark", titleAs = "h2" }: SectionHeadingProps) {
  const titleClass = tone === "light" ? "text-white" : "text-navyInk";
  const descriptionClass = tone === "light" ? "text-white/75" : "text-navyInk/72";
  const Heading = titleAs;

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Heading className={`mt-3 text-3xl font-black sm:text-4xl lg:text-5xl ${titleClass}`}>{title}</Heading>
      {description ? <p className={`mt-4 text-base leading-8 ${descriptionClass}`}>{description}</p> : null}
    </div>
  );
}
