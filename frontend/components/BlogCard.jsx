import React from "react";
import { urlFor } from "@/lib/client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Copyright, NavigationDots, SocialMedia } from ".";

const BlogCard = ({ posts }) => {
  return (
    <div
      id="featureblog"
      className="relative bg-[#F8F4EA] py-10 px-8 md:px-14 scroll-mt-24"
    >
      <SocialMedia />
      <NavigationDots />
      <Copyright />
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center w-full"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Latest Blog Post
        </h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-5 mb-3">
          {posts.map((post) => (
            <div
              key={post._id}
              className="md:w-[100%] border-3 pb-4 shadow-xl rounded-xl bg-white"
            >
              <Link href="/" className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden  bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 mb-4 rounded-t-xl">
                  <img
                    src={urlFor(post.mainImage)}
                    alt={post.title}
                    className="h-[200px] w-full object-cover object-center group-hover:opacity-75 "
                  />
                </div>
                <div className="flex flex-col justify-between h-[100px]">
                  <h2 className=" text-base md:text-base lg:text-lg font-bold text-center px-2">
                    {post.title}
                  </h2>
                  <div className="flex items-end justify-evenly  text-sm   md:text-base lg:text-lg text-gray-600 font-semibold">
                    <p>{post.username}</p>
                    <p>{new Date(post.publishedAt).toDateString()}</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="mt-6 text-white bg-gray-900 hover:bg-gray-700 font-semibold rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                    Read More
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <button className="mt-8 mb-20 md:mb-5 px-8 py-1.5 border-2 border-black h font-bold hover:bg-gray-900 hover:text-white ease-in duration-200 ">
          View All
        </button>
      </motion.div>
    </div>
  );
};

export default BlogCard;
