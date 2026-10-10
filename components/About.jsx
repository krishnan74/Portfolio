import SectionHeader from "./SectionHeader";
import Picture from "./Picture";
import { profile } from "@/data/profile";

// `first` when it opens the /about page.
export default function About({ first = false }) {
  return (
    <section id="about" aria-labelledby="about-title" className={`shell ${first ? "pt-page" : "pt-section"}`}>
      <SectionHeader id="about-title" title="About" as={first ? "h1" : "h2"} />

      <div className="mt-8 grid gap-8 md:mt-9 md:grid-cols-12 md:gap-x-5">
        <figure data-reveal className="about-portrait self-start md:col-span-5 lg:col-span-4">
          <Picture
            name={profile.photo}
            alt={`Portrait of ${profile.name}`}
            sizes="17rem"
            className="block"
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
                <li key={item} className="border-b border-line py-4 text-muted">
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
