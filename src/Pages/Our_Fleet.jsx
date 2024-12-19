import React from 'react';

import fleetposter from '../Assets/Home/Fleetposter.png'
import Footer from '../Components/Footer';
import { useLanguage } from '../Components/Languagecontext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import ktm from "../Assets/Home/WhatsApp Image 2024-12-19 at 1.41.37 PM.jpeg"
import ktm2 from "../Assets/Home/WhatsApp Image 2024-12-19 at 1.41.56 PM.jpeg"

const Our_Fleet = () => {
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
     <>

<div className=' w-full md:pl-20 md:pr-20 pt-8 pl-8 pr-8 overflow-hidden' data-aos="fade-down">
       <a className=' font-extrabold text-lg'>{t("advhead")}</a>
       <div className='font-semibold  mt-3'>
       <p className='font-semibold text-justify pb-5'>{t("adv1")}</p>
       <p className='font-semibold text-justify '>{t("adv2")}</p>

       <div className="w-full mb-16 bg-orange-500 h-0.5 mt-12"></div>
          </div>
          </div> 
          

      <h1 className="text-center mt-1 mb-6 text-gray-500 text-2xl md:text-5xl md:mb-1" data-aos="fade-down">{t("ktm450")} </h1>
      <div className='w-full md:flex md:mt-14'>
        <div className='md:w-1/2'>
        <img src={ktm} alt="" className='w-full h-96  object-contain ' data-aos="fade-right" />
        </div>
        <div className='md:w-1/2'>
        <img src={ktm2} alt="" className='w-full h-96   md:pb-2 object-contain ' data-aos="fade-left" />
        </div>
      </div>
       
      <div className='p-6 text-justify md:pl-28 md:pr-28  overflow-hidden '>
        <h1 className="font-semibold text-center mt-12 mb-6  text-2xl md:text-6xl  "  data-aos="fade-in">{t("beasthead")}</h1>
        <p className='font-semibold text-lg pb-6  md:text-lg' data-aos="fade-right">{t("beast1")}</p>

<p className='font-semibold text-lg pb-6  md:text-lg'  data-aos="fade-left">{t("beast2")}</p>

<p className='font-semibold text-lg pb-6  md:text-lg' data-aos="fade-right">{t("beast3")}</p>
      </div>
      <div className='w-full' data-aos="fade-up">
        <img src={fleetposter} alt="" className='mx-auto md:h-96 rounded-2xl' />
      </div>
      <div className='mt-32'>
        <Footer/>
      </div>
     </>
  )
}

export default Our_Fleet
