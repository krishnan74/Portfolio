import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="text-white grid grid-cols-3 gap-x-5 gap-y-5">
      <ProjectCard
        projectName="XRP-Commerce"
        projectDescription="A Decentralized ECommerce platform made on XRP Ledger
where users can sell and buy their products without any
middleman."
        techStack1="Next JS"
        techStack2="Solidity"
        techStack3="Supabase"
        projectURL="https://xrp-ecommerce.vercel.app/"
      ></ProjectCard>

      <ProjectCard
        projectName="Back To The Future"
        projectDescription="A Web3 RPG game based on the famous
Hollywood movie (Back To The Future) made on Flow chain.
"
        techStack1="Unity (C#)"
        techStack2="Flow Blockchain"
        techStack3="Flow Unity SDK"
        projectURL="https://xrp-ecommerce.vercel.app/"
      ></ProjectCard>

      <ProjectCard
        projectName="Own Your Tune"
        projectDescription="A Web3 music streaming dApp for music artists
to sell their music albums directly to the listeners by eliminating
the middlemen."
        techStack1="React JS"
        techStack2="Solidity"
        techStack3="web3.js"
        projectURL="https://own-your-tune.vercel.app/"
      ></ProjectCard>

      <ProjectCard
        projectName="Notes.com"
        projectDescription="An educational website for Anna University
students to access study notes and question banks."
        techStack1="Next JS"
        techStack2="MongoDB"
        techStack3="TailwindCSS"
        projectURL="https://xrp-ecommerce.vercel.app/"
      ></ProjectCard>

      <ProjectCard
        projectName="LICET - MAP"
        projectDescription="A Mobile application to navigate and familiarize
people to the LICET's infrastructure.
"
        techStack1="Flutter"
        techStack2="MongoDB"
        techStack3="Express"
        projectURL="https://xrp-ecommerce.vercel.app/"
      ></ProjectCard>

      <ProjectCard
        projectName="NFT Bot"
        projectDescription="Discord bot designed for seamless exploration of user-owned NFTs. With user-friendly commands, quickly discover detailed information about specific NFTs, including metadata."
        techStack1="discord.js"
        techStack2="Open Sea API"
        techStack3="web3.js"
        projectURL="https://xrp-ecommerce.vercel.app/"
      ></ProjectCard>

      <ProjectCard
        projectName="Agro Link"
        projectDescription="A Web dApp for farmers to sell their produce directly to the consumers by eliminating the middlemen."
        techStack1="Next JS"
        techStack2="Cadence"
        techStack3="FCL"
        projectURL="https://xrp-ecommerce.vercel.app/"
      ></ProjectCard>

      <ProjectCard
        projectName="Banking"
        projectDescription="A banking system website developed for GRIP internship task. The website contains a list of customers along with their account balance and transaction function."
        techStack1="XAMPP"
        techStack2="PHP"
        techStack3="MySQL"
        projectURL="https://github.com/krishnan74/banking-system"
      ></ProjectCard>

      <ProjectCard
        projectName="Weather UI Clone"
        projectDescription="Recreation of Weather UI design into a React Webpage"
        techStack1="React JS"
        techStack2="TailwindCSS"
        techStack3="UI/ UX Design"
        projectURL="https://weather-css-five.vercel.app/"
      ></ProjectCard>
    </div>
  );
};

export default Projects;
