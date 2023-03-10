import React from "react";
import Link from "next/link";
import groq from "groq";
import { client } from "@/lib/client";
import { BlogCard } from "@/components";

const Index = ({ posts }) => {
  return (
    <main className=" bg-gray-900 h-screen py-28">
      <div className="relative flex flex-col gap-2 items-center bg-[#F8F4EA] py-12 px-8 lg:px-20">
        <h1 className="font-bold text-xl uppercase">Welcome to our blog!</h1>
        <BlogCard posts={posts} />
      </div>
    </main>
  );
};

export async function getStaticProps() {
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
  const posts = await client.fetch(blogPost);
  return {
    props: {
      posts,
    },
  };
}

export default Index;
