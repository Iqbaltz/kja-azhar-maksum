// ./deskStructure.js

import {
  BookIcon,
  HomeIcon,
  MobileDeviceIcon,
  TiersIcon,
  UsersIcon,
} from "@sanity/icons";
import { defineUrlResolver, Iframe } from "sanity-plugin-iframe-pane";

export const myStructure = (S: any) =>
  S.list()
    .title("Panel")
    .items([
      S.listItem()
        .title("Pages")
        .child(
          S.list()
            .title("Halaman Website")
            .items([
              S.listItem()
                .title("Home")
                .icon(HomeIcon)
                .child(
                  S.document()
                    .schemaType("home")
                    .documentId("home")
                    .views([
                      S.view.form(),
                      S.view
                        .component(Iframe)
                        .title("Preview")
                        .options({
                          url: defineUrlResolver({
                            base: `/api/preview`,
                          }),
                        }),
                    ])
                ),
              S.listItem()
                .title("Services")
                .icon(TiersIcon)
                .child(
                  S.document()
                    .schemaType("services")
                    .documentId("services")
                    .views([
                      S.view.form(),
                      S.view
                        .component(Iframe)
                        .title("Preview")
                        .options({
                          url: defineUrlResolver({
                            base: `/api/preview`,
                          }),
                        }),
                    ])
                ),
              S.listItem()
                .title("Team")
                .icon(UsersIcon)
                .child(
                  S.document()
                    .schemaType("team")
                    .documentId("team")
                    .views([
                      S.view.form(),
                      S.view
                        .component(Iframe)
                        .title("Preview")
                        .options({
                          url: defineUrlResolver({
                            base: `/api/preview`,
                          }),
                        }),
                    ])
                ),
              S.listItem()
                .title("About")
                .icon(BookIcon)
                .child(
                  S.document()
                    .schemaType("about")
                    .documentId("about")
                    .views([
                      S.view.form(),
                      S.view
                        .component(Iframe)
                        .title("Preview")
                        .options({
                          url: defineUrlResolver({
                            base: `/api/preview`,
                          }),
                        }),
                    ])
                ),
              S.listItem()
                .title("Contact")
                .icon(MobileDeviceIcon)
                .child(
                  S.document()
                    .schemaType("contact")
                    .documentId("contact")
                    .views([
                      S.view.form(),
                      S.view
                        .component(Iframe)
                        .title("Preview")
                        .options({
                          url: defineUrlResolver({
                            base: `/api/preview`,
                          }),
                        }),
                    ])
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
