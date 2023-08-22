import { Hero } from "@/components/common/hero";
import { Newsletter } from "@/components/common/newsletter";
import { About, AboutBottom, KeyFeatures } from "@/components/pages/about";

export default function AboutPage() {
  return (
    <main>
      <Hero
        title="Tentang"
        subtitle="Kantor jasa akuntan yang unggul dan terpercaya di bidang
      akuntansi, pelaporan keuangan dan perpajakan."
        bgSrc="/images/hero-tentang.png"
      />
      <About />
      <KeyFeatures />
      <AboutBottom />
      <Newsletter />
    </main>
  );
}
