import React from 'react'
import EducationCard from '@/app/about/EducationCard'
import ExperienceCard from './ExperienceCard'
import Hobbies from './Hobbies'
import About from './About'
import Expertise from './Expertise'

const page = () => {
  return (
    <div className="grid grid-cols-3 gap-4 text-white pt-[120px] px-[300px] pb-10" >
        <div className=""> <Hobbies/> </div>
        <div className="col-span-2 row-span-2 "><ExperienceCard/></div>
        <div className=""><EducationCard/></div>
        <div className="col-span-1"><About/></div>
        <div className=" row-span-1 flex-col flex gap-5"><Expertise/> <About/></div>
        <div className=" row-span-2"><EducationCard/></div>
        <div className="col-span-2 "><EducationCard/></div>
</div>
  )
}

export default page