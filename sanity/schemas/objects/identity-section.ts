import { InlineIcon, SquareIcon } from "@sanity/icons";
import { defineType } from "sanity";

export default defineType({
  title: "Identity Section",
  name: "identitySection",
  type: "object",
  icon: InlineIcon,
  fields: [
    {
      name: "identityList",
      title: "Identity List",
      type: "array",
      of: [
        {
          title: "Identity Item",
          name: "identity",
          type: "object",
          fields: [
            {
              title: "Title",
              name: "title",
              type: "internationalizedArrayString",
            },
            {
              title: "Description",
              name: "description",
              type: "internationalizedArrayText",
            },
          ],
          preview: {
            select: {
              title: "title",
            },
            prepare({ title }) {
              return {
                title: title[0].value,
                media: SquareIcon,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Identity Section",
        media: InlineIcon,
      };
    },
  },
});
