import React from "react";
import Image from "next/image";
import { images } from "@/constants";
import { motion } from "framer-motion";

const QuoteBanner = () => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 3 }}
      className="relative flex flex-col justify-evenly items-center 
      text-center  w-[100%] min-h-[250px] bg-gray-900 text-white mb-16 mt-10"
    >
      <Image
        alt="Tena and Karen together"
        src={images.TenaKarenTogether}
        width="auto"
        height="auto"
        className="w-[60%] mdSm:w-1/3 lg:w-1/4 lg:h-auto rounded-lg border-4 border-gray-300 shadow-lg shadow-white mb-2 lg:mb-6"
      />

      <Image
        alt="heart"
        width={200}
        height={200}
        src={images.heart}
        className="absolute hidden w-[80px] mdSm:w-[150px] md:w-[180px] lg:w-[300px] mdSm:block top-8 left-3 md:top-8 md:right-4 z-0 opacity-30"
      />
      <h3 className="flex py-4 w-full text-xs md:text-sm md900:w-[90%] md900:text-xl lg:w-[70%]">
        " There is an infinite amount of wisdom held within your soul, a
        treasure trove of love, beauty, and understanding. I'm here to help you
        uncover the secrets that lie within so you may receive the healing you
        deserve. "
      </h3>
      <p className="text-lg">Tena M. Dodds</p>
      <Image
        alt="heart"
        width={200}
        height={200}
        src={images.heart}
        className="absolute w-[80px] mdSm:w-[150px] md:w-[180px] lg:w-[300px] bottom-0 right-3 mdSm:top-8 mdSm:right-4 z-0 opacity-20 mdSm:opacity-30"
      />
    </motion.div>
  );
};

export default QuoteBanner;
