import React from "react";
import ProjectTimelineCard from "@/app/projects/ProjectTimelineCard";
import Footer from "@/components/Footer";

const projects = [
  {
    projectName: "Tangled",
    projectDescription: "A Decentralized healthcare platform made on XRP Ledger where users can sell and buy their products without any middleman.",
    techStack1: "Next JS",
    techStack2: "Solidity",
    techStack3: "Supabase",
    projectPic: "/images/tangled.png"
  },
  {
    projectName: "Back To The Future",
    projectDescription: "A Web3 RPG game based on the famous Hollywood movie (Back To The Future) made on Flow chain.",
    techStack1: "Unity (C#)",
    techStack2: "Flow Blockchain",
    techStack3: "Flow Unity SDK",
    projectPic: "/images/back-to-the-future.png",
    frontImage: "/images/back-to-the-future.png",
    backImage: "/images/back-to-the-future2.png"
  },
  {
    projectName: "XRP-Commerce",
    projectDescription: "A Decentralized ECommerce platform made on XRP Ledger where users can sell and buy their products without any middleman.",
    techStack1: "Next JS",
    techStack2: "XRPL",
    techStack3: "Supabase",
    projectPic: "/images/xrp-commerce.png"
  },
  {
    projectName: "Own Your Tune",
    projectDescription: "A Web3 music streaming dApp for music artists to sell their music albums directly to the listeners by eliminating the middlemen.",
    techStack1: "React JS",
    techStack2: "Solidity",
    techStack3: "web3.js",
    projectPic: "/images/own-your-tune.png"
  },
  {
    projectName: "Weather UI Clone",
    projectDescription: "Recreation of Weather UI design into a React Webpage",
    techStack1: "React JS",
    techStack2: "TailwindCSS",
    techStack3: "UI/ UX Design",
    projectPic: "/images/weather-css.png"
  },
  {
    projectName: "LICET - MAP",
    projectDescription: "A Mobile application to navigate and familiarize people to the LICET's infrastructure.",
    techStack1: "Flutter",
    techStack2: "MongoDB",
    techStack3: "Express",
    projectPic: "/images/licet-map.png"
  },
  {
    projectName: "GPT Learn",
    projectDescription: "A Web3 music streaming dApp for music artists to sell their music albums directly to the listeners by eliminating the middlemen.",
    techStack1: "React JS",
    techStack2: "Solidity",
    techStack3: "web3.js",
    projectPic: "/images/gpt-learn2.png"
  }
];


const ProjectPage = () => {
  return (
    <div className="flex flex-col pt-[120px] text-white w-full gap-y-[20vh]">
      <div className="flex flex-col ">
        <p className="text-2xl text-center mb-[100px] px-[10%]">
          Discover the awesomeness in my portfolio! Check out all the cool stuff
          I&apos;ve worked on, and don&apos;t miss the visual demos that bring
          each project to life. It&apos;s a showcase filled with creativity,
          innovation, and a whole lot of fun!
        </p>
        <div className="flex flex-col gap-y-[20vh]">
          {projects.map((project, index) => (
            <ProjectTimelineCard
              key={index}
              count={index % 2 === 0 ? "odd" : "even"}
              projectName={project.projectName}
              projectDescription={project.projectDescription}
              techStack1={project.techStack1}
              techStack2={project.techStack2}
              techStack3={project.techStack3}
              projectPic={project.projectPic}
              frontImage={project.frontImage}
              backImage={project.backImage}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
