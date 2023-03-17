import { client } from "@/lib/client";
import { SocialMedia, Copyright, ServiceCard } from "@/components";

const Index = ({ products }) => {
  return (
    <main className=" bg-gray-900 h-screen py-28">
      <div className="relative flex flex-col gap-8 items-center bg-[#F8F4EA] py-12 px-8 lg:px-20">
        <SocialMedia />
        <Copyright />
        <h1 className="font-bold text-xl uppercase">All Services</h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 mb-3">
          {products?.map((product) => (
            <ServiceCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};

export async function getStaticProps() {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
}

export default Index;
