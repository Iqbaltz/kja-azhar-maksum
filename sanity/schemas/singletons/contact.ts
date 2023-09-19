import { defineArrayMember, defineField, defineType } from "sanity";

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
    defineField({
      title: "Social Media",
      name: "socialMedia",
      type: "array",
      of: [
        defineArrayMember({
          title: "Info",
          name: "info",
          type: "object",
          fields: [
            {
              title: "Name",
              name: "title",
              type: "string",
            },
            {
              title: "URL",
              name: "url",
              type: "url",
            },
            {
              title: "Icon",
              name: "icon",
              type: "image",
            },
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "url",
              icon: "icon",
            },
            prepare({ title, subtitle, icon }) {
              return {
                title,
                subtitle,
                media: icon,
              };
            },
          },
        }),
      ],
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
