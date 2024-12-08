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
    <div className="w-full  lg:flex lg:max-h-[110vh] ">
      {/* Left Section */}
      <div
        className="md:w-1/2 max-h-[70vh] lg:max-h-fit flex flex-col items-center lg:items-end space-y-8 md:space-y-1"
        data-aos="fade-right"
      >
        <div className="w-fit m-auto">
          <img
            src={image1}
            alt="image1"
            className="w-72  h-30 rounded-2xl md:w-fit md:h-96 md:relative md:left-7 :"
          />
        </div>

        <div className="relative left-32 bottom-20 lg:top-16 -translate-x-12 md:translate-x-60 lg:-translate-x-44 lg:-translate-y-36">
          <img
            src={image3}
            alt="image2"
            className="w-44 md:w-80 rounded-lg lg:w-72 lg:h-[38vh]"
          />
        </div>

        <div className="relative bottom-28 right-20 lg:right-0 md:bottom-80  lg:-translate-x-80">
          <img
            src={image2}
            alt="image3"
            className="w-44  lg:w-72 lg:h-[45vh] md:w-80 relative bottom-28 md:top-7 rounded-lg "
          />
        </div>
      </div>

      {/* Right Section */}
      <div
        className="relative lg:w-1/2 pl-2   md:pl-8 md:pr-8 md:mb-10 lg:mb-1 space-y-6 "
        data-aos="fade-left"
      >
        <h1 className="text-lg text-sky-500 font-extrabold lg:text-4xl">
          {t("welcome")}
        </h1>

        <div className="mt-6">
          <a className="text-orange-500 text-xl font-extrabold">{t("des1")}</a>
          <div className="font-semibold  mt-6 text-md space-y-4">
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
