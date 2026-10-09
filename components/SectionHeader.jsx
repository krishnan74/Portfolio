export default function SectionHeader({ id, title, aside }) {
  return (
    <header className="grid gap-4 border-t border-line pt-5 md:grid-cols-12 md:items-end">
      <h2 id={id} className="font-display text-step-5 font-bold md:col-span-8">
        {title}
      </h2>
      {aside && <p className="text-muted md:col-span-4 md:text-right">{aside}</p>}
    </header>
  );
}
