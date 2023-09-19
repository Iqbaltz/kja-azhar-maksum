import { Hero } from "@/components/common/hero";
import { Newsletter } from "@/components/common/newsletter";
import { LinkedinIcon } from "@/components/common/shapes";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import {
  getNewsBySlug,
  getNewsPaths,
  getSimpleNews,
} from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import {
  LinkedinShareButton,
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "next-share";
import Link from "next/link";
import React from "react";

const myBlocks: any = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-4xl">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-2xl">{children}</h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-xl">{children}</h4>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="xl:text-sm 2xl:text-base">{children}</p>
  ),
  normal: ({ children }: { children: React.ReactNode }) => (
    <p className="xl:text-sm 2xl:text-base">{children}</p>
  ),
};

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

export const getStaticProps: GetStaticProps = async ({
  params,
  locale,
}: any) => {
  const news = await getNewsBySlug(client, params?.slug);
  const otherNews = await getSimpleNews(client);

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
      otherNews,
      locale,
    },
    revalidate: 1,
  };
};

export default function NewsPage({
  news,
  otherNews,
  locale,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const url = `https://kja-azhar-maksum.vercel.app/news/${news?.slug?.current}`;

  console.log(locale);
  if (!news) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Hero
        bgSrc={urlForImage(news?.mainImage).url()}
        title={news?.title}
        subtitle={`Diterbitkan oleh ${news?.author?.name}. ${new Date(
          news._createdAt
        ).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}`}
        isNews
      />
      <section className="w-full max-w-[1080px] px-4 md:px-8 xl:px-0  2xl:max-w-[1280px] mx-auto py-24 2xl:py-32">
        <div className="flex justify-between items-start">
          <div className="max-w-[640px] 2xl:max-w-[744px]">
            <PortableText value={news?.body} components={{ block: myBlocks }} />
          </div>
          <div className="bg-lightgrey px-10 py-12 ml-12 hidden xl:block">
            <h1 className="questa text-2xl">Berita Lainnya</h1>
            {otherNews?.map(({ title, slug }: any, i: number) => (
              <p
                className="max-w-[320px] xl:text-sm 2xl:text-base mt-6"
                key={i}
              >
                <Link href={`/news/${slug}`}>{title}</Link>
              </p>
            ))}
          </div>
        </div>
        <div className="flex items-center mt-12">
          <p>
            {locale == "en"
              ? "Share this article now."
              : "Bagikan artikel ini sekarang juga."}
          </p>
          <div className="grid items-end grid-cols-4 gap-7 ml-12">
            <LinkedinShareButton url={url}>
              <img src="/images/linkedinShareIcon.png" alt="linkedin" />
            </LinkedinShareButton>
            <FacebookShareButton url={url}>
              <img src="/images/facebookShareIcon.png" alt="facebook" />
            </FacebookShareButton>
            <TwitterShareButton url={url}>
              <img src="/images/twitterShareIcon.png" alt="twitter" />
            </TwitterShareButton>
            <EmailShareButton url={url}>
              <img src="/images/emailShareIcon.png" alt="email" />
            </EmailShareButton>
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
