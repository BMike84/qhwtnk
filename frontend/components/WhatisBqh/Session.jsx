import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import sessionData from "./sessionData";
import { Copyright, SocialMedia } from "@/components";

const Session = () => {
  return (
    <section className=" bg-gray-900 h-screen py-28">
      <div className="relative flex flex-col gap-2 items-center bg-[#F8F4EA] py-12 px-8">
        <Nav />
        <SocialMedia />
        <Copyright />
        <h2 className="mt-6 text-base md:text-2xl font-bold text-center">
          SESSIONS PARTS
        </h2>
        <p className="text-center">
          Sessions can run from 4-6 hours including the pre-talk.{" "}
        </p>
        <div className="flex flex-col items-center gap-3">
          {sessionData.data1.map((data, index) => (
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

          <iframe
            src="https://www.youtube.com/embed/N872LhMR4yM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-[290px] h-[165px] mdSm:w-[340px] mdSm:h-[180px] md:w-[400px] md:h-[210px] lg:w-[500px] lg:h-[280px]"
          />
          <h2 className="font-semibold uppercase">Useful Links</h2>
          <div className="w-full flex justify-center gap-2">
            <Link
              href="https://quantumhealers.com/blog/i-cant-be-hypnotizedand-other-hypnosis-myths-61"
              target="_blank"
              className="border-2 border-black bg-white w-1/2 md:w-2/5 flex justify-center items-center text-center p-1"
            >
              I can't be hypnotized... and other hypnosis myths
            </Link>
            <Link
              href="https://quantumhealers.com/blog/debunking-myths-about-hypnosis-in-quantum-healing-sessions"
              target="_blank"
              className="border-2 border-black bg-white w-1/2 md:w-2/5 flex justify-center items-center text-center p-2"
            >
              Debunking Hypnosis Myths
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 mt-3">
          {sessionData.data2.map((data, index) => (
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

          <iframe
            src="https://www.youtube.com/embed/2tk1y4QuDI4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-[290px] h-[165px] mdSm:w-[340px] mdSm:h-[180px] md:w-[400px] md:h-[210px] lg:w-[500px] lg:h-[280px]"
          />
        </div>
        <h2 className="mt-6 text-base md:text-2xl font-bold text-center uppercase">
          sessions aftercare
        </h2>
        <div className="flex flex-col items-center gap-3 mt-3">
          {sessionData.data3.map((data, index) => (
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
          href="/whatIs/prepare"
          className="mt-6 mb-12 font-bold text-xs md:text-lg"
        >
          Read Next: How to prepare for your BQH Session
        </Link>
      </div>
    </section>
  );
};

export default Session;
