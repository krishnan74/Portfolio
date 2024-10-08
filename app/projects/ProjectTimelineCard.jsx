"use client";
import React, { useState } from "react";
import "./timeline.css";
import ProjectCard from "@/components/ProjectCard";

import { Space_Grotesk } from "next/font/google";
const space_grotesk = Space_Grotesk({ subsets: ["latin"], weight: "700" });

const ProjectTimelineCard = (props) => {
  const [showDemo, setShowDemo] = useState(true);

  return props.count == "even" ? (
    <div class="flex gap-[50px] items-center justify-center h-fit flex-wrap">
      <div className="flex flex-col justify-between h-[450px] w-[350px] ">
        <div>
          <p className={`text-4xl tracking-widest  ${space_grotesk.className}`}>
            {props.projectName}
          </p>
          <p className="text-lg text-gray mt-3">{props.projectDescription}</p>
        </div>

        <div className={`flex flex-col ${space_grotesk.className} items-end`}>
          <div className="flex flex-row-reverse items-center gap-2 ">
            <span className="w-[12px] h-[12px] inline-block border-2 border-solid rounded-full ml-2 bg-red-500 border-red-600"></span>
            <p>{props.techStack1}</p>
          </div>

          <div className="flex flex-row-reverse items-center gap-2">
            <span className="w-[12px] h-[12px] inline-block border-2 border-solid rounded-full ml-2  bg-yellow-500 border-yellow-600"></span>
            <p>{props.techStack2}</p>
          </div>

          <div className="flex flex-row-reverse items-center gap-2">
            <span className="w-[12px] h-[12px] inline-block border-2 border-solid rounded-full ml-2 bg-green-500 border-green-600"></span>
            <p>{props.techStack3}</p>
          </div>
        </div>
      </div>

      <div
        className="h-[500px] w-[95%] max-w-[800px] projectPic-div "
        // onMouseEnter={() => setShowDemo(true)}
        // onMouseLeave={() => setShowDemo(false)}
      >
        <div className="card">
          <div className="card-front ">
            <img
              src={props.projectPic}
              alt=""
              className="object-cover rounded-lg h-[500px] w-[100%]"
            />
          </div>
          {/* <div className="card-back">
            <img
              src={props.backImage}
              alt="Back Image"
              className="object-cover rounded-lg h-[500px] w-[800px]"
            />
          </div> */}
        </div>
      </div>
    </div>
  ) : (
    <div className="flex  gap-[50px] items-center  justify-center flex-wrap">
      <div
        className="h-[500px] w-[95%] max-w-[800px]"
        // onMouseEnter={() => setShowDemo(true)}
        // onMouseLeave={() => setShowDemo(false)}
      >
        <img
          src={props.projectPic}
          className={`h-[500px] w-[100%] ${
            showDemo ? "block" : "hidden"
          } object-cover rounded-lg`}
        ></img>
      </div>

      <div className="flex flex-col justify-between h-[450px] w-[350px] ">
        <div>
          <p className={`text-4xl tracking-widest  ${space_grotesk.className}`}>
            {props.projectName}
          </p>
          <p className="text-lg text-gray mt-3">{props.projectDescription}</p>
        </div>

        <div className={`flex flex-col ${space_grotesk.className}`}>
          <div className="flex items-center gap-3">
            <span className="w-[12px] h-[12px] inline-block border-2 border-solid rounded-full ml-2 bg-red-500 border-red-600"></span>
            <p>{props.techStack1}</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-[12px] h-[12px] inline-block border-2 border-solid rounded-full ml-2  bg-yellow-500 border-yellow-600"></span>
            <p>{props.techStack2}</p>
          </div>

          {props.techStack3 && (
            <div className="flex items-center gap-3">
              <span className="w-[12px] h-[12px] inline-block border-2 border-solid rounded-full ml-2 bg-green-500 border-green-600"></span>
              <p>{props.techStack3}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectTimelineCard;
