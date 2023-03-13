import React, { useState } from "react";
import { urlFor, client } from "@/lib/client";
import { SocialMedia, Copyright, ServiceCard } from "@/components";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price, smallDetails } = product;
  const [index, setindex] = useState(0);

  return (
    <article className="flex flex-wrap justify-center gap-2  w-full bg-gray-900 h-screen  py-28">
      <div className="relative flex flex-col w-full h-screen  gap-2 bg-[#F8F4EA] pb-20 px-8">
        <div className="flex flex-col mt-10 lg:flex-row gap-16 bg-white rounded-2xl shadow-lg">
          <div className="flex flex-col gap-6 lg:w-2/4 p-8">
            <img
              src={urlFor(image && image[index])}
              className="rounded-lg w-full lg:w-[90%] lg:h-[500px]"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-2 lg:w-2/4 p-8 text-center ">
            <h1 className="font-bold text-xl lg:text-5xl">{name}</h1>
            <div className="mt-3 flex flex-col items-center gap-5 text-gray-700">
              <p className="mb-6 w-4/5 text-base text-center">{smallDetails}</p>
              <p className="w-4/5 text-xl  font-medium">{details}</p>
              <p className="text-3xl font-semibold">${price}</p>
            </div>
            <button className="mt-10 px-8 py-1.5 border-2 border-black h font-bold hover:bg-gray-900 hover:text-white ease-in duration-200 ">
              Book Now
            </button>
          </div>
        </div>
        {/* <div className=" bg-black">
          <h2>Our Services</h2>
          <div className="">
            {products.map((item) => (
              <ServiceCard key={item._id} product={item} />
            ))}
          </div>
        </div> */}
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
