import React from "react";

export default function Bio() {
  return (
    <section className="bg-lightgrey py-16 pb-12 2xl:py-8 px-4 md:px-8 2xl:px-0">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-[1080px] 2xl:max-w-[1280px] mx-auto">
        <div className="order-2 lg:order-none w-2/3 lg:w-1/2">
          <img
            className="translate-y-12 2xl:translate-y-8"
            src="/images/businessman.png"
            alt="businessman"
          />
        </div>
        <div className="lg:ml-16 lg:w-1/2">
          <h1 className="questa mb-4 text-4xl 2xl:text-5xl max-w-[440px] 2xl:max-w-[600px]">
            Prof. Dr. H. Azhar Maksum, M.Ec. Ak. CA. CMA{" "}
          </h1>
          <h2 className="questa text-xl 2xl:text-2xl mb-12">
            Pimpinan / Direktur
          </h2>
          <p className="mb-4 2xl:text-lg xl:text-sm !leading-relaxed">
            Setelah lulus dengan gelar Master di bidang Economics in Accounting
            dari Macquarie University, Sydney dan gelar Doktor di bidang
            Philosophy in Accounting dari Universitas Sains Malaysia, beliau
            saat ini mengabdikan dirinya sebagai dosen sekaligus Guru Besar di
            Universitas Sumatera Utara.
          </p>
          <p className="2xl:text-lg xl:text-sm !leading-relaxed">
            Pendirian Kantor Jasa Akuntansi ini didasari oleh keinginan untuk
            mewujudkan transparansi dan akuntabilitas seluruh entitas yang ada
            di Indonesia. Kantor ini terdaftar dan mendapatkan izin dari
            Kementerian Keuangan Republik Indonesia dengan nomor keputusan
            161/KM.1PPPK/2017.
          </p>
        </div>
      </div>
    </section>
  );
}
