import { BookIcon } from "@sanity/icons";

export default {
  title: "Greetings",
  name: "greetings",
  type: "object",
  icon: BookIcon,
  fieldsets: [
    {
      name: "cta",
      title: "Call to Action",
      hidden: ({ parent }: any) => parent?.layoutType != "3",
    },
  ],
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
    { name: "title", type: "string", title: "Title" },
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
      name: "text",
      type: "string",
      title: "Text",
      fieldset: "cta",
    },
    {
      name: "link",
      type: "string",
      title: "Link",
      fieldset: "cta",
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
};
