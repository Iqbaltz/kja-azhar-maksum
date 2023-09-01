import { UsersIcon } from "@sanity/icons";
import { defineType } from "sanity";

export default defineType({
  title: "Team Section",
  name: "teamSection",
  type: "object",
  icon: UsersIcon,
  fields: [
    {
      name: "teamList",
      title: "Team List",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "teams" }],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Team Section",
        media: UsersIcon,
      };
    },
  },
});
