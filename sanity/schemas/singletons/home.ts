import { defineField, defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    {
      title: "Home SEO",
      name: "seo",
      type: "object",
      fields: [
        defineField({ name: "title", type: "internationalizedArrayString" }),
        defineField({
          name: "description",
          type: "internationalizedArrayString",
        }),
      ],
    },
    {
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
    },
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
