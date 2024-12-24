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
          <div className="relative h-auto overflow-hidden">




            <Videocard />
          </div>

          <div className="w-full overflow-hidden ">

            <Descriptioncard />

          </div>
          <div className="w-full mt-16 md:mt-3 mb-20 lg:mb-4" >
            <PortraitCarousel />
          </div>

          <div className=' pl-4 md:pl-14 lg:w-full  mx-auto  md:mt-20' data-aos="fade-down">
            <Link to="/whytotravel">
              <div className='lg:w-[95%] mx-auto'>
                <h1 className=' mx-auto w-full lg:w-[70%] text-center uppercase text-2xl 2xl:text-7xl md:text-3xl font-bold text-blue-500'>{t("why1")}</h1>

                <div className=' mt-8 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 overflow-hidden'>
                  <Lg_card img={image2} title={t("whytitle1")} des={t("whydes1")} />
                  <Lg_card img={image1} title={t("whytitle2")} des={t("whydes2")} />
                  <Lg_card img={image5} title={t("whytitle3")} des={t("whydes3")}/>


                  <Lg_card img={image3} title={t("whytitle4")} des={t("whydes4")} />
                  <Lg_card img={image6} title={t("whytitle5")} des={t("whydes5")} />
                  <Lg_card img={image4} title={t("whytitle6")} des={t("whydes6")} />


                </div>
              </div>
            </Link>
          </div>
          <div className=''>
            <Testimonials />
          </div>
          <div className=' lg:mt-10 md:mb-5' data-aos="fade-up">
            <MagazineCarousel />
          </div>
        </div>
      </div>


      <div>
        <Footer />
      </div>
    </>

  )
}

export default Home
