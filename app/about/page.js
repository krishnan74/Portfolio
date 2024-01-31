import React from 'react'
import EducationCard from '@/app/about/EducationCard'

const page = () => {
  return (
    <div className="grid grid-cols-3 gap-4 text-white pt-[120px] px-[180px]" >
        <div className=""> <EducationCard/> </div>
        <div className="col-span-[1/2]"><EducationCard/></div>
        <div className=""><EducationCard/></div>
        <div className="col-span-2  "><EducationCard/></div>
        <div className=""><EducationCard/></div>
        <div className=""><EducationCard/></div>
        <div className="col-span-2 "><EducationCard/></div>
</div>
  )
}

export default page