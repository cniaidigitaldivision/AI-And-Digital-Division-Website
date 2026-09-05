import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/cni/Navbar";
import { Hero } from "@/components/cni/Hero";
import { AboutReveal } from "@/components/cni/AboutReveal";
import { ServiceEcosystem } from "@/components/cni/SectionsA";
import { Packages, Portfolio, GlobalPresence } from "@/components/cni/SectionsB";
import { Contact, Footer } from "@/components/cni/Contact";
import { Testimonials } from "@/components/cni/Testimonials";
import { FAQSection } from "@/components/cni/FAQSection";
import { GalleryPage } from "@/routes/gallery";
import { CTASection } from "@/components/cni/CTASection";

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
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <AboutReveal />
        <ServiceEcosystem />
        <Portfolio />
        <Packages />
        <GlobalPresence />
        <Testimonials />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
