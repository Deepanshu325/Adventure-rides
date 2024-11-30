import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Md_card = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: window,    // Offset from the original trigger point
      easing: "ease-in-out", // Easing function for animations
      once: true,     // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <div className="w-full lg:flex overflow-hidden">
        {/* Content Section */}
        <div className="w-full lg:w-1/2 md:max-w-5xl mt-10 mb-20 md:min-h-[60vh]" data-aos="fade-down">
          {props.mainheading && (
            <a className="text-lg font-extrabold pl-2">{props.mainheading}</a>
          )}

          {/* Section 1 */}
          {(props.heading1 || props.point1 || props.point2 || props.point3) && (
            <div className="w-auto pl-14 mt-7">
              {props.heading1 && (
                <h2 className="font-extrabold text-lg text-sky-600">
                  {props.heading1}
                </h2>
              )}
              <div className="pl-5 pt-2 font-semibold text-lg text-black-500">
                {props.point1 && (
                  <p className="font-thin text-justify pr-5">{props.point1}</p>
                )}
                {props.point2 && (
                  <p className="font-thin text-justify pr-5">{props.point2}</p>
                )}
                {props.point3 && (
                  <p className="font-thin text-justify pr-5">{props.point3}</p>
                )}
              </div>
            </div>
          )}

          {/* Section 2 */}
          {(props.heading2 || props.text1 || props.text2 || props.text3) && (
            <div className="w-auto pl-14 mt-7">
              {props.heading2 && (
                <h2 className="font-extrabold text-lg text-sky-600">
                  {props.heading2}
                </h2>
              )}
              <div className="pl-5 pt-2 font-semibold text-lg text-black-500">
                {props.text1 && (
                  <p className="font-thin text-justify pr-5">{props.text1}</p>
                )}
                {props.text2 && (
                  <p className="font-thin text-justify pr-5">{props.text2}</p>
                )}
                {props.text3 && (
                  <p className="font-thin text-justify pr-5">{props.text3}</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Image Section */}
        {props.image && (
          <div className="h-fit" data-aos="fade-right">
            <img
              src={props.image}
              alt={props.alt || ""}
              className="md:rounded-2xl md:mt-16 object-cover h-64 md:h-96 lg:h-80 mx-auto"
            />
          </div>
        )}

        {(props.image1 || props.image2) && (
          <div className="h-fit" data-aos="fade-right">
            {props.image1 && (
              <img
                src={props.image1}
                alt={props.alt1 || ""}
                className="pb-2 md:rounded-2xl md:mt-16 h-64 md:h-96 lg:h-60 lg:w-80 mx-auto"
              />
            )}
            {props.image2 && (
              <img
                src={props.image2}
                alt={props.alt2 || ""}
                className=" pb-2 md:rounded-2xl md:mt-16 h-64 md:h-96 lg:h-60 lg:w-80 mx-auto"
              />
            )}
          </div>
        )}
      </div>

      <div className="w-full md:w-full bg-orange-500 h-0.5 mt-12"></div>
    </>
  );
};

export default Md_card;
