import { Button } from "@/components/common/button";
import React from "react";

type Props = { data: any };

export default function Cta({ data }: Props) {
  return (
    <section className="py-20 lg:py-40 px-4 md:px-8 2xl:px-0 bg-bgprimary text-white">
      <div className="mx-auto max-w-[1080px] 2xl:max-w-[1280px] text-center">
        <h1 className="text-4xl lg:text-5xl 2xl:text-6xl questa mb-10">
          {data?.title}
        </h1>
        <p className="2xl:text-lg xl:text-sm !leading-relaxed mb-12 2xl:max-w-[960px] max-w-[740px] mx-auto">
          {data?.subtitle}
        </p>
        <div className="flex justify-center">
          <input
            className="px-6 lg:min-w-[480px] 2xl:min-w-[580px] rounded-l placeholder:text-white/30 bg-primary outline-none"
            placeholder={data?.placeholder}
            type="email"
          />
          <Button className="-translate-x-1">{data?.buttonText}</Button>
        </div>
      </div>
    </section>
  );
}
