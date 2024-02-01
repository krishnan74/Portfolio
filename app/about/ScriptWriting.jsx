import React from "react";
import { Space_Grotesk } from "next/font/google";
const space_grotesk = Space_Grotesk({ subsets: ["latin"], weight: "700" });

const ScriptWriting = () => {
  return (
    <div className="text-white px-10 py-10  bg-[#db6363]  rounded-lg w-full h-full">
      <p className={`  font-bold ${space_grotesk.className}  text-3xl mb-3`}>
        Been a creative thinker by writing stories and scripts
      </p>
    </div>
  );
};

export default ScriptWriting;
