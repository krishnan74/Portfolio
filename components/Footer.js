import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden footer border-t border-[#5e5e5e] flex justify-around items-center h-[17vh]">
      <div className="h-[190px] w-[190px] absolute right-[-100px] top-[50px] bg-[#636fdb] blur-2xl opacity-[0.8] rounded-full z-0"></div>
      <div className="h-[200px] w-[200px] absolute left-[-130px] top-[-130px] bg-[#fa4a4a] blur-2xl opacity-[0.4] rounded-full z-0"></div>
      <div className="flex justify-start gap-8 items-center text-white">
        <Link href={"/"}>Home</Link>
        <Link href={"/projects"}>Projects</Link>
        {/* <Link href={"/about"}>About</Link> */}
      </div>

      <div>
        <p className="text-white">All rights reserved @2024 Divyakrishnan</p>
      </div>
    </footer>
  );
}

export default Footer