import { defineField, defineType } from "sanity";

export default defineType({
  name: "services",
  title: "Layanan",
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
      title: "Service SEO",
      name: "serviceSeo",
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
          title: "Features",
          type: "features",
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
        title: "Content for Service Page",
        subtitle: "Content for Service Page",
      };
    },
  },
});
