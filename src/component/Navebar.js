// import React from "react";
import React, {useState} from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const navlinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Rajniti",
    link: "/rajniti",
  },
  {
    title: "News",
    link: "/news",
  },
];

export const Navebar = () => {
const [open, setOpen] = useState(false)


const handeleMenu =()=>{
    setOpen((prev) => !prev);
    console.log(open)
};

  return (
    <div className="bg-gray-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="  ml-7 xs:hidden sm:hidden">
            <h4 className="font-bold text-1xl  ">Thusday,April 6,2023</h4>
            <p className=" ">Today's Paper</p>
          </div>
          <div className="text-4xl  relative right-10 sm:right-0 xs:right-0 sm:flex sm:justify-center font-semibold ">
            <h1 className=" pr-7 float-left xs:pr-0 xs:ml-2 sm:ml-2">
              ThePatrakar.in
            </h1>
          </div>
          {/* navlinks */}
          {/* <div className=" md-block  ">
            <div className="ml-10 flex items-baseline space-x-4 ">
              {navlinks.map((link, index) => (
                <a
                  key={index}
                  className="text-gray-300 transition-all  hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-md font-medium "
                  href={link.link}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div> */}
          {/* hamburger button */}
          <div className="mr-2 flex  ">
            <button
              className="inline-flex items-center justify-centerp-2 text-gray-700 hover:text-white hover:bg-gray-700 "
              type="button"
              onClick={handeleMenu}
            >
              <span className="sr-only">Opne main menu</span>
              {open == true ? <FaTimes size={25} /> : <FaBars size={25}/>}
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      {open ? (
        <div className=" ">
          <div className=" ox-2 pt-2 pb-3 space-y-1  pl-[48%] ">
            {navlinks.map((link, index) => (
              <a
                key={index}
                className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium  "
                href={link.link}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      ) : null}

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
