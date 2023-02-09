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

const Home = () => {
  return (
    <>
      <HeroBanner />
      <QuoteBanner />
      <Bqh />
      <Product />
      <Blog />
      <Testimonials />
      <Contact />
      <div></div>
    </>
  );
};

export default Home;
