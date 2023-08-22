// schemas/siteSettings.js
export default {
  name: "news",
  title: "News",
  type: "document",
  fields: [
    {
      name: "title",
      title: "News Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (rule: any) => rule.required(),
    },
    {
      name: "description",
      title: "News Description",
      type: "text",
    },
  ],
};
