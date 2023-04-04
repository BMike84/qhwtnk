import React from "react";
import { urlFor } from "@/lib/client";
import { NavigationDots, SocialMedia } from ".";
import Link from "next/link";
import { CalendlyButton } from ".";

const HeroBanner = ({ heroBanner, className }) => {
  return (
    <div
      id="home"
      className="relative flex items-center justify-center h-screen  bg-center bg-cover custom-img"
    >
      <div className="absolute top-0 left-0 right-0 bottom-0  bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] flex lg:justify-center  lg:mb-0  lg:items-center flex-col w-full content-center lg:mt-10">
        <NavigationDots />
        <SocialMedia />
        <div className="flex justify-center">
          <img
            className="w-[90%] object-center md:w-[70%] mb-10"
            src={urlFor(heroBanner.image)}
            alt="main background"
          />
        </div>
        <div className=" flex flex-col items-center text-center">
          <h3 className="text-2xl pb-2 lg:text-4xl">{heroBanner.largeText}</h3>
          <p className="text-xs text-center pb-4 lg:text-lg w-3/4">
            {heroBanner.desc}
          </p>
        </div>
        <div className="flex justify-center gap-4 mt-6 font-bold">
          {/* <button className="px-8 py-2 border hover:bg-white hover:text-black ease-in-out duration-300">
            {heroBanner.buttonText1}
          </button> */}
          <CalendlyButton className="px-8 py-2 border hover:bg-white hover:text-black ease-in-out duration-300" />
          <Link
            href="#contact"
            scroll={false}
            className="px-8 py-2 border hover:bg-white hover:text-black  ease-in-out duration-300"
          >
            {heroBanner.buttonText2}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
