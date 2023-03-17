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
  const { image, name, details, price, smallDetails, youtubeString } = product;
  const [index, setindex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  return (
    <article className="flex flex-wrap justify-center gap-2  w-full bg-gray-900 h-screen  py-28">
      <div className="relative flex flex-col w-full gap-2 bg-[#F8F4EA] pb-20 px-3 lg:px-8">
        <div className="flex flex-col mt-4 lg:mt-10  lg:gap-2 bg-[#f1f1f1] rounded-2xl shadow-lg py-10">
          <div className="">
            <div className="w-full flex flex-col lg:flex-row">
              <div className="flex flex-col items-center gap-6 lg:w-2/4 p-4">
                <img
                  alt="product image"
                  src={urlFor(image && image[index])}
                  className="rounded-lg w-[80%] h-[250px] mdSm:w-2/3 mdSm:h-[330px] md:h-[400px]  lg:h-[500px] lg:w-full"
                />
                {youtubeString?.length === 1
                  ? youtubeString.map((video) => (
                      <div className="">
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

                  <p className="lg:w-4/5 text-lg  font-medium flex flex-col items-center">
                    {showMore ? details : `${details.substring(0, 200)}`}
                    <button
                      className="text-red-900 border-b-2 border-black uppercase text-sm mt-2"
                      onClick={() => setShowMore(!showMore)}
                    >
                      {showMore ? "Show less" : "Show more"}
                    </button>
                  </p>
                  <p className="text-3xl font-semibold">${price}</p>
                </div>
                <button className=" mb-6 lg:mb-0 mt-10 px-8 py-1.5 border-2 border-black h font-bold hover:bg-gray-900 hover:text-white ease-in duration-200 ">
                  Book Now
                </button>
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
