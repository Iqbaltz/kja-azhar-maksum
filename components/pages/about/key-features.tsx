const styles = [
  "bg-lightgrey",
  "bg-lightblue text-white",
  "bg-primary text-white",
];

interface IKeyFeatures {
  data: {
    title: string;
    description: string;
  }[];
}

export default function KeyFeatures({ data }: IKeyFeatures) {
  return (
    <section className="grid lg:grid-cols-3 lg:gap-4 px-4 md:px-8 2xl:px-0 w-full max-w-[1080px] 2xl:max-w-[1280px] mx-auto py-20 lg:pb-32 2xl:py-40">
      {data?.map(({ title, description }, i) => (
        <div
          className={`py-12 md:py-16 2xl:py-20 px-8 md:px-12 2xl:px-16 ${styles[i]}`}
          key={i}
        >
          <h1 className="questa text-xl 2xl:text-2xl mb-4 lg:mb-6">{title}</h1>
          <p className="2xl:text-base xl:text-sm !leading-relaxed">
            {description}
          </p>
        </div>
      ))}
    </section>
  );
}
