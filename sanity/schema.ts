import { type SchemaTypeDefinition } from "sanity";
import { news } from "./schemas";
import { colors, home, services, siteSettings } from "./schemas/singletons";
import hero from "./schemas/objects/hero";
import greetings from "./schemas/objects/greetings";
import service from "./schemas/objects/service";
import features from "./schemas/objects/features";

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
  ],
};
