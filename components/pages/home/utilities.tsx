import React from "react";
import {
  CalculatorIcon,
  HandCash,
  WithdrawCash,
} from "@/components/common/shapes";
import { Button } from "@/components/common/button";

export default function Utilities() {
  return (
    <section className="py-20 2xl:py-40 text-white bg-bgprimary px-4 md:px-8 2xl:px-0">
      <div className="w-full max-w-[1080px] 2xl:max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:justfiy-between mb-12 lg:mb-20">
          <div className="mb-8 lg:mb-0 lg:w-1/2">
            <h1 className="questa text-4xl lg:text-5xl max-w-[520px]">
              Berbagai Spesialisasi di Bidang Akuntansi, Pelaporan Keuangan dan
              Perpajakan
            </h1>
          </div>
          <div className="lg:w-1/2 lg:ml-20 lg:text-lg">
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
        <div className="flex flex-col lg:flex-row justify-center text-black mb-12 lg:mb-20">
          <div className="group lg:w-1/3 px-8 py-12 lg:px-12 lg:py-16 bg-white hover:text-white hover:bg-primary transition-colors duration-300">
            <CalculatorIcon className="fill-black group-hover:fill-white transition-colors duration-300" />
            <h1 className="questa text-2xl lg:text-3xl my-6">
              Pembukuan Laporan Keuangan
            </h1>
            <p className="lg:text-lg">
              Memberikan jasa penyusunan laporan keuangan dan pembukuan. Semua
              informasi keuangan tercatat sesuai dengan fungsi bookkeeping.
            </p>
          </div>
          <div className="group lg:w-1/3 px-8 py-12 lg:px-12 lg:py-16 bg-white hover:text-white hover:bg-primary transition-colors duration-300 my-4 lg:my-0 lg:mx-6">
            <HandCash className="fill-black group-hover:fill-white transition-colors duration-300" />
            <h1 className="questa text-2xl lg:text-3xl my-6">
              Konsultasi Akuntansi dan Manajemen
            </h1>
            <p className="lg:text-lg">
              Membantu pengelolaan keuangan perusahaan serta layanan manajemen
              perusahaan demi meningkatkan kinerja produktivitas secara efisien.
            </p>
          </div>
          <div className="group lg:w-1/3 px-8 py-12 lg:px-12 lg:py-16 bg-white hover:text-white hover:bg-primary transition-colors duration-300">
            <WithdrawCash className="fill-black group-hover:fill-white transition-colors duration-300" />
            <h1 className="questa text-2xl lg:text-3xl my-6">
              Konsultasi Perpajakan
            </h1>
            <p className="lg:text-lg">
              Memberikan jasa konsultasi perpajakan yang membantu wajib pajak
              dalam rangka mengurus dan melaksanakan hak dan kewajiban
              perpajakan sesuai undang-undang yang berlaku.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Button>Pelajari Lebih Lanjut</Button>
        </div>
      </div>
    </section>
  );
}
