import { BookIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  title: "Greetings",
  name: "greetings",
  type: "object",
  icon: BookIcon,
  fields: [
    {
      title: "Layout Type",
      name: "layoutType",
      type: "string",
      options: {
        list: [
          { title: "Type 1", value: "1" },
          { title: "Type 2", value: "2" },
          { title: "Type 3", value: "3" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "1",
    },
    defineField({ name: "title", type: "string", title: "Title" }),
    defineField({
      name: "judul",
      title: "Judul",
      type: "internationalizedArrayString",
    }),
    {
      name: "subtitle",
      type: "string",
      title: "Subtitle",
      hidden: ({ parent }: any) => parent?.layoutType != "2",
    },
    { name: "description1", type: "text", title: "Description 1" },
    {
      name: "description2",
      type: "text",
      title: "Description 2",
      hidden: ({ parent }: any) => parent?.layoutType === "3",
    },
    {
      name: "cta",
      type: "object",
      title: "Call to Action",
      fields: [
        { name: "text", title: "Text", type: "string" },
        { name: "link", title: "Link", type: "string" },
      ],
      hidden: ({ parent }: any) => parent?.layoutType != "3",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
  ],
});
