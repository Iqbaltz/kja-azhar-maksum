import { defineField } from "sanity";

export const seoType = defineField({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "description", type: "string" }),
  ],
});
