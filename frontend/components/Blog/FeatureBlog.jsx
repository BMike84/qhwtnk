import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogCard, Copyright, NavigationDots, SocialMedia } from "..";

const FeatureBlog = ({ posts }) => {
  return (
    <section
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
        <BlogCard posts={posts} />
        <Link
          href="/post"
          className="mt-8 mb-20 md:mb-5 px-8 py-1.5 border-2 border-black h font-bold hover:bg-gray-900 hover:text-white ease-in duration-200 "
        >
          View All
        </Link>
      </motion.div>
    </section>
  );
};

export default FeatureBlog;
