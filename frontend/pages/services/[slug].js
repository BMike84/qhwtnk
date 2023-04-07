import React, { useState, useEffect } from "react";
import Link from "next/link";
import PaypalButton from "@/components/buttons/PaypalButton";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { urlFor, client } from "@/lib/client";
import { SocialMedia, Copyright, ServiceCard } from "@/components";
import SlugCalendlyButton from "@/components/calendly/SlugCalendlyButton";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const ProductDetails = ({ product, products }) => {
  const {
    image,
    name,
    price,
    smallDetails,
    youtubeString,
    calendly,
    _id,
    bodyDetails,
  } = product;
  const [index, setindex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setShowMore(false);
  }, [_id]);

  return (
    <article className="flex flex-wrap justify-center gap-2  w-full bg-gray-900 h-screen  py-28">
      <div className="relative flex flex-col w-full gap-2 bg-[#F8F4EA]  px-2 lg:px-8">
        <div className="flex mt-4">
          <Link
            href="/services"
            className="border-2 border-black px-6 py-1  hover:bg-gray-900 hover:text-white ease-in duration-200  flex items-center gap-2 text-sm uppercase"
          >
            <BsFillArrowLeftCircleFill className="" /> <span>Back</span>
          </Link>
        </div>
        <div className="flex flex-col mt-4 mb-20 lg:mt-2  lg:gap-2 bg-[#f1f1f1] rounded-2xl shadow-lg py-10">
          <div className="">
            <div className="w-full flex flex-col lg:flex-row px-6">
              <div className="flex flex-col items-center gap-6 lg:w-2/4 px-2 sm:px-0 py-4">
                <img
                  alt="product image"
                  src={urlFor(image && image[index])}
                  className="rounded-lg w-full h-[250px] mdSm:w-2/3 mdSm:h-[330px] md:h-[400px]  lg:h-[500px] lg:w-full"
                />
                {youtubeString?.length === 1
                  ? youtubeString.map((video, index) => (
                      <div className="" key={index}>
                        <iframe
                          src={video}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className=" w-[290px] h-[190px] mdSm:w-[300px] mdSm:h-[190px] md:w-[360px] md:h-[200px] lg:w-[500px] lg:h-[280px]"
                        />
                      </div>
                    ))
                  : ""}
              </div>
              <div className="flex flex-col pt-10 items-center gap-2 lg:w-2/4 px-4 text-center ">
                <h1 className="font-bold text-xl lg:text-3xl">{name}</h1>
                <div className="flex flex-col items-center gap-5 text-gray-700">
                  <p className="mb-6 text-sm text-center">{smallDetails}</p>

                  <p
                    className="lg:w-4/5 text-lg  font-medium flex flex-col items-center"
                    style={{ whiteSpace: "break-spaces" }}
                  >
                    {showMore
                      ? bodyDetails
                      : `${bodyDetails.substring(0, 130).concat("...")}`}
                    <button
                      className="text-red-900 border-b-2 border-black uppercase text-sm mt-2"
                      onClick={() => setShowMore(!showMore)}
                    >
                      {showMore ? "Show less" : "Show more"}
                    </button>
                  </p>
                  <p className="text-3xl font-semibold">${price}</p>
                </div>
                <div className="flex flex-col gap-4">
                  <SlugCalendlyButton
                    url={calendly}
                    className="mt-10 px-8
                py-1.5 border-2 border-black h font-bold hover:bg-gray-900
                hover:text-white ease-in duration-200 "
                  />
                  <PayPalScriptProvider
                    options={{
                      "client-id": "test",
                      "disable-funding": "card",
                      currency: "USD",
                    }}
                  >
                    <PaypalButton price={price} />
                  </PayPalScriptProvider>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center lg:flex-row gap-3 ml-4">
            {youtubeString?.length > 1
              ? youtubeString.map((video, index) => (
                  <div key={index}>
                    <iframe
                      src={video}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className=" w-[290px] h-[190px] mdSm:w-[300px] mdSm:h-[190px] md:w-[360px] md:h-[200px] lg:w-[500px] lg:h-[280px]"
                    />
                  </div>
                ))
              : ""}
          </div>
        </div>

        <div>
          <SocialMedia />
          <Copyright />
        </div>
      </div>
    </article>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};
export default ProductDetails;
