import React, { useState, useEffect } from "react";
import Himalaya from "../Assets/Images/Himachal/himach.jpeg";
import Rajasthan from "../Assets/Images/Rajasthan/raj.png";
import SouthIndia from "../Assets/Home/WhatsApp Image 2024-12-23 at 11.34.06 AM.jpeg";
import Goa from "../Assets/Home/New Destination.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { HashLink } from "react-router-hash-link";
import { useLanguage } from "./Languagecontext";

const PortraitCarousel = () => {
  const { t } = useLanguage();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: window,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const images = [
    { src: Himalaya, title: "HIMALAYA", id: "himalaya", route: "/yournextadventure" },
    { src: Rajasthan, title: "RAJASTHAN", id: "rajasthan", route: "/yournextadventure" },
    { src: SouthIndia, title: t("south"), id: "south-india", route: "/yournextadventure" },
    { src: Goa, title: t("suggest"), id: "goa", route: "/download" },
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
    setCurrentIndex((prevIndex) => (prevIndex + 3) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

 

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1 className=" text-2xl 2xl:text-7xl md:text-3xl  text-blue-500 font-bold mb-[4%] md:tracking-wider text-center uppercase">
        {t("Our")} Destinations
      </h1>

      <div className="relative w-full max-w-full mx-auto overflow-hidden" data-aos="fade-up">
        {/* Carousel Container */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
            className={`flex-shrink-0 ${
              visibleCards === 1
                ? "w-full"
                : visibleCards === 2
                ? "w-1/2"
                : "w-1/3"
            } p-4`}
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <HashLink smooth to={`${image.route}#${image.id}`}>
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-60 sm:h-80 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t to-transparent text-orange-500 flex items-end justify-center pb-4">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold hover:text-sky-500 text-center">
                      {image.title}
                    </h2>
                  </div>
                </HashLink>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 p-3 bg-black text-white rounded-full hover:bg-opacity-80 z-10"
          onClick={handlePrev}
        >
          ❮
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-60 text-white rounded-full hover:bg-opacity-80 z-10"
          onClick={handleNext}
        >
          ❯
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-400"
            } cursor-pointer`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </>
  );
};

export default PortraitCarousel;
