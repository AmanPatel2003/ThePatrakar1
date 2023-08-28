import React from "react";

export const Login = () => {
  return (
    <div className="w-full  flex justify-center items-center  lg:px-[15%] md:px-[25%] sm:px-[20%] xs:px-[5%]   bg-gray-100">
      <div className="flex-col  w-[40%] lg:w-[50%] md:w-[100%] sm:w-[100%] xs:w-[100%] rounded-md  justify-center bg-white  py-[3%] my-[8%]">
        <div className="w-[80%] text-center flex-col mx-[10%]">
          <h1 className="text-3xl mb-[5%] font-semibold">Login</h1>

         
          <div className="w-full flex justify-center my-[4%]">
            <input
              type="email"
              className=" border border-gray-300  rounded-md w-full bg-gray-100 py-[1%] px-[2%] hover:border-gray-800 hover:font-semibold"
              placeholder="Email "
            />
          </div>
          <div className=" w-full flex justify-center my-[4%]">
            <input
              type="password"
              className="border border-gray-300 rounded-md w-full bg-gray-100 py-[1%] px-[2%] hover:border-gray-800 hover:font-semibold"
              placeholder="Password"
            />
          </div>

          <div className="w-full mb-[3%] mt-[6%] flex justify-center ">
            <button className=" border border-gray-300 float-left bg-gray-100 w-[30%] rounded text-gray-400  py-[1%] px-[2%]  hover:border-gray-800 hover:font-semibold">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
