import React from "react";
import image1 from "../Assets/Home/3. ADV BIKE_1_11zon.jpg";
import image2 from "../Assets/Home/2. KTM390 ADV ADV PIC_2_11zon.jpg";
import image3 from "../Assets/Home/2.b Enduro_3_11zon.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useLanguage } from "./Languagecontext";

const Descriptioncard = () => {
  const { t } = useLanguage();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: window,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="w-full m-auto lg:flex lg:h-fit lg:-translate-y-20">
      {/* Left Section */}
      <div
        className="md:w-1/2 flex flex-col items-center lg:items-end space-y-8 md:space-y-12"
        data-aos="fade-right"
      >
        <div className="w-fit m-auto">
          <img
            src={image3}
            alt="image1"
            className="w-72 h-30 rounded-2xl md:w-fit md:h-80 md:relative md:left-7 md:mt-64 *:"
          />
        </div>

        <div className="relative left-28 bottom-12 -translate-x-12 md:translate-x-60 lg:-translate-x-44 lg:-translate-y-16">
          <img
            src={image1}
            alt="image2"
            className="w-60 md:w-80 rounded-lg lg:w-96 lg:h-[50vh]"
          />
        </div>

        <div className="relative bottom-32 md:bottom-56   md:translate-x-32 lg:-translate-x-52">
          <img
            src={image2}
            alt="image3"
            className="w-56 h-60 lg:w-96 lg:h-[55vh] md:w-80 relative top-7 rounded-lg "
          />
        </div>
      </div>

      {/* Right Section */}
      <div
        className="relative md:w-1/2 p-4 md:content-center md:pl-8 md:pr-8 md:mb-12 space-y-6"
        data-aos="fade-left"
      >
        <h1 className="text-lg text-sky-500 font-extrabold lg:text-4xl">
          {t("welcome")}
        </h1>

        <div className="mt-6">
          <a className="text-orange-500 text-xl font-extrabold">{t("des1")}</a>
          <div className="font-thin text-gray-600 mt-6 text-md space-y-4">
            <p>{t("des2")}</p>
            <p>{t("des3")}</p>
            <p>{t("des4")}</p>
            <p>{t("des5")}</p>
            <p>{t("des6")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descriptioncard;
