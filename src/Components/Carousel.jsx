import React, { useState, useEffect } from "react";
import Himalaya from "../Assets/Images/Himachal/himach.jpeg";
import Rajasthan from "../Assets/Images/Rajasthan/raj.png";
import SouthIndia from "../Assets/Home/southindia.jpg";
import Goa from "../Assets/Home/Goa.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { HashLink } from "react-router-hash-link";

const PortraitCarousel = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: window, // Offset (in px) from the original trigger point
      easing: "ease-in-out", // Easing function for animations
      once: true, // Whether animation should happen only once
    });
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: Himalaya, title: "HIMALAYA", id: "himalaya" ,route:"/yournextadventure" },
    { src: Rajasthan, title: "RAJASTHAN", id: "rajasthan", route:"/yournextadventure"  },
    { src: SouthIndia, title: "SOUTH INDIA", id: "south-india", route:"/yournextadventure" },
    { src: Goa, title: "SUGGEST US YOUR NEW DESTINATION", id: "goa",route:"/download" },
  ];

  const visibleSlides = window.innerWidth >= 768 ? 3 : 1; // 3 images on desktop, 1 on small screens

  useEffect(() => {
    const handleResize = () => {
      setCurrentIndex(0); // Reset index on resize to prevent misalignment
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="relative w-full max-w-7xl mx-auto overflow-hidden"
      data-aos="fade-up"
    >
      {/* Carousel Container */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 flex-shrink-0 px-2 relative"
          >
            {/* Image */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <HashLink smooth to={`${image.route}#${image.id}`}>
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-60 sm:h-80 md:h-96 object-cover"
                />
                {/* Title Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t to-transparent text-orange-500 flex items-end justify-center pb-4">
                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold hover:text-sky-500">
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
  );
};

export default PortraitCarousel;
