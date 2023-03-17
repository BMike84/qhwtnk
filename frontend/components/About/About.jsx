import React from "react";
import Image from "next/image";
import { images } from "@/constants";
import { Copyright, SocialMedia } from "@/components";
import aboutData from "./aboutData";

const About = () => {
  return (
    <section className=" bg-gray-900 h-screen py-24">
      <div className="flex flex-col justify-center items-center gap-3 py-8 px-8 text-black bg-[#F8F4EA] pb-20">
        <h2 className="text-2xl lg:text-4xl uppercase text-black lg:mb-10">
          Meet Tena
        </h2>
        <div className=" flex flex-col gap-2 items-center text-sm lg:text-base">
          <div className="flex flex-col gap-2 items-center lg:flex-row w-full lg:justify-evenly ">
            <Image
              src={images.aboutTena}
              width={340}
              height={340}
              className="rounded-lg"
              alt="Tena"
            />
            <div className="flex flex-col gap-2 text-center lg:text-left lg:w-[70%] lg:py-4 ">
              {aboutData.tena.map((data, index) => (
                <p key={index}>{data.desc}</p>
              ))}

              <div className="text-center font-semibold">
                <p>​ Infinite Love & Light,</p>
                <p>​ Tena M. Dodds</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-1 md:gap-4">
            <Image
              src={images.tenaCert1}
              width={130}
              height={130}
              className="hover:scale-[2] md:hover:scale-[2.5]] ease-in duration-300"
              alt="Certificate"
            />
            <Image
              src={images.TenaCert2}
              width={130}
              height={130}
              className="hover:scale-[2] md:hover:scale-[2.5] ease-in duration-300"
              alt="Certificate"
            />
            <Image
              src={images.RSRTena}
              width={130}
              height={130}
              className="hover:scale-[2] md:hover:scale-[2.5] ease-in duration-300"
              alt="Certificate"
            />
            <Image
              src={images.TenaPHM}
              width={130}
              height={130}
              className="hover:scale-[2] md:hover:scale-[2.5] ease-in duration-300"
              alt="Certificate"
            />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col justify-center items-center gap-3 pt-8 pb-20 px-8 text-black bg-[#F8F4EA] ">
        <h2 className="text-2xl lg:text-4xl uppercase text-black lg:mb-8">
          Meet Karen
        </h2>
        <div className="flex flex-col gap-2 items-center text-sm lg:text-base">
          <div className="flex flex-col gap-2 items-center lg:flex-row-reverse w-full lg:justify-evenly ">
            <Image
              src={images.karenMain}
              width={320}
              height={320}
              className="rounded-lg"
              alt="Karen"
            />
            <div className="flex flex-col gap-2 text-center lg:text-left lg:w-[70%] lg:py-4 lg:px-2">
              {aboutData.karen.map((data, index) => (
                <p key={index}>{data.desc}</p>
              ))}
              <div className="text-center font-semibold">
                <p>​ Karen A. Baquiran #OSG</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-1 md:gap-4">
            <Image
              src={images.KarenCert1}
              width={130}
              height={130}
              className="hover:scale-[2] md:hover:scale-[2.5] ease-in duration-300"
              alt="Certificate"
            />
            <Image
              src={images.KarenRSRCertificate}
              width={130}
              height={130}
              className="hover:scale-[2] md:hover:scale-[2.5] ease-in duration-300"
              alt="Certificate"
            />
          </div>
        </div>
        <SocialMedia />
        <Copyright />
      </div>
    </section>
  );
};

export default About;
