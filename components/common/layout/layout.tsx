import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar";

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
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
