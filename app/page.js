"use client";

import React from "react";
import { useEffect, useState } from "react";

import Avatar from "@/components/Avatar";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { Montserrat, Poppins, Space_Grotesk } from "next/font/google";
import { PiArrowUp } from "react-icons/pi";
import { GoChevronDown } from "react-icons/go";
import Link from "next/link";
import { space } from "postcss/lib/list";

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

  const [showContact, setShowContact] = useState(false);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollDownSmooth = () => {
    window.scrollTo({ top: 690, behavior: "smooth" });
  };

  return (
    <div className="">
      <div className="flex items-center justify-center h-fit bg-gradient-to-r from-[#E8D6E3] via-[#E9DDF1] to-[#E9E4F8] pt-[80px] ">
        <div className="flex flex-col md:flex-row justify-center gap-x-[100px] gap-y-10 items-center text-black text-left max-w-6xl mx-auto py-[50px] ">
          <Avatar imageURL="/statue.png"></Avatar>
          <div className="text-center md:text-left flex flex-col justify-center px-7">
            <p
              className={`text-black font-bold text-4xl md:text-5xl ${space_grotesk.className}`}
            >
              Hello I&apos;m Divyakrishnan
            </p>
            <p
              className={`text-black font-bold text-xl md:text-2xl ${space_grotesk.className}`}
            >
              WEB / APP DEVELOPER
            </p>
            <p className="text-lg md:text-xl text-black font-normal mt-4 md:mt-6 max-w-lg">
              Highly adaptable Full Stack Developer and Mobile App Developer
              with a discerning eye for design and aesthetics. Proficient in
              various programming languages and frameworks, lead and
              collaborated with diverse teams. Enthusiastic and creative-minded
              developer known for rapid learning and innovation.
            </p>
            <div className="flex justify-center md:justify-start lg:justify-start gap-4 mt-4 md:mt-6 ">
              <Link href="https://github.com/krishnan74/">
                <img src="/git.png" alt="" height={30} width={30} />
              </Link>
              <Link href="https://www.linkedin.com/in/divyakrishnan-r/">
                <img src="/linked.png" alt="" height={30} width={30} />
              </Link>
              <Link href="https://twitter.com/Krishna29371748">
                <img src="/twitter.png" alt="" height={30} width={30} />
              </Link>
            </div>
            <div className="mt-6">
              <Link
                href="/Resume.pdf"
                alt="PDF file of my resume"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn text-white px-5 py-3 md:py-4 md:px-8 mr-5 bg-[#212121]"
              >
                Download CV
              </Link>
              <button
                onClick={() => setShowContact(true)}
                className="secondary-btn border border-black px-5 py-2 md:py-3 md:px-8"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-10"></div>
      <Skills />
      <div className="h-10 md:h-5"></div>
      <div className="flex justify-center">
        <button onClick={scrollDownSmooth}>
          <GoChevronDown color="white" size={30} />
        </button>
      </div>
      {showBackToTop && (
        <button
          onClick={handleBackToTop}
          className="fixed flex justify-center items-center bottom-6 right-6 w-10 h-10 border-white border-2 text-white rounded-full shadow-lg hover:bg-gray-100 hover:text-black z-10"
        >
          <PiArrowUp />
        </button>
      )}
      <p
        id="projects"
        className={`flex justify-center items-center text-white text-4xl md:text-5xl mb-10 md:mb-20 underline pt-20 ${space_grotesk.className}`}
      >
        Projects
      </p>
      <div className="flex justify-center z-0">
        <Projects />
      </div>
      <div
        className={`fixed top-60 left-[33.5vw] z-20 ${
          showContact ? "block" : "hidden"
        }`}
      >
        <Contact callBack={setShowContact} />
      </div>

      <div className="h-10"></div>
      <Footer />
    </div>
  );
};

export default Page;
