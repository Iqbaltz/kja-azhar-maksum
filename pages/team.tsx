import { Hero } from "@/components/common/hero";
import { Newsletter } from "@/components/common/newsletter";
import { Bio, Teams } from "@/components/pages/team";
import { readToken } from "@/sanity/env";
import { getClient } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { getTeamPage, teamPageQuery } from "@/sanity/lib/queries";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useLiveQuery } from "@sanity/preview-kit";
import Head from "next/head";

export const getStaticProps: GetStaticProps = async ({
  draftMode = false,
  locale,
}) => {
  const client = getClient(draftMode ? { token: readToken } : undefined);
  const data = await getTeamPage(client, locale);

  return {
    props: { draftMode: draftMode, token: draftMode ? readToken : "", data },
  };
};

export default function TeamPage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { locale } = useRouter();
  const [teamData] = useLiveQuery(data, teamPageQuery(locale || "id"));

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
          return <Bio data={data} key={data?._key} />;
        case "teamSection":
          return <Teams data={data} key={data?._key} />;
        default:
          break;
      }
    });
  return (
    <>
      <Head>
        <title>{teamData?.teamSeo?.title}</title>
        <meta name="description" content={teamData?.teamSeo?.description} />
      </Head>
      {teamData?.sections && renderComponents(teamData?.sections)}
      <Newsletter />
    </>
  );
}
