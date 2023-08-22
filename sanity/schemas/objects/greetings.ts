import { BookIcon } from "@sanity/icons";

export default {
  title: "Greetings",
  name: "greetings",
  type: "object",
  icon: BookIcon,
  fields: [
    { name: "title", type: "string", title: "Title" },
    { name: "description", type: "text", title: "Description" },
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
