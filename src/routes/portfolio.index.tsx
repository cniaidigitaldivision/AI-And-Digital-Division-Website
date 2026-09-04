import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/cni/Navbar";
import { Footer } from "@/components/cni/Contact";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { MagneticButton } from "@/components/cni/primitives";

export const Route = createFileRoute("/portfolio/")({
  component: PortfolioPage,
});

import { PORTFOLIO_PROJECTS, STATS } from "@/lib/cni-data";
import { getProjectImages } from "@/lib/project-images";

import { Testimonials } from "@/components/cni/Testimonials";
import { ClientLogos } from "@/components/cni/ClientLogos";

function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 flex flex-col pt-32 pb-20 w-full">
        {/* 1. HERO / INTRO */}
        <section className="text-center px-6 max-w-4xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl text-[var(--gold-bright)] font-semibold mb-6"
          >
            Our Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white font-display mb-8"
          >
            Delivering excellence in social media, web design, branding, and AI automation.
          </motion.p>
        </section>

        {/* 2. PROJECTS */}
        <section className="px-6 max-w-7xl mx-auto w-full mb-24 flex flex-col gap-16 md:gap-24">
          <AnimatePresence mode="popLayout">
            {PORTFOLIO_PROJECTS.map((project, index) => {
              const isEven = index % 2 !== 0;
              const dynamicImages = getProjectImages(project.folderName);
              let coverImage = project.thumbnail;
              if (dynamicImages.length > 0) {
                coverImage =
                  dynamicImages.find((img) => img.includes("home-page.png")) || dynamicImages[0];
              }

              return (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`flex flex-col md:flex-row gap-8 lg:gap-16 items-center ${isEven ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Image side */}
                  <div className="w-full md:w-1/2">
                    <Link
                      to={`/portfolio/$slug`}
                      params={{ slug: project.slug }}
                      className="block overflow-hidden rounded-2xl border border-white/10 group relative shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                    >
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                      <div className="aspect-[4/3] w-full">
                        <img
                          src={coverImage}
                          alt={project.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </Link>
                  </div>

                  {/* Text side */}
                  <div className="w-full md:w-1/2 space-y-6">
                    <div>
                      <div className="text-sm uppercase tracking-widest text-[var(--gold-bright)] mb-3 font-semibold flex items-center gap-2">
                        <span className="w-8 h-px bg-[var(--gold)]/50"></span>
                        {project.category}
                      </div>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white mb-4">
                        {project.title}
                      </h2>
                      <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                        {project.desc}
                      </p>
                    </div>

                    <Link
                      to="/portfolio/$slug"
                      params={{ slug: project.slug }}
                      className="inline-block"
                    >
                      <MagneticButton
                        as="button"
                        variant="gold"
                        className="px-8 py-3.5 text-sm group rounded-full text-[var(--ink)]"
                      >
                        <span className="flex items-center gap-2 font-medium">
                          See More Details
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </MagneticButton>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </section>

        {/* 4. STATS STRIP */}
        <section className="px-6 max-w-7xl mx-auto w-full mb-24">
          <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border grid-cols-2 sm:grid-cols-4 lg:grid-cols-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="h-full bg-[var(--ink)] p-4 xl:p-6 text-center flex flex-col justify-center"
              >
                <div className="text-3xl xl:text-4xl font-display font-bold text-[var(--gold-bright)]">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="mt-2 text-[0.6rem] uppercase tracking-[0.15em] text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. TESTIMONIALS */}
        <div className="mb-24 -mx-6 md:-mx-12">
          <Testimonials />
        </div>

        {/* 6. CLIENT LOGOS */}
        <section className="px-6 max-w-7xl mx-auto w-full mb-24 text-center overflow-hidden">
          <p className="text-sm uppercase tracking-widest text-[var(--gold-bright)] font-semibold mb-12">
            Trusted by Ambitious Brands
          </p>
          <ClientLogos />
        </section>

        {/* 7. CTA SECTION */}
        <section className="px-6 max-w-4xl mx-auto text-center border-t border-white/10 pt-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-6">
            Want results like these?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Let's discuss how our tailored digital strategies can accelerate your business growth.
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
