import { TiersIcon } from "@sanity/icons";

export default {
  title: "Features",
  name: "features",
  type: "object",
  icon: TiersIcon,
  fieldsets: [{ name: "cta", title: "Call to Action" }],
  fields: [
    { name: "title", type: "string", title: "Title" },
    { name: "description1", type: "text", title: "Description 1" },
    { name: "description2", type: "text", title: "Description 2" },
    {
      name: "services",
      title: "Services",
      type: "array",
      of: [{ title: "Service", type: "service" }],
    },
    {
      name: "text",
      title: "Text",
      type: "string",
      fieldset: "cta",
    },
    {
      name: "link",
      title: "Link",
      type: "string",
      fieldset: "cta",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }: any) {
      return {
        title,
        media: TiersIcon,
      };
    },
  },
};
