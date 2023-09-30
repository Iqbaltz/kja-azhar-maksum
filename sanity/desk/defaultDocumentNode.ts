import { DefaultDocumentNodeResolver } from "sanity/desk";
import Iframe, {
  IframeOptions,
  defineUrlResolver,
} from "sanity-plugin-iframe-pane";

const iframeOptions = {
  url: defineUrlResolver({
    base: "/api/preview",
    requiresSlug: ["news"],
  }),
  reload: { button: true },
} satisfies IframeOptions;

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  switch (schemaType) {
    case `news`:
      return S.document().views([
        S.view.form(),
        S.view.component(Iframe).options(iframeOptions).title("Preview"),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};
