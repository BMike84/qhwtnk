import React from "react";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/constants";
import Nav from "./Nav";
import h2prepareData from "./h2prepareData";
import { Copyright, SocialMedia } from "@/components";

const How2Prepare = () => {
  return (
    <section className=" bg-gray-900 h-screen py-28">
      <div className="relative flex flex-col gap-2 bg-[#F8F4EA] py-12 px-8">
        <Nav />
        <SocialMedia />
        <Copyright />
        <h2 className="mt-6 text-base md:text-2xl font-bold text-center">
          HOW TO PREPARE FOR A BQH SESSION
        </h2>
        <div className="flex flex-col justify-center items-center gap-3">
          <Image src={images.bqhbird} width={250} height={250} />
          <Link
            href="https://quantumhealers.com/get-ready"
            target="_blank"
            className="border-2 border-black bg-white w-1/2 md:w-2/5 flex justify-center items-center text-center p-2"
          >
            BQH: GET READY VIDEOS
          </Link>
        </div>
        <div className="mt-6 flex flex-col items-center gap-3">
          <h2 className="font-semibold">HOW TO PREPARE FOR A BQH SESSION</h2>
          {h2prepareData.data1.map((data, index) => (
            <div key={index}>
              <h2 className="font-semibold">{data.title}</h2>
              <p
                style={{ whiteSpace: "pre-line" }}
                className="text-sm md:text-base pb-2"
              >
                {data.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col items-center gap-3">
          <h2 className="font-semibold">FOR ONLINE SESSIONS</h2>

          <iframe
            src="https://www.youtube.com/embed/zUpczQ40pp0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-[290px] h-[165px] mdSm:w-[340px] mdSm:h-[180px] md:w-[400px] md:h-[210px] lg:w-[500px] lg:h-[280px]"
          />
          {h2prepareData.data2.map((data, index) => (
            <div key={index}>
              <h2 className="font-semibold">{data.title}</h2>
              <p
                style={{ whiteSpace: "pre-line" }}
                className="text-sm md:text-base pb-2"
              >
                {data.desc}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/whatIs/resources"
          className="mt-6 mb-12 font-bold text-xs md:text-lg"
        >
          For more RESOURCES to prepare for your session click here.
        </Link>
      </div>
    </section>
  );
};

export default How2Prepare;
