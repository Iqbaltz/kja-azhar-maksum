import { urlForImage } from "@/sanity/lib/image";
import React from "react";

type Props = { data: any };

export default function Greetings({ data }: Props) {
  return (
    <section className="pt-20 2xl:py-12">
      <div className="max-w-[1080px] 2xl:max-w-[1280px] px-4 md:px-8 2xl:px-0 mx-auto flex flex-col lg:flex-row lg:justify-center lg:items-center">
        <div className="-z-10 order-2 lg:order-1 lg:w-1/2">
          <img
            className="translate-y-12 max-w-[80%] lg:max-w-[100%] mx-auto"
            src={urlForImage(data?.image).url()}
            alt="businessman"
          />
        </div>
        <div className="lg:order-2 lg:ml-20 lg:w-1/2">
          <h1 className="questa text-4xl 2xl:text-5xl mb-6 max-w-[480px]">
            {data?.title}
          </h1>
          <p className="mb-4 2xl:text-lg">{data?.description1}</p>
          <p className="2xl:text-lg">{data?.description2}</p>
        </div>
      </div>
    </section>
  );
}
