import React from "react";
import "./projects.css";
import {GoArrowUpRight} from "react-icons/go";
import{Space_Grotesk} from "next/font/google";
import Link from "next/link";



const space_grotesk = Space_Grotesk({ subsets: ["latin"], weight: "700" });

const ProjectCard = (props) => {
  return (
    <div className="project_card">
      <div className="flex justify-between">
        <p className={`project_title ${space_grotesk.className}`}>
          {props.projectName}
        </p>
        <div className="">
          <Link href={props.projectURL}>
            <GoArrowUpRight size={25} />
          </Link>
        </div>
      </div>

      <p className="project_desc">{props.projectDescription}</p>
      <div className="tech_stack_div">
        <p className="tech_stack_header text-[20px] font-extrabold underline">Tech Stack</p>
        <div className="tech_stacks overflow-x-auto mt-2 gap-3">
          <div className="flex items-center gap-2">
            <span className="w-[12px] h-[12px] inline-block border-2 border-solid rounded-full ml-2 bg-red-500 border-red-600"></span>
            <div className="tech_stack_card">{props.techStack1}</div>
          </div>

          <div className="flex items-center gap-2 ">
            <span className="w-[12px] h-[12px] inline-block border-2 border-solid rounded-full ml-2  bg-yellow-500 border-yellow-600"></span>
            <div className="tech_stack_card">{props.techStack2}</div>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-[12px] h-[12px] inline-block border-2 border-solid rounded-full ml-2 bg-green-500 border-green-600"></span>
            <div className="tech_stack_card">{props.techStack3}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
