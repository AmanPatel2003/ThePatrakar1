import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Comp2 } from "./Comp2";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

export const Header = () => {
  const [open, setopen] = useState(false);

  const handeleMenu = () => {
    setopen((prev) => !prev);
    console.log(open);
  };

 

  return (
    <div className=" md:px-[1%] w-full  ">
      <div className=" flex justify-between  sm:justify-center h-20 items-center ">
        <div className="  ml-7 xs:hidden sm:hidden">
          <h4 className="font-bold text-1xl  ">Thusday,April 6,2023</h4>
          <p className=" ">Today's Paper</p>
        </div>
        <div className="text-4xl  relative right-10 sm:right-0 xs:right-0 sm:flex sm:justify-center font-semibold ">
          <a href="/" className=" pr-7 float-left xs:pr-0 xs:ml-2 sm:ml-2">
            ThePatrakar.in
          </a>
        </div>
        
        <div className="mr-2 flex  ">
          <button
            className="inline-flex items-center justify-centerp-2 text-gray-700 hover:text-gray-500  "
            type="button"
            onClick={handeleMenu}
          >
            <span className="sr-only">Opne main menu</span>
            {open === true ? <FaTimes size={25} /> : <FaBars size={25} />}
          </button>
        </div>
      </div>
      <hr />
      <div className="min-h-[50px] ">
        <ul className="flex justify-center items-center h-[50px] ">
          <li className="mx-[13px] xs:mx-[1%] sm:mx-2 font-medium items-center  hover:mx-[9px]">
            <a
              target=""
              className="hover:text-blue-400 hover:text-lg xs:text-sm sm:text-sm "
              href="/"
            >
              Home
            </a>
          </li>
          <li className="mx-[13px] xs:mx-[1%] sm:mx-2 font-medium  hover:mx-[9px]">
            <a
              target=""
              className="hover:text-blue-400 hover:text-lg xs:text-sm sm:text-sm "
              href="/rajniti"
            >
              World
            </a>
          </li>
          <li className="mx-[13px] xs:mx-[1%] sm:mx-2 font-medium  hover:mx-[9px]">
            <a
              target=""
              className="hover:text-blue-400 hover:text-lg xs:text-sm sm:text-sm "
              href="/news"
            >
              Tech
            </a>
          </li>
          <li className="mx-[13px] xs:mx-[1%] sm:mx-2 font-medium  hover:mx-[9px]">
            <a className="hover:text-blue-400 hover:text-lg " href="/
            ">
              Lifestyle
            </a>
          </li>
          <li className="mx-[13px] xs:mx-[1%] sm:mx-2 font-medium  hover:mx-[9px]">
            <a
              target=""
              className="hover:text-blue-400 hover:text-lg xs:text-sm sm:text-sm "
              href="/rajniti"
            >
              More
            </a>
          </li>
          <li className="mx-[13px] xs:mx-[1%] sm:mx-2 font-medium  hover:mx-[9px]">
            <a
              target=""
              className="hover:text-blue-400 hover:text-lg xs:text-sm sm:text-sm "
              href="/news"
            >
              Follow
            </a>
          </li>
          <li className="mx-[13px] xs:mx-[1%] sm:mx-2 font-medium  hover:mx-[9px]">
            <a
              target=""
              className="hover:text-blue-400 hover:text-lg xs:text-sm sm:text-sm "
              href="/contect"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr />
     

      <div className="2xl:hidden xl:hidden lg:hidden">{open ? <Comp2 /> : null}</div>
    </div>
  );
};
