import { BlockElementIcon, CircleIcon } from "@sanity/icons";
import { defineType } from "sanity";

export default defineType({
  title: "Hero",
  name: "hero",
  type: "object",
  icon: BlockElementIcon,
  fields: [
    { title: "Title", name: "title", type: "internationalizedArrayString" },
    {
      title: "Subtitle",
      name: "subtitle",
      type: "internationalizedArrayString",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "cta",
      type: "array",
      title: "Call to Actions",
      of: [
        {
          title: "CTA Details",
          type: "object",
          fields: [
            {
              title: "Text",
              name: "text",
              type: "internationalizedArrayString",
            },
            {
              title: "Link",
              name: "link",
              type: "string",
            },
          ],
          preview: {
            select: {
              title: "text",
              subtitle: "link",
            },
            prepare: ({ title, subtitle }: any) => ({
              title: title[0].value,
              subtitle,
              media: CircleIcon,
            }),
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      img: "image",
    },
    prepare: ({ title, img }: any) => ({
      title: title[0].value,
      media: img,
    }),
  },
});
