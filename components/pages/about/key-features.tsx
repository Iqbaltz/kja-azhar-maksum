const keyFeatures = [
  {
    title: "Kemandirian",
    desc: "Mewujudkan kemandirian bagi seluruh entitas bisnis yang berstandar baku serta terukur, melakukan tugas akuntan dan menyajikan hasilnya kepada masyarakat dengan mandiri.",
    styles: "bg-lightgrey",
  },
  {
    title: "Transparansi",
    desc: "Menerapkan transparansi di segala bidang, terutama mewujudkan transparansi tersebut dengan mengikuti pedoman standar akuntansi keuangan sesuai kepentingan bisnis.",
    styles: "bg-lightblue text-white",
  },
  {
    title: "Independensi",
    desc: "Tidak berpihak dalam penugasan untuk kepentingan tertentu dan selalu berpedoman kepada standar pekerjaan, standar akuntansi dan prosedur serta kode etik profesi jasa akuntan.",
    styles: "bg-primary text-white",
  },
];

export default function KeyFeatures() {
  return (
    <section className="grid lg:grid-cols-3 lg:gap-4 px-4 md:px-8 2xl:px-0 w-full max-w-[1080px] 2xl:max-w-[1280px] mx-auto py-20 lg:pb-32 2xl:py-40">
      {keyFeatures.map(({ title, desc, styles }, i) => (
        <div
          className={`py-12 md:py-16 2xl:py-20 px-8 md:px-12 2xl:px-16 ${styles}`}
          key={i}
        >
          <h1 className="questa text-xl 2xl:text-2xl mb-4 lg:mb-6">{title}</h1>
          <p className="2xl:text-base xl:text-sm !leading-relaxed">{desc}</p>
        </div>
      ))}
    </section>
  );
}
