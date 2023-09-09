import { Hero } from "@/components/common/hero";
import { ContactForm, ContactInfo } from "@/components/pages/contact";
import { readToken } from "@/sanity/env";
import { getClient } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { contactPageQuery, getContactPage } from "@/sanity/lib/queries";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { useLiveQuery } from "@sanity/preview-kit";

export const getStaticProps: GetStaticProps = async ({
  draftMode = false,
  locale,
}) => {
  const client = getClient(draftMode ? { token: readToken } : undefined);
  const data = await getContactPage(client, locale);

  return {
    props: {
      draftMode: draftMode,
      token: draftMode ? readToken : "",
      data,
    },
  };
};

export default function ContactPage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { locale } = useRouter();
  const [contactData] = useLiveQuery(data, contactPageQuery(locale || "id"));

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
        case "contactForm":
          return <ContactForm data={data} key={data?._key} />;
        default:
          break;
      }
    });
  return (
    <main>
      {contactData?.sections && renderComponents(contactData.sections)}
      <ContactInfo contactInfos={contactData.contacts} />
    </main>
  );
}
