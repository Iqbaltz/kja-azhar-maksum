import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "Tentang",
  type: "document",
  groups: [
    {
      name: "page",
      title: "Page",
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    {
      title: "About SEO",
      name: "aboutSeo",
      type: "object",
      fields: [
        defineField({ name: "title", type: "internationalizedArrayString" }),
        defineField({
          name: "description",
          type: "internationalizedArrayString",
        }),
      ],
      group: "seo",
    },
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          title: "Hero",
          type: "hero",
        },
        {
          title: "Greetings",
          type: "greetings",
        },
        {
          title: "Identity",
          type: "identitySection",
        },
      ],
      group: "page",
      options: {
        sortable: false,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Content for About Page",
        subtitle: "Content for About Page",
      };
    },
  },
});
