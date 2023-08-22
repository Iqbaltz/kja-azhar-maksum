export default {
  name: "services",
  title: "Layanan",
  type: "document",
  fields: [
    {
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
    },
    {
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "text",
    },
    {
      name: "heroImg",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
