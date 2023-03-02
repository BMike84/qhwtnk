import React, { useEffect } from "react";
import {
  ServiceCard,
  BlogCard,
  Contact,
  HeroBanner,
  TestimonialsCard,
  YouTubeBook,
  Meet,
  NavigationDots,
  SocialMedia,
  Copyright,
} from "@/components";

import { client } from "@/lib/client";
import groq from "groq";

const Home = ({ products, bannerData, testimonialsData, blogPostData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <ServiceCard products={products} />
      <Meet />
      <BlogCard posts={blogPostData} />
      <YouTubeBook />
      <TestimonialsCard testimonials={testimonialsData} />

      <div>
        <Contact />
      </div>
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

  const blogPost = groq`*[_type == "post"] {
   _id,
   title,
   "username": author->name,
   "categories": categories[]->{id, title},
   "authorImage": author->image,
   body,
   mainImage,
   slug,
   publishedAt
  } | order(_createdAt desc)`;
  const blogPostData = await client.fetch(blogPost);

  return {
    props: { products, bannerData, testimonialsData, blogPostData },
  };
};

export default Home;
