import groq from "groq";
import { PortableText } from "@portabletext/react";
import { urlFor, client } from "@/lib/client";
import { SocialMedia, Copyright } from "@/components";

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <>
          <img
            alt={value.alt || " "}
            loading="lazy"
            src={urlFor(value)}
            className="w-full h-1/2  md:w-[90%] md:h-screen md:object-cover m-auto mb-2"
          />
        </>
      );
    },
  },
};

const Post = ({ post }) => {
  const {
    title = "Missing title",
    name = "Missing name",
    categories,
    authorImage,
    body = [],
    publishedAt,
  } = post;

  return (
    <>
      <article className="bg-gray-900 h-screen py-28">
        <div className="relative flex flex-col gap-2 bg-[#F8F4EA] pt-12 pb-20 px-8">
          <SocialMedia />
          <Copyright />
          {authorImage && (
            <div className="flex items-center gap-4 text-gray-700 justify-center md:justify-start">
              <img
                src={urlFor(authorImage).width(50).url()}
                alt={`${name}'s picture`}
                className="rounded-full"
              />
              <p>{name}</p>
              <p>{new Date(publishedAt).toDateString()}</p>
            </div>
          )}
          <h1 className=" font-semibold text-xl lg:text-3xl text-center">
            {title}
          </h1>
          {categories && (
            <ul>
              Posted in
              {categories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          )}

          <PortableText value={body} components={ptComponents} />
        </div>
      </article>
    </>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  publishedAt,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`;
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post,
    },
  };
}

export default Post;
