/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\pages\studio\[[...index]].tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { myStructure } from "./sanity/desk/deskStructure";
import { internationalizedArray } from "sanity-plugin-internationalized-array";
import { defaultDocumentNode } from "./sanity/desk/defaultDocumentNode";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool({
      structure: myStructure,
      defaultDocumentNode,
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    internationalizedArray({
      languages: [
        { id: "id", title: "Indonesia" },
        { id: "en", title: "English" },
      ],
      defaultLanguages: ["id"],
      fieldTypes: ["string", "text"],
    }),
  ],
});
