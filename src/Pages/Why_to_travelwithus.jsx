import React from "react";
import Md_card from "../Components/Md_card";
import Footer from "../Components/Footer";
import { useLanguage } from "../Components/Languagecontext";
import image1 from "../Assets/Home/WhatsApp Image 2024-12-19 at 11.45.31 AM.jpeg";
import image2 from "../Assets/Images/Rajasthan/WhatsApp Image 2024-12-23 at 12.06.40 PM.jpeg";
import image3 from "../Assets/Home/WhatsApp Image 2024-12-19 at 11.17.25 AM.jpeg";
import image4 from "../Assets/Home/WhatsApp Image 2024-12-19 at 11.17.11 AM.jpeg";
import image9 from "../Assets/Home/WhatsApp Image 2024-12-19 at 11.17.25 AM (4).jpeg";
import image10 from "../Assets/Home/WhatsApp Image 2024-12-19 at 11.17.25 AM (3).jpeg"
import image5 from "../Assets/Home/WhatsApp Image 2024-12-19 at 11.17.25 AM (2).jpeg"
import image8 from "../Assets/Home/WhatsApp Image 2024-12-19 at 5.18.05 PM.jpeg"
import image11 from "../Assets/Home/7.a Luxury hotels (1).jpg"
import image12 from "../Assets/Home/7.b Luxury hotels (1).jpg"
import image13 from "../Assets/Home/7.c Luxury hotels (1).jpg"
import image14 from "../Assets/Home/7.d Luxury hotels (1).jpg"
import image15 from "../Assets/Home/7.e Luxury hotels (1).jpg"
import image16 from "../Assets/Home/7.f Luxury hotels (1).png"
import image17 from "../Assets/Home/7.g Luxury hotels (1).jpg"
import image18 from "../Assets/Home/7.i Luxury hotels (1).jpeg"
import image19 from "../Assets/Home/7.j Luxury hotels (1).jpg"
import image20 from "../Assets/Hotel/WhatsApp Image 2024-12-23 at 12.15.28 PM.jpeg"
import image21 from "../Assets/Hotel/WhatsApp Image 2024-12-23 at 12.15.28 PM (1).jpeg"
import image22 from "../Assets/Hotel/WhatsApp Image 2024-12-23 at 12.15.28 PM (2).jpeg"
import image23 from "../Assets/Hotel/WhatsApp Image 2024-12-23 at 12.15.29 PM (3).jpeg"
import image24 from "../Assets/Hotel/WhatsApp Image 2024-12-23 at 12.15.29 PM (1).jpeg"
import image25 from "../Assets/Hotel/WhatsApp Image 2024-12-23 at 12.15.29 PM (2).jpeg"
import image26 from "../Assets/Hotel/WhatsApp Image 2024-12-23 at 12.15.30 PM.jpeg"
import image27 from "../Assets/Hotel/WhatsApp Image 2024-12-23 at 12.15.30 PM (1).jpeg"
import image28 from "../Assets/Hotel/WhatsApp Image 2024-12-23 at 12.15.30 PM (2).jpeg"


import Card from "../Components/Card";

import image7 from "../Assets/Home/WhatsApp Image 2024-12-28 at 12.54.28 PM.jpeg"

const Why_to_travelwithus = () => {
  
  const {translang , setTranslang}  = useLanguage();

  return (
    <div className="md:w-full bg-gray-100">
      {/* Title Section */}

      <div className="text-center pt-12 ">
        <p className="text-xl font-bold text-blue-500 md:text-3xl mb-12">
          {translang("nextadventure")}
        </p>


      </div>

      {/* Content Section */}

      <div className="w-full px-4 md:px-16 mt-12 space-y-10">
        <div>
          <p className="text-right font-semibold md:text-3xl text-sm w-full"><i>{translang("diffrently")}</i></p>
          <p className=" text-right  font-semibold md:text-3xl text-sm w-full "><i>{translang("diffrently2")}</i></p>
        </div>






        <Md_card
          image={image1}
          mainheading={translang("safetyhead")}
          heading1={translang("safety")}
          point1={translang("safety1")}
          point2={translang("safety2")}
          point3={translang("safety3")}
          heading2={translang("security")}
          text1={translang("security1")}
          text2={translang("security2")}
          text3={translang("security3")}
        />

        <Card
          img1={image2}
          img2={image4}
          mainheading={translang("genuinehead")}
          point1={translang("genuine1")}
          point2={translang("genuine2")}
          point3={translang("genuine3")}
          text1={translang("genuine4")}
        />

        <Card
          img1={image3}
          img2={image8}
          mainheading={translang("demandinghead")}
          point1={translang("demanding1")}

          point2={translang("demanding2")}
          point3={translang("demanding4")}
          text1={translang("demanding3")}
        />

        <Card
          img1={image5}
          img2={image7}
          mainheading={translang("uniquehead")}
          point1={translang("unique1")}
          point2={translang("unique2")}

        />

        <Card
          img1={image9}
          img2={image10}
          mainheading={translang("experiencehead")}
          point1={translang("experience1")}
          point2={translang("experience2")}
        />

        <Card

          mainheading={translang("highhead")}
          point1={translang("high1")}
          point2={translang("high2")}
          point3={translang("high3")}
        />

        <div className="grid grid-col-1 md:grid-cols-2   lg:grid-cols-3 lg:grid-rows-3  h-fit gap-2 max-w-7xl mx-auto">

          <div>
            <img src={image11} alt="" className="h-60 w-full rounded-xl" />
          </div>
          <div>
            <img src={image12} alt="" className="h-60 w-full rounded-xl" />
          </div>
          <div>
            <img src={image13} alt="" className="h-60 w-full rounded-xl" />
          </div>
          <div>
            <img src={image14} alt="" className="h-60 w-full rounded-xl" />
          </div>
          <div>
            <img src={image15} alt="" className="h-60 w-full rounded-xl" />
          </div>
          <div>
            <img src={image16} alt="" className="h-60 w-full rounded-xl" />
          </div>
          <div>
            <img src={image17} alt="" className="h-60 w-full rounded-xl" />
          </div>
          <div>
            <img src={image18} alt="" className="h-60 w-full rounded-xl" />
          </div>
          <div>
            <img src={image19} alt="" className="h-60 w-full rounded-xl" />
          </div>

          <div>
            <img src={image20} alt="" className="h-60 w-full rounded-xl" />
          </div>

          <div>
            <img src={image21} alt="" className="h-60 w-full rounded-xl" />
          </div>
          <div>
            <img src={image22} alt="" className="h-60 w-full rounded-xl" />
          </div>
          <div>
            <img src={image23} alt="" className="h-60 w-full rounded-xl" />
          </div>
          <div>
            <img src={image24} alt="" className="h-60 w-full rounded-xl" />
          </div>
          <div>
            <img src={image25} alt="" className="h-60 w-full rounded-xl" />
          </div>
          <div>
            <img src={image26} alt="" className="h-60 w-full rounded-xl" />
          </div>
          <div>
            <img src={image27} alt="" className="h-60 w-full rounded-xl" />
          </div>
          <div>
            <img src={image28} alt="" className="h-60 w-full rounded-xl" />
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
