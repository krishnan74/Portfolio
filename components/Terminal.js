import React from "react";
import "./terminal.css";
const Terminal = () => {
  return (
    <div className="w-[80%] my-[25px] shadow-md">
      <div className="bg-gray-900 text-black p-[5px] rounded-t-md">
        <div className=" top-[7px] left-[5px]">
          <span className="w-[12px] h-[12px] inline-block border-2 border-solid rounded-full ml-2 bg-red-500 border-red-600"></span>
          <span className="w-[12px] h-[12px] inline-block border-2 border-solid rounded-full ml-2 bg-yellow-500 border-yellow-600"></span>
          <span className="w-[12px] h-[12px] inline-block border-2 border-solid rounded-full ml-2 bg-green-500 border-green-600"></span>
        </div>
      </div>
      <div className="bg-black p-8">
        <pre className="typewriter text-green-400">
          Enthusiastic full-stack developer with a passion for crafting scalable
          and innovative solutions.
        </pre>
      </div>
    </div>
  );
};

export default Terminal;
