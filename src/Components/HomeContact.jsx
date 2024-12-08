import React from "react";
import { Link } from "react-router-dom";

const HomeContact = () => {

  return (
    <div className="flex flex-col items-center p-6 md:p-4 bg-gray-100">
      {/* Contact Us Title */}
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
        Contact Us
      </h1>

      {/* Contact Us Button */}
  <Link to="download">    <button className="px-6 py-2 text-black bg-sky-700 border border-gray-300 rounded-md hover:border-orange-500 hover:bg-sky-500 transition-all duration-300 mb-8">
        Contact Us
      </button> </Link>

      {/* Adventure Rides Title */}
      <h2 className="w-fit text-md md:text-3xl font-semibold mb-4 text-gray-700">
        Adventure Rides
      </h2>

      {/* Address */}
      <p className="text-center text-gray-600 mb-2">
      DE 153, Block DE, Tagore Garden, Tagore Garden Extension, New Delhi, Delhi, 110027
      </p>

     
     
    </div>
  );
};

export default HomeContact;
