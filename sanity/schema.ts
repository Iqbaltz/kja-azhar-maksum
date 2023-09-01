import { type SchemaTypeDefinition } from "sanity";
import { news } from "./schemas";
import { about, home, services, team, contact } from "./schemas/singletons";
import {
  features,
  greetings,
  hero,
  service,
  subscribe,
  teamSection,
  identitySection,
  contactForm,
  contactInfo,
} from "./schemas/objects";
import blockContent from "./schemas/blockContent";
import authors from "./schemas/authors";
import teams from "./schemas/teams";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    news,
    authors,
    teams,
    // singletons
    // siteSettings,
    home,
    services,
    team,
    about,
    contact,
    // objects
    hero,
    greetings,
    service,
    features,
    subscribe,
    teamSection,
    identitySection,
    contactForm,
    contactInfo,
    // blockcontent
    blockContent,
  ],
};
