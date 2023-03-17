import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { urlFor } from "@/lib/client";
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
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-5 mb-12 ">
          {posts.length > 0 &&
            posts.map(
              ({
                _id,
                title = "",
                slug = "",
                publishedAt = "",
                shortDesc = "",
                mainImage,
                username,
                authorImage,
              }) =>
                slug && (
                  <div
                    key={_id}
                    className="md:w-[100%] border-3 pb-4 shadow-2xl rounded-xl bg-[#f1f1f1]"
                  >
                    <Link
                      href={`/post/${encodeURIComponent(slug.current)}`}
                      className="group"
                    >
                      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden  bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 mb-4 rounded-t-xl">
                        <img
                          src={urlFor(mainImage)}
                          alt={title}
                          className="h-[170px] lg:h-[230px] w-full object-cover object-center group-hover:opacity-75 "
                        />
                      </div>
                      <div className="flex flex-col justify-between h-[70px] lg:h-[100px]">
                        <h2 className="text-sm lg:text-lg font-bold text-center px-2">
                          {title}
                        </h2>
                        <div className="flex items-center justify-evenly  text-xs  xl:text-base text-gray-600 font-semibold">
                          <div className="flex items-center gap-2">
                            <img
                              src={urlFor(authorImage)}
                              className="rounded-full h-7 lg:h-9"
                              alt={username}
                            />
                            <p>{username}</p>
                          </div>
                          <p>{new Date(publishedAt).toDateString()}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
            )}
        </div>
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
