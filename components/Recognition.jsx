import SectionHeader from "./SectionHeader";
import { achievements, certifications, education } from "@/data/profile";

export default function Recognition() {
  const [lead, ...rest] = achievements;
  return (
    <section id="recognition" aria-labelledby="recognition-title" className="shell pt-section">
      <SectionHeader id="recognition-title" title="Recognition" />

      <div className="mt-8 grid gap-8 md:mt-9 lg:grid-cols-12 lg:gap-x-5 lg:gap-y-9">
        <p data-reveal className="font-display text-step-4 font-bold leading-tight lg:col-span-10">
          {lead}
        </p>

        <ul data-reveal className="lg:col-span-7">
          {rest.map((item) => (
            <li key={item} className="flex gap-4 border-t border-line py-5 last:border-b">
              <span className="medal mt-2 shrink-0" aria-hidden="true" />
              <span className="max-w-measure">{item}</span>
            </li>
          ))}
        </ul>

        <div data-reveal style={{ "--reveal-delay": "90ms" }} className="flex flex-col gap-7 lg:col-span-4 lg:col-start-9">
          <div>
            <h3 className="font-display text-step-1 font-bold">Certifications</h3>
            <ul className="mt-5 flex flex-col gap-5">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <p className="font-medium">{cert.name}</p>
                  <p className="text-step--1 text-muted">{cert.detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-step-1 font-bold">Education</h3>
            <ul className="mt-5 flex flex-col gap-5">
              {education.map((edu) => (
                <li key={edu.name}>
                  <p className="font-medium">{edu.name}</p>
                  <p className="text-step--1 text-muted">{edu.school}</p>
                  <p className="text-step--1 text-muted">
                    {edu.period}, {edu.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
