import { BookIcon } from "@sanity/icons";
import { defineType } from "sanity";

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
          { title: "Type 4", value: "4" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "1",
    },
    {
      name: "title",
      type: "internationalizedArrayString",
      title: "Title",
      hidden: ({ parent }: any) => parent?.layoutType == "4",
    },
    {
      name: "subtitle",
      type: "internationalizedArrayString",
      title: "Subtitle",
      hidden: ({ parent }: any) => parent?.layoutType != "2",
    },
    {
      name: "description1",
      type: "internationalizedArrayText",
      title: "Description 1",
    },
    {
      name: "description2",
      type: "internationalizedArrayText",
      title: "Description 2",
      hidden: ({ parent }: any) => parent?.layoutType === "3",
    },
    {
      name: "cta",
      type: "object",
      title: "Call to Action",
      fields: [
        { name: "text", title: "Text", type: "internationalizedArrayString" },
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
  preview: {
    select: {
      title: "title",
      subtitle: "description1",
      img: "image",
    },
    prepare: ({ title, subtitle, img }: any) => ({
      title: title?.[0]?.value || subtitle?.[0]?.value,
      media: img,
    }),
  },
});
