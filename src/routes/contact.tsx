import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/cni/Navbar";
import { Contact, Footer } from "@/components/cni/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | CNI AI & Digital Division" },
      {
        name: "description",
        content: "Get in touch with CNI AI & Digital Division.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="relative min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* We can add a bit of pt-20 if Contact itself doesn't have enough top padding for the fixed navbar, but Contact has py-28 so it should be fine */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
