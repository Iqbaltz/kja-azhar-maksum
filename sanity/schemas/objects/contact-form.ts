import { StackCompactIcon } from "@sanity/icons";
import { defineType } from "sanity";

export default defineType({
  title: "Contact Form",
  name: "contactForm",
  type: "object",
  icon: StackCompactIcon,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Subtitle",
      name: "subtitle",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title,
        media: StackCompactIcon,
      };
    },
  },
});
