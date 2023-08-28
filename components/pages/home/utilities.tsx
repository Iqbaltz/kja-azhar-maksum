import React from "react";
import {
  CalculatorIcon,
  HandCash,
  WithdrawCash,
} from "@/components/common/shapes";
import { Button } from "@/components/common/button";
import { useRouter } from "next/router";
import Link from "next/link";

interface IUtilitiesProps {
  data: any;
}

export default function Utilities({ data }: IUtilitiesProps) {
  const { locale } = useRouter();

  function filterLocalized(data: any, locale: string) {
    return data.map((item: any) => {
      const filteredTitle = item.title.find((t: any) => t._key === locale);
      const filteredDescription = item.description.find(
        (d: any) => d._key === locale
      );

      return {
        _key: item._key,
        image: item.image,
        title: filteredTitle ? filteredTitle.value : "",
        description: filteredDescription ? filteredDescription.value : "",
      };
    });
  }

  return (
    <section className="py-20 2xl:py-40 text-white bg-bgprimary px-4 md:px-8 2xl:px-0">
      <div className="w-full max-w-[1080px] 2xl:max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:justfiy-between mb-12 lg:mb-20">
          <div className="mb-8 lg:mb-0 lg:w-1/2">
            <h1 className="questa text-4xl 2xl:text-5xl max-w-[380px] 2xl:max-w-[520px]">
              {data?.title}
            </h1>
          </div>
          <div className="lg:w-1/2 lg:ml-20 2xl:text-lg">
            <p className="mb-6">{data?.description1}</p>
            <p>{data?.description2}</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 justify-center text-black mb-12 2xl:mb-20">
          {filterLocalized(data?.services, locale || "id")?.map((item: any) => (
            <div
              className="group  px-8 py-12 lg:px-12 lg:py-16 bg-white hover:text-white hover:bg-primary transition-colors duration-300"
              key={item?._key}
            >
              <CalculatorIcon className="fill-black group-hover:fill-white transition-colors duration-300" />
              <h1 className="questa text-2xl 2xl:text-3xl my-6">
                {item.title}
              </h1>
              <p className="2xl:text-lg">{item.description}</p>
            </div>
          ))}
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
