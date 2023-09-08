import React from "react";
import {
  CalculatorIcon,
  CalendarCoin,
  HandCash,
  HandCoin,
  PhoneCard,
  WithdrawCash,
} from "@/components/common/shapes";
import { useRouter } from "next/router";
import { urlForImage } from "@/sanity/lib/image";
import { filterLocalizedService } from "@/lib/helper";

const servicesList = [
  {
    icon: <CalculatorIcon />,
    title: "Pembukuan Laporan Keuangan",
    desc: "Memberikan jasa penyusunan laporan keuangan dan pembukuan. Semua informasi keuangan tercatat sesuai dengan fungsi bookkeeping.",
  },
  {
    icon: <HandCash />,
    title: "Konsultasi Akuntansi dan Manajemen",
    desc: "Membantu pengelolaan keuangan perusahaan serta layanan manajemen perusahaan demi meningkatkan kinerja produktivitas secara efisien.",
  },
  {
    icon: <WithdrawCash />,
    title: "Konsultasi Perpajakan",
    desc: "Memberikan jasa konsultasi perpajakan yang membantu wajib pajak dalam rangka mengurus dan melaksanakan hak dan kewajiban perpajakan sesuai undang-undang yang berlaku.",
  },
  {
    icon: <CalculatorIcon />,
    title: "Jasa Pemeriksaan Keuangan",
    desc: "Memberikan jasa pemeriksaan prosedur yang disepakati atas laporan keuangan guna mencapai tujuan yang hendak dicapai oleh klien.",
  },
  {
    icon: <HandCoin />,
    title: "Jasa Verifikasi Laporan Keuangan",
    desc: "Memberikan jasa pendampingan penyusunan laporan keuangan sesuai dengan arahan dan rekomendasi dalam menyusun laporan keuangan.",
  },
  {
    icon: <WithdrawCash />,
    title: "Penyusunan Tata Kelola Perusahaan",
    desc: "Membantu membuat struktur tata kelola perusahaan yang baik menjadi tolak ukur yang penting dalam mencapai visi misi bagi perusahaan.",
  },
  {
    icon: <PhoneCard />,
    title: "Konsultasi Teknologi Informasi",
    desc: "Memberikan jasa konsultasi sistem teknologi informasi akuntansi guna mengumpulkan, menyimpan dan mengolah data keuangan.",
  },
  {
    icon: <HandCash />,
    title: "Pemeriksaan Internal Perusahaan",
    desc: "Memberikan jasa pemeriksaan internal perusahaan untuk menemukan alternatif yang terbaik dalam setiap operasi perusahaan.",
  },
  {
    icon: <CalendarCoin />,
    title: "Pelatihan Akuntansi",
    desc: "Memberikan jasa pelatihan akuntansi dalam mencatat, mengolah dan menyajikan data transaksi sesuai dengan kebutuhan teknis akuntansi yang relevan untuk kebutuhan klien.",
  },
];

interface IServicesProps {
  data: {
    title: string;
    description1: string;
    description2: string;
    services: any;
    _key: string;
    _type: string;
  };
}

export default function Services({ data }: IServicesProps) {
  const { locale } = useRouter();
  return (
    <section className="py-20 xl:py-32 2xl:py-40 px-4 md:px-8 2xl:px-0">
      <div className="w-full max-w-[1080px] 2xl:max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-8 lg:mb-0 lg:w-1/2">
            <h1 className="questa text-4xl 2xl:text-5xl max-w-[380px] 2xl:max-w-[520px]">
              {data?.title}
            </h1>
          </div>
          <div className="lg:w-1/2 lg:ml-16 2xl:text-lg xl:text-sm !leading-relaxed">
            <p className="mb-6">{data?.description1}</p>
            <p>{data?.description2}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 xl:mt-20 2xl:mt-24">
          {filterLocalizedService(data?.services, locale || "id").map(
            ({ _key, description, image, title }) => (
              <div
                className="group bg-lightgrey px-6 lg:px-8 py-12 lg:py-16 hover:text-white hover:bg-primary transition-colors duration-300"
                key={_key}
              >
                <img
                  src={urlForImage(image).url()}
                  className="xl:w-12 2xl:w-auto group-hover:invert transition-filter duration-300"
                  alt={title}
                />
                <h1 className="questa text-2xl 2xl:text-3xl my-4 lg:my-8">
                  {title}
                </h1>
                <p className="2xl:text-lg xl:text-sm !leading-relaxed">
                  {description}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
