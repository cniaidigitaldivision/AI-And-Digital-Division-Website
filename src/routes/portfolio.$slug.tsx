import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/cni/Navbar";
import { Footer } from "@/components/cni/Contact";
import { ArrowLeft, ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { PORTFOLIO_PROJECTS } from "@/lib/cni-data";
import { getProjectImages } from "@/lib/project-images";
import { MagneticButton } from "@/components/cni/primitives";
import { ProjectCarousel } from "@/components/cni/ProjectCarousel";

export const Route = createFileRoute("/portfolio/$slug")({
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { slug } = Route.useParams();
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="relative min-h-screen bg-background flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center pt-32 pb-20 w-full px-6">
          <h1 className="font-display text-4xl text-white font-semibold mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="text-[var(--gold)] hover:underline">
            Return to Portfolio
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 flex flex-col pt-32 pb-20 w-full px-6 max-w-4xl mx-auto">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-[var(--gold)] transition-colors mb-12 w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 text-xs font-semibold bg-[var(--gold)]/10 text-[var(--gold)] rounded-full border border-[var(--gold)]/20">
              {project.category}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-semibold mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">{project.desc}</p>
        </motion.div>

        {/* Project Images Gallery */}
        {(() => {
          const dynamicImages = getProjectImages(project.folderName);
          if (dynamicImages.length > 0) {
            return <ProjectCarousel images={dynamicImages} />;
          }

          return (
            <div className="space-y-12 mb-16">
              {project.images.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="relative group"
                >
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1.5 rounded-md bg-[var(--gold)]/10 border border-[var(--gold)]/20 text-[var(--gold)] text-xs font-semibold uppercase tracking-widest shadow-[0_0_10px_rgba(217,169,98,0.1)]">
                      {img.device} View
                    </span>
                  </div>
                  <div className="w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative">
                    <img
                      src={img.url}
                      alt={`${project.title} ${img.device} Preview`}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          );
        })()}

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2 space-y-12">
            <div>
              <h2 className="font-display text-2xl text-white font-medium mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--gold)]/10 flex items-center justify-center text-[var(--gold)] font-mono text-sm">
                  01
                </div>
                The Challenge
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {project.challenge}
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white font-medium mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--gold)]/10 flex items-center justify-center text-[var(--gold)] font-mono text-sm">
                  02
                </div>
                Our Solution
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {project.solution}
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white font-medium mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--gold)]/10 flex items-center justify-center text-[var(--gold)] font-mono text-sm">
                  03
                </div>
                The Result
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {project.result}
              </p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-fit sticky top-32">
            <h3 className="font-display text-lg text-white font-medium mb-6 border-b border-white/10 pb-4">
              Project Details
            </h3>
            <div className="space-y-6">
              <div>
                <div className="text-sm text-muted-foreground mb-1 uppercase tracking-widest">
                  Client
                </div>
                <div className="text-white text-lg font-medium">{project.client}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1 uppercase tracking-widest">
                  Services
                </div>
                <div className="text-white text-lg font-medium">{project.category}</div>
              </div>
              {project.liveLink && (
                <div className="pt-4 border-t border-white/10">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 rounded-md bg-[var(--gold)] text-black font-semibold hover:bg-[var(--gold-bright)] transition-colors shadow-[var(--shadow-glow-gold)]"
                  >
                    Visit Live Site
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="text-center border-t border-white/10 pt-20">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6">
            Ready to start your project?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Contact us today to discuss how we can bring your vision to life and deliver measurable
            results.
          </p>
          <MagneticButton as="a" href="/contact" className="px-10 py-5 text-lg group inline-flex">
            <span className="flex items-center gap-3">
              Get a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </MagneticButton>
        </section>
      </main>

      <Footer />
    </div>
  );
}
