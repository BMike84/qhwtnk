import React from "react";
import Image from "next/image";
import { images } from "@/constants";
import { motion } from "framer-motion";

const Meet = () => {
  return (
    <motion.section
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ type: "spring", duration: 5, bounce: 0.3 }}
      className="flex flex-col gap-5  text-white p-3 md:px-10"
    >
      <div className="relative flex flex-col gap-3 items-end smXl:flex-row smXl:items-center md: justify-between md900:justify-evenly">
        <Image
          width={120}
          height={200}
          src={images.bird}
          className="absolute top-8 left-2 z-0 opacity-30 smXl:hidden"
        />
        <Image
          src={images.tenaMain}
          width={175}
          height={150}
          className="rounded-xl  md:w-[200px] lg:w-[250px]"
        />
        <div className="text-center md:w-[60%]">
          <Image
            width={120}
            height={200}
            src={images.bird}
            className="absolute hidden top-0 right-2 z-0 opacity-30 smXl:block lg:w-[250px]"
          />
          <div>
            <h3 className="font-bold md:text-2xl mb-2">TENA M. DODDS</h3>
            <p className="text-sm md:text-lg">
              Founder of Quantum Healing w/ Tena Beyond Quantum Healing. (BQH) &
              Remote Spirit Release (RSR) Practitioner Spirit Releasement
              Therapist Intuitive Empath Published Author Trauma Mentor
              #OSGRebel
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col gap-3 items-start smXl:flex-row-reverse smXl:items-center md: justify-between md900:justify-evenly">
        <Image
          src={images.karenMain}
          width={175}
          height={150}
          className="rounded-xl  md:w-[200px] lg:w-[250px]"
        />
        <Image
          width={120}
          height={200}
          src={images.bird}
          className="absolute top-8 right-2 z-0 opacity-30 smXl:hidden"
        />

        <div className="text-center md:w-[60%]">
          <Image
            width={120}
            height={200}
            src={images.bird}
            className="absolute hidden top-0 left-2 z-0 opacity-30 smXl:block lg:w-[250px]"
          />
          <div>
            <h3 className="font-bold md:text-2xl mb-2">KAREN A. BAQUIRAN</h3>
            <p className="text-sm md:text-lg">
              Medium & Psychic Surgeon Intuitive Energetic Healer Beyond Quantum
              Healing (BQH) & Remote Spirit Release (RSR) Practitioner Published
              Author Trauma Mentor #OSGRebel
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Meet;
