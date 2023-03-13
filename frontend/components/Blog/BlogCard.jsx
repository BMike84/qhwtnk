import React from "react";
import { urlFor } from "@/lib/client";
import Link from "next/link";

const BlogCard = ({ posts }) => {
  return (
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
                className="md:w-[100%] border-3 pb-4 shadow-2xl rounded-xl bg-white"
              >
                <Link
                  href={`/post/${encodeURIComponent(slug.current)}`}
                  className="group"
                >
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden  bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 mb-4 rounded-t-xl">
                    <img
                      src={urlFor(mainImage)}
                      alt={title}
                      className="h-[200px] lg:h-[250px] w-full object-cover object-center group-hover:opacity-75 "
                    />
                  </div>
                  <div className="flex flex-col justify-between h-[80px] lg:h-[100px]">
                    <h2 className="text-sm lg:text-lg font-bold text-center px-2">
                      {title}
                    </h2>
                    <div className="flex items-center justify-evenly  text-xs  xl:text-base text-gray-600 font-semibold">
                      <div className="flex items-center gap-2">
                        <img
                          src={urlFor(authorImage)}
                          className="rounded-full h-8 lg:h-10"
                          alt={username}
                        />
                        <p>{username}</p>
                      </div>
                      <p>{new Date(publishedAt).toDateString()}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-around px-3 mt-5 h-[140px]">
                    <p className="px-2 text-xs text-center xl:text-sm text-gray-800">
                      {shortDesc}
                    </p>
                    <div>
                      <p className="mt-6 text-white bg-gray-900 hover:bg-gray-700 font-semibold rounded-lg text-xs xl:text-sm px-2 py-[0.4rem] lg:px-3 lg:py-2 text-center inline-flex items-center ">
                        Read More
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            )
        )}
    </div>
  );
};

export default BlogCard;
