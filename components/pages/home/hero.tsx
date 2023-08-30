import { Button } from "@/components/common/button";
import { urlForImage } from "@/sanity/lib/image";
import React from "react";

type Props = { data: any };

export default function Hero({ data }: Props) {
  return (
    <div className="relative pt-[40px] overflow-hidden flex items-center text-white bg-bgprimary w-full h-[100vh] px-4 md:px-8 2xl:px-0">
      <img
        src={urlForImage(data?.image).url()}
        alt="bg-hero"
        className="absolute w-full h-full object-cover mix-blend-multiply"
      />
      <div className="z-10 w-full max-w-[1080px] 2xl:max-w-[1280px] mx-auto">
        <h1 className="questa text-4xl lg:text-5xl 2xl:text-6xl max-w-[560px] 2xl:max-w-[720px]">
          {data?.title}
        </h1>
        <p className="lg:text-lg 2xl:text-2xl my-12 2xl:my-16 max-w-[600px] 2xl:max-w-[800px]">
          {data?.subtitle}
        </p>
        {data?.cta?.map(({ link, text, _key }: any) => (
          <a href={link} key={_key} target="_blank" rel="noopener noreferrer">
            <Button>{text}</Button>
          </a>
        ))}
      </div>
    </div>
  );
}
