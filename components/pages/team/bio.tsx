import { urlForImage } from "@/sanity/lib/image";
import React from "react";

interface IBioProps {
  data: {
    image: any;
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
  };
}

export default function Bio({ data }: IBioProps) {
  return (
    <section className="bg-lightgrey py-16 pb-12 2xl:py-8 px-4 md:px-8 2xl:px-0">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-[1080px] 2xl:max-w-[1280px] mx-auto">
        <div className="order-2 lg:order-none w-2/3 lg:w-1/2">
          <img
            className="translate-y-12 2xl:translate-y-8"
            src={urlForImage(data.image).url()}
            alt="businessman"
          />
        </div>
        <div className="lg:ml-16 lg:w-1/2">
          <h1 className="questa mb-4 text-4xl 2xl:text-5xl max-w-[440px] 2xl:max-w-[600px]">
            {data.title}
          </h1>
          <h2 className="questa text-xl 2xl:text-2xl mb-12">{data.subtitle}</h2>
          <p className="mb-4 2xl:text-lg xl:text-sm !leading-relaxed">
            {data.description1}
          </p>
          <p className="2xl:text-lg xl:text-sm !leading-relaxed">
            {data.description2}
          </p>
        </div>
      </div>
    </section>
  );
}
