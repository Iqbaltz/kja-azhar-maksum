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
  *[_type == "about"][0]{
    "sections":[
      ...sections[_type == "hero"]{
        ...,
        "title": title[_key == "${locale}"][0].value,
        "subtitle": subtitle[_key == "${locale}"][0].value,
      },
      ...sections[_type == "greetings"]{
        ...,
        "title": title[_key == "${locale}"][0].value,
        "description1": description1[_key == "${locale}"][0].value,
        "description2": description2[_key == "${locale}"][0].value,
      },
      ...sections[_type == "identitySection"]{
        ...,
        "identityList":[
          ...identityList[]{
            ...,
            "title": title[_key == "${locale}"][0].value,
            "description": description[_key == "${locale}"][0].value,
          }
        ]
      },
    ],
    "sortSection": [...sections[]._key],
    "aboutSeo": {"title" : aboutSeo.title[_key == "${locale}"][0].value, "description":aboutSeo.description[_key == "${locale}"][0].value}
  }
`;

export const contactPageQuery = (locale: string) => groq`
  *[_type == "contact"][0]{
    "contacts": [...contacts.contactInfoList[]{...,"title": title[_key == "${locale}"][0].value}],
    "sections":[
      ...sections[_type == "hero"]{
        ...,
        "title": title[_key == "${locale}"][0].value,
        "subtitle": subtitle[_key == "${locale}"][0].value,
      },
      ...sections[_type == "contactForm"]
    ],
    "contactSeo": {"title" : contactSeo.title[_key == "${locale}"][0].value, "description":contactSeo.description[_key == "${locale}"][0].value}
  }
`;

export const contactInfoQuery = groq`
*[_type == "contact"][0]{
  "location": contacts.contactInfoList[contactType == "location"][0].value,
  "email": contacts.contactInfoList[contactType == "email"][0].value,
  "number": contacts.contactInfoList[contactType == "number"][0].value,
  socialMedia
}
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

export const newsSlugQuery = (slug: string) =>
  groq`*[_type == "news" && slug.current == "${slug}"][0]{
    ..., author->
  }`;

const sortSections = (data: any) => {
  const itemPositions: any = {};
  for (const [index, _key] of data?.sortSection.entries()) {
    itemPositions[_key] = index;
  }
  return {
    ...data,
    sections: data.sections.sort(
      (a: any, b: any) => itemPositions[a._key] - itemPositions[b._key]
    ),
  };
};

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
  const data = await client.fetch(aboutPageQuery(locale || "id"));
  return sortSections(data);
}
export async function getContactPage(
  client: SanityClient,
  locale: string | undefined
): Promise<any> {
  return await client.fetch(contactPageQuery(locale || "id"));
}
export async function getContactInformation(
  client: SanityClient
): Promise<any> {
  return await client.fetch(contactInfoQuery);
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
  const items = await client.fetch(newsSlugQuery(slug));
  return items;
}
