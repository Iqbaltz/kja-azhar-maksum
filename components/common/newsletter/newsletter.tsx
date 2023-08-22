import React from "react";
import { Button } from "../button";

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
  return (
    <section className="bg-bglight py-20 lg:py-32 px-4 md:px-8 2xl:px-0">
      <div className="w-full max-w-[1080px] 2xl:max-w-[1280px] mx-auto">
        <h1 className="questa text-4xl lg:text-5xl text-center mb-16">
          Berita Terbaru
        </h1>
        <div className="grid grid-cols-2 2xl:grid-cols-4 gap-4 md:gap-8">
          {newsList.map(({ releaseAt, title }, i) => (
            <NewsletterCard releaseAt={releaseAt} title={title} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface INewsletterCard {
  releaseAt: any;
  title: string;
}

function NewsletterCard({ releaseAt, title }: INewsletterCard) {
  return (
    <div>
      <p>{releaseAt}</p>
      <h1 className="my-3 text-xl lg:text-2xl questa">{title}</h1>
      <Button variant="secondary">Selengkapnya</Button>
    </div>
  );
}
