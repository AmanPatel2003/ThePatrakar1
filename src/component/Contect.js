import React from "react";

export const Contect = () => {
  return (
    <div className="w-full  flex justify-between items-center px-[20%] lg:px-[15%] md:px-[25%] sm:px-[20%] xs:px-[3%]  py-[5%] bg-gray-100">
      <div className=" w-[45%] lg:w-[40%] md:hidden sm:hidden xs:hidden">
        <h1 className="font-bold text-4xl lg:text-3xl">Let's chat</h1>
        <h1 className="font-bold text-4xl lg:text-3xl">
          Tell me about your projects.
        </h1>
        <p className="my-[7%] text-lg lg:text-base">
          Let's create something togather
        </p>
      </div>
      <div className="flex-col  w-[45%] lg:w-[50%] md:w-[100%]  sm:w-[100%] xs:w-[100%] rounded-md  justify-center bg-white  py-[3%] xs:mb-[10%] xs:mt-[%]">
        <div className="w-[80%] xs:w-[90%] text-center flex-col mx-[5%]  ">
          <h1 className="text-2xl mb-[5%] xs:my-[6%] font-semibold xs:text-3xl">
            CONTACT US
          </h1>

          <div className="w-full flex justify-center my-[3%] xs:my-[6%]">
            <input
              type="text"
              className="  border border-gray-300 rounded-md w-full bg-gray-100 py-[1%] px-[2%] hover:border-gray-800 hover:font-semibold xs:text-2xl"
              placeholder="Enter your name"
            />
          </div>
          <div className="w-full flex justify-center my-[3%] xs:my-[6%]">
            <input
              type="email"
              className=" border border-gray-300  rounded-md w-full bg-gray-100 py-[1%] px-[2%] hover:border-gray-800 hover:font-semibold xs:text-2xl"
              placeholder="Email "
            />
          </div>
          <div className=" w-full flex justify-center  my-[3%] xs:my-[6%]">
            <input
              type="password"
              className="border border-gray-300 rounded-md w-full  bg-gray-100 py-[1%] px-[2%] hover:border-gray-800 hover:font-semibold xs:text-2xl"
              placeholder="Password"
            />
          </div>
          <div className="w-full flex justify-center my-[3%] xs:my-[6%]">
            <select
              name=""
              id=""
              className="w-full border   hover:border-gray-800 hover:font-semibold  text-gray-400  border-gray-300 rounded-md bg-gray-100 py-[1%] px-[2%] xs:text-2xl  "
            >
              <option value="" className="text-gray-300 " selected hidden>
                options
              </option>
              <option value="" className="">
                1
              </option>
              <option value="" className="">
                2
              </option>
              <option value="" className="">
                3
              </option>
              <option value="" className="">
                4
              </option>
              <option value="" className="">
                5
              </option>
              <option value="" className="">
                6
              </option>
              <option value="" className="">
                7
              </option>
              <option value="" className="">
                8
              </option>
              <option value="" className="">
                9
              </option>
            </select>
          </div>
          <div className=" w-full flex justify-center   my-[3%] xs:my-[6%] xs:text-2xl">
            <textarea
              name=""
              placeholder="Enter your query here"
              id=""
              cols=""
              rows="4"
              className="w-full border hover:font-semibold  hover:border-gray-800 rounded-md bg-gray-100 py-[1%] px-[2%]"
            ></textarea>
          </div>
          <div className="w-full mb-[3%] mt-[6%] xs:text-2xl">
            <button className=" border border-gray-300 float-left bg-gray-100 w-[30%] rounded text-gray-400  py-[1%] px-[2%] xs:mb-[4%]  hover:border-gray-800 hover:font-semibold">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
