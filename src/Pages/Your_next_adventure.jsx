import React from 'react'
import ktmfleet from "../Assets/Home/WhatsApp Image 2024-12-19 at 1.41.37 PM.jpeg"
import ktmfleet2 from "../Assets/Home/WhatsApp Image 2024-12-19 at 1.41.56 PM.jpeg"

import Footer from '../Components/Footer'
import Himalaya from '../Assets/Images/Himachal/WhatsApp Image 2024-12-19 at 2.46.05 PM (1).jpeg'
import him4 from "../Assets/Images/Himachal/WhatsApp Image 2024-12-19 at 2.46.05 PM.jpeg"
import Adventurecard from '../Components/Adventurecard'
import Goa from '../Assets/Home/Goa.webp'
import Rajasthan from '../Assets/Images/Rajasthan/PICRAJ51.jpg'
import Rajasthanvip from '../Assets/Images/Rajasthan/A4.png'
import { useLanguage } from '../Components/Languagecontext'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import map1 from '../Assets/Images/Himachal/Himachalmap10days.png'
import map2 from '../Assets/Images/Himachal/Himachalmap4days.png'
import map3 from "../Assets/Images/Rajasthan/rajmap.png"

const Your_next_adventure = () => {

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
    <div className='w-full p-8 md:p-12'>
    <p className="text-center  text-xl  font-bold text-blue-500 md:text-3xl mb-12">
        {t("advmain")}
      </p>
    
        
        <div className=' w-full md:pl-20 md:pr-20' data-aos="fade-down">
       <a className='  font-extrabold text-lg'>{t("advhead")}</a>
       <div className='font-thin   mt-3'>
       <p className='font-semibold text-justify pb-5'>{t("adv1")}</p>
       <p className='font-semibold text-justify '>{t("adv2")}</p>

       <div className="w-full mb-16 bg-orange-500 h-0.5 mt-12"></div>


       <h1 className='font-semibold text-justify  text-lg md:pb-16'>{t("advhead2")}</h1>
       <div className="w-full md:flex ">
            <div className="md:w-1/2"
        >
            <img src={ktmfleet} alt="" className=' ' data-aos="fade-right"/>

            </div>
            <div className="md:w-1/2">
              <img src={ktmfleet2} alt="" data-aos="fade-left" />
            </div>
       </div>
       
       <p className='font-semibold pt-16 text-justify   text-lg' data-aos="fade-down">{t("advdes")}
</p>
       </div>
       <div data-aos="fade-in">
        <h1 className='mt-8 text-3xl font-extrabold text-center md:mt-28 '>{t("himalaya")}</h1>

        </div>


        <div id="himalaya">
     <Adventurecard 
     image={Himalaya} 
     heading={t("himalayahead")}
     text1={t("himalaya1")}
     text2={t("himalaya2")} 
      map={map1}
      link={"/himalaya10days"}/>

<Adventurecard image={him4} 
heading={t("himalayahead2")} 
text1={t("himalaya3")}
text2={t("himalaya4")}
maptitle="Goa" 
map={map2} 
link={"/himalaya4days"}/>
</div>

<div data-aos="fade-in">
        <h1 className='mt-8 text-3xl font-extrabold text-center md:mt-28 '  >{t("raj")}</h1>

        </div>  

<Adventurecard image={Rajasthan} 
heading={t("himalayahead4")}  
text1={t("himalaya5")}
text2={t("himalaya6")}
map={map3} 
link={"/rajasthan10daysvip"}
/>

<div  id="rajasthan" >
<Adventurecard image={Rajasthanvip} 
heading={t("himalayahead3")}
text1={t("himalaya7")}
text2={t("himalaya8")} 
map={map3}
link={"/rajasthan10days"} />
</div>

       </div>
       
    </div>
     




    {/* footer */}
    <div className='mt-32'>
    <Footer/>
    </div>
    </>
  )
}

export default Your_next_adventure
