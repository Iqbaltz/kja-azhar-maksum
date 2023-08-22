import { Hero } from "@/components/common/hero";
import { ContactForm, ContactInfo } from "@/components/pages/contact";

export default function ContactPage() {
  return (
    <main>
      <Hero
        bgSrc="/images/hero-kontak.png"
        title="Hubungi Kami"
        subtitle="Hubungi kami segera untuk pelayanan konsultasi akuntansi,
pelaporan keuangan dan perpajakan yang akurat."
      />
      <ContactForm />
      <ContactInfo />
    </main>
  );
}
