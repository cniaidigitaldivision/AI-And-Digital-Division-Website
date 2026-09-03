import { createFileRoute, notFound } from "@tanstack/react-router";
import { SERVICES } from "@/lib/cni-data";
import { Navbar } from "@/components/cni/Navbar";
import { Footer } from "@/components/cni/Contact";
import { ServiceDetailPage } from "@/components/cni/ServiceDetailPage";

export const Route = createFileRoute("/services/$slug")({
  component: ServicePage,
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) {
      throw notFound();
    }
    return { service };
  },
});

function ServicePage() {
  const { service } = Route.useLoaderData();

  return (
    <div className="relative min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col pt-20">
        <ServiceDetailPage service={service} />
      </main>
      <Footer />
    </div>
  );
}
