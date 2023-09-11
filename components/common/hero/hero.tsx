import React from "react";

type Props = {
  title: string;
  subtitle: string;
  bgSrc?: string;
  isNews?: boolean;
};

export default function Hero({
  title,
  subtitle,
  bgSrc = "/images/hero-layanan.png",
  isNews = false,
}: Props) {
  return (
    <section className="px-4 pt-[40px] md:px-8 2xl:px-0 relative overflow-hidden flex items-center text-white bg-bgprimary w-full min-h-[75vh]">
      <img
        src={bgSrc}
        alt="bg-hero"
        className="absolute w-full h-full object-cover mix-blend-multiply"
      />
      <div className="z-10 w-full max-w-[1080px] 2xl:max-w-[1280px] mx-auto">
        <h1
          className={`questa text-4xl lg:text-5xl 2xl:text-6xl mb-16 max-w-[864px] 2xl:max-w-[1080px] ${
            isNews && "mb-8"
          }`}
        >
          {title}
        </h1>
        <p
          className={`text-lg lg:text-xl 2xl:text-2xl mb-12 xl:max-w-[640px] 2xl:max-w-[740px] ${
            isNews && "opacity-60"
          }`}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
}
