import { type SanityClient, groq } from "next-sanity";

export const homePageQuery = (locale: string) => groq`
  *[_type == "home"][0]{
    "sections" :  [
      ...sections[_type == "hero"]{
        ...,
        "title": title[_key == "${locale}"][0].value,
        "subtitle": subtitle[_key == "${locale}"][0].value,
        "cta":[
          ...cta[]{
            ...,
            "text": text[_key == "${locale}"][0].value
          },
        ]
      },
      sections[_type == "greetings"][0]{
        ...,
        "title": title[_key == "${locale}"][0].value,
        "description1": description1[_key == "${locale}"][0].value,
        "description2": description2[_key == "${locale}"][0].value,
      },
      sections[_type == "features"][0]{
        ...,
        "title": title[_key == "${locale}"][0].value,
        "description1": description1[_key == "${locale}"][0].value,
        "description2": description2[_key == "${locale}"][0].value,
        "cta":{
          ...cta,
            "text": cta.text[_key == "${locale}"][0].value
          },
      },
      sections[_type == "greetings"][1]{
        ...,
        "title": title[_key == "${locale}"][0].value,
        "description1": description1[_key == "${locale}"][0].value,
        "cta":{
          ...cta,
            "text": cta.text[_key == "${locale}"][0].value
          },
      },
      sections[_type == "subscribe"][0]{
        ...,
        "title": title[_key == "${locale}"][0].value,
        "subtitle": subtitle[_key == "${locale}"][0].value,
        "placeholder": placeholder[_key == "${locale}"][0].value,
        "buttonText": buttonText[_key == "${locale}"][0].value,
      }
    ],
    "seo": {"title" : seo.title[_key == "${locale}"][0].value, "description":seo.description[_key == "${locale}"][0].value}
  }
`;

export const servicePageQuery = (locale: string) => groq`
  *[_type == "services"][0]{
    "sections": [
      ...sections[_type == "hero"]{
        ...,
        "title": title[_key == "${locale}"][0].value,
        "subtitle": subtitle[_key == "${locale}"][0].value,
      },
      ...sections[_type == "features"]{
        ...,
        "title": title[_key == "${locale}"][0].value,
        "description1": description1[_key == "${locale}"][0].value,
        "description2": description2[_key == "${locale}"][0].value,
      },
    ],
    "serviceSeo": {"title" : serviceSeo.title[_key == "${locale}"][0].value, "description":serviceSeo.description[_key == "${locale}"][0].value}
  }
`;

export const teamPageQuery = (locale: string) => groq`
  *[_type == "team"][0]{
    "sections":[
      ...sections[_type == "hero"]{
        ...,
        "title": title[_key == "${locale}"][0].value,
        "subtitle": subtitle[_key == "${locale}"][0].value,
      },
      ...sections[_type == "greetings"]{
        ...,
        "title": title[_key == "${locale}"][0].value,
        "subtitle": subtitle[_key == "${locale}"][0].value,
        "description1": description1[_key == "${locale}"][0].value,
        "description2": description2[_key == "${locale}"][0].value,
      },
      ...sections[_type == "teamSection"]{
        ...,teamList[]->
      },
    ],
    "teamSeo": {"title" : teamSeo.title[_key == "${locale}"][0].value, "description":teamSeo.description[_key == "${locale}"][0].value}

  }
`;
export const aboutPageQuery = (locale: string) => groq`
  *[_type == "about"][0]
`;
export const contactPageQuery = (locale: string) => groq`
  *[_type == "contact"][0]
`;

const newsPathsQuery = groq`
 *[_type == "news"]{slug}
`;

const newsQuery = groq`
  *[_type == "news"]
`;

const simpleNewsQuery = groq`
*[_type == "news"][0...4] | order(_createdAt desc) {
  title,
  excerpt,
  "slug": slug.current,
  _createdAt
}
`;

export async function getHome(
  client: SanityClient,
  locale: string | undefined
): Promise<any> {
  return await client.fetch(homePageQuery(locale || "id"));
}
export async function getServicePage(
  client: SanityClient,
  locale: string | undefined
): Promise<any> {
  return await client.fetch(servicePageQuery(locale || "id"));
}
export async function getTeamPage(
  client: SanityClient,
  locale: string | undefined
): Promise<any> {
  return await client.fetch(teamPageQuery(locale || "id"));
}
export async function getAboutPage(
  client: SanityClient,
  locale: string | undefined
): Promise<any> {
  return await client.fetch(aboutPageQuery(locale || "id"));
}
export async function getContactPage(
  client: SanityClient,
  locale: string | undefined
): Promise<any> {
  return await client.fetch(contactPageQuery(locale || "id"));
}

export async function getNews(client: SanityClient): Promise<any> {
  return await client.fetch(newsQuery);
}

export async function getSimpleNews(client: SanityClient): Promise<any> {
  return await client.fetch(simpleNewsQuery);
}

export async function getNewsPaths(client: SanityClient): Promise<any> {
  const items = await client.fetch(newsPathsQuery);
  const paths = items.map((item: any) => {
    return {
      params: { slug: item.slug.current },
    };
  });
  return paths;
}

export async function getNewsBySlug(
  client: SanityClient,
  slug: string
): Promise<any> {
  const items = await client.fetch(
    `*[_type == "news" && slug.current == "${slug}"]{
      ..., author->
    }`
  );
  return items[0];
}
