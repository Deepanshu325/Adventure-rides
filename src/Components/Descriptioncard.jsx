//Descriptioncard.js
import React from "react";
import singleImage from "../Assets/Home/WhatsApp Image 2024-12-18 at 3.35.28 PM.jpeg"; // Place your single image in the same folder
import { useLanguage } from "./Languagecontext";

const Descriptioncard = () => {
 const {t} = useLanguage();
  return (
    <div className="flex flex-col md:flex-row p-6  ">
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-full ">
        <img
          src={singleImage}
          alt="Adventure Rides"
          className=" w-full object-contain h-full  align-top "
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 text-gray-700 ">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8">
         {t("destitle")}
        </h1>
        <p className="text-lg text-orange-500 mb-8 leading-relaxed w-[90%] text-justify ">
          <strong className="text-xl">{t("des1")}</strong>.
        </p>
        <ul className=" text-lg  space-y-4 text-gray-600 w-[90%] text-justify">
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
  );
};

export default Descriptioncard;
