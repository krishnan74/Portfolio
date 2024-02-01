import React from "react";
import { Space_Grotesk } from "next/font/google";
const space_grotesk = Space_Grotesk({ subsets: ["latin"], weight: "700" });

const EducationCard = () => {
  return (
    <div className="text-black px-10 py-10 bg-[#1f1f1f] rounded-lg w-full h-full bg-gradient-to-r from-[#d6dee8] via-[#E9DDF1] to-[#E9E4F8]">
      <p className={`  font-bold ${space_grotesk.className}  text-3xl mb-3`}>
        Education:{" "}
      </p>

      <div className="flex flex-col gap-5">
        <div>
          <p className="text-xl font-bold tracking-wider">
            <span className="w-[12px] h-[12px] inline-block border-2 border-solid rounded-full ml-2 bg-white border-white mr-3"></span>
            B.Tech/IT ( 8.4 CGPA )
          </p>
          <p className="text-lg ml-10">
            Loyola ICAM College of Engineering and Technology
          </p>{" "}
          <span className="ml-10 text-gray">Nov 2021 - Present</span>
        </div>

        <div>
          <p className="text-xl font-bold tracking-wider">
            <span className="w-[12px] h-[12px] inline-block border-2 border-solid rounded-full ml-2 bg-white border-white mr-3"></span>
            HSC ( 92% )
          </p>
          <p className="text-lg ml-10">
            Jaigopal Garodia Matriculation Higher Secondary School
          </p>{" "}
          <span className="ml-10 text-gray">2019 - 2021</span>
        </div>

        <div>
          <p className="text-xl font-bold tracking-wider">
            <span className="w-[12px] h-[12px] inline-block border-2 border-solid rounded-full ml-2 bg-white border-white mr-3"></span>
            SSLC ( 90% )
          </p>
          <p className="text-lg ml-10">
            Ponnuswamy Matriculation Higher Secondary School
          </p>{" "}
          <span className="ml-10 text-gray">MAY 2018</span>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
