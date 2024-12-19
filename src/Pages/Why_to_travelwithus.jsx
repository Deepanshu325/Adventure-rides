import React from "react";
import Testimonials from "../Components/Testimonials";
import Md_card from "../Components/Md_card";
import Footer from "../Components/Footer";
import { useLanguage } from "../Components/Languagecontext";
import image1 from "../Assets/Home/WhatsApp Image 2024-12-19 at 11.45.31 AM.jpeg";
import image2 from "../Assets/Home/WhatsApp Image 2024-12-19 at 11.17.24 AM.jpeg";
import image3 from "../Assets/Home/WhatsApp Image 2024-12-19 at 11.17.25 AM.jpeg";
import image4 from "../Assets/Home/WhatsApp Image 2024-12-19 at 11.17.11 AM.jpeg";
import image9 from "../Assets/Home/WhatsApp Image 2024-12-19 at 11.17.25 AM (4).jpeg";
import  image10 from "../Assets/Home/WhatsApp Image 2024-12-19 at 11.17.25 AM (3).jpeg"
import image5 from "../Assets/Home/WhatsApp Image 2024-12-19 at 11.17.25 AM (2).jpeg"
import image8 from "../Assets/Home/15. RAJ 10 _5_11zon.jpeg"
import image11 from "../Assets/Home/7.a Luxury hotels (1).jpg"
import image12 from "../Assets/Home/7.b Luxury hotels (1).jpg"
import image13 from "../Assets/Home/7.c Luxury hotels (1).jpg"
import image14 from "../Assets/Home/7.d Luxury hotels (1).jpg"
import image15 from "../Assets/Home/7.e Luxury hotels (1).jpg"
import image16 from "../Assets/Home/7.f Luxury hotels (1).png"
import image17 from "../Assets/Home/7.g Luxury hotels (1).jpg"
import image18 from "../Assets/Home/7.i Luxury hotels (1).jpeg"
import image19 from "../Assets/Home/7.j Luxury hotels (1).jpg"
import Card from "../Components/Card";

import image7 from "../Assets/Home/WhatsApp Image 2024-12-19 at 11.17.25 AM (1).jpeg"

const Why_to_travelwithus = () => {
  const { t } = useLanguage();

  return (
    <div className="md:w-full bg-gray-100">
      {/* Title Section */}
      
      <div className="text-center py-12 ">
        <p className="text-xl font-extrabold text-orange-500 md:text-6xl">
          {t("nextadventure")}
        </p>
        
        <div className="mt-6 w-20 md:w-60 mx-auto h-1 bg-sky-500 rounded"></div>
        <div className="mt-2 w-40 mx-auto h-1 bg-sky-500 rounded"></div>
      </div>

      {/* Content Section */}
      
      <div className="w-full px-4 md:px-16 mt-12 space-y-10">
      <p className="text-center font-bold text-3xl">{t("diffrently")}</p>




    

        <Md_card
          image={image1}
          mainheading={t("safetyhead")}
          heading1={t("safety")}
          point1={t("safety1")}
          point2={t("safety2")}
          point3={t("safety3")}
          heading2={t("security")}
          text1={t("security1")}
          text2={t("security2")}
          text3={t("security3")}
        />

        <Card
          img1 = {image2}
          img2={image4}
          mainheading={t("genuinehead")}
          point1={t("genuine1")}
          point2={t("genuine2")}
          point3={t("genuine3")}
          text1 ={t("genuine4")}
        />

        <Card
         img1={image3}
         img2={image7}
          mainheading={t("demandinghead")}
          point1={t("demanding1")}

          point2={t("demanding2")}
          point3={t("demanding4")}
          text1={t("demanding3")}
        />

        <Card
          img1={image5}
          img2={image10}
          mainheading={t("uniquehead")}
          point1={t("unique1")}
          point2={t("unique2")}
          
        />

        <Card
          img1={image9}
          img2={image10}
          mainheading={t("experiencehead")}
          point1={t("experience1")}
          point2={t("experience2")}
        />

        <Card
      
          mainheading={t("highhead")}
          point1={t("high1")}
          point2={t("high2")}
          point3={t("high3")}
        />

        <div className="grid grid-col-1 md:grid-cols-2   lg:grid-cols-3 lg:grid-rows-3  h-fit gap-2">
         
         <div>
          <img src={image11} alt="" className="h-60 w-full" />
         </div>
         <div>
          <img src={image12} alt="" className="h-60 w-full" />
         </div>
         <div>
          <img src={image13} alt="" className="h-60 w-full" />
         </div>
         <div>
          <img src={image14} alt="" className="h-60 w-full" />
         </div>
         <div>
          <img src={image15} alt="" className="h-60 w-full" />
         </div>
         <div>
          <img src={image16} alt="" className="h-60 w-full" />
         </div>
         <div>
          <img src={image17} alt="" className="h-60 w-full" />
         </div>
         <div>
          <img src={image18} alt="" className="h-60 w-full" />
         </div>
         <div>
          <img src={image19} alt="" className="h-60 w-full" />
         </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-40">
        <Footer />
      </div>
    </div>
  );
};

export default Why_to_travelwithus;
