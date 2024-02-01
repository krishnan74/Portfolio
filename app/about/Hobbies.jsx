import React from "react";
import { Space_Grotesk } from "next/font/google";
const space_grotesk = Space_Grotesk({ subsets: ["latin"], weight: "700" });

const Hobbies = () => {
  return (
    <div className="text-white px-10 py-10 bg-[#1f1f1f] rounded-lg w-full h-full">
      <p className={`  font-bold ${space_grotesk.className}  text-3xl mb-3`}>
        Hobbies:{" "}
      </p>

      <div>
        <p className="text-xl font-bold tracking-wider">
          <span className="w-[12px] h-[12px] inline-block border-2 border-solid rounded-full ml-2 bg-white border-white mr-3"></span>
          Football
        </p>
        <p className="text-lg ml-10">OpenWeaver Virtual Internship</p>{" "}
        <span className="ml-10 text-gray">June 2023 - July 2023</span>
      </div>

      

    </div>
  );
};

export default Hobbies;
