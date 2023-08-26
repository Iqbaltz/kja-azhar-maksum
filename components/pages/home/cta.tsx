import { Button } from "@/components/common/button";
import React from "react";

type Props = { data: any };

export default function Cta({ data }: Props) {
  return (
    <section className="py-20 lg:py-40 px-4 md:px-8 2xl:px-0 bg-bgprimary text-white">
      <div className="mx-auto max-w-[1080px] 2xl:max-w-[1280px] text-center">
        <h1 className="text-5xl lg:text-6xl 2xl:text-7xl questa mb-12">
          Mulai Konsultasi Gratis
        </h1>
        <p className="2xl:text-lg mb-12 max-w-[960px] mx-auto">
          Sebagai upaya membantu bisnis anda berkembang dengan bertindak sebagai
          konsultan akuntansi / keuangan, kami memberikan fasilitas konsultasi
          gratis sebelum anda menggunakan jasa kami.
        </p>
        <div className="flex justify-center">
          <input
            className="px-6 lg:min-w-[480px] 2xl:min-w-[580px] rounded-l placeholder:text-white/30 bg-primary outline-none"
            placeholder="Masukkan email anda"
            type="email"
          />
          <Button className="-translate-x-1">Konsultasi</Button>
        </div>
      </div>
    </section>
  );
}
