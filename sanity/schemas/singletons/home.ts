import { defineField, defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Home",
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
      title: "Home SEO",
      name: "seo",
      type: "object",
      fields: [
        defineField({ name: "title", type: "internationalizedArrayString" }),
        defineField({
          name: "description",
          type: "internationalizedArrayText",
        }),
        defineField({
          name: "keywords",
          title: "Keywords",
          type: "string",
        }),
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
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
          title: "Features",
          type: "features",
        },
        {
          title: "Subscribe",
          type: "subscribe",
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
        title: "Content for Homepage",
        subtitle: "Content for homepage",
      };
    },
  },
});
