import { urlForImage } from "@/sanity/lib/image";

interface IAboutProps {
  data: {
    title: string;
    image: any;
    description1: string;
    description2: string;
  };
}

export default function About({
  data: { title, image, description1, description2 },
}: IAboutProps) {
  return (
    <section className="flex flex-col lg:flex-row justify-center  w-full max-w-[1080px] 2xl:max-w-[1280px] mx-auto px-4 md:px-8 2xl:px-0 pt-20 lg:pt-24 xl:pt-36 2xl:pt-40 pb-32">
      <div className="lg:w-1/2 lg:pr-8 mb-12 lg:mb-0 lg:mr-4">
        <h1 className="text-4xl 2xl:text-5xl questa mb-8 lg:mb-12 max-w-[400px] 2xl:max-w-[560px]">
          {title}
        </h1>
        <p className="mb-6 lg:mb-8 lg:max-w-[460px] 2xl:max-w-[528px] 2xl:text-base xl:text-sm !leading-relaxed">
          {description1}
        </p>
        <p className="lg:max-w-[460px] 2xl:max-w-[528px] 2xl:text-base xl:text-sm !leading-relaxed">
          {description2}
        </p>
      </div>
      <div className="lg:w-1/2 relative">
        <div className="relative lg:max-w-[500px]">
          <img
            className="w-[70%] 2xl:w-[85%]"
            src={urlForImage(image).url()}
            alt="tentang"
          />
          <div className="w-48 2xl:w-64 h-48 2xl:h-64 bg-bgprimary mix-blend-multiply bg-blend-multiply absolute -bottom-[20%] 2xl:-bottom-[30%] right-[15%] 2xl:-right-[10%]"></div>
        </div>
      </div>
    </section>
  );
}
