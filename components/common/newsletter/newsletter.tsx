import React, { useEffect, useState } from "react";
import { Button } from "../button";
import { getSimpleNews } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

export default function Newsletter() {
  const [news, setNews] = useState<any[]>();

  const fetchNews = async () => {
    const res = await getSimpleNews(client);
    setNews(res);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <section className="bg-bglight py-20 xl:py-32 2xl:py-40 px-4 md:px-8 2xl:px-0">
      <div className="w-full max-w-[1080px] 2xl:max-w-[1280px] mx-auto">
        <h1 className="questa text-4xl 2xl:text-5xl text-center mb-16">
          Berita Terbaru
        </h1>
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
          {news?.map(({ title, _createdAt, slug }, i) => (
            <NewsletterCard
              releaseAt={_createdAt}
              title={title}
              slug={slug}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface INewsletterCard {
  releaseAt: any;
  title: string;
  slug: string;
}

function NewsletterCard({ releaseAt, title, slug }: INewsletterCard) {
  return (
    <div>
      <p className="xl:text-sm 2xl:text-base">
        {new Date(releaseAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <h1 className="mt-4 mb-6 text-xl 2xl:text-2xl questa">{title}</h1>
      <Link href={`/news/${slug}`}>
        <Button variant="secondary">Selengkapnya</Button>
      </Link>
    </div>
  );
}
