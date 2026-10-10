import { profile, socials } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-page flex-col gap-5 px-gutter py-8 text-step--1 text-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}.
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="link-quiet">
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#main" className="link-quiet">
              Back to top
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
