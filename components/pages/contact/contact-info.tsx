import { urlForImage } from "@/sanity/lib/image";

interface IContactInfoProps {
  contactInfos: { title: string; icon: any; value: string; _key: string }[];
}
export default function ContactInfo({ contactInfos }: IContactInfoProps) {
  return (
    <section className="bg-bgprimary text-white py-20 px-4 md:px-8 2xl:px-0 lg:py-32 2xl:py-40">
      <div className="grid lg:grid-cols-3 gap-10 w-full max-w-[1080px] 2xl:max-w-[1280px] mx-auto">
        {contactInfos.map(({ title, icon, value, _key }) => (
          <div className="text-center" key={_key}>
            <div className="flex justify-center items-center h-[56px]">
              <img src={urlForImage(icon).url()} alt="phone" />
            </div>
            <h2 className="questa text-3xl 2xl:text-4xl my-4 lg:my-5">
              {title}
            </h2>
            <p className="xl:text-sm 2xl:text-lg opacity-60 max-w-[320px] mx-auto">
              {value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
