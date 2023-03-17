import React from "react";
import Image from "next/image";
import Link from "next/link";
import images from "@/constants/images";
import { motion } from "framer-motion";
import { Copyright, NavigationDots, SocialMedia } from "..";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const TestimonialsCard = ({ testimonials }) => {
  return (
    <motion.section
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      id="testimonialsSection"
      className="flex flex-col items-center  text-gray-900 text-center relative bg-[#F8F4EA] py-10 px-8 md:px-14 scroll-mt-24"
    >
      <Image
        alt="heart"
        width={200}
        height={200}
        src={images.heart}
        className="absolute top-32 right-0 md:right-4 z-0 opacity-30"
      />
      <NavigationDots />
      <SocialMedia />
      <Copyright />
      <h2 className="text-3xl font-bold mb-8 text-center">
        What People Are Saying
      </h2>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={20}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="w-full lg:w-4/5 mb-8"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 items-center h-auto justify-evenly mb-8"
          >
            <div className="flex justify-center gap-4 items-center">
              <Image
                src={images.quotations}
                width={50}
                height={50}
                alt="Quotation marks"
              />
              <p className="text-lg md:text-2xl font-bold pb-2">
                {testimonial.name}
              </p>
            </div>
            <p className="text-gray-600 text-sm md:text-lg lg:text-xl font-semibold w-[95%] lg::w-3/4">
              {testimonial.feedback}
            </p>
          </div>
        ))}
      </Carousel>
      <Link
        href="/testimonials"
        className="px-8 py-1.5 mb-14 border-2 border-black h font-bold hover:bg-gray-900 hover:text-white ease-in duration-200 "
      >
        View All
      </Link>
    </motion.section>
  );
};

export default TestimonialsCard;
