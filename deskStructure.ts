// ./deskStructure.js

import {
  BookIcon,
  HomeIcon,
  MobileDeviceIcon,
  TiersIcon,
  UsersIcon,
} from "@sanity/icons";

export const myStructure = (S: any) =>
  S.list()
    .title("Base")
    .items([
      // S.listItem()
      //   .title("Settings")
      //   .child(
      //     // Sets a title for our new list
      //     S.list()
      //       .title("Settings Documents")
      //       // Add items to the array
      //       // Each will pull one of our new singletons
      //       .items([
      //         S.listItem()
      //           .title("Metadata")
      //           .child(
      //             S.document()
      //               .schemaType("siteSettings")
      //               .documentId("siteSettings")
      //           ),
      //         S.listItem()
      //           .title("Site Colors")
      //           .child(S.document().schemaType("colors").documentId("colors")),
      //       ])
      //   ),
      // S.divider(),
      S.listItem()
        .title("Pages")
        .child(
          S.list()
            .title("Halaman Website")
            .items([
              S.listItem()
                .title("Home")
                .icon(HomeIcon)
                .child(S.document().schemaType("home").documentId("home")),
              S.listItem()
                .title("Services")
                .icon(TiersIcon)
                .child(
                  S.document().schemaType("services").documentId("services")
                ),
              S.listItem()
                .title("Team")
                .icon(UsersIcon)
                .child(S.document().schemaType("team").documentId("team")),
              S.listItem()
                .title("About")
                .icon(BookIcon)
                .child(S.document().schemaType("about").documentId("about")),
              S.listItem()
                .title("Contact")
                .icon(MobileDeviceIcon)
                .child(
                  S.document().schemaType("contact").documentId("contact")
                ),
            ])
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem: any) =>
          ![
            "siteSettings",
            "colors",
            "home",
            "services",
            "team",
            "pages",
            "about",
            "contact",
          ].includes(listItem.getId())
      ),
    ]);
