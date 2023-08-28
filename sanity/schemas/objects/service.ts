import { SquareIcon } from "@sanity/icons";
import { defineType } from "sanity";

export default defineType({
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
    {
      name: "title",
      type: "internationalizedArrayString",
      title: "Title of The Service",
    },
    {
      name: "description",
      type: "internationalizedArrayText",
      title: "Description of The Service",
    },
  ],
  preview: {
    select: {
      title: "title",
      image: "image",
    },
    prepare({ title, image }: any) {
      return {
        title: title[0].value,
        media: image,
      };
    },
  },
});
