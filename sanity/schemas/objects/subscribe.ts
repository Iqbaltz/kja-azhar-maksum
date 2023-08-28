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
      type: "internationalizedArrayString",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "internationalizedArrayText",
    },
    {
      name: "placeholder",
      title: "Input Placeholder",
      type: "internationalizedArrayString",
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "internationalizedArrayString",
    },
  ],
  preview: {
    select: { title: "title" },
    prepare({ title }: any) {
      return {
        title: title[0].value,
        media: EnvelopeIcon,
      };
    },
  },
};
