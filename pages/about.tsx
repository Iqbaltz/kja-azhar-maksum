import { Hero } from "@/components/common/hero";
import { Newsletter } from "@/components/common/newsletter";
import { About, AboutBottom, KeyFeatures } from "@/components/pages/about";
import { readToken } from "@/sanity/env";
import { getClient } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { aboutPageQuery, getAboutPage } from "@/sanity/lib/queries";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { useLiveQuery } from "@sanity/preview-kit";

export const getStaticProps: GetStaticProps = async ({
  draftMode = false,
  locale,
}) => {
  const client = getClient(draftMode ? { token: readToken } : undefined);
  const data = await getAboutPage(client, locale);

  return {
    props: {
      draftMode: draftMode,
      token: draftMode ? readToken : "",
      data,
    },
  };
};

export default function AboutPage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { locale } = useRouter();
  const [aboutData] = useLiveQuery(data, aboutPageQuery(locale || "id"));

  const renderComponents = (sections: any) =>
    sections.map((data: any) => {
      switch (data?._type) {
        case "hero":
          return (
            <Hero
              bgSrc={urlForImage(data?.image).url()}
              title={data?.title}
              subtitle={data?.subtitle}
              key={data?._key}
            />
          );
        case "greetings":
          return data.layoutType == "1" ? (
            <About data={data} key={data?._key} />
          ) : (
            <AboutBottom data={data} key={data?._key} />
          );
        case "identitySection":
          return <KeyFeatures data={data?.identityList} key={data?._key} />;
        default:
          break;
      }
    });
  return (
    <main>
      {aboutData?.sections && renderComponents(aboutData.sections)}
      <Newsletter />
    </main>
  );
}
