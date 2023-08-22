import { Button } from "@/components/common/button";

export default function ContactForm() {
  return (
    <section className="text-center py-20 lg:py-40 mx-auto max-w-[1080px] 2xl:max-w-[1280px] px-4 md:px-8 2xl:px-0">
      <h1 className="questa text-4xl lg:text-5xl 2xl:text-6xl mb-6 lg:mb-8">
        Isi Formulir Disini
      </h1>
      <p className="mb-7 lg:mb-8 max-w-[800px] lg:max-w-[920px] mx-auto lg:text-lg">
        Isi data anda dan perusahaan di bawah ini untuk pelayanan konsultasi
        akuntansi dan keuangan. Kami akan segera menghubungi anda dan memberikan
        solusi terbaik.
      </p>
      <form>
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 mb-4 lg:mb-7">
          <input
            className="border border-greyborder px-6 py-3 outline-none rounded"
            type="text"
            placeholder="Nama Lengkap"
          />
          <input
            className="border border-greyborder px-6 py-3 outline-none rounded"
            type="text"
            placeholder="Email Anda"
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 mb-4 lg:mb-7">
          <input
            className="border border-greyborder px-6 py-3 outline-none rounded"
            type="text"
            placeholder="No Telepon"
          />
          <input
            className="border border-greyborder px-6 py-3 outline-none rounded"
            type="text"
            placeholder="Nama perusahaan"
          />
        </div>
        <div>
          <textarea
            name="message"
            id="message"
            placeholder="Request yang diinginkan"
            className="w-full mb-7 border min-h-[200px] border-greyborder px-6 py-3 outline-none rounded"
          ></textarea>
        </div>
        <Button className="w-full max-w-[640px]">Submit Request</Button>
      </form>
    </section>
  );
}
