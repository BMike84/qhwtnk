import React from "react";
import Image from "next/image";
import { images } from "@/constants";
import { motion } from "framer-motion";

const QuoteBanner = ({ ref, animate }) => {
  return (
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ type: "spring", duration: 5, bounce: 0.3 }}
      className="relative flex flex-col justify-evenly items-center text-center  w-[100%] min-h-[250px] bg-gray-900 text-white mb-16"
    >
      <Image
        width={200}
        height={200}
        src={images.heart}
        className="absolute hidden md:block top-8 left-3 md:top-8 md:right-4 z-0 opacity-30"
      />
      <h3 className="flex p-4  md900:w-[90%] md900:text-2xl lg:w-[70%]">
        " There is an infinite amount of wisdom held within your soul, a
        treasure trove of love, beauty, and understanding. I'm here to help you
        uncover the secrets that lie within so you may receive the healing you
        deserve. "
      </h3>
      <p className="text-lg">Tena M. Dodds</p>
      <Image
        width={200}
        height={200}
        src={images.heart}
        className="absolute w-[80px] md:w-[200px] bottom-8 right-3 md:top-8 md:right-4 z-0 opacity-30"
      />
    </motion.div>
  );
};

export default QuoteBanner;
