import React from "react";
import { Newsletter } from "@/components/common/newsletter";
import { Hero } from "@/components/common/hero";
import { Services } from "@/components/pages/services";

export default function ServicePage() {
  return (
    <>
      <Hero
        title="Layanan Akuntan"
        subtitle="Kami memberikan layanan konsultasi akuntansi dengan berbagai spesialisasi sesuai kebutuhan bisnis anda."
      />
      <Services />
      <Newsletter />
    </>
  );
}
