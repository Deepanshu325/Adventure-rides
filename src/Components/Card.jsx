import React from 'react';

const Card = (props) => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Text Section */}
      <div className="w-full bg-gray-100 p-4 md:col-span-2">
        <h2 className="text-xl font-bold mb-2">{props.mainheading}</h2>
        
        <div className="mt-4 text-black  text-lg font-semibold pl-4 space-y-4">
          <p>{props.point1}</p>
          <p>{props.point2}</p>
          <p>
            {props.point3}
          </p>
         <p>{props.text1}</p> 
        </div>
      </div>

      {/* Images Section */}
      {(props.img1 || props.img2) && (
      <div className="flex flex-col md:flex-row gap-4 w-[88%] mx-auto">
        <img
          src={props.img1}
          alt="Desert Ride"
          className="w-full md:w-1/2 h-fit object-contain rounded-xl"
        />
        <img
          src={props.img2}
          alt="Mountain Ride"
          className="w-full md:w-1/2 h-full object-contain rounded-xl"
        />
      </div>
      )}

      <div className="w-full md:w-full bg-orange-500 h-0.5 mt-10"></div>
    </div>
  );
};

export default Card;
