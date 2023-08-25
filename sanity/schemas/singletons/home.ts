export default {
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    {
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          title: "Hero",
          type: "hero",
        },
        {
          title: "Greetings",
          type: "greetings",
        },
        {
          title: "Features",
          type: "features",
        },
        {
          title: "Subscribe",
          type: "subscribe",
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Content for Homepage",
        subtitle: "Content for homepage",
      };
    },
  },
};
