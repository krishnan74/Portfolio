// `as="h1"` when the section opens its own page.
export default function SectionHeader({ id, title, aside, as: Heading = "h2" }) {
  return (
    <header data-reveal="section" className="rule grid gap-4 pt-5 md:grid-cols-12 md:items-end">
      <Heading id={id} className="font-display text-step-5 font-bold md:col-span-8">
        <span className="reveal-mask">
          <span className="reveal-mask-inner">{title}</span>
        </span>
      </Heading>
      {aside && <p className="reveal-after text-muted md:col-span-4 md:text-right">{aside}</p>}
    </header>
  );
}
