export default function AboutBottom() {
  return (
    <section className="bg-primary text-white py-20 px-4 md:px-8 2xl:px-0 lg:py-32 2xl:py-40">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-[1080px] 2xl:max-w-[1280px] mx-auto">
        <div className="w-full max-w-[580px] lg:w-1/2 mb-8 lg:mb-0 lg:mr-10 xl:mr-8">
          <img
            className="w-full lg:w-auto max-w-[580px]"
            src="/images/tentang-2.png"
            alt="tentang-2"
          />
        </div>
        <div className="lg:w-1/2">
          <p className="mb-6 lg:mb-8 max-w-[580px] leading-7">
            Kantor Jasa Akuntansi Azhar Maksum dan Rekan merupakan kantor jasa
            konsultan keuangan dan akuntansi yang berada dibawah binaan P2PK
            (Pusat Pembinaan dan Pengawasan Profesi Jasa Keuangan) Kementerian
            Keuangan Republik Indonesia. Kantor Jasa Akuntansi Azhar Maksum dan
            Rekan berdiri pada bulan Desember 2017.
          </p>
          <p className="max-w-[580px] leading-7">
            Sebagai salah satu kantor jasa profesi akuntan yang berdomisili di
            Sumatera Utara, kami juga berusaha mewujudkan kondisi yang
            transparan dan akuntabel bagi seluruh entitas bisnis yang ada di
            Indonesia yang berstandar baku serta terukur. Salah satu wujudnya
            adalah dengan bertindak sebagai konsultan akuntansi/keuangan bagi
            seluruh entitas baik profit dan non profit yang berskala mikro,
            kecil, menengah bahkan besar.
          </p>
        </div>
      </div>
    </section>
  );
}
