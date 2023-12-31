import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";
import { SanityClient } from "@sanity/client";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: "published",
  });
  if (preview) {
    if (!preview.token) {
      throw new Error("You must provide a token to preview drafts");
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: "previewDrafts",
    });
  }
  return client;
}
