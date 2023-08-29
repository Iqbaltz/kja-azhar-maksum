import { DocumentsIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

// schemas/siteSettings.js
export default defineType({
  name: "news",
  title: "News",
  type: "document",
  icon: DocumentsIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (rule: any) => rule.required(),
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "authors" }],
      options: {
        disableNew: true,
      },
    },
    {
      name: "excerpt",
      title: "Excerpt (Kutipan Singkat)",
      type: "text",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule: any) => rule.required(),
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
      validation: (rule: any) => rule.required(),
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
