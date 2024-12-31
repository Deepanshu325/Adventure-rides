//Descriptioncard.js
import React from "react";
import singleImage from "../Assets/Home/WhatsApp Image 2024-12-24 at 11.15.15 AM.jpeg"; // Place your single image in the same folder
import { useLanguage } from "./Languagecontext";

const Descriptioncard = () => {
  const { translang } = useLanguage();
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row  lg:w-[1400px] mx-auto ">
        {/* Image Section */}
        <div className="w-full lg:max-w-[700px]  mx-auto pl-2  ">
          <img
            src={singleImage}
            alt="Adventure Rides"
            className=" w-full  object-contain "
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-[680px]  text-gray-700  pl-2   ">
          <div className="">
            <h1 className="uppercase text-2xl md:text-[30px] font-bold text-blue-500 mb-[12px] h-full ">
              {translang("destitle")}
            </h1>
            <p className="text-lg text-orange-500 mb-[12px] md:w-[92%]    ">
              <strong className="text-xl lg:text-[20px]">{translang("des1")}</strong>.
            </p>
            <ul className=" text-base md:text-[20px]  space-y-[16px] text-gray-600 md:w-[92%]  md:tracking-tighter">
              <li>
                {translang("des2")}
              </li>
              <li>
                {translang("des3")}
              </li>
              <li>
                {translang("des4")}
              </li>
              <li>
                {translang("des5")}
              </li>
              <li>

                {translang("des6")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descriptioncard;
