export default function ContactInfo() {
  return (
    <section className="bg-bgprimary text-white py-20 px-4 md:px-8 2xl:px-0 lg:py-32 2xl:py-40">
      <div className="grid lg:grid-cols-3 gap-10 w-full max-w-[1080px] 2xl:max-w-[1280px] mx-auto">
        <div className="text-center">
          <div className="flex justify-center items-center h-[56px]">
            <img src="/svg/phone.svg" alt="phone" />
          </div>
          <h2 className="questa text-3xl 2xl:text-4xl my-4 lg:my-5">
            No. Kontak
          </h2>
          <p className="xl:text-sm 2xl:text-lg opacity-60 max-w-[320px] mx-auto">
            +62 813 6205 8121 (Ibnu Austrin)
          </p>
        </div>
        <div className="text-center">
          <div className="flex justify-center items-center h-[56px]">
            <img src="/svg/location.svg" alt="location" />
          </div>
          <h2 className="questa text-3xl 2xl:text-4xl my-4 lg:my-5">
            Lokasi Kami
          </h2>
          <p className="xl:text-sm 2xl:text-lg opacity-60 max-w-[320px] mx-auto">
            Jl. Karya Wisata Komp. Perumahan Dosen Ekonomi Universitas Sumatera
            Utara Gedung Johor, Medan
          </p>
        </div>
        <div className="text-center">
          <div className="flex justify-center items-center h-[56px]">
            <img src="/svg/mail.svg" alt="mail" />
          </div>
          <h2 className="questa text-3xl 2xl:text-4xl my-4 lg:my-5">Email</h2>
          <p className="xl:text-sm 2xl:text-lg opacity-60 max-w-[320px] mx-auto">
            kjaazharmaksumdanrekan@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}
