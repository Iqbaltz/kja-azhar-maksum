import {
  Accounting,
  CTA,
  Greetings,
  Hero,
  Utilities,
} from "@/components/pages/home";
import { client } from "@/sanity/lib/client";
import { getHome } from "@/sanity/lib/queries";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

export const getStaticProps: GetStaticProps = async (context) => {
  const home = await getHome(client, context?.locale);

  return {
    props: {
      // draftMode,
      // token: draftMode ? readToken : '',
      home,
    },
  };
};

export default function Home({
  home,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log("the props", home);

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
