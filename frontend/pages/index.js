import React from "react";
import {
  Product,
  Blog,
  Contact,
  HeroBanner,
  QuoteBanner,
  Testimonials,
  YouTubeBook,
  Meet,
} from "@/components";

import { client } from "@/lib/client";

const Home = ({ products, bannerData, testimonialsData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <Product products={products} />
      <div className="bg-gray-900 text-white pt-4">
        <h2 className="text-center text-2xl md900:text-3xl font-bold">
          Meet The Team
        </h2>
        <Meet />
        <QuoteBanner />
      </div>

      <Blog />
      <YouTubeBook />
      <div className="bg-[#F8F4EA] p-10">
        <h2 className="text-3xl font-bold text-center">
          What People Are Saying!
        </h2>
        <Testimonials testimonial={testimonialsData} />
      </div>
      <Contact />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const testimonialsQuery = '*[_type == "testimonials"]';
  const testimonialsData = await client.fetch(testimonialsQuery);

  return {
    props: { products, bannerData, testimonialsData },
  };
};

export default Home;
