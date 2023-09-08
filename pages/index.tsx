import {
  Accounting,
  CTA,
  Greetings,
  Hero,
  Utilities,
} from "@/components/pages/home";
import { readToken } from "@/sanity/env";
import { client, getClient } from "@/sanity/lib/client";
import { getHome, homePageQuery } from "@/sanity/lib/queries";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useLiveQuery } from "@sanity/preview-kit";
import { useRouter } from "next/router";

export const getStaticProps: GetStaticProps = async ({
  draftMode = false,
  locale,
}) => {
  const client = getClient(draftMode ? { token: readToken } : undefined);
  const homeData = await getHome(client, locale);

  return {
    props: {
      draftMode: draftMode,
      token: draftMode ? readToken : "",
      homeData,
    },
  };
};

export default function Home({
  homeData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { locale } = useRouter();
  const [home] = useLiveQuery(homeData, homePageQuery(locale || "id"));

  const renderComponents = (sections: any) =>
    sections.map((data: any) => {
      switch (data?._type) {
        case "hero":
          return <Hero data={data} key={data?._key} />;
        case "greetings":
          if (data.layoutType == "1") {
            return <Greetings data={data} key={data?._key} />;
          } else {
            return <Accounting data={data} key={data?._key} />;
          }
        case "features":
          return <Utilities data={data} key={data?._key} />;
        case "subscribe":
          return <CTA data={data} key={data?._key} />;
        default:
          break;
      }
    });

  return (
    <>
      <Head>
        <title>{home?.seo?.title}</title>
        <meta name="description" content={home?.seo?.description} />
      </Head>
      {home?.sections && renderComponents(home?.sections)}
    </>
  );
}
