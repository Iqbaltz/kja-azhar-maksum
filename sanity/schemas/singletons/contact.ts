import { defineField, defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact",
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
      title: "Contact SEO",
      name: "contactSeo",
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
          title: "Contact Form",
          type: "contactForm",
        },
      ],
      group: "page",
      options: {
        sortable: false,
      },
    }),
    defineField({
      title: "Contact Information",
      name: "contacts",
      type: "contactInfo",
      group: "page",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Content for Contact Page",
        subtitle: "Content for Contact Page",
      };
    },
  },
});
