import React from "react";
import {
  CalculatorIcon,
  CalendarCoin,
  HandCash,
  HandCoin,
  PhoneCard,
  WithdrawCash,
} from "@/components/common/shapes";

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

export default function Services() {
  return (
    <section className="py-20 lg:py-40 px-4 md:px-8 2xl:px-0">
      <div className="w-full max-w-[1080px] 2xl:max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between">
          <h1 className="mb-8 lg:mb-0 text-4xl lg:text-5xl questa lg:w-1/2 max-w-[520px]">
            Berbagai Spesialisasi di Bidang Akuntansi, Pelaporan Keuangan dan
            Perpajakan
          </h1>
          <div className="lg:w-1/2 lg:ml-16 2xl:text-lg">
            <p className="mb-6">
              Kami menyediakan berbagai jasa akuntan yang terpercaya dengan
              menerapkan prinsip akuntansi secara umum. Dengan menggunakan
              layanan jasa akuntan Azhar Maksum dan Rekan, anda akan memperoleh
              keuntungan pencatatan transaksi keuangan yang dapat dipantau
              secara real-time.
            </p>
            <p>
              Selain itu, kami juga melakukan pengecekan terhadap pajak yang
              terjadi atas transaksi keuangan sehingga dapat meminimalisir denda
              pajak.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-12 lg:mt-24">
          {servicesList.map(({ icon, title, desc }, i) => (
            <div
              className="group bg-lightgrey px-6 lg:px-8 py-12 lg:py-16 hover:text-white hover:bg-primary transition-colors duration-300"
              key={i}
            >
              {React.cloneElement(icon, {
                className:
                  "fill-black group-hover:fill-white transition-colors duration-300",
              })}
              <h1 className="questa text-2xl lg:text-3xl my-4 lg:my-8">
                {title}
              </h1>
              <p className="lg:text-lg">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
