import React from "react";
import { FiMenu } from "react-icons/fi";

export const Header = () => {
  return (
    <div className=" md:px-[1%] w-full  ">
      <div className=" flex justify-between  sm:justify-center h-20 items-center ">
        <div className="  ml-7 xs:hidden sm:hidden">
          <h4 className="font-bold text-1xl  ">Thusday,April 6,2023</h4>
          <p className=" ">Today's Paper</p>
        </div>
        <div className="text-4xl  relative right-10 sm:right-0 xs:right-0 sm:flex sm:justify-center font-semibold ">
          <h1 className=" pr-7 float-left">ThePatrakar.in</h1>
        </div>
        <div className="mr-7 xs:mr-0  sm:float:right  ">
          <FiMenu size={40} className="hover:text-blue-500 xs:float-right " />
        </div>
      </div>
      <hr />
      <div className="min-h-[50px] ">
        <ul className="flex justify-center items-center h-[50px] ">
          <li className="mx-[13px] xs:mx-[1%] sm:mx-2 font-medium items-center  hover:mx-[9px]">
            <a
              target=""
              className="hover:text-blue-400 hover:text-lg xs:text-sm sm:text-sm "
              href="/rajniti"
            >
              Home
            </a>
          </li>
          <li className="mx-[13px] xs:mx-[1%] sm:mx-2 font-medium  hover:mx-[9px]">
            <a
              target=""
              className="hover:text-blue-400 hover:text-lg xs:text-sm sm:text-sm "
              href="/news"
            >
              World
            </a>
          </li>
          <li className="mx-[13px] xs:mx-[1%] sm:mx-2 font-medium  hover:mx-[9px]">
            <a
              target=""
              className="hover:text-blue-400 hover:text-lg xs:text-sm sm:text-sm "
              href="/"
            >
              Tech
            </a>
          </li>
          <li className="mx-[13px] xs:mx-[1%] sm:mx-2 font-medium  hover:mx-[9px]">
            <a className="hover:text-blue-400 hover:text-lg " href="/">
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
    </div>
  );
};
