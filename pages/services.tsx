import React from "react";
import { Newsletter } from "@/components/common/newsletter";
import { Hero } from "@/components/common/hero";
import { Services } from "@/components/pages/services";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getServicePage, servicePageQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import Head from "next/head";
import { useLiveQuery } from "@sanity/preview-kit";
import { useRouter } from "next/router";

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getServicePage(client, context?.locale);

  return {
    props: {
      data,
    },
  };
};

export default function ServicePage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { locale } = useRouter();
  const [serviceData] = useLiveQuery(data, servicePageQuery(locale || "id"));

  console.log(serviceData);
  return (
    <>
      <Head>
        <title>{serviceData?.serviceSeo?.title}</title>
        <meta name="description" content={data?.serviceSeo?.description} />
      </Head>
      <Hero
        title="Layanan Akuntan"
        subtitle="Kami memberikan layanan konsultasi akuntansi dengan berbagai spesialisasi sesuai kebutuhan bisnis anda."
      />
      <Services />
      <Newsletter />
    </>
  );
}
