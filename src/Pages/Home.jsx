import React from 'react'
import Videocard from '../Components/Videocard'
import Descriptioncard from '../Components/Descriptioncard'
import PortraitCarousel from '../Components/Carousel'
import Lg_card from '../Components/Lg_card'
import Testimonials from '../Components/Testimonials'
import MagazineCarousel from '../Components/MagazineCarousel'
import Footer from '../Components/Footer'
import { useLanguage } from '../Components/Languagecontext'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import image1 from "../Assets/Icons/adventure-icon-1-70x70.jpeg"
import image2 from "../Assets/Icons/Your-Safety-First-70x70.png"
import image3 from "../Assets/Icons/True-Off-Road-Endurance-Rides-70x70.png"
import image4 from "../Assets/Icons/High-end-lodging-70x70.png"
import image5 from "../Assets/Icons/Genuine-OFF-ROADS-bikes-70x70.png"
import image6 from "../Assets/Icons/Agile-and-Always-there-Team-70x70.png"
import { Link } from 'react-router-dom'
import HomeContact from '../Components/HomeContact'


const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 300,    // Offset (in px) from the original trigger point
      easing: 'ease-in-out', // Easing function for animations
      once: true      // Whether animation should happen only once
    });
  }, []);




  const { t, setLanguage } = useLanguage();


  return (
     <>
     <div className='w-full overflow-hidden'>
     <div>
        <div className="relative h-auto  overflow-hidden">

       


    <Videocard />
  </div>

   <div className="w-full overflow-hidden mt-16 ">

    <Descriptioncard />
  
</div> 
<div className="w-full mt-16 md:mt-1 mb-20 lg:mb-4" >
    <PortraitCarousel/>
</div> 

 <div className=' pl-4 md:pl-14 lg:w-full lg:pl-8 mx-auto  md:mt-20' data-aos="fade-down">
 <Link to="/whytotravel"> 
 <div className='lg:w-[180vh] mx-auto'>
 <h1 className=' w-full lg:w-auto text-sky-600 font-extrabold :800 md:text-4xl'>WHY SHOULD YOU CHOOSE US FOR YOUR NEXT MOTORCYCLE JOURNEY?</h1>
    
     <div className=' mt-8 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 overflow-hidden'>
    <Lg_card img={image2} title="Your Safety First" des="Each Tour has a full time doctor int the backup vechile carring the full trauma and aid kit" />
    <Lg_card img={image1} title="Well-Maintained Motorbike" des="An experienced KTM mechanic service your bike on a daily basis" />
    <Lg_card img={image5} title="Genuine OFF-ROADS bikes" des="At Adventure Rides your ride real enduro KTM EXC-F off-road bikes" />
    
     
    <Lg_card img={image3} title="True off Road Rides " des="Our journeys test your endurance level with a 90% off-road terrain" />
    <Lg_card img={image6} title="Agile and Always-there Team " des="Our small but tight-knit group of maximum 8 rides per tour , allow for group dynamics" />
    <Lg_card img={image4} title="High-end lodging" des="After a grueling day of adventures you can hardly wait to hit the clean sheets in exceptional lodgings" />

    
   </div>
   </div>
   </Link>
   </div>
<div className=''>
<Testimonials/>
</div>
 <div className='mt-16 lg:mt-0 md:mb-5' data-aos="fade-up">
    <MagazineCarousel/>
</div>
</div>
  </div>

  <div>
    <HomeContact/>
  </div>
 <div>
    <Footer/>
 </div> 
  </>
    
  )
}

export default Home
