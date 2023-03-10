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
      className="relative flex flex-col items-center md:items-start md:flex-row justify-center gap-14 bg-gray-900 text-white py-10 px-8 md:px-14 scroll-mt-24"
    >
      <Image
        alt="birds flying from hand"
        width={200}
        height={200}
        src={images.bird}
        className="hidden mdSm:absolute bottom-0 left-3 mdSm:bottom-52 mdSm:w-[160px]  md:hidden lg:block  lg:top-8 lg:left-6 z-0 opacity-30"
      />
      <Image
        alt="cosmic praying symbol"
        width={200}
        height={200}
        src={images.cosmicHealing}
        className="hidden mdSm:absolute bottom-20 right-2 mdSm:bottom-64 mdSm:w-[160px] md:hidden lg:block  lg:bottom-8 lg:right-6 opacity-30 rounded-full"
      />
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 3 }}
        className="flex flex-col items-center"
      >
        <p className="text-center mb-6 font-bold text-lg">
          Featured Youtube Video
        </p>
        <iframe
          src="https://www.youtube.com/embed/OMVYKAxLeRI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="mb-4 w-[280px] h-[160px] mdSm:w-[340px] mdSm:h-[180px] md:w-[450px] md:h-[250px] lg:w-[550px] lg:h-[300px]"
        />
        <button className="px-4 py-2 md:px-6 md:py-2 border-2 border-white h font-bold text-white uppercase hover:bg-white hover:text-black ease-in duration-200">
          Youtube
        </button>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 3 }}
        className="mb-20"
      >
        <p className="text-center mb-6 font-bold text-lg">Our Book</p>
        <Link href="https://www.balboapress.com/en/bookstore/bookdetails/720450-loveyourself">
          <Image
            alt="Karens Book"
            width={160}
            src={images.book}
            className="mdSm:w-[180px] hover:scale-105 ease-in duration-300 md:w-[180px] lg:w-[200px]"
          />
        </Link>
      </motion.div>
      <SocialMedia />
      <NavigationDots />
      <Copyright />
    </div>
  );
};

export default YouTubeBook;
