import { defineField, defineType } from "sanity";
import { UsersIcon } from "@sanity/icons";

export default defineType({
  name: "authors",
  title: "Authors",
  type: "document",
  icon: UsersIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title",
      media: "photo",
    },
    prepare(selection) {
      return { ...selection };
    },
  },
});
