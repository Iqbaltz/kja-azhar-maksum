import React from "react";
import { Newsletter } from "@/components/common/newsletter";
import { Hero } from "@/components/common/hero";
import { Services } from "@/components/pages/services";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getServicePage, servicePageQuery } from "@/sanity/lib/queries";
import { getClient } from "@/sanity/lib/client";
import Head from "next/head";
import { useLiveQuery } from "@sanity/preview-kit";
import { useRouter } from "next/router";
import { readToken } from "@/sanity/env";
import { urlForImage } from "@/sanity/lib/image";

export const getStaticProps: GetStaticProps = async ({
  draftMode = false,
  locale,
}) => {
  const client = getClient(draftMode ? { token: readToken } : undefined);
  const data = await getServicePage(client, locale);

  return {
    props: { draftMode: draftMode, token: draftMode ? readToken : "", data },
  };
};

export default function ServicePage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { locale } = useRouter();
  const [serviceData] = useLiveQuery(data, servicePageQuery(locale || "id"));

  const renderComponents = (sections: any) =>
    sections.map((data: any) => {
      switch (data?._type) {
        case "hero":
          return (
            <Hero
              bgSrc={urlForImage(data?.image).url()}
              title={data?.title}
              subtitle={data?.subtitle}
            />
          );
        case "features":
          return <Services data={data} />;
        default:
          break;
      }
    });
  return (
    <>
      <Head>
        <title>{serviceData?.serviceSeo?.title}</title>
        <meta name="description" content={data?.serviceSeo?.description} />
      </Head>
      {serviceData?.sections && renderComponents(serviceData?.sections)}
      <Newsletter />
    </>
  );
}
