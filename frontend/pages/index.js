import React from "react";
import {
  ServiceCard,
  FeatureBlog,
  // BlogCard,
  Contact,
  HeroBanner,
  TestimonialsCard,
  YouTubeBook,
  Meet,
} from "@/components";

import { client } from "@/lib/client";
import groq from "groq";

const Home = ({ products, bannerData, testimonialsData, blogPostData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <ServiceCard products={products} />
      <Meet />
      <FeatureBlog posts={blogPostData} />
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
   shortDesc,
   "username": author->name,
   "categories": categories[]->{id, title},
   "authorImage": author->image,
   body,
   mainImage,
   slug,
   publishedAt
  } | order(publishedAt desc)`;
  const blogPostData = await client.fetch(blogPost);

  return {
    props: { products, bannerData, testimonialsData, blogPostData },
  };
};

export default Home;
