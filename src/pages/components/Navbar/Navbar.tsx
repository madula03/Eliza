/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const Navbar: React.FC = () => {
  const router = useRouter();
  return (
    <div>
      <h1 className="container mt-[50px] text-2xl leading-9 font-normal text-[#134682]">
        ToastMaster International
      </h1>
      <div className="border mt-[50px] border-[#C9C9C9]">
        <div className="container flex">
          <img src="/eliza logo.png" alt="eliza logo" />
          <div className="h-[74px] border-l border-[#C9C9C9] ml-[60px] mr-[35px]"></div>
          <div className="flex w-full">
            <div className="flex gap-x-[50px] items-center justify-between w-full">
              <div className="flex gap-x-[50px]">
                <Link href="/">
                  <div
                    className={`text-xl leading-[30px] font-normal cursor-pointer ${
                      router.pathname === "/"
                        ? "text-[#134682]"
                        : "text-[#9E5C5C]"
                    }`}
                  >
                    HOME
                  </div>
                </Link>

                <Link href="/about-us">
                  <div
                    className={`text-xl leading-[30px] font-normal cursor-pointer ${
                      router.pathname === "/about-us"
                        ? "text-[#134682]"
                        : "text-[#9E5C5C]"
                    }`}
                  >
                    ABOUT US
                  </div>
                </Link>

                <Link href="/blog">
                  <div
                    className={`text-xl leading-[30px] font-normal cursor-pointer ${
                      router.pathname === "/blog"
                        ? "text-[#134682]"
                        : "text-[#9E5C5C]"
                    }`}
                  >
                    BLOG
                  </div>
                </Link>

                <Link href="/contact-us">
                  <div
                    className={`text-xl leading-[30px] font-normal cursor-pointer ${
                      router.pathname === "/contact-us"
                        ? "text-[#134682]"
                        : "text-[#9E5C5C]"
                    }`}
                  >
                    CONTACT US
                  </div>
                </Link>
              </div>
              <Link href="login">
                <button className="h-full bg-[#134682] w-[175px] text-xl leading-[30px] font-normal text-white">
                  LOGIN
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
