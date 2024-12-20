//Descriptioncard.js
import React from "react";
import singleImage from "../Assets/Home/WhatsApp Image 2024-12-18 at 3.35.28 PM.jpeg"; // Place your single image in the same folder
import { useLanguage } from "./Languagecontext";

const Descriptioncard = () => {
 const {t} = useLanguage();
  return (
    <div className="flex flex-col md:flex-row p-6  ">
      {/* Image Section */}
      <div className="w-full md:w-[60%]   pl-2">
        <img
          src={singleImage}
          alt="Adventure Rides"
          className=" w-full lg:h-[120vh] align-top object-fill "
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 text-gray-700  pl-2  ">
      <div className="">
        <h1 className="text-2xl 2xl:text-9xl md:text-4xl font-bold text-blue-700 mb-[4%] md:tracking-wider">
         {t("destitle")}
        </h1>
        <p className="text-lg text-orange-500 mb-[4%] 2xl:text-7xl    ">
          <strong className="text-xl lg:text-3xl">{t("des1")}</strong>.
        </p>
        <ul className=" text-base  space-y-[1%] text-gray-600 md:w-[90%]  md:tracking-tighter">
          <li>
           {t("des2")}
          </li>
          <li>
           {t("des3")}
          </li>
          <li>
            {t("des4")}
          </li>
          <li>
         {t("des5")}
          </li>
          <li>
           
           {t("des6")}
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Descriptioncard;
