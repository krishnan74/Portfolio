import SectionHeader from "./SectionHeader";
import Picture from "./Picture";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="shell pt-section">
      <SectionHeader id="about-title" title="About" />

      <div className="mt-8 grid gap-8 md:mt-9 md:grid-cols-12 md:gap-x-5">
        <figure data-reveal className="about-portrait self-start md:col-span-5 lg:col-span-4">
          <Picture
            name={profile.portrait}
            alt="Michelangelo's David blowing a pink bubblegum bubble"
            sizes="(min-width: 768px) 30vw, 80vw"
            className="w-full"
          />
        </figure>

        <div data-reveal style={{ "--reveal-delay": "90ms" }} className="flex flex-col gap-8 md:col-span-7 lg:col-span-7 lg:col-start-6">
          <div className="flex flex-col gap-5">
            {profile.bio.map((para) => (
              <p key={para} className="max-w-measure text-step-1 leading-lede">
                {para}
              </p>
            ))}
          </div>

          <div>
            <h3 className="font-display text-step-1 font-bold">Outside work</h3>
            <ul className="mt-4 border-t border-line">
              {profile.outsideWork.map((item) => (
                <li key={item} className="border-b border-line py-3 text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
