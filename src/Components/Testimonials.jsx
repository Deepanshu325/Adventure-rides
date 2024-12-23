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
import testiback from "../Assets/Images/Testimonials/WhatsApp Image 2024-12-23 at 1.55.34 PM.jpeg";



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
      img: testi3,
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

    <div className="mt-6 mb-4 md:mt-10 ">

      {/* Title */}
      <h2 className=" text-2xl 2xl:text-7xl md:text-3xl font-bold text-center text-blue-500 mb-6  uppercase">
        {t("custitle")}
      </h2>


      <div className="flex flex-col-reverse md:flex-row ">



        <div className="container mx-auto mt-10 md:w-[50%] pl-[1%]">



          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 }, // Mobile
              768: { slidesPerView: 2 }, // Tablet
              // Desktop
            }}
            autoplay={{
              delay: 3000, // 3 seconds
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="w-ful h-full"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="w-auto  h-[95%]  bg-blue-500 rounded-lg shadow-lg p-14 pb-4 min-h-[85vh] flex flex-col ml-3 mr-3 md:ml-0 md:mr-0   ">
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
                    <p className="text-white text-sm mt-2 overflow-hidden">
                      {card.comment}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      {/* Background Image */}
      <div className="lg:block md:w-50% rounded-2xl  pl-[1%] pr-[1%] object-contain mt-10" data-aos="fade-left">
        <img
          src={testiback}
          alt="Background"
          className="md:pt-1 w-full rounded-2xl  object-contain "
        />
      </div>

      </div>


      

    </div>
  );
};

export default Testimonials;
