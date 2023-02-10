import React from "react";
import {
  Product,
  Blog,
  Bqh,
  Contact,
  HeroBanner,
  QuoteBanner,
  Testimonials,
} from "@/components";

import { client } from "@/lib/client";
const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
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

  return {
    props: { products, bannerData },
  };
};

export default Home;
