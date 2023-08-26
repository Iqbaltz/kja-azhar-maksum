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
import { seoType } from "./schemas/seoType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    news,
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

    // gg
    seoType,
  ],
};
