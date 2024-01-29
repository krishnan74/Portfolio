import React from 'react'
import Link from 'next/link'
import { Space_Grotesk } from 'next/font/google';


const space_grotesk = Space_Grotesk({ subsets: ["latin"], weight: "400" });
const Navbar = () => {
  return (
    <div className={`flex justify-between bg-[#090909] text-white h-20 items-center `}>
      <div className="tracking-wider  text-2xl ml-9">
        &lt; Divyakrishnan / &gt;
      </div>

      <div className="flex justify-start gap-8 items-center  px-9 py-2 bg-[#1f1f1f] rounded-full">
        <Link href={"/"}>Home</Link>
        <Link href={"#projects"}>Projects</Link>
        <Link href={"#skills"}>About</Link>
      </div>

      <div className="flex justify-end gap-8 items-center mr-9">
        <p className="text-white"></p>
        <button className="text-white">Resume</button>
        <button className="bg-white px-5 py-1 text-black">Contact</button>
      </div>
    </div>
  );
}

export default Navbar