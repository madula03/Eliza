/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Form: React.FC = () => {
  return (
    <div className="container w-full mt-[100px]">
      <div className="flex justify-center">
        <div>
          <h1 className="text-[45px] text-center font-semibold text-[#4F4F4F] leading-[68px] tracking-[0.15em]">
            Login
          </h1>
          <p className="font-medium text-[25px] text-center leading-[38px] text-[#4F4F4F]">
            Welcome Back!
          </p>
          <form className="flex-col">
            <label className="text-sm leading-5 font-medium text-[#4F4F4F]">
              Email <br />
              <input
                className="border border-[#CACACA] w-[385px] h-[40px] input-wrapper mt-3 pl-5 mb-6"
                type="text"
                name="name"
              />
            </label>
            <br />
            <label className="text-sm leading-5 font-medium text-[#4F4F4F]">
              Password
              <br />
              <input
                className="border border-[#CACACA] w-[385px] h-[40px] input-wrapper mt-3 mb-6 pl-5"
                type="text"
                name="name"
              />
            </label>
            <br />
            <label className="text-xs leading-4 font-normal text-[#4F4F4F]">
              <input className="mr-6" name="isGoing" type="checkbox" />
              Remember me
            </label>
            <br />
            <button className="bg-[#134682] mt-[70px] w-[385px] h-[52px] text-white text-xl leading-[30px] font-medium">
              Login
            </button>
          </form>
          <p className="text-xs text-center leading-4 font-normal text-[#4F4F4F] mt-4 mb-20">
            Don’t have an account ?{" "}
            <span className="text-[#134682] underline cursor-pointer">
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
