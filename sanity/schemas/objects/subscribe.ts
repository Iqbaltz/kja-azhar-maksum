import { EnvelopeIcon } from "@sanity/icons";

export default {
  title: "Subscribe",
  name: "subscribe",
  type: "object",
  icon: EnvelopeIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "text",
    },
    {
      name: "placeholder",
      title: "Input Placeholder",
      type: "string",
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
    },
  ],
  preview: {
    select: { title: "title" },
    prepare({ title }: any) {
      return {
        title: title,
        media: EnvelopeIcon,
      };
    },
  },
};
