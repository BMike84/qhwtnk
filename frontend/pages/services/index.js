import React, { useState, useEffect, useMemo } from "react";
import { client } from "@/lib/client";
import groq from "groq";
import { SocialMedia, Copyright, ServiceCard } from "@/components";
const categories = ["all", "bqh", "rsr", "mentorship"];

const Index = ({ products }) => {
  const [services, setServices] = useState([]);
  const [filterService, setFilterService] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    setServices(products);
    setFilterService(products);
    setActiveFilter("All");
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    if (item === "All") {
      setFilterWork(services);
    } else {
      setFilterService(
        services.filter((service) => service.categories.includes(item))
      );
    }
  };

  return (
    <main className=" bg-gray-900 h-screen py-28">
      <div className="relative flex flex-col gap-8 items-center bg-[#F8F4EA] py-12 px-8 lg:px-20">
        <SocialMedia />
        <Copyright />
        <h1 className="font-bold text-xl uppercase">
          {activeFilter === "all"
            ? "All Services"
            : activeFilter === "bqh"
            ? "BEYOND QUANTUM HEALING (BQH) Services"
            : activeFilter === "rsr"
            ? "REMOTE SPIRIT RELEASE (RSR) Services"
            : "MENTORSHIP & EMPOWERMENT PACKAGES"}
        </h1>
        <div className="flex gap-4 uppercase w-full justify-center">
          {categories.map((item, index) => (
            <p
              className={`border-b-2 border-black font-bold uppercase hover:text-red-600 ${
                activeFilter.toLowerCase() === item.toLowerCase()
                  ? "text-red-600"
                  : ""
              }`}
              key={index}
              onClick={() => handleWorkFilter(item)}
            >
              {item}
            </p>
          ))}
        </div>
        <div
          className={`${
            filterService.length >= 3
              ? "grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 mb-3 place-items-center"
              : filterService.length === 2
              ? "grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-2  mb-3 "
              : "grid grid-cols-1 gap-y-10 gap-x-6   mb-3 "
          }`}
        >
          {filterService.map((product) => (
            <ServiceCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};

export async function getStaticProps() {
  const query = groq`*[_type == "product"]{
    _id,
    image,
    name,
    slug,
    price,
    details,
    bodyDetails,
    smallDetails,
    popular,
    youtubeString,
    feature, 
    categories[],
  } | order(feature != true  )

  `;
  const products = await client.fetch(query);

  return {
    props: { products },
  };
}

export default Index;
