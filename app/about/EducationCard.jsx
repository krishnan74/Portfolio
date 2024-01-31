import React from 'react'
import {  Space_Grotesk } from "next/font/google";
const space_grotesk = Space_Grotesk({ subsets: ["latin"], weight: "700" });

const EducationCard = () => {
  return (
    <div className='text-white px-10 py-10 bg-[#1f1f1f] rounded-lg'>
        <p className={`  font-bold ${space_grotesk.className}  text-3xl `}>Education: </p>
        <p>B.Tech/IT ( 8.4 CGPA )</p>
        <p>Loyola ICAM College of Engineering and Technology</p>  <span>Nov 2021 - Present</span> 
        
    </div>
  )
}

export default EducationCard