import { SquareIcon } from "@sanity/icons";

export default {
  title: "Service",
  name: "service",
  type: "object",
  icon: SquareIcon,
  fields: [
    {
      name: "image",
      type: "image",
      title: "Image of The Service",
      options: {
        hotspot: true,
      },
    },
    { name: "title", type: "string", title: "Title of The Service" },
    {
      name: "description",
      type: "text",
      title: "Description of The Service",
    },
  ],
};
