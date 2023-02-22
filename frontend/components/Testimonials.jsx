import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { urlFor } from "@/lib/client";
import Image from "next/image";
import images from "@/constants/images";

const Testimonials = ({ testimonial }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    setTestimonials(testimonial);
  }, []);

  return (
    <>
      <div className="antialiased flex flex-col items-center justify-center mt-6">
        {testimonials.length && (
          <>
            {/* Cards */}
            <div className="relative flex flex-col md:w-[80%] lg:w-[60%] min-h-[270px] text-gray-700  md:p-6 rounded-lg ">
              <Image
                width={300}
                height={300}
                src={images.heart}
                className="absolute top-8 right-0 md:top-4 md:right-4 z-0 opacity-30"
              />
              <div className="flex justify-start space-x-4 items-center z-10">
                <img
                  src={urlFor(testimonials[currentIndex].imgurl)}
                  alt="quotation marks"
                  className="h-10 w-10 mt-2"
                />
                <div>
                  <h3 className=" font-bold text-2xl text-grey-500 justify-center">
                    {testimonials[currentIndex].name}
                  </h3>
                </div>
              </div>
              <div className="flex justify-center">
                <p className="relative mt-6 font-bold text-xl text-center z-10">
                  {testimonials[currentIndex].feedback}
                </p>
              </div>
            </div>
            {/* Arrows for slide */}
            <div className="flex gap-3 mt-1 app__testimonial-btns app__flex">
              <div
                onClick={() =>
                  handleClick(
                    currentIndex === 0
                      ? testimonials.length - 1
                      : currentIndex - 1
                  )
                }
              >
                <HiChevronLeft className="text-5xl border-2 border-black rounded-full" />
              </div>

              <div
                onClick={() =>
                  handleClick(
                    currentIndex === testimonials.length - 1
                      ? 0
                      : currentIndex + 1
                  )
                }
              >
                <HiChevronRight className="text-5xl border-2 border-black rounded-full" />
              </div>
            </div>
            <button className="mt-9 px-8 py-1.5 border-2 border-black h font-bold ">
              View More
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Testimonials;