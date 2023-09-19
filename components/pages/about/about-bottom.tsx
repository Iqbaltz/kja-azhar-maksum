import { urlForImage } from "@/sanity/lib/image";

interface IAboutBottomProps {
  data: {
    description1: string;
    description2: string;
    image: any;
  };
}

export default function AboutBottom({
  data: { description1, description2, image },
}: IAboutBottomProps) {
  return (
    <section className="bg-primary text-white py-20 px-4 md:px-8 2xl:px-0 lg:py-32 2xl:py-40">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-[1080px] 2xl:max-w-[1280px] mx-auto">
        <div className="w-full max-w-[580px] lg:w-1/2 mb-8 lg:mb-0 lg:mr-10 xl:mr-8">
          <img
            className="w-full lg:w-auto max-w-[400px] 2xl:max-w-[560px]"
            src={urlForImage(image).url()}
            alt="tentang-2"
          />
        </div>
        <div className="lg:w-1/2">
          <p className="mb-6 lg:mb-8 max-w-[580px] 2xl:text-base xl:text-sm !leading-relaxed">
            {description1}
          </p>
          <p className="max-w-[580px] 2xl:text-base xl:text-sm !leading-relaxed">
            {description2}
          </p>
        </div>
      </div>
    </section>
  );
}
