"use client";
import React, { useState } from "react";
import Link from "next/link";
import Contact from "./Contact";
import { Space_Grotesk, Barlow_Condensed } from "next/font/google";

const space_grotesk = Space_Grotesk({ subsets: ["latin"], weight: "400" });

const barlow = Barlow_Condensed({ subsets: ["latin"], weight: "300" });

const Navbar = () => {
  const [showContact, setShowContact] = useState(false);
  return (
    <div
      className={`flex justify-between bg-[#121212] text-white h-20 items-center fixed w-full z-50 `}
    >
      <div className={`tracking-wider text-2xl ml-9 navbar-title w-fit `}>
        <pre className={barlow.className}>&lt; Divyakrishnan / &gt;</pre>
      </div>

      <div className="hidden md:flex justify-start gap-8 items-center px-9 py-2 bg-[#1f1f1f] rounded-full">
        <Link href={"/"}>Home</Link>
        <Link href={"/projects"}>Projects</Link>
        {/* <Link href={"/about"}>About</Link> */}
      </div>

      <div className="flex justify-end gap-8 items-center mr-9">
        <p className="text-white"></p>
        <Link
          href={"/Resume.pdf"}
          alt="PDF file of my resume"
          target="_blank"
          rel="noopener noreferrer"
          className=" hidden  sm:block "
        >
          Resume
        </Link>
        <button
          onClick={() => setShowContact(true)}
          className="bg-white px-5 py-1 text-black"
        >
          Contact
        </button>
      </div>

      <div
        className={`fixed flex justify-center w-[100vw] top-60  z-20 ${
          showContact ? "block" : "hidden"
        }`}
      >
        <Contact callBack={setShowContact} />
      </div>
    </div>
  );
};

export default Navbar;
