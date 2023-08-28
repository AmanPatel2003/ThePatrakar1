import React from "react";

import { BsSearch } from "react-icons/bs";

export const Comp1 = () => {
  return (
    <div className=" p-6 ">
      <div className="flex justify-between mt-[1%]  ">
        <p className=" text-[160%]">राजनीति</p>
        <button className="h-9 w-24 bg-slate-700 text-sm font-bold text-gray-200">
          Must Read
        </button>
      </div>
      <div className="mt-6 h-[300px]">
        <img className="h-[100%] w-[100%]" src="/img/mg12.webp" alt="" />
      </div>
      <h1 className="m-3 text-2xl lg:text-xl text-gray-700">
        6 अप्रैल को भाजपा का स्थापना दिवस; प्रधानमंत्री मोदी करेंगे संबोधित
      </h1>
      <p className="m-3 xl:text-xl 2xl:text-xl lg:texl-sm text-gray-500 text-justify">
        रायपुर, भारतीय जनता पार्टी के स्थापना दिवस पर होने वाले वृहद कार्यक्रमों
        की रूपरेखा पर प्रकाश डालते हुए छत्तीसगढ़ प्रदेश भाजपा महामंत्री ओपी
        चौधरी ने कहा कि पूरे राज्य में भाजपा का स्थापना दिवस ऐतिहासिक रूप से
        मनाया जाएगा।
      </p>
      <hr className="bg-gray-700 mt-5" />
      <div className="container flex mt-5 border-b lg:flex-col ">
        <div className=" pr-3 w-[50%] lg:w-[100%] mb-4">
          <div className="">
            <img className="w-full h-full" src="/img/img1.webp" alt="#" />
          </div>
          <div className=" lg:w-full lg:my-[3%]">
            <h1 className="lg:font-semibold lg:my-[1%] text-gray-700">
              रायपुर
            </h1>
            <p className="text-gray-500">
              ITI सड्डू रायपुर में 10 अप्रैल को अप्रेंटिसशिप मेला
            </p>
          </div>
        </div>
        <div className=" pl-3 w-[50%] lg:w-full border-l mb-4">
          <div className="">
            <img src="/img/img1.webp" alt="" />
          </div>
          <div className="lg:w-[100%] lg:my-[3%]">
            <h1 className="lg:font-semibold lg:my-[1%] text-gray-700">
              खड़गपुर
            </h1>
            <p className=" text-gray-500">
              दक्षिण पूर्व रेलवे के खड़गपुर रेल मंडल में रेल रोको आंदोलन से 14
              गाड़ियां रद्द; कई ट्रेनों के रूट बदले
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
