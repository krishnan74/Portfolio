import React from 'react'
import {  Space_Grotesk } from "next/font/google";
const space_grotesk = Space_Grotesk({ subsets: ["latin"], weight: "700" });

const ExperienceCard = () => {
  return (
    <div className='text-white px-10 py-10 bg-[#1f1f1f] rounded-lg'>
        <p className={`  font-bold ${space_grotesk.className}  text-3xl `}>Experience: </p>
        <p>OpenWeaver Virtual Internship
            June 2023 - July 2023
            Full Stack Developer
        </p>

        <p>Android Development
            Workshop conducted in LICET
            Nov 2023
        </p>
         
        
    </div>
  )
}

export default ExperienceCard