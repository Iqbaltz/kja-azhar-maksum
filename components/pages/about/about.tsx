export default function About() {
  return (
    <section className="flex flex-col lg:flex-row justify-center  w-full max-w-[1080px] 2xl:max-w-[1280px] mx-auto px-4 md:px-8 2xl:px-0 pt-20 lg:pt-24 2xl:pt-40 pb-32 2xl:pb-60">
      <div className="lg:w-1/2 lg:pr-8 mb-12 lg:mb-0 lg:mr-4">
        <h1 className="text-4xl 2xl:text-5xl questa mb-8 lg:mb-12 max-w-[400px] 2xl:max-w-[560px]">
          Kantor Jasa Akuntansi Azhar Maksum & Rekan
        </h1>
        <p className="mb-6 lg:mb-8 lg:max-w-[460px] 2xl:max-w-[528px] 2xl:text-base xl:text-sm !leading-relaxed">
          Era Revolusi 4.0 yang saat ini mulai memasuki era 5.0, transparansi
          dan kejujuran menjadi isu sentral yang perlu diperhatikan. Percepatan
          informasi khususnya informasi mengenai akuntansi dan keuangan menjadi
          sangat berpengaruh terhadap kelangsungan entitas ekonomi dimasa yang
          akan datang.
        </p>
        <p className="lg:max-w-[460px] 2xl:max-w-[528px] 2xl:text-base xl:text-sm !leading-relaxed">
          Perubahan lingkungan global menuntut adanya transparansi di segala
          bidang. Standar Akuntansi Keuangan yang berkualitas merupakan salah
          satu prasarana penting untuk mewujudkan transparansi tersebut. Oleh
          karena itu, Ikatan Akuntan Indonesia sebagai salah satu wadah Profesi
          Jasa Akuntan di Indonesia mengeluarkan Pernyataan Standar Akuntansi
          Keuangan.
        </p>
      </div>
      <div className="lg:w-1/2 relative">
        <div className="relative lg:max-w-[500px]">
          <img
            className="w-[80%] 2xl:w-full"
            src="/images/tentang-1.png"
            alt="tentang"
          />
          <div className="w-64 2xl:w-80 h-64 2xl:h-80 bg-bgprimary mix-blend-multiply bg-blend-multiply absolute -bottom-[20%] 2xl:-bottom-[30%] -right-[0] 2xl:-right-[30%]"></div>
        </div>
      </div>
    </section>
  );
}
