import React from "react";

import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className=" xs:px-[1%] sm:px-[1%]  md:px-[1%] px-5 pt-8  bg-gray-100 ">
      <div className="bg-zinc-800 text-white">
        <section className="flex justify-between bg-black text-white items-center">
          <h1 className="m-4 text-xl font-bold text-gray-300">
            ThePatrakar.in
          </h1>
          <button className="mr-6 bg-red-800 h-[50%]  w-[70px]  rounded first-letter:">
            LIVE TV
          </button>
        </section>
        <section className="flex justify-center items-center xs:flex-col xs:py-[2%]  xs:justify-center h-24">
          <h1 className="font-bold  text-gray-300 xs:pb-3 ">FOLLOW US ON :</h1>
          <div className="flex xs:mr-[2%] xs:pb-3">
            <BsWhatsapp size={30} className="xs:mx-1 mx-3 text-gray-200" />
            <BsFacebook size={30} className="xs:mx-1 mx-3 text-gray-200" />
            <AiFillTwitterCircle
              size={30}
              className="xs:mx-1 mx-3 text-gray-200"
            />
            <AiFillYoutube size={30} className="xs:mx-1 mx-3 text-gray-200" />
            <FaTelegram size={30} className="xs:mx-1 mx-3 text-gray-200" />
          </div>
        </section>
        <hr />
        <section className="xs:hidden ">
          <p className=" text-center my-3 text-gray-500">
            ताज़ातरीन बोर्ड परिणा देश दुनिया साइंस मनोरंजन खेल शिक्षा
            लाइफ़स्टाइल क्रिकेट कारोबार क्राइमराज्य वीडियो फोटो चुनाव
          </p>
          <hr />
          <p className="text-center my-3 text-gray-500">
            TERMS OF USE CAREER ADVERTISE WITH US COMPLAINT REDRESSAL CONTACT US
            FEEDBACK SITEMAP CHANNEL SUBSCRIPTIONS
          </p>
        </section>

        <hr className="" />
        <section className="  text-center  h-24 flex justify-center items-center">
          <p className="text-gray-500">
            © 2023 ThePatrakar. ALL RIGHT RESERVED.
          </p>
        </section>
      </div>
    </div>
  );
};
