import { Hero } from "@/components/common/hero";
import { Newsletter } from "@/components/common/newsletter";
import { client } from "@/sanity/lib/client";
import { getNewsBySlug, getNewsPaths } from "@/sanity/lib/queries";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const paths = await getNewsPaths(client);
    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const news = await getNewsBySlug(client, params?.slug);

  if (!news) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      news,
    },
    revalidate: 1,
  };
};

export default function NewsPage({
  news,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log("news", news);
  if (!news) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Hero
        title={news?.title}
        subtitle={`Diterbitkan oleh ${news?.author?.name}. ${new Date(
          news._createdAt
        ).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}`}
      />
      <Newsletter />
    </>
  );
}
