import React from "react";
import { SocialMedia, Copyright } from "..";
import rsrData from "./rsrData";
import Link from "next/link";

const WRSR = () => {
  return (
    <section className=" bg-gray-900 h-screen py-28">
      <div className="relative flex flex-col gap-2 bg-[#F8F4EA] py-12 px-8 md:px-24">
        <SocialMedia />
        <Copyright />
        <h1 className="mt-6 text-base md:text-2xl lg:text-4xl font-bold text-center">
          REMOTE SPIRIT RELEASE (RSR)
        </h1>
        <h1 className="text-base md:text-xl lg:text-2xl font-bold text-center">
          SPIRITUAL HEALTH CHECKS
        </h1>

        <h2 className="mt-3 text-center font-semibold md:text-xl lg:text-2xl ">
          "Good health is all about balance between mind, body and spirit."
        </h2>
        <h2 className="text-center font-semibold md:text-xl lg:text-2xl ">
          ~ Dr. Terence Palmer
        </h2>
        <div>
          {rsrData.data1.map((info, index) => (
            <p
              key={index}
              style={{ whiteSpace: "pre-line" }}
              className="text-sm md:text-base lg:text-xl py-2 text-center"
            >
              {info.desc}
            </p>
          ))}
        </div>
        <div>
          {rsrData.data2.map((info, index) => (
            <div key={index} className="">
              <h2 className="text-center font-semibold mt-5 md:text-xl">
                {info.title}
              </h2>
              <p
                style={{ whiteSpace: "pre-line" }}
                className="text-sm md:text-base lg:text-xl text-center"
              >
                {info.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 mb-12 flex flex-col items-center text-center md:text-lg">
          <Link
            href="https://www.youtube.com/watch?v=wb6WfKcD7mU&list=PLtJDTrcCBT10ZvAi11luPMjelbC1YfK5t"
            className="text-red-900 uppercase"
          >
            Remote Spirit Release Session YouTube Playlist
          </Link>
          <p>
            Watch client session videos, testimonials and other interesting
            videos on RSR.
          </p>
          <div className="text-center">
            <p className="my-4">
              For more questions, please feel free to email us!
            </p>
            <Link
              href="/#contact"
              className="px-6 py-1.5 border-2 border-black h font-bold hover:bg-gray-900 hover:text-white ease-in duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WRSR;
