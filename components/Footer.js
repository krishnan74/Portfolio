import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer border-t border-[#E8D6E3] flex justify-around items-center h-[17vh]">
      <div className="flex justify-start gap-8 items-center text-white">
        <Link href={"/"}>About</Link>
        <Link href={"#projects"}>Projects</Link>
        <Link href={"#skills"}>Skills</Link>
      </div>

      <div>
        <p className="text-white">All rights reserved @2024 Divyakrishnan</p>
      </div>
    </footer>
  );
}

export default Footer