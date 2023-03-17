import React from "react";
import testimonialsData from "./testimonialsData";
import { SocialMedia, Copyright } from "..";

const Testimonials = () => {
  return (
    <section className=" bg-gray-900 h-screen py-24">
      <div className="relative flex flex-col justify-center items-center gap-3 py-8 px-8 text-black bg-[#F8F4EA] pb-20">
        <div>
          <h2 className="text-center mb-10 text-xl lg:text-3xl font-bold">
            Youtube Videos
          </h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2  mb-3">
            {testimonialsData.youtube.map((data, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 text-lg lg:text-2xl"
              >
                <h3 className="text-center font-semibold text-red-800">
                  {data.name}
                </h3>
                <iframe
                  src={data.links}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className=" w-[290px] h-[190px] mdSm:w-[300px] mdSm:h-[190px] md:w-[360px] md:h-[200px] lg:w-[500px] lg:h-[280px]"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-center mb-10 text-xl lg:text-3xl font-bold">
            Beyond Quantum Healing Sessions
          </h2>
          <div className="flex flex-col gap-6">
            {testimonialsData.bqh.map((data, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h3 className="font-semibold text-red-800 lg:text-xl">
                  {data.title}
                </h3>
                <p style={{ whiteSpace: "pre-line" }} className="lg:text-lg">
                  {data.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 mb-8">
          <h2 className="text-center mb-10 text-xl lg:text-3xl font-bold">
            Remote Spirit Release (RSR)
          </h2>
          <div className="flex flex-col gap-6">
            {testimonialsData.rsr.map((data, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h3 className="font-semibold text-red-800 lg:text-xl">
                  {data.title}
                </h3>
                <p style={{ whiteSpace: "pre-line" }} className="lg:text-lg">
                  {data.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <SocialMedia />
        <Copyright />
      </div>
    </section>
  );
};

export default Testimonials;
