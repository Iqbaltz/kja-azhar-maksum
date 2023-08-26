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

export const getStaticProps: GetStaticProps<any> = async () => {
  const home = await getHome(client);

  return {
    props: {
      // draftMode,
      // token: draftMode ? readToken : '',
      home,
    },
  };
};

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  console.log("the props", props);

  const renderComponents = (sections: any) =>
    sections.map((data: any) => {
      switch (data?._type) {
        case "hero":
          return <Hero data={data} key={data?._key} />;
        case "greetings":
          if (data.layoutType == "1") {
            return <Greetings data={data} key={data?._key} />;
          } else {
            return <Accounting />;
          }
        case "features":
          return <Utilities />;
        case "subscribe":
          return <CTA />;
        default:
          break;
      }
    });

  return (
    <>{props?.home?.sections && renderComponents(props?.home?.sections)}</>
  );
}
