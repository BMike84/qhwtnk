import React from "react";
import { urlFor } from "@/lib/client";
import Link from "next/link";
import SlugCalendlyButton from "../calendly/SlugCalendlyButton";
import PaypalButton from "@/components/buttons/PaypalButton";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const ServiceCard = ({ product }) => {
  return (
    <div className="mb-8 w-full  px-1 ">
      <Link
        key={product._id}
        href={`/services/${product.slug.current}`}
        className="text-gray-700 hover:text-red-900"
      >
        <div className="overflow-hidden  w-full">
          <img
            src={urlFor(product.image && product.image[0])}
            alt={product.imageAlt}
            className="h-[200px] xl:h-[270px]  w-full max-w-[500px] object-cover object-center hover:opacity-75 m-auto rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center font-semibold text-md xl:text-lg text-center px-2">
          <h3 className="mt-4 ">{product.name}</h3>
          <p className="my-2">${product.price}</p>
        </div>
      </Link>
      <div className="flex justify-center">
        {product.slug.current && (
          <div className="flex flex-col gap-2">
            <SlugCalendlyButton
              url={product.calendly}
              className="px-6 py-[0.33rem] border-2 border-black  hover:bg-gray-900 hover:text-white ease-in duration-200"
            />
            <PayPalScriptProvider
              options={{
                "client-id": "test",
                "disable-funding": "card",
                currency: "USD",
              }}
            >
              <PaypalButton price={product.price} />
            </PayPalScriptProvider>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
