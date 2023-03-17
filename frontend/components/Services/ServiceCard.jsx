import React from "react";
import { urlFor } from "@/lib/client";
import Link from "next/link";

const ServiceCard = ({ products, product }) => {
  return (
    <div className="mb-8 w-full px-1">
      <Link
        key={product._id}
        href={`/services/${product.slug.current}`}
        className="group"
      >
        <div className="overflow-hidden rounded-lg">
          <img
            src={urlFor(product.image && product.image[0])}
            alt={product.imageAlt}
            className="h-[200px] xl:h-[270px] w-full object-cover object-center group-hover:opacity-75 "
          />
        </div>
        <h3 className="mt-4 text-md xl:text-lg font-semibold text-gray-700 text-center sm:text-start">
          {product.name}
        </h3>
        <p className="mt-1 text-lg xl:text-xl font-medium text-gray-900 text-center sm:text-start">
          ${product.price}
        </p>
      </Link>
    </div>
  );
};

export default ServiceCard;
