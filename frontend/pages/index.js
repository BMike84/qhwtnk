import React from "react";
import {
  Product,
  Blog,
  Bqh,
  Contact,
  HeroBanner,
  QuoteBanner,
  Testimonials,
  TestimonialData,
} from "@/components";

import { client } from "@/lib/client";
// import { urlFor, client } from '../../client';
const Home = ({ products, bannerData, testimonialsData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {/* <div>
        {testimonialsData?.map((testimonial) => (
          <Testimonials testimonial={testimonial} />
        ))}
      </div> */}
      <div className="bg-[#F8F4EA] p-10">
        <h2 className="text-4xl font-bold text-center">
          What People Are Saying!
        </h2>
        <Testimonials testimonial={testimonialsData} />
      </div>

      {/* <QuoteBanner />
      <Bqh />
      <Product />
      <Blog />
      <Testimonials />
      <Contact /> */}
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
