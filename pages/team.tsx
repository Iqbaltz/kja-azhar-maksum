import { Hero } from "@/components/common/hero";
import { Newsletter } from "@/components/common/newsletter";
import { Bio, Teams } from "@/components/pages/team";
import React from "react";

export default function page() {
  return (
    <>
      <Hero
        title="Tim Kami"
        subtitle="Kami memiliki tim yang profesional yang berorientasi pada kepentingan klien kami yang terpercaya."
        bgSrc="/images/hero-tim.png"
      />
      <Bio />
      <Teams />
      <Newsletter />
    </>
  );
}
