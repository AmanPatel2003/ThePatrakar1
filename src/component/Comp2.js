import React from "react";
import { BsSearch } from "react-icons/bs";

export const Comp2 = () => {
  return (
    <div className="  px-6 xs:px-[1%] pt-0  ">
      <div className="my-[2%] lg:hidden xl:hidden 2xl:hidden">
        <div className="border-2 h-7 rounded-xl text-center flex ">
          <div className="w-[10%] xs:w-[10%] sm:w-[5%] md:w-[5%] ">
            <BsSearch className="ml-3 mt-1" />
          </div>
          <input
            type="search"
            className="w-[80%] xs:w-[85%] sm:w-[90%] md:[90%] focus:outline-none"
          />
        </div>
      </div>
      <div className=" flex mt- border-2">
        <div className=" w-[50%] my-5 lg:flex-col lg:item-center">
          <h1 className="ml-10  xs:ml-[5%] font-bold lg:font-medium xs:text-center sm:text-center md:text-center  text-3xl lg:text-2xl lg:text-center text-gray-800">
            Categories
          </h1>
          <ul className="ml-10 xs:ml-[0%] lg:ml-[8% xs:text-center sm:text-center  md:text-center leading-10">
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
          <h1 className="font-bold lg:font-medium text-3xl lg:text-2xl lg:text-center xs:text-center sm:text-center text-gray-800">
            Location
          </h1>
          <ul className="leading-10 lg:text-center xs:text-center sm:text-center">
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
