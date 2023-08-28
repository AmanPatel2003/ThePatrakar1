import React, { useState } from "react";
import { SiBookmeter } from "react-icons/si";
export const Dashbord = () => {
  const [Dash, setDash] = useState(false);

  const handeldash = () => {
    setDash((prev) => !prev);
  };

  return (
    <div className="flex h-[575px]  w-[1500px]">
      <div className="bg-gray-700 w-[15%] h-full pt-[1%]">
        <ul className="">
          <li className=" text-gray-400 text-xl my-2  ">
            <a className=" flex" onClick={handeldash}>
              <SiBookmeter size={18} className="mt-1 mx-2" />
              Dashbord
            </a>
            {Dash === true ? (
              <div className="flex-col bg-gray-500">
                <div className="">
                  <a href="" className="ml-2 text-white text-base">
                    Home
                  </a>
                </div>
                <div className="">
                  <a href="" className="ml-2 text-white text-base">
                    Update
                  </a>
                </div>
              </div>
            ) : null}
          </li>
          <li className=" text-gray-400 text-xl my-2 ml-[15%] ">
            <a href="/" className="">
              Post
            </a>
          </li>
          <li className=" text-gray-400 text-xl my-2 ml-[15%] ">
            <a href="/" className="">
              Media
            </a>
          </li>
          <li className=" text-gray-400 text-xl my-2 ml-[15%] ">
            <a href="/" className="">
              Pages
            </a>
          </li>
          <li className=" text-gray-400 text-xl my-2 ml-[15%] ">
            <a href="/" className="">
              Comments
            </a>
          </li>
          <li className=" text-gray-400 text-xl my-2 ml-[15%] ">
            Rank Math SEO
          </li>
          <li className="text-gray-400 text-xl my-2 ml-[15%] ">
            <a href="/" className="">
              Appearance
            </a>
          </li>
          <li className="text-gray-400 text-xl my-2 ml-[15%] ">
            <a href="/" className="">
              Plugins
            </a>
          </li>
          <li className="text-gray-400 text-xl my-2 ml-[15%] ">
            <a href="/" className="">
              Users
            </a>
          </li>
          <li className="text-gray-400 text-xl my-2 ml-[15%] ">
            <a href="/" className="">
              Tools
            </a>
          </li>
          <li className="text-gray-400 text-xl my-2 ml-[15%] ">
            <a href="/" className="">
              {" "}
              All-In-One WP Migration
            </a>
          </li>
          <li className="text-gray-400 text-xl my-2 ml-[15%] ">
            <a href="/" className="">
              Settings
            </a>
          </li>
          <li className="text-gray-400 text-xl my-2 ml-[15%] ">
            <a href="/" className="">
              {" "}
              LiteSpeed Cache
            </a>
          </li>
          <li className="text-gray-400 text-xl my-2 ml-[15%] ">
            <a href="/" className="">
              {" "}
              Collapse menu
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-gray-300 w-[100%] h-full"></div>
    </div>
  );
};
