//Descriptioncard.js
import React from "react";
import singleImage from "../Assets/Home/WhatsApp Image 2024-12-18 at 3.35.28 PM.jpeg"; // Place your single image in the same folder

const Descriptioncard = () => {
  return (
    <div className="flex flex-col md:flex-row p-6 ">
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-fit ">
        <img
          src={singleImage}
          alt="Adventure Rides"
          className=" w-full object-contain h-96  md:h-[90vh] align-top "
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 text-gray-700 ">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8">
          Welcome to Adventure Rides
        </h1>
        <p className="text-lg text-orange-500 mb-8 leading-relaxed w-[90%] text-justify ">
          <strong className="text-xl">Adventure Rides is the only agency offering off-road
          tours on genuine enduro motorcycles, the most trusted and valued brand
          on the market, the KTM EXC-F 450. You can also
          experience the same thrill in astonishing environments on easy trails
          and small roads on a less demanding motorbike, the{" "}
          KTM Adventure 390</strong>.
        </p>
        <ul className=" text-lg list-disc list-inside space-y-4 text-gray-600 w-[90%] text-justify">
          <li>
            Ride unbeaten off-road tracks in breathtaking nature from desert
            dunes to highest mountain peaks.
          </li>
          <li>
            Rely on 35+ years of experience in enduro riding and rallying across
            3 continents.
          </li>
          <li>
            Enjoy your unique adventure safely backed by a team with 18 years of
            on-the-ground support.
          </li>
          <li>
            Increase your dirt-ride abilities with professional trainers and
            off-road riding courses.
          </li>
          <li>
            Experience being pampered in gold standard lodging located in
            ultimate scenic areas.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Descriptioncard;
