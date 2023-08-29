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
export async function getNews(client: SanityClient): Promise<any> {
  return await client.fetch(newsQuery);
}

export async function getSimpleNews(client: SanityClient): Promise<any> {
  return await client.fetch(simpleNewsQuery);
}
