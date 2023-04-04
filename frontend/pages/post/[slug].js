import groq from "groq";
import { PortableText } from "@portabletext/react";
import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";

import { urlFor, client } from "@/lib/client";
import { Comments } from "@/components";
import { CommentForm } from "@/components/Blog/CommentForm";

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
            className="w-full m-auto my-8  md:w-[90%] md:object-cover "
          />
        </>
      );
    },
    youtube: ({ value }) => {
      const { url } = value;
      const id = getYouTubeID(url);
      return (
        <YouTube videoId={id} className="flex mt-2 mb-10 justify-center" />
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
        <div className="relative flex flex-col gap-2 bg-[#F8F4EA] pt-12 px-8">
          {authorImage && (
            <div className="flex items-center gap-4 text-gray-700 justify-start">
              <img
                src={urlFor(authorImage).width(50).url()}
                alt={`${name}'s picture`}
                className="rounded-full"
              />
              <p>{name}</p>
              <p>{new Date(publishedAt).toDateString()}</p>
            </div>
          )}
          <h1 className=" font-semibold text-xl sm:text-2xl lg:text-4xl  my-2">
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

          <div className="flex flex-col ptBlog text-lg leading-[1.65rem]">
            <PortableText value={body} components={ptComponents} />
          </div>
        </div>
        <div className="bg-gray-900 pt-8 px-8">
          <Comments comments={post.comments} />
          <CommentForm _id={post._id} />
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
  body,
  _id,
  'comments': *[_type == "comment" && post._ref == ^._id]{_id, name, email, comment, _createdAt}
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
