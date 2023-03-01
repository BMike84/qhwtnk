import React from "react";
import { urlFor } from "@/lib/client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Copyright, NavigationDots, SocialMedia } from ".";

const BlogCard = ({ posts }) => {
  return (
    <div
      id="featureblog"
      className="relative bg-[#F8F4EA] py-4 px-14 scroll-mt-32"
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
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-1 mb-3">
          {posts.map((post) => (
            <div className="w-[90%]">
              <Link key={post._id} href="" className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 mb-4">
                  <img
                    src={urlFor(post.mainImage)}
                    alt={post.title}
                    className="h-[200px] w-full object-cover object-center group-hover:opacity-75 "
                  />
                </div>
                <div className="flex flex-col justify-between h-[100px]">
                  <h2 className="text-xl font-bold text-center">
                    {post.title}
                  </h2>
                  <div className="flex items-end justify-evenly font-medium text-lg  text-gray-900">
                    <p>{post.username}</p>
                    <p>{new Date(post.publishedAt).toDateString()}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <button className="mt-3 mb-20 md:mb-5 px-8 py-1.5 border-2 border-black h font-bold hover:bg-gray-900 hover:text-white ease-in duration-200 ">
          View All
        </button>
      </motion.div>
    </div>
  );
};

export default BlogCard;
