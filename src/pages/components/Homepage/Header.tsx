/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="container mt-[50px]">
      <div className="flex">
        <div className="w-1/2 flex justify-center items-center">
          <div>
            <h1 className="text-5xl font-semibold leading-[72px] text-[#134682] w-10/12">
              THE PATH TO A BETTER YOU
            </h1>
            <p className="text-black text-2xl leading-8 font-normal mt-7 w-9/12">
              With ToastMasters, you can break barriers, not your budget
            </p>
            <button className="bg-[#134682] py-3 px-[84px] mt-[126px] text-2xl leading-8 font-normal text-white">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <div className="aspect-w-1 aspect-h-1 w-full mb-[50px]">
            <Image
              src="/homepage header.png"
              alt="header"
              className="w-full h-full"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
