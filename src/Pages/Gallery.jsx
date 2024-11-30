import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import InstagramEmbed from '../Components/Instagramembaded';
import gallery from '../Assets/Home/Gallery.jpg'
import Footer from '../Components/Footer';
import { useLanguage } from '../Components/Languagecontext';
import AOS from "aos";
import "aos/dist/aos.css";


const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: window,    // Offset (in px) from the original trigger point
      easing: "ease-in-out", // Easing function for animations
      once: true,     // Whether animation should happen only once
    });
  }, []);
    
    const {t} =useLanguage();

  return (
    <>
     <div >
     <p className="text-center mt-8 mb-10 text-xl font-extrabold text-orange-600 md:text-6xl" dat-aos="fade-in">
        {t("gallery")}
      </p>
    </div>
     
     <div className='w-full'>
     <InstagramEmbed embedUrl="https://www.instagram.com/reel/DCcFthhSNyB/" />
     <InstagramEmbed embedUrl="https://www.instagram.com/reel/C-rz_opyav0/" />
<InstagramEmbed embedUrl="https://www.instagram.com/reel/C86FBfUSWka/" />
<InstagramEmbed embedUrl="https://www.instagram.com/reel/C8WMlX2yOtY/" />
<InstagramEmbed embedUrl="https://www.instagram.com/reel/C78o97ah_cd/"/>
<InstagramEmbed embedUrl="https://www.instagram.com/reel/C7v4VEWhkeY/"/>
<InstagramEmbed embedUrl="https://www.instagram.com/reel/C6RVxA0hmqA/"/>
<InstagramEmbed embedUrl="https://www.instagram.com/reel/C6BTUQwSE-A/"/>
<InstagramEmbed embedUrl="https://www.instagram.com/reel/C4f2WaCoFXe/"/>

 

<InstagramEmbed embedUrl="https://www.instagram.com/reel/C2utf4tS8qM/"/>
<InstagramEmbed embedUrl="https://www.instagram.com/reel/C0io4ISL63a/"/>
</div>


 <div className='pt-32'>
  <Footer/>
 </div>

</>
  );
}


export default Gallery;
