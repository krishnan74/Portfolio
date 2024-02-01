import React from "react";
import { Space_Grotesk } from "next/font/google";
const space_grotesk = Space_Grotesk({ subsets: ["latin"], weight: "700" });

const GameDev = () => {
  return (
    <div className="text-white p-[50px]  bg-[#636fdb]  rounded-lg w-full h-full">
      <p className={`  font-bold ${space_grotesk.className}  text-3xl mb-3`}>
        Passionate about gaming and game development
      </p>
    </div>
  );
};

export default GameDev;
