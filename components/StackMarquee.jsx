"use client";

import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import {
  SiAmazonaws,
  SiAngular,
  SiAnsible,
  SiChainlink,
  SiDatadog,
  SiDocker,
  SiDotnet,
  SiGithubactions,
  SiGitlab,
  SiHelm,
  SiKubernetes,
  SiMicrosoftazure,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSolidity,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";
import { marquee } from "@/data/profile";

const icons = {
  SiAmazonaws,
  SiAngular,
  SiAnsible,
  SiChainlink,
  SiDatadog,
  SiDocker,
  SiDotnet,
  SiGithubactions,
  SiGitlab,
  SiHelm,
  SiKubernetes,
  SiMicrosoftazure,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSolidity,
  SiTerraform,
  SiTypescript,
};

export default function StackMarquee() {
  const [play, setPlay] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPlay(!reduce.matches);
    update();
    reduce.addEventListener("change", update);
    return () => reduce.removeEventListener("change", update);
  }, []);

  return (
    // Decorative: the full list is in the skill groups.
    <div className="stack-marquee" aria-hidden="true">
      <Marquee play={play} speed={32} pauseOnHover autoFill>
        {marquee.map(({ label, icon }) => {
          const Icon = icons[icon];
          return (
            <span key={label} className="stack-item">
              <Icon aria-hidden="true" className="stack-icon" />
              {label}
            </span>
          );
        })}
      </Marquee>
    </div>
  );
}
