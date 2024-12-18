import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { useLanguage } from "./Languagecontext";
import testi1 from "../Assets/Images/Testimonials/WhatsApp Image 2024-12-18 at 10.17.23 AM.jpeg";
import testi2 from "../Assets/Images/Testimonials/WhatsApp Image 2024-12-18 at 9.59.30 AM.jpeg";
import testi3 from "../Assets/Images/Testimonials/WhatsApp Image 2024-12-18 at 10.19.55 AM.jpeg";
import testi4 from "../Assets/Images/Testimonials/WhatsApp Image 2024-12-18 at 10.26.22 AM.jpeg";
import testiback from "../Assets/Images/Testimonials/WhatsApp Image 2024-12-18 at 3.48.22 PM.jpeg";



const Testimonials = () => {

  const { t } = useLanguage();    


  const cards = [
    {
      img: testi1,
      name: t("michael"),
      country: "New York, USA",
      comment: t("testimonials1"),
    },
    {
      img: testi2,
      name: "Eva",
      country: "Berlin, Germany",
      comment: t("testimonials2"),
    },
    {
      img : testi3,
      name: "John",
      country: "Sydney, Australia",
      comment: t("testimonials3"),
    },
    {
      img: testi4,
      name: t("nigel"),
      country: "London, UK",
      comment: t("testimonials4"),
    },
  
  ];

  return (

       <div className="mt-6 mb-4 md:mt-10">

         {/* Title */}
      <h2 className="text-center text-2xl md:text-4xl font-bold text-gray-800 mb-6 ">
        {t("custitle")}
      </h2>

      {/* Background Image */}
      <div className="lg:block md:w-full" data-aos="fade-left">
        <img
          src={testiback}
          alt="Background"
          className="md:pt-1 w-full  pl-[2%] pr-[2%] object-contain "
        />
      </div>
    <div className="container mx-auto mt-10">

   

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 }, // Mobile
          768: { slidesPerView: 2 }, // Tablet
          1024: { slidesPerView: 4 }, // Desktop
        }}
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="bg-orange-500 rounded-lg shadow-lg p-14 h-[85vh] lg:h-[92vh] flex flex-col ">
              <img
                src={card.img}
                alt={card.name}
                className="rounded-full  w-full object-cover "
              />
              <div className="text-center pt-4 font-">
                <div className="text-yellow-400 text-lg">★★★★★</div>
                <h3 className="text-lg font-bold text-white">{card.name}</h3>
                <p className="text-sm text-white">
                   {card.country}
                </p>
                <p className="text-white text-sm mt-2 overflow-hidden text-justify">
                  {card.comment}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default Testimonials;
