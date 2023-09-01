import { defineField, defineType } from "sanity";

export default defineType({
  name: "team",
  title: "Team",
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
      title: "Team SEO",
      name: "teamSeo",
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
          title: "Team Section",
          type: "teamSection",
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
        title: "Content for Team Page",
        subtitle: "Content for Team Page",
      };
    },
  },
});
