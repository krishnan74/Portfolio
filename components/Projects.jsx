import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div  className="text-white grid grid-cols-3 gap-x-5 gap-y-5">
      <ProjectCard
        projectName="XRP-Commerce"
        projectDescription="A Web3 marketplace made on XRP Ledger
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
        projectURL="https://xrp-ecommerce.vercel.app/"
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
        projectName="XRP-Commerce"
        projectDescription="A web3 marketplace for users to buy and sell products"
        techStack1="NEXT JS"
        techStack2="Solidity"
        techStack3="Supabase"
        projectURL="https://xrp-ecommerce.vercel.app/"
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
        projectName="XRP-Commerce"
        projectDescription="A web3 marketplace for users to buy and sell products"
        techStack1="NEXT JS"
        techStack2="Solidity"
        techStack3="Supabase"
        projectURL="https://xrp-ecommerce.vercel.app/"
      ></ProjectCard>
    </div>
  );
};

export default Projects;
