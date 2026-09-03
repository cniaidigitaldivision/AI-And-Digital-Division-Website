import { createFileRoute, notFound } from "@tanstack/react-router";
import { PACKAGES } from "@/lib/cni-data";
import { Navbar } from "@/components/cni/Navbar";
import { Footer } from "@/components/cni/Contact";
import { PackageDetailPage } from "@/components/cni/PackageDetailPage";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export const Route = createFileRoute("/packages/$slug")({
  component: PackageRoutePage,
  loader: ({ params }) => {
    const pkg = PACKAGES.find((p) => slugify(p.name) === params.slug);
    if (!pkg) {
      throw notFound();
    }
    return { pkg };
  },
});

function PackageRoutePage() {
  const { pkg } = Route.useLoaderData();

  return (
    <div className="relative min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col pt-0">
        <PackageDetailPage pkg={pkg} />
      </main>
      <Footer />
    </div>
  );
}
