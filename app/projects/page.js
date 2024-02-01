import React from "react";
import ProjectTimelineCard from "@/app/projects/ProjectTimelineCard";

const ProjectPage = () => {
  return (
    <div className="flex flex-col pt-[100px] text-white w-full ">
      <div className="h-10"></div>
      <ProjectTimelineCard
        count="odd"
        projectName="Tangled"
        projectDescription="A Decentralized healthcare platform made on XRP Ledger
where users can sell and buy their products without any
middleman."
        techStack1="Next JS"
        techStack2="Solidity"
        techStack3="Supabase"
        projectPic="/images/tangled.png"
      />

      <div className="h-10"></div>

      <ProjectTimelineCard
        count="even"
        projectName="Back To The Future"
        projectDescription="A Web3 RPG game based on the famous
Hollywood movie (Back To The Future) made on Flow chain.
"
        techStack1="Unity (C#)"
        techStack2="Flow Blockchain"
        techStack3="Flow Unity SDK"
        projectPic="/images/back-to-the-future.png"
        frontImage="/images/back-to-the-future.png"
        backImage="/images/back-to-the-future2.png"
      />

      <div className="h-10"></div>

      <ProjectTimelineCard
        count="odd"
        projectName="XRP-Commerce"
        projectDescription="A Decentralized ECommerce platform made on XRP Ledger
where users can sell and buy their products without any
middleman."
        techStack1="Next JS"
        techStack2="XRPL"
        techStack3="Supabase"
        projectPic="/images/xrp-commerce.png"
      />

      <div className="h-10"></div>

      <ProjectTimelineCard
        count="even"
        projectName="Own Your Tune"
        projectDescription="A Web3 music streaming dApp for music artists
to sell their music albums directly to the listeners by eliminating
the middlemen."
        techStack1="React JS"
        techStack2="Solidity"
        techStack3="web3.js"
        projectPic="/images/own-your-tune.png"
      />

      <div className="h-10"></div>

      <ProjectTimelineCard
        count="odd"
        projectName="Weather UI Clone"
        projectDescription="Recreation of Weather UI design into a React Webpage"
        techStack1="React JS"
        techStack2="TailwindCSS"
        techStack3="UI/ UX Design"
        projectPic="/images/weather-css.png"
      />

      <div className="h-10"></div>

      <ProjectTimelineCard
        count="even"
        projectName="LICET - MAP"
        projectDescription="A Mobile application to navigate and familiarize
people to the LICET's infrastructure."
        techStack1="Flutter"
        techStack2="MongoDB"
        techStack3="Express"
        projectPic="/images/licet-map.png"
      />

      <div className="h-10"></div>

      <ProjectTimelineCard
        count="odd"
        projectName="GPT Learn"
        projectDescription="A Web3 music streaming dApp for music artists
to sell their music albums directly to the listeners by eliminating
the middlemen."
        techStack1="React JS"
        techStack2="Solidity"
        techStack3="web3.js"
        projectPic="/images/gpt-learn2.png"
      />
      <div className="h-[120px]"></div>
    </div>
  );
};

export default ProjectPage;
