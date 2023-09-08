import { Layout } from "@/components/common/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { lazy } from "react";

const PreviewProvider = lazy(
  () => import("@/components/common/PreviewProvider")
);

export interface SharedPageProps {
  draftMode: boolean;
  token: string;
}

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps;

  return (
    <>
      {draftMode ? (
        <PreviewProvider previewToken={token}>
          <h1 className="opacity-70 fixed bottom-0 right-0 px-2 py-0.5 bg-black text-white z-50">
            Preview
          </h1>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PreviewProvider>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
