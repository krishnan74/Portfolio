import React from 'react'
import Intro from './Intro'
import Drawing from './Drawing'
import GameDev from './GameDev'
import About from './About'
import ScriptWriting from './ScriptWriting'
import MR from './MR'


import { Space_Grotesk } from "next/font/google";
const space_grotesk = Space_Grotesk({ subsets: ["latin"], weight: "700" });

const page = () => {
  return (
    <div
      className={`grid grid-cols-4 gap-8 text-white pt-[120px] px-[10vw] pb-10 ${space_grotesk.className}`}
    >
      <div className="row-span-1 col-span-1">
        <Intro />
      </div>
      <div className="col-span-2 row-span-1 ">
        <Drawing />
      </div>
      <div className="row-span-2">
        <ScriptWriting />{" "}
      </div>
      <div className=" row-span-2 col-span-2">
        <GameDev />
      </div>
      <div className=" row-span-1 col-span-1">
        <About />
      </div>

      <div className=" row-span-1 col-span-2">
        <MR />
      </div>

      <div className=" row-span-2 col-span-full h-[100vh] border ">
        
      </div>
    </div>
  );
}

export default page