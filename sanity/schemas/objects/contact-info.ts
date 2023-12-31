import { MobileDeviceIcon } from "@sanity/icons";
import { defineType } from "sanity";

export default defineType({
  title: "Contact Info",
  name: "contactInfo",
  type: "object",
  icon: MobileDeviceIcon,
  fields: [
    {
      title: "Contact Information List",
      name: "contactInfoList",
      type: "array",
      of: [
        {
          title: "Info",
          name: "info",
          type: "object",
          fields: [
            {
              title: "Info Title",
              name: "title",
              type: "internationalizedArrayString",
            },
            {
              title: "Info Value",
              name: "value",
              type: "string",
            },
            {
              title: "Contact Type",
              name: "contactType",
              type: "string",
              options: {
                list: [
                  { title: "Email", value: "email" },
                  { title: "Number", value: "number" },
                  { title: "Location", value: "location" },
                ],
                layout: "radio",
                direction: "horizontal",
              },
              initialValue: "email",
            },
            {
              title: "Icon",
              name: "icon",
              type: "image",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Contact Information",
        media: MobileDeviceIcon,
      };
    },
  },
});
