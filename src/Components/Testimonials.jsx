import React, { useEffect, useState } from "react";
import { useLanguage } from "./Languagecontext";
import testi1 from "../Assets/Images/Testimonials/TESTI1_11zon.png";
import testi2 from "../Assets/Images/Testimonials/TESTI2.png";
import testi3 from "../Assets/Images/Testimonials/TESTI3.png";
import testi4 from "../Assets/Images/Testimonials/TESTI4.jpeg";
import testi5 from "../Assets/Images/Testimonials/TESTI4 - LAURENT.JPG"
import testi6 from "../Assets/Images/Testimonials/TESTI9_11zon.jpeg";

import testiback from "../Assets/Images/Testimonials/4_11zon.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: window,    // Offset (in px) from the original trigger point
      easing: 'ease-in-out', // Easing function for animations
      once: true      // Whether animation should happen only once
    });
  }, []);

  const { t } = useLanguage();

  const testimonials = [
    {
      image: testi1,
      name: "Michael",
      address: "New York, USA",
      text: t("testimonials1"),
      rating: 5,
    },
    {
      image: testi2,
      name: "Eva",
      address: "Berlin, Germany",
      text: t("testimonials2"),
      rating: 4,
    },
    {
      image: testi3,
      name: "John",
      address: "Sydney, Australia",
      text: t("testimonials3"),
      rating: 5,
    },
    {
      image: testi4,
      name: "Nigel",
      address: "London, UK",
      text: t("testimonials4"),
      rating: 4,
    },
   
  
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);

  // Handle screen resizing to adjust visible slides
  const updateVisibleSlides = () => {
    if (window.innerWidth < 768) {
      setVisibleSlides(1); // Mobile: Show 1 slide at a time
    } else {
      setVisibleSlides(2); // Desktop: Show 2 slides at a time
    }
  };

  useEffect(() => {
    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / visibleSlides));
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="relative w-full mx-auto p-4 md:w-[120vh]" data-aos="fade-right">
        <h2 className="text-center text-2xl md:text-4xl font-bold text-gray-800 mb-6">
          {t("custitle")}
        </h2>
        <div className="relative lg:right-4 lg:w-[107vh] overflow-hidden mx-auto">
          <div
            className="flex transition-transform duration-500 lg:space-x-8 lg:w-[110vh] lg:relative lg:left-1"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-1/2 p-4 bg-orange-500 rounded-lg shadow-md flex flex-col items-center text-center lg:w-[50vh]"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 md:w-32 md:h-32 lg:w-64 lg:h-64 rounded-full mb-4"
                />
                <div className="flex justify-center mb-3">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      {i < testimonial.rating ? "★" : "☆"}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg text-gray-800 font-thin">{testimonial.name}</h3>
                <p className="text-sm text-gray-700 mb-3 font-thin">
                  {testimonial.address}
                </p>
                <p className="text-sm text-white font-thin">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: window.innerWidth < 768 ? testimonials.length : Math.ceil(testimonials.length / 2) }, (_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`h-3 w-3 rounded-full mx-2 ${
                currentIndex === index ? "bg-sky-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="hidden md:block" data-aos="fade-left">
        <img
          src={testiback}
          alt=""
          className="md:pt-20 md:h-[41vh] lg:h-[115vh] lg:pb-16 w-[90vh] object-cover"
        />
      </div>
    </div>
  );
};

export default Testimonials;
