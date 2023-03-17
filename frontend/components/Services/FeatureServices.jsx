import React from "react";
import { urlFor } from "@/lib/client";
import { motion } from "framer-motion";
import { Copyright, NavigationDots, SocialMedia } from "..";
import Link from "next/link";

const FeatureServices = ({ products }) => {
  return (
    <div
      id="featureservices"
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
          Our Featured Services
        </h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 mb-3 lg:w-full">
          {products.map(
            (product) =>
              product.feature && (
                <Link
                  key={product._id}
                  href={`/services/${product.slug.current}`}
                  className="group"
                >
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={urlFor(product.image && product.image[0])}
                      alt={product.imageAlt}
                      className="h-[200px] xl:h-[270px] w-full object-cover object-center group-hover:opacity-75 "
                    />
                  </div>
                  <h3 className="mt-4 text-md font-semibold text-gray-700">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    ${product.price}
                  </p>
                </Link>
              )
          )}
        </div>
        <button className="mb-20 md:mb-14 px-8 py-1.5 border-2 border-black h font-bold hover:bg-gray-900 hover:text-white ease-in duration-200 ">
          View All
        </button>
      </motion.div>
    </div>
  );
};

export default FeatureServices;
