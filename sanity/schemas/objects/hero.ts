import { BlockElementIcon, CircleIcon } from "@sanity/icons";

export default {
  title: "Hero",
  name: "hero",
  type: "object",
  icon: BlockElementIcon,
  fields: [
    { name: "title", type: "string", title: "Title" },
    { name: "subtitle", type: "text", title: "Subtitle" },
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
              type: "string",
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
              title,
              subtitle,
              media: CircleIcon,
            }),
          },
        },
      ],
    },
  ],
};
