import React from "react";
export const Comp = (props) => {
  return (
    <>
      <div className="   xs:flex-col sm:flex-col md:flex-col  lg:flex-col flex xl:justify-center  2xl:justify-center  ">
        <div className=" xs:w-full sm:w-full md:w-full lg:w-full  w-[42%] mx-[1%] xs:mx-[0%] sm:mx-[0%] md:mx-[0%] lg:px-[3%] lg:mb-[2%] xs:mb-[3%] ">
          <a
            className="bg-slate-700 text-gray-200 text-xl p-1 font-bold rounded"
            
            href={props.path}
          >
            {props.btn}
          </a>
          <p className="text-2xl mt-4 font-semibold text-gray-700 ">
            {props.heading}
          </p>
          <p className="text-lg  my-6 text-gray-500 text-justify">
            {props.paira}
          </p>
          <a
            className="bg-slate-700 text-gray-200 text-sm  p-2 font-bold  "
            
            href={props.path}
          >
            Read More
          </a>
        </div>
        <div className=" xs:w-full  sm:w-full md:w-full lg:w-full w-[52%]    lg:px-[3%]">
          <img className="w-[100%] h-[100%]" src={props.img} alt="" />
        </div>
      </div>
    </>
  );
};
