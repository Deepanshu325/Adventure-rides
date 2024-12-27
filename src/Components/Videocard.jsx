import React from "react";
import video from "../Assets/Videos/PPAR - WS2024 - Resized Landing Page Movie (1) (1).mp4"
import { useLanguage } from "./Languagecontext";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ytlogo from "../Assets/Icons/1. YT logo on video.png"
import { useEffect } from "react";



const Videocard = () => {

  
  const { t, setLanguage } = useLanguage(); 

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      offset: window,    // Offset (in px) from the original trigger point
      easing: 'ease-in-out', // Easing function for animations
      once: true      // Whether animation should happen only once
    });
  }, []);


  return (
    <div className="relative h-[50vh] md:h-screen w-full mb-10">
      {/* Video Background */}
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-fill"
      />

      {/* Text Content */}
      
      <div className="relative  h-full flex flex-col justify-center text-left px-6 sm:px-12"  data-aos="fade-up">
        
      
        <h1 className="text-white text-2xl mt-16 sm:text-5xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          
        {t("welcome")} <br></br>
        {t("welcome3")} <br></br>
        {t("welcome4")} 
      
        </h1>
       
        <p className="font-thin text-white text-base sm:text-lg mt-6">
       
        </p>
        <button className="w-16 md:w-20  mt-6   text-white text-sm font-medium rounded-md  hover:text-sky-500 transition" onClick={()=>window.open("https://www.youtube.com/watch?v=MjxTDuKfAqQ","_blank")}>
         <img src={ytlogo} alt="" className=" object-contain  " /> 
        </button>
      
      </div>
      
    </div>
  );
};

export default Videocard;
