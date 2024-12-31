import React from 'react'
import ktm from '../Assets/Home/WhatsApp Image 2024-12-19 at 1.47.42 PM.jpeg'
import Footer from '../Components/Footer'
import { useLanguage } from '../Components/Languagecontext'
import img from "../Assets/Home/about.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: window,    // Offset (in px) from the original trigger point
      easing: "ease-in-out", // Easing function for animations
      once: false,     // Whether animation should happen only once
    });
  }, []);


 
  const {translang , setTranslang}  = useLanguage();
  return (

    <>
      <div className='w-full overflow-hidden'>
        <p className="text-center mt-12 text-xl font-bold text-blue-500 md:text-3xl uppercase mb-12">
          {translang("aboutus")}
        </p>

        <div className=' w-80 md:w-[35%] lg:w-[40%]  mx-auto '>
          <img src={ktm} alt="" className='mx-auto  rounded-2xl' data-aos="fade-right" />
        </div>

        <div className='mx-auto text-justify w-72 mt-8 lg:w-[150vh]'>



          <p className='pb-8' data-aos="fade-right">{translang("about12")}</p>
          <p className='pb-8' data-aos="fade-right">{translang("about13")}</p>


          <p className='pb-8' data-aos="fade-right">{translang("about3")}</p>
          <p className='pb-8' data-aos="fade-right">{translang("about4")}</p>
        </div>

        <div className=' text-justify mx-auto w-72 lg:w-[150vh]'>
          <h1 className='font-thin text-3xl mb-8 text-gray-500' data-aos="fade-in">{translang("abouthead")}</h1>


          <p className='pb-8' data-aos="fade-right">{translang("about5")}</p>
          <p className='pb-8' data-aos="fade-right">{translang("about6")}</p>

          <p className='pb-8' data-aos="fade-right">{translang("about7")} </p>

          <p className='pb-8' data-aos="fade-right">{translang("about8")}</p>
        </div>
      </div>

      <div className='w-full'>
        <img src={img} alt="image" className='mx-auto' />
      </div>
      <div className='mt-28'>
        <Footer />
      </div>
    </>
  )
}

export default About
