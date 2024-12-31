import React, { useState, useEffect } from "react";
import magazine1 from "../Assets/Articles/Articleimage/ENDURO MAG IMAGE.jpg";
import magazine2 from "../Assets/Articles/Articleimage/MV IMAGE.png";
import magazine3 from "../Assets/Articles/Articleimage/NOPPENNIEUWS IMAGE.jpg";
import magazine4 from "../Assets/Articles/Articleimage/MOTOREN&TOURISME IMAGE.jpg"
import articlePDF1 from "../Assets/Articles/article1.pdf";
import articlePDF2 from "../Assets/Articles/EnduroMag.pdf";
import articlePDF4 from "../Assets/Articles/PPAR - Motoren&Toerisme India - 2020401.pdf"
import articlePDF3 from "../Assets/Articles/PPAR - NoppenNieuws1 - 2020.pdf"
import { useLanguage } from "./Languagecontext";

const MagazineCarousel = () => {
 
  const {translang , setTranslang}  = useLanguage();

  const magazines = [
    {
      image: magazine1,
      title: "Enduro Magazine",
      link: articlePDF2, // PDF imported and used here
    },
    {
      image: magazine2,
      title: "Moto Verte",
      link: articlePDF1,
    },
    {
      image: magazine3,
      title: "NoppenNieuws",
      link: articlePDF3,
    },

    {
      image: magazine4,
      title: "Motoren & Tourisme",
      link: articlePDF4,
    },
  ];


  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3); // Default to 3 cards for desktop

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // Tablet
      } else {
        setVisibleCards(3); // Desktop
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % magazines.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? magazines.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto p-4">

      <h1 className=" text-2xl 2xl:text-7xl md:text-3xl font-bold text-blue-500 text-center mb-8 uppercase ">{translang("media")}</h1>
      {/* Carousel Wrapper */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {[...magazines, ...magazines].map((magazine, index) => (
            <div
              key={index}
              className={`flex-shrink-0 ${visibleCards === 1
                  ? "w-full"
                  : visibleCards === 2
                    ? "w-1/2"
                    : "w-1/3"
                } p-4`}
            >
              <div
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                onClick={() => window.open(magazine.link, "_blank")}
              >
                <img
                  src={magazine.image}
                  alt={magazine.title}
                  className="w-full h-60 object-contain"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">
                    {magazine.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 z-10"
        onClick={handlePrev}
      >
        ❮
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 z-10"
        onClick={handleNext}
      >
        ❯
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: magazines.length }, (_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${currentIndex === index ? "bg-blue-600" : "bg-gray-400"
              } cursor-pointer`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MagazineCarousel;
