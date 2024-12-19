import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./Languagecontext";
import AOS from 'aos';

import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Adventurecard = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: window,    // Offset (in px) from the original trigger point
      easing: 'ease-in-out', // Easing function for animations
      once: true      // Whether animation should happen only once
    });
  }, []);
  const {t} = useLanguage(); 

  return (
    <div className="max-w-5xl mx-auto p-4 mt-10">
      {/* Card Container */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden " data-aos="fade-up">
        {/* Image at the top */}
        <img
          src={props.image} 
          alt="Himalayan Adventure"
          className="w-full h-60  md:h-[120vh] md:w-full object-fill border"
        />

        {/* Content Section */}
        <div className="p-4 flex flex-col md:flex-row">
          {/* Left: Text */}
          <div className="md:w-1/2 p-2 font-thin">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              {props.heading}
            </h2>
            <p className="font-semibold text-justify">
              
              {props.text1}
            </p>
            <p className="font-semibold text-justify mt-4">
              {props.text2}
            </p>
          </div>

          {/* Right: Embedded Map */}
          <div className="md:w-1/2 p-2 md:mt-12">
            <img src={props.map} alt="" />
          </div>
        </div>

        {/* Button Section */}
        <div className="p-4 text-center">
      <Link to={props.link} target="_blank">   <button className="px-6 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition duration-200">
            {t("moreinfo")}
          </button> </Link> 
        </div>
      </div>
    </div>
  );
};

export default Adventurecard;
