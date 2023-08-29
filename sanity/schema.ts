import { type SchemaTypeDefinition } from "sanity";
import { news } from "./schemas";
import { colors, home, services, siteSettings } from "./schemas/singletons";
import {
  features,
  greetings,
  hero,
  service,
  subscribe,
} from "./schemas/objects";
import blockContent from "./schemas/blockContent";
import authors from "./schemas/authors";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    news,
    authors,
    // singletons
    siteSettings,
    colors,
    home,
    services,
    // objects
    hero,
    greetings,
    service,
    features,
    subscribe,

    // blockcontent
    blockContent,
  ],
};
