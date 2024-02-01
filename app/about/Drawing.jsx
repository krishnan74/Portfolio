import React from "react";
import { Space_Grotesk } from "next/font/google";
const space_grotesk = Space_Grotesk({ subsets: ["latin"], weight: "700" });

const Drawing = () => {
  return (
    <div className="text-white p-[50px] bg-[#1f1f1f] rounded-lg w-full h-full">
      <p className={`  font-bold text-3xl  mb-3`}>
        Always fond of drawing and got keen eye for detailing
      </p>
    </div>
  );
};

export default Drawing;
