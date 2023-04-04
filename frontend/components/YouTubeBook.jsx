import React from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/constants";
import { motion } from "framer-motion";
import { Copyright, NavigationDots, SocialMedia } from ".";

const YouTubeBook = () => {
  return (
    <div
      id="youtubeBook"
      className="relative  scroll-mt-24 bg-gray-900 text-white"
    >
      <h2 className="text-3xl font-bold mb-8 text-center pt-8">Other Offers</h2>
      <div className="w-full flex flex-col items-center justify-center md:flex-row gap-6 md:items-start px-8 md:px-14 pb-20">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 3 }}
          className="flex flex-col my-auto  md:w-[45%] lg:w-[40%]"
        >
          <iframe
            src="https://www.youtube.com/embed/OMVYKAxLeRI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-[160px] mdSm:h-[180px] lg:h-[270px] mb-2 lg:mb-4"
          />
          <div className="flex justify-center ">
            <Link
              href="https://www.youtube.com/channel/UCWj-EtHf2bigx5G0MbRf8Pg"
              target="_blank"
              className=" px-8 py-2 border-2 border-white h font-bold text-white uppercase hover:bg-white hover:text-black ease-in duration-200 text-xs"
            >
              Youtube Channel
            </Link>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 3 }}
          className=" md:w-[20%]  flex flex-col  my-auto items-center"
        >
          <Link href="https://www.balboapress.com/en/bookstore/bookdetails/720450-loveyourself">
            <Image
              alt="Karens Book"
              width={160}
              src={images.book}
              className="mdSm:w-[180px] hover:scale-105 ease-in duration-300 md:w-[180px] lg:w-[200px]"
            />
          </Link>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 3 }}
          className="m-auto md:w-[35%] lg:w-[40%]"
        >
          <div className="p-6 bg-gray-100 rounded-lg hover:scale-105 ease-in duration-300">
            <Link href="https://quantumhealers.com/bqh" target="_blank">
              <div className="mb-5 flex gap-3 items-center md:gap-1  md:flex-col md:items-start md900:gap-3 md900:flex-col">
                <Image src={images.coupon} width={50} height={50} />
                <h3 className="text-sm lg:text-lg font-bold mb-2 md:mb-0 text-gray-600 uppercase">
                  Special BQH Coupon
                </h3>
              </div>
              <div className="text-gray-600">
                <p className="text-xs md900:text-sm  text-gray-600 pb-2">
                  GET:Q CERTIFIED IN BEYOND QUANTUM HEALING! USE CODE TENAW FOR
                  10% OFF!
                </p>
                <div className="">
                  <p className="text-xs md900:text-lg uppercase  ">
                    Click Here to Enroll Now!
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
      <SocialMedia />
      <NavigationDots />
      <Copyright />
    </div>
  );
};

export default YouTubeBook;
