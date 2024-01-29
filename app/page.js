"use client"

import React from 'react';
import { useEffect, useState } from "react";



import Avatar from "@/components/Avatar";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

import "../css/index.css";

import { Montserrat, Poppins, Space_Grotesk } from "next/font/google";
import { PiArrowUp,  } from "react-icons/pi";
import { GoChevronDown } from "react-icons/go";


const space_grotesk = Space_Grotesk({ subsets: ["latin"], weight: "700" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "800" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });


const Page = () => {
  
  const handleScroll = () => {

    if (window.scrollY > 300) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [showBackToTop, setShowBackToTop] = useState(false);
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollDownSmooth = () => {
    window.scrollTo({ top:750, behavior: "smooth" });
  };


  return (
    <div className="">
      <div className="flex items-center justify-center h-[60vh] bg-gradient-to-r from-[#E8D6E3] via-[#E9DDF1] to-[#E9E4F8]">
        <div className="flex justify-center gap-[80px] items-center text-black text-left">
          <Avatar imageURL="/statue.png"></Avatar>
          <div className="flex flex-col gap-4">
            <p
              className={` text-black font-bold ${space_grotesk.className}  text-5xl `}
            >
              Hello I&apos;m Divyakrishnan
            </p>

            <p
              className={` text-black font-bold ${space_grotesk.className}  text-xl `}
            >
              WEB / APP DEVELOPER
            </p>
            <p className="text-lg ml-1 w-[700px] text-[black] font-normal">
              Highly adaptable Full Stack Developer and Mobile App Developer
              with a discerning eye for design and aesthetics. Proficient in
              various programming languages and frameworks, lead and
              collaborated with diverse teams. Enthusiastic and creative-minded
              developer known for rapid learning and innovation.
            </p>
            <div className="flex gap-4 w-fit">
              <a href="">
                <img src="/git.png" alt="" height={30} width={30} />
              </a>
              <a href="">
                <img src="/twitter.png" alt="" height={30} width={30} />
              </a>
              <a href="">
                <img src="/linked.png" alt="" height={30} width={30} />
              </a>
            </div>

            <div className="">
              <button className="primary-btn text-white px-5 py-2 mr-5 bg-[#212121]">
                Download CV
              </button>
              <button className="secondary-btn border border-black px-5 py-2">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-10"></div>
      <Skills />

      <div className="h-[50px]"></div>

      <div className="flex justify-center">
        <button onClick={scrollDownSmooth}>
          <GoChevronDown color="white" size={30} />
        </button>
      </div>

      {showBackToTop && (
        <button
          onClick={handleBackToTop}
          className="fixed flex justify-center items-center bottom-6 right-6 w-10 h-10 border-white border-2 text-white rounded-full shadow-lg hover:bg-gray-100 hover:text-black"
        >
          <PiArrowUp />
        </button>
      )}

      <p
        id="projects"
        className={`flex justify-center  items-center text-white   ${space_grotesk.className} text-5xl mb-[65px] underline pt-[80px]`}
      >
        Projects
      </p>
      <div className="flex justify-center">
        <Projects></Projects>
      </div>

      <div className="h-20"></div>

      <Footer></Footer>
    </div>
  );
};

export default Page;
