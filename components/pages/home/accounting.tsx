import React from "react";

type Props = {};

export default function Accounting({}: Props) {
  return (
    <section className="flex items-center relative py-16 min-h-[90vh] px-4 md:px-8 2xl:px-0">
      <div className="bg-bglight w-1/2 h-full absolute top-0 right-0 -z-10"></div>
      <div className="relative flex flex-col lg:flex-row justify-center items-center max-w-[1080px] 2xl:max-w-[1280px] mx-auto">
        <div className="mb-12 lg:mb-0 lg:w-[40%] lg:mr-8">
          <h1 className="questa text-4xl 2xl:text-5xl mb-8 lg:mb-12">
            Pedoman Akuntansi Perbankan Syariah Indonesia
          </h1>
          <p className="2xl:text-lg mb-8 lg:mb-12">
            Pedoman Akuntansi Perbankan Syariah adalah petunjuk pelaksanaan yang
            berisi penjabaran lebih lanjut dari beberapa Pernyataan Standar
            Akuntansi Keuangan (PSAK) yang relevan bagi industri perbankan
            syariah.
          </p>
          <button className="flex items-center text-secondary hover:text-lightsecondary transition-colors duration-200 2xl:text-lg font-bold">
            BACA SELENGKAPNYA
            <img
              src="/svg/chevron-right.svg"
              alt="chevron-right"
              className="ml-4"
            />
          </button>
        </div>
        <div className="lg:w-[60%]">
          <img
            src="/images/accounting.png"
            className="lg:w-[90%] mx-auto lg:ml-auto"
            alt="accounting"
          />
        </div>
      </div>
    </section>
  );
}
