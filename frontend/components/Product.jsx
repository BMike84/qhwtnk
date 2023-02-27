import React from "react";
import { urlFor } from "@/lib/client";
import { motion } from "framer-motion";

const Product = ({ products }) => {
  return (
    <div className="bg-[#F8F4EA]">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ type: "spring", duration: 5, bounce: 0.3 }}
        className="mx-auto max-w-2xl py-8 px-4  sm:px-6 lg:max-w-7xl lg:px-4"
      >
        <h2 className="text-3xl font-bold mb-8 text-center ">
          Our Featured Services
        </h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {products.map(
            (product) =>
              product.feature && (
                <a key={product._id} href="" className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={urlFor(product.image && product.image[0])}
                      alt={product.imageAlt}
                      className="h-[200px] w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-md text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    ${product.price}
                  </p>
                </a>
              )
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Product;
