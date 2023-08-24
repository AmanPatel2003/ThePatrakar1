import React from 'react'

export const Rajniti_1 = (props) => {
  return (
    <div className=" flex xs:flex-col sm:flex-col md:flex-col lg:flex-col ">
      <div className=" w-[45%] xs:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] ">
        <a
          className="bg-slate-700  text-xl p-1 font-bold rounded text-gray-200"
          href="/"
        >
          {props.btn}
        </a>
        <p className="text-2xl mt-4 font-semibold text-gray-700">{props.heading}</p>
        <p className="text-lg  my-4 text-gray-500">{props.paira}</p>
        <a
          className="bg-slate-700  text-sm  p-2 font-bold text-gray-200 "
          href="/news"
        >
          Read More
        </a>
      </div>
      <div className=" w-[55%] xs:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xs:mt-2 sm:mt-3 md:mt-5 lg:mt-5 xs:mx-0 sm:mx-0 md:mx-0 lg:mx-0">
        <img className="" src={props.img} alt="" />
      </div>
    </div>
  );
}
