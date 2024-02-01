import React from "react";
import { Space_Grotesk } from "next/font/google";
const space_grotesk = Space_Grotesk({ subsets: ["latin"], weight: "700" });

const About = () => {
  return (
    <div className="text-white px-10 py-10 border-2 border-[#1f1f1f]  rounded-lg w-full h-full">
      <p className={`  font-bold  text-3xl mb-3`}>
        Learn new things and build cool stuff
      </p>


      

    </div>
  );
};

export default About;
