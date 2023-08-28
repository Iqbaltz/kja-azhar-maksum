import { TiersIcon } from "@sanity/icons";
import { defineType } from "sanity";

export default defineType({
  title: "Features",
  name: "features",
  type: "object",
  icon: TiersIcon,
  fields: [
    { name: "title", type: "internationalizedArrayString", title: "Title" },
    {
      name: "description1",
      type: "internationalizedArrayText",
      title: "Description 1",
    },
    {
      name: "description2",
      type: "internationalizedArrayText",
      title: "Description 2",
    },
    {
      name: "services",
      title: "Services",
      type: "array",
      of: [{ title: "Service", type: "service" }],
    },
    {
      name: "cta",
      type: "object",
      title: "Call to Action",
      fields: [
        {
          name: "text",
          title: "Text",
          type: "internationalizedArrayString",
        },
        {
          name: "link",
          title: "Link",
          type: "string",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }: any) {
      return {
        title: title[0].value,
        media: TiersIcon,
      };
    },
  },
});
