import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

const withoutLayout = ["/studio"];

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useRouter();

  const isWithoutLayout = withoutLayout.some((path) =>
    pathname.startsWith(path)
  );

  if (isWithoutLayout) {
    return <>{children}</>;
  }

  return (
    <>
      <Head>
        <title>Kantor Jasa Akuntan Azhar Maksum</title>
        <meta
          name="description"
          content="Menjadi Mitra Keuangan dan Akuntansi bagi Industri di Indonesia"
          key="desc"
        />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
