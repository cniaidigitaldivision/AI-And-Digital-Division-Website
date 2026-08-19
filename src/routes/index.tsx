import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/cni/Navbar";
import { Hero } from "@/components/cni/Hero";
import { AboutReveal } from "@/components/cni/AboutReveal";
import { About, ServiceEcosystem, Journey } from "@/components/cni/SectionsA";
import {
  Packages,
  Technology,
  Methodology,
  Portfolio,
  Support,
  GlobalPresence,
  Leadership,
} from "@/components/cni/SectionsB";
import { Contact, Footer } from "@/components/cni/Contact";
import { CustomCursor } from "@/components/cni/primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CNI AI & Digital Division | Intelligent Growth & Transformation" },
      {
        name: "description",
        content:
          "Branding, websites, SEO, CRM, ERP and AI automation for ambitious businesses in Pakistan and Saudi Arabia. The AI & Digital Division of Crescent Nova International.",
      },
      { property: "og:title", content: "CNI AI & Digital Division" },
      {
        property: "og:description",
        content:
          "Intelligent Growth. Integrated Business Transformation. Your growth partner in Pakistan & Saudi Arabia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background md:cursor-none">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <AboutReveal />
        <About />
        <ServiceEcosystem />
        <Journey />
        <Packages />
        <Technology />
        <Methodology />
        <Portfolio />
        <Support />
        <GlobalPresence />
        <Leadership />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
