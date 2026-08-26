import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { PageHeader } from "@/components/page-header";
import { WorkGallery } from "@/components/work-gallery";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Recent solar, CCTV, tracking, intercom and networking installations by Zenith Wills Technologies across Lagos and its surroundings.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Our work"
          subtitle="A look at recent installations from the field."
          image="/images/rooftop.jpg"
        />
        <WorkGallery />
        <Cta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
