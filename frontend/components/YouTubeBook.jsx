import React from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/constants";

const YouTubeBook = () => {
  return (
    <div className="relative flex flex-col items-center md:items-start md:flex-row justify-center gap-14 bg-gray-900 p-8 text-white">
      <Image
        width={200}
        height={200}
        src={images.bird}
        className="absolute bottom-0 left-3  md:hidden lg:block  lg:top-8 lg:left-6 z-0 opacity-30"
      />
      <Image
        width={200}
        height={200}
        src={images.cosmicHealing}
        className="absolute bottom-0 right-2 md:hidden lg:block  lg:bottom-8 lg:right-6 opacity-30 rounded-full"
      />
      <div className="flex flex-col items-center">
        <p className="text-center mb-6 font-bold text-lg">
          Featured Youtube Video
        </p>
        <iframe
          src="https://www.youtube.com/embed/OMVYKAxLeRI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="mb-6 w-[450px] h-[220px] md:w-[400px] md:h-[210px] lg:w-[500px] lg:h-[280px]"
        />
        <button className="px-8 py-2 border-2 border-white h font-bold text-white uppercase hover:bg-white hover:text-black ease-in duration-200">
          Youtube Page
        </button>
      </div>
      <div>
        <p className="text-center mb-6 font-bold text-lg">Our Book</p>
        <Link href="https://www.balboapress.com/en/bookstore/bookdetails/720450-loveyourself">
          <Image
            width={200}
            src={images.book}
            className="hover:scale-105 ease-in duration-300 md:w-[180px] lg:w-[220px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default YouTubeBook;
