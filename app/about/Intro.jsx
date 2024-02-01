import React from "react";
import { Space_Grotesk } from "next/font/google";
const space_grotesk = Space_Grotesk({ subsets: ["latin"], weight: "700" });


const Intro = () => {
  return (
    <div className="text-black p-[50px] border-2 border-[#1f1f1f] bg-[white] rounded-lg w-full h-full ">
      <p className={`  font-bold   text-3xl mb-3`}>Hello 👋</p>
      <p className="text-2xl">I design and develop things for fun</p>
    </div>
  );
};

export default Intro;
