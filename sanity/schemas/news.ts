import { DocumentsIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

// schemas/siteSettings.js
export default defineType({
  name: "news",
  title: "News",
  type: "document",
  icon: DocumentsIcon,
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
      title: "News SEO",
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
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: any) => rule.required(),
      group: "page",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (rule: any) => rule.required(),
      group: "page",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "authors" }],
      options: {
        disableNew: true,
      },
      group: "page",
    },
    {
      name: "excerpt",
      title: "Excerpt (Kutipan Singkat)",
      type: "text",
      group: "page",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule: any) => rule.required(),
      group: "page",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
      validation: (rule: any) => rule.required(),
      group: "page",
    },
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
