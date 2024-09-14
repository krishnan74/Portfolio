import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      projectName: "Fleet IQ",
      projectDescription:
        "A SaaS product for Transport Service Management, streamlining fleet operations, tracking, and maintenance for transportation businesses.",
      techStack1: "Next JS",
      techStack2: "MongoDB",
      techStack3: "TailwindCSS",
      projectURL: "https://fleet-iq.vercel.app/",
    },

    {
      projectName: "CastAI",
      projectDescription:
        "A farcaster frame application that allows users to interact with AI characters (fictional or non-fictional) through a chat interface.",
      techStack1: "Next JS",
      techStack2: "Solidity",
      techStack3: "ethers.js",
      projectURL: "https://github.com/krishnan74/CastAI",
    },
    {
      projectName: "XRP-Commerce",
      projectDescription:
        "A Decentralized ECommerce platform made on XRP Ledger where users can sell and buy their products without any middleman.",
      techStack1: "Next JS",
      techStack2: "XRPL",
      techStack3: "Supabase",
      projectURL: "https://xrp-ecommerce.vercel.app/",
    },

    {
      projectName: "Back To The Future",
      projectDescription:
        "A Web3 RPG game based on the famous Hollywood movie (Back To The Future) made on Flow chain.",
      techStack1: "Unity (C#)",
      techStack2: "Flow Blockchain",
      techStack3: "Flow Unity SDK",
      projectURL: "https://devfolio.co/projects/back-to-the-future-58a2",
    },

    {
      projectName: "NFT Mon",
      projectDescription:
        "a fun for the blockchain NFT Card Game, With NFT-Mon, users collect, breed, and battle unique NFT creatures powered by Chainlink VRF for fair outcomes.",
      techStack1: "React",
      techStack2: "Solidity",
      techStack3: "Chainlink",
      projectURL: "https://github.com/kimchicurry",
    },

    {
      projectName: "Prompt Play",
      projectDescription:
        "An AI image generation-based multiplayer game where players compete to replicate a random image using image generation prompts. The player whose generated image is most similar to the original wins the round.",
      techStack1: "React",
      techStack2: "MongoDB",
      techStack3: "Galadriel",
      projectURL: "https://github.com/krishnan74/prompt_play",
    },

    {
      projectName: "Own Your Tune",
      projectDescription:
        "A Web3 music streaming dApp for music artists to sell their music albums directly to the listeners by eliminating the middlemen.",
      techStack1: "React JS",
      techStack2: "Solidity",
      techStack3: "web3.js",
      projectURL: "https://own-your-tune.vercel.app/",
    },

    {
      projectName: "Notes.com",
      projectDescription:
        "An educational website for Anna University students to access study notes and question banks.",
      techStack1: "Next JS",
      techStack2: "MongoDB",
      techStack3: "TailwindCSS",
      projectURL: "https://github.com/krishnan74/notes.com",
    },

    {
      projectName: "LICET - MAP",
      projectDescription:
        "A Mobile application to navigate and familiarize people to the LICET's infrastructure.",
      techStack1: "Flutter",
      techStack2: "MongoDB",
      techStack3: "Express",
      projectURL: "https://github.com/krishnan74/LICET-map",
    },

    {
      projectName: "NFT Bot",
      projectDescription:
        "Discord bot designed for seamless exploration of user-owned NFTs. With user-friendly commands, quickly discover detailed information about specific NFTs, including metadata.",
      techStack1: "discord.js",
      techStack2: "Open Sea API",
      techStack3: "web3.js",
      projectURL: "https://github.com/krishnan74/discord-bot",
    },

    {
      projectName: "Chennai Connects",
      projectDescription:
        "A promotional website for a event managment firm ( Client Project )",
      techStack1: "ReactJS",
      techStack2: "TailwindCSS",
      techStack3: "MongoDB",
      projectURL: "https://www.chennaiconnects.in/",
    },

    {
      projectName: "Weather UI Clone",
      projectDescription:
        "Recreation of Weather UI design into a React Webpage",
      techStack1: "React JS",
      techStack2: "TailwindCSS",
      techStack3: "UI/ UX Design",
      projectURL: "https://weather-css-five.vercel.app/",
    },
  ];
  return (
    <div className="text-white relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
      {/* <div className="h-[300px] w-[300px] absolute left-[-280px] top-[-130px] bg-[#fa4a4a] blur-2xl opacity-[0.4] rounded-full z-0"></div>
      <div className="h-[190px] w-[190px] absolute right-[-250px] top-[450px] bg-[#636fdb] blur-2xl opacity-[0.8] rounded-full z-0"></div>
       */}

      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          projectName={project.projectName}
          projectURL={project.projectURL}
          projectDescription={project.projectDescription}
          techStack1={project.techStack1}
          techStack2={project.techStack2}
          techStack3={project.techStack3}
        />
      ))}
    </div>
  );
};

export default Projects;
