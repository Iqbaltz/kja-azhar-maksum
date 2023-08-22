import { type SanityClient, groq } from "next-sanity";

export const homePageQuery = groq`
  *[_type == "home"][0]
`;

export async function getHome(client: SanityClient): Promise<any> {
  return await client.fetch(homePageQuery);
}
