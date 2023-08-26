import { urlForImage } from "@/sanity/lib/image";
import React from "react";

type Props = { data: any };

export default function Accounting({ data }: Props) {
  console.log("accounting", data);
  return (
    <section className="flex items-center relative py-16 min-h-[90vh] px-4 md:px-8 2xl:px-0">
      <div className="bg-bglight w-1/2 h-full absolute top-0 right-0 -z-10"></div>
      <div className="relative flex flex-col lg:flex-row justify-center items-center max-w-[1080px] 2xl:max-w-[1280px] mx-auto">
        <div className="mb-12 lg:mb-0 lg:w-[40%] lg:mr-8">
          <h1 className="questa text-4xl 2xl:text-5xl mb-8 lg:mb-12">
            {data?.title}
          </h1>
          <p className="2xl:text-lg mb-8 lg:mb-12">{data?.description1}</p>
          <a href={data?.cta?.link}>
            <button className="flex items-center text-secondary hover:text-lightsecondary transition-colors duration-200 2xl:text-lg font-bold">
              {data?.cta?.text}
              <img
                src="/svg/chevron-right.svg"
                alt="chevron-right"
                className="ml-4"
              />
            </button>
          </a>
        </div>
        <div className="lg:w-[60%]">
          <img
            src={urlForImage(data?.image).url()}
            className="lg:w-[90%] mx-auto lg:ml-auto"
            alt="accounting"
          />
        </div>
      </div>
    </section>
  );
}
