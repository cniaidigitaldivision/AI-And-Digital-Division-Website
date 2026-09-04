import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/cni/Navbar";
import { Footer } from "@/components/cni/Contact";
import { PACKAGES } from "@/lib/cni-data";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Reveal, GoldRule } from "@/components/cni/primitives";
import { ArrowUpRight, Check } from "lucide-react";

export const Route = createFileRoute("/packages/")({
  head: () => ({
    meta: [
      { title: "Packages | CNI AI & Digital Division" },
      {
        name: "description",
        content:
          "Scalable digital growth packages designed to accelerate your brand — from social media to full AI-powered growth systems.",
      },
    ],
  }),
  component: PackagesIndexPage,
});

// ── Helpers ──────────────────────────────────────────────────────────────────

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

// Pull a numeric string like "50,000" out of a price like "PKR 50,000"
function extractNumber(price: string) {
  const m = price.match(/[\d,]+/);
  return m ? m[0] : price;
}

// ── Package Card ──────────────────────────────────────────────────────────────

function PackageCard({
  pkg,
  index,
}: {
  pkg: (typeof PACKAGES)[number];
  index: number;
}) {
  const slug = slugify(pkg.name);

  // Highlight the middle-tier cards slightly — purely cosmetic
  const isFeatured =
    pkg.name === "Performance" || pkg.name === "Scale" || pkg.name === "Growth";

  return (
    <Reveal delay={index * 0.08}>
      <Link
        to={`/packages/${slug}`}
        className={[
          "group relative flex flex-col h-full rounded-2xl overflow-hidden border transition-all duration-500",
          "bg-[var(--ink)] hover:-translate-y-2",
          "hover:shadow-[var(--shadow-glow-gold)]",
          isFeatured
            ? "border-[var(--gold)]/40 hover:border-[var(--gold)]"
            : "border-border hover:border-[var(--gold)]",
        ].join(" ")}
      >
        {/* Featured badge */}
        {isFeatured && (
          <div className="absolute top-4 right-4 z-10">
            <span className="px-2.5 py-1 rounded-full text-[0.6rem] font-bold uppercase tracking-widest bg-[var(--gold)]/15 text-[var(--gold-bright)] border border-[var(--gold)]/30">
              Popular
            </span>
          </div>
        )}

        {/* Top accent line — gold for featured, teal for others */}
        <div
          className={[
            "h-[2px] w-full",
            isFeatured
              ? "bg-gradient-to-r from-[var(--gold)] via-[var(--gold-bright)] to-[var(--gold)]"
              : "bg-gradient-to-r from-[var(--teal)]/40 via-[var(--teal-bright)]/60 to-[var(--teal)]/40",
          ].join(" ")}
        />

        <div className="flex flex-col flex-1 p-7">
          {/* Subtitle eyebrow */}
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold-bright)] mb-3">
            {pkg.subtitle}
          </p>

          {/* Package name */}
          <h3 className="font-display text-3xl font-semibold text-foreground mb-2 group-hover:text-[var(--gold)] transition-colors leading-tight">
            {pkg.name}
          </h3>

          {/* Price */}
          <div className="flex items-baseline gap-1.5 mb-5">
            <span className="font-display text-2xl text-[var(--gold-bright)]">
              {extractNumber(pkg.price)}
            </span>
            <span className="text-xs text-muted-foreground font-sans">
              PKR{pkg.cadence}
            </span>
          </div>

          <GoldRule className="w-10 mb-5" />

          {/* Short description */}
          {pkg.description && (
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-2">
              {pkg.description}
            </p>
          )}

          {/* Top 4 features */}
          <ul className="space-y-2.5 flex-1 mb-7">
            {pkg.features.slice(0, 4).map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-muted-foreground"
              >
                <Check className="w-3.5 h-3.5 text-[var(--teal-bright)] shrink-0 mt-0.5" />
                <span className="leading-snug">{feature.title}</span>
              </li>
            ))}
            {pkg.features.length > 4 && (
              <li className="text-xs text-[var(--gold-bright)]/70 pl-6">
                +{pkg.features.length - 4} more included
              </li>
            )}
          </ul>

          {/* Footer CTA */}
          <div className="mt-auto flex items-center justify-between text-sm font-semibold text-[var(--gold)] group-hover:text-[var(--cream)] transition-colors pt-4 border-t border-border/50">
            View Package
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

function PackagesIndexPage() {
  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Hero parallax
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(heroProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(heroProgress, [0, 1], [1, 0]);

  return (
    <div className="relative min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      {/* Scroll progress bar — matches services page */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--gold)] origin-left z-[60] shadow-[0_0_10px_var(--gold)]"
        style={{ scaleX }}
      />

      <main className="flex-1 flex flex-col w-full">

        {/* ── HERO ────────────────────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 px-6"
        >
          {/* Animated background mesh — mirrors services hero */}
          <motion.div
            style={{ y: yBg, opacity: opacityHero }}
            className="absolute inset-0 pointer-events-none overflow-hidden"
          >
            <div
              className="absolute top-1/4 right-1/4 w-[30vw] h-[30vw] bg-[var(--gold)]/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"
              style={{ animationDuration: "8s" }}
            />
            <div
              className="absolute bottom-1/4 left-1/4 w-[40vw] h-[40vw] bg-[var(--teal)]/10 rounded-full blur-[150px] mix-blend-screen animate-pulse"
              style={{ animationDuration: "12s" }}
            />
          </motion.div>

          <div className="max-w-5xl mx-auto w-full text-center relative z-10">
            {/* Eyebrow label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[0.65rem] uppercase tracking-[0.25em] text-[var(--gold-bright)] font-semibold mb-5"
            >
              Digital Growth Packages
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative inline-block mb-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl bg-gradient-to-r from-[var(--gold)] via-[var(--gold-bright)] to-[var(--gold)] bg-[length:200%_auto] text-transparent bg-clip-text animate-gradient font-display font-medium">
                Our Packages
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed mt-6"
            >
              Scalable solutions designed to accelerate your brand — from a
              first digital presence to a full AI-powered growth system.
            </motion.p>

            {/* Saudi Arabia note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-4 text-xs text-muted-foreground/60"
            >
              Saudi Arabia pricing available on request based on market delivery
              scope.
            </motion.p>
          </div>
        </section>

        {/* ── PACKAGE GRID ────────────────────────────────────────────── */}
        <div className="w-full max-w-7xl mx-auto px-6 py-20 sm:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PACKAGES.map((pkg, index) => (
              <PackageCard key={pkg.name} pkg={pkg} index={index} />
            ))}
          </div>
        </div>

        {/* ── BOTTOM CTA STRIP ────────────────────────────────────────── */}
        <section className="w-full max-w-4xl mx-auto px-6 pb-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-[var(--gold)]/20 bg-gradient-to-br from-[var(--teal-deep)]/20 to-transparent p-10 md:p-14"
          >
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--gold-bright)] font-semibold mb-4">
              Not sure which package fits?
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
              Let's find the right fit together.
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Every business is different. Our team will help you scope a plan
              that matches your goals, budget, and timeline — no upselling,
              just the right solution.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-md bg-[var(--gold)] text-black font-semibold hover:bg-[var(--gold-bright)] transition-colors shadow-[var(--shadow-glow-gold)] text-base"
            >
              Get a Free Consultation
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}