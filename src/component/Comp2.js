import React from "react";

export const Comp2 = () => {
  return (
    <div className="  px-6 pt-0  ">
      <div className=" flex mt- border-2">
        <div className=" w-[50%] my-5 lg:flex-col lg:item-center">
          <h1 className="ml-10 lg:ml-[2%] font-bold lg:font-medium text-3xl lg:text-2xl lg:text-center text-gray-800">
            Categories
          </h1>
          <ul className="ml-10 lg:ml-[8%] xs:text-center sm:text-center  md:text-center leading-10">
            <li className="text-gray-500">Business</li>
            <li className="text-gray-500">Foods</li>
            <li className="text-gray-500">Games</li>
            <li className="text-gray-500">Life Style</li>
            <li className="text-gray-500">Tech</li>
            <li className="text-gray-500">Travel</li>
            <li className="text-gray-500">Uncategorized</li>
            <li className="text-gray-500">World</li>
            <li className="text-gray-500">कानून व्यवस्था</li>
            <li className="text-gray-500">कानून व्यवस्था</li>
            <li className="text-gray-500">कृषि</li>
            <li className="text-gray-500">मनोरंजन</li>
            <li className="text-gray-500">राजनीति</li>
            <li className="text-gray-500">राज्यशासन</li>
            <li className="text-gray-500">रोजगार</li>
          </ul>
        </div>
        <div className="w-[50%] mt-5">
          <h1 className="font-bold lg:font-medium text-3xl lg:text-2xl lg:text-center text-gray-800">
            Location
          </h1>
          <ul className="leading-10 lg:text-center">
            <li className="text-gray-500">intrnational</li>
            <li className="text-gray-500">National</li>
            <li className="text-gray-500">Chhattisgarh</li>
            <li className="text-gray-500">Raipur</li>
            <li className="text-gray-500">Bilaspur</li>
            <li className="text-gray-500">Durg</li>
            <li className="text-gray-500">Bhilai</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
