import React, { useEffect, useState } from "react";
import { Button } from "../button";
import { getSimpleNews } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

const newsList = [
  {
    releaseAt: "May 15, 2023",
    title:
      "Kelola Masalah Keuangan Berikut, Sukses Membangun Perusahaan Startup",
  },
  {
    releaseAt: "May 8, 2023 ",
    title: "Lima Aplikasi Akuntansi Online yang Banyak Digunakan",
  },
  {
    releaseAt: "April 20, 2023",
    title: "Panduan Ringkas Tata Kelola Laporan Keuangan Entitas",
  },
  {
    releaseAt: "April 18, 2023",
    title: "Aplikasi Akuntansi Online Untuk Manajemen Keuangan",
  },
];

export default function Newsletter() {
  const [news, setNews] = useState<any[]>();

  const fetchNews = async () => {
    const res = await getSimpleNews(client);
    setNews(res);
  };

  console.log(news);

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <section className="bg-bglight py-20 lg:py-32 px-4 md:px-8 2xl:px-0">
      <div className="w-full max-w-[1080px] 2xl:max-w-[1280px] mx-auto">
        <h1 className="questa text-4xl lg:text-5xl text-center mb-16">
          Berita Terbaru
        </h1>
        <div className="grid grid-cols-2 2xl:grid-cols-4 gap-4 md:gap-5">
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
      <p>
        {new Date(releaseAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <h1 className="my-3 text-xl lg:text-2xl questa">{title}</h1>
      <Link href={`/news/${slug}`}>
        <Button variant="secondary">Selengkapnya</Button>
      </Link>
    </div>
  );
}
