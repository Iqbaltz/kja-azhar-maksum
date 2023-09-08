import React from "react";
import { Button } from "@/components/common/button";
import { useRouter } from "next/router";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { filterLocalizedService } from "@/lib/helper";

interface IUtilitiesProps {
  data: any;
}

export default function Utilities({ data }: IUtilitiesProps) {
  const { locale } = useRouter();

  return (
    <section className="py-20 xl:py-32 2xl:py-40 text-white bg-bgprimary px-4 md:px-8 2xl:px-0">
      <div className="w-full max-w-[1080px] 2xl:max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:justfiy-between mb-12 lg:mb-20">
          <div className="mb-8 lg:mb-0 lg:w-1/2">
            <h1 className="questa text-4xl 2xl:text-5xl max-w-[380px] 2xl:max-w-[520px]">
              {data?.title}
            </h1>
          </div>
          <div className="lg:w-1/2 lg:ml-16 2xl:text-lg xl:text-sm !leading-relaxed">
            <p className="mb-6">{data?.description1}</p>
            <p>{data?.description2}</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 justify-center text-black mb-12 2xl:mb-20">
          {filterLocalizedService(data?.services, locale || "id")?.map(
            ({ _key, description, image, title }) => (
              <div
                className="group  px-8 py-12 lg:px-12 lg:py-16 bg-white hover:text-white hover:bg-primary transition-colors duration-300"
                key={_key}
              >
                <img
                  src={urlForImage(image).url()}
                  className="xl:w-12 2xl:w-auto group-hover:invert transition-filter duration-300"
                  alt={title}
                />
                <h1 className="questa text-2xl 2xl:text-3xl my-6">{title}</h1>
                <p className="2xl:text-lg xl:text-sm !leading-relaxed">
                  {description}
                </p>
              </div>
            )
          )}
        </div>
        <div className="flex justify-center">
          <Link href={data?.cta?.link}>
            <Button>{data?.cta?.text}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
