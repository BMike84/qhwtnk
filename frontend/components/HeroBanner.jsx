import React from "react";
import { urlFor } from "@/lib/client";
import { NavigationDots, SocialMedia } from ".";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div
      id="home"
      className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img"
    >
      <div className="absolute top-0 left-0 right-0 bottom-0  bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] flex justify-center    items-center flex-col w-full mb-[3rem] content-center lg:mt-10">
        <NavigationDots />
        <SocialMedia />
        <div className="flex justify-center">
          <img
            className="w-[90%] object-center md:w-[70%]"
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
        <div className="flex justify-center gap-4 mt-6">
          <button className="px-8 py-2 border hover:bg-sky-800 ease-in-out duration-300">
            {heroBanner.buttonText1}
          </button>
          <button className="px-8 py-2 border hover:bg-sky-800  ease-in-out duration-300">
            {heroBanner.buttonText2}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
