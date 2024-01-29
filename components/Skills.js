import React from 'react'
import Marquee from 'react-fast-marquee';

import "./skills.css";

const Skills = () => {
  return (
    <Marquee
      className="flex justify-evenly w-full text-[#151515]"
      autoFill={true}
      pauseOnHover={true}
    >
      <div className=" image-wrapper">
        <img src="/react.png" alt="react" className="w-[55px] h-[55px] " />
        <p className="text-sm">React</p>
      </div>
      <div className=" image-wrapper">
        <img src="/nextjswhite.png" alt="next" className="w-[55px] h-[55px] " />
        <p className="text-sm">Next.js</p>
      </div>
      <div className=" image-wrapper">
        <img
          src="/tailwindcss.png"
          alt="tailwind"
          className="w-[55px] h-[55px]"
        />
        <p className="text-sm">Tailwind</p>
      </div>

      <div className=" image-wrapper">
        <img src="/solidity.png" alt="solidity" className="w-[55px] h-[55px]" />
        <p className="text-sm">Solidity</p>
      </div>

      <div className="image-wrapper">
        <img src="/unity.png" alt="unity" className="w-[55px] h-[55px]" />
        <p className="text-sm">Unity</p>
      </div>

      <div className="image-wrapper">
        <img
          src="/nodejs.png"
          alt="node"
          className="w-[55px] h-[55px] rounded-full"
        />
        <p className="text-sm">Node.js</p>
      </div>
      <div className="image-wrapper">
        <img
          src="/expresswhite.png"
          alt="express"
          className="w-[55px] h-[55px] rounded-full"
        />
        <p className="text-sm">Express</p>
      </div>
      <div className="image-wrapper">
        <img
          src="/mongodb.png"
          alt="mongo"
          className="w-[55px] h-[55px] rounded-full"
        />
        <p className="text-sm">MongoDB</p>
      </div>
      <div className="image-wrapper">
        <img
          src="/flutter.png"
          alt="flutter"
          className="w-[55px] h-[55px] rounded-full"
        />
        <p className="text-sm">Flutter</p>
      </div>

      <div className="image-wrapper">
        <img
          src="/figma.png"
          alt="figma"
          className="w-[55px] h-[55px] rounded-full"
        />
        <p className="text-sm">Flutter</p>
      </div>
    </Marquee>
  );
}

export default Skills