import React, { useState } from "react";
import { urlFor, client } from "@/lib/client";
import { SocialMedia, Copyright, ServiceCard } from "@/components";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  laptop: {
    breakpoint: { max: 1023, min: 700 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 699, min: 465 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price, smallDetails } = product;
  const [index, setindex] = useState(0);

  return (
    <article className="flex flex-wrap justify-center gap-2  w-full bg-gray-900 h-screen  py-28">
      <div className="relative flex flex-col w-full   gap-2 bg-[#F8F4EA] pb-20 px-8">
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
        <div className="flex flex-col w-full gap-4 mt-8">
          <h2 className="text-xl font-semibold text-center uppercase">
            You May also like
          </h2>
          <div className="flex justify-center">
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={20}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              className="w-full  mb-8"
            >
              {products.map((item) => (
                <ServiceCard key={item._id} product={item} />
              ))}
            </Carousel>
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
