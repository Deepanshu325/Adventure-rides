import React from 'react';

import fleetposter from '../Assets/Home/Fleetposter.png'
import Footer from '../Components/Footer';
import { useLanguage } from '../Components/Languagecontext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import ktm from "../Assets/Home/8.a Enduro_16_11zon.jpg"
import ktm2 from "../Assets/Home/8b Trail_17_11zon.jpg"

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
      <h1 className="text-center mt-12 mb-6 text-gray-500 text-2xl md:text-5xl md:mb-1" data-aos="fade-down">The KTM EXC-F 450 </h1>
      <div className='w-full md:flex md:mt-14'>
        <div className='md:w-1/2'>
        <img src={ktm} alt="" className='w-full h-96  ' data-aos="fade-right" />
        </div>
        <div className='md:w-1/2'>
        <img src={ktm2} alt="" className='w-full h-96   md:pb-2 ' data-aos="fade-right" />
        </div>
      </div>
     
      <div className='p-6 text-justify md:pl-28 md:pr-28'>
        <h1 className="font-thin text-center mt-12 mb-6 text-gray-500 text-2xl md:text-6xl "  data-aos="fade-in">{t("beasthead")}</h1>
        <p className='font-thin text-lg pb-6  md:text-xl' data-aos="fade-right">{t("beast1")}</p>

<p className='font-thin text-lg pb-6  md:text-xl'  data-aos="fade-left">{t("beast2")}</p>

<p className='font-thin text-lg pb-6  md:text-xl' data-aos="fade-right">{t("beast3")}</p>
      </div>
      <div className='w-full' data-aos="fade-up">
        <img src={fleetposter} alt="" className='mx-auto md:h-96' />
      </div>
      <div className='mt-32'>
        <Footer/>
      </div>
     </>
  )
}

export default Our_Fleet
