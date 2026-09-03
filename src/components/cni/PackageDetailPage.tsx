import { PackageData, PACKAGES } from "@/lib/cni-data";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, Check, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { GoldRule } from "./primitives";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-5%" },
  transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as const, delay },
});

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left text-sm font-medium text-foreground hover:text-[var(--gold-bright)] transition-colors"
      >
        <span>{question}</span>
        {open ? (
          <ChevronUp className="size-4 shrink-0 text-[var(--gold-bright)]" />
        ) : (
          <ChevronDown className="size-4 shrink-0 text-muted-foreground" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-muted-foreground leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PackageDetailPage({ pkg }: { pkg: PackageData }) {
  const currentIndex = PACKAGES.findIndex((p) => p.name === pkg.name);
  const nextPackage =
    currentIndex >= 0 && currentIndex < PACKAGES.length - 1 ? PACKAGES[currentIndex + 1] : null;
  const prevPackage = currentIndex > 0 ? PACKAGES[currentIndex - 1] : null;

  return (
    <div className="flex-1 flex flex-col w-full">
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        {/* Background glows */}
        <div className="pointer-events-none absolute top-0 right-1/4 w-[35vw] h-[35vw] bg-[var(--gold)]/8 rounded-full blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 w-[40vw] h-[40vw] bg-[var(--teal)]/8 rounded-full blur-[160px]" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow block mb-4"
          >
            {pkg.subtitle}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-8xl text-foreground font-semibold leading-none tracking-tight"
          >
            {pkg.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 flex items-baseline justify-center gap-2"
          >
            <span className="font-display text-4xl md:text-5xl text-[var(--gold-bright)]">
              {pkg.price}
            </span>
            <span className="text-lg text-muted-foreground font-sans">{pkg.cadence}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            {pkg.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={`/?package=${slugify(pkg.name)}#contact`}
              className="px-8 py-4 rounded-md bg-[var(--gold)] text-black font-semibold hover:bg-[var(--gold-bright)] transition-colors w-full sm:w-auto text-center shadow-[var(--shadow-glow-gold)]"
            >
              Get Started with {pkg.name}
            </a>
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-md text-sm text-white border border-white/20 hover:bg-white/5 transition-colors w-full sm:w-auto justify-center"
            >
              <ChevronLeft className="size-4" />
              All Packages
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="w-full max-w-5xl mx-auto px-6 pb-28 space-y-20">
        {/* ── INTRO PARAGRAPHS ─────────────────────────────────────── */}
        {pkg.intro && pkg.intro.length > 0 && (
          <motion.section {...fadeUp(0)} className="space-y-5">
            <GoldRule className="w-16" />
            {pkg.intro.map((para, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-base md:text-lg text-foreground/90 leading-[1.85] font-light"
                    : "text-base text-muted-foreground leading-[1.85]"
                }
              >
                {para}
              </p>
            ))}
          </motion.section>
        )}

        {/* ── WHAT'S INCLUDED ──────────────────────────────────────── */}
        <motion.section
          {...fadeUp(0.05)}
          className="rounded-[28px] border border-[#C9A227]/40 bg-[#061e19] p-8 md:p-12 shadow-[inset_0_0_80px_rgba(201,162,39,0.06)] relative overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--teal-bright)]/10 via-transparent to-transparent opacity-50" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl font-semibold text-white mb-8">What's Included</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pkg.features.map((feature, idx) => (
                <motion.li key={idx} {...fadeUp(idx * 0.05)} className="flex items-start gap-4">
                  <div className="rounded-full bg-[var(--gold)]/20 p-2 shrink-0 mt-0.5">
                    <Check className="size-5 text-[var(--gold-bright)]" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">{feature.title}</h4>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
        {pkg.howItWorks && pkg.howItWorks.length > 0 && (
          <motion.section {...fadeUp(0.05)} className="space-y-8">
            <div className="text-center">
              <h2 className="font-display text-3xl font-semibold text-white mb-1">How It Works</h2>
              <GoldRule className="mx-auto mt-5 w-16" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pkg.howItWorks.map((step, idx) => (
                <motion.div
                  key={idx}
                  {...fadeUp(idx * 0.08)}
                  className="rounded-[20px] border border-white/8 bg-white/[0.025] p-7 backdrop-blur-sm relative overflow-hidden group hover:border-[var(--gold)]/30 transition-colors duration-300"
                >
                  <span className="font-display text-5xl font-bold text-white/5 absolute -top-2 -left-1 select-none">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-7 h-7 rounded-full bg-[var(--teal-deep)] border border-[var(--gold)]/40 flex items-center justify-center text-xs font-semibold text-[var(--gold-bright)] shrink-0">
                        {idx + 1}
                      </div>
                      <h4 className="text-base font-semibold text-white group-hover:text-[var(--gold-bright)] transition-colors">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* ── WHO IT'S FOR + OUTCOMES (2-col grid) ─────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.section
            {...fadeUp(0.05)}
            className="rounded-[24px] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm"
          >
            <h3 className="font-display text-2xl font-semibold text-white mb-6">Who This Is For</h3>
            <ul className="space-y-4">
              {pkg.idealClientProfile.map((profile, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--teal-bright)] mt-2 shrink-0" />
                  <span className="leading-relaxed">{profile}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            {...fadeUp(0.08)}
            className="rounded-[24px] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm"
          >
            <h3 className="font-display text-2xl font-semibold text-white mb-6">
              What You Can Expect
            </h3>
            <ul className="space-y-4">
              {pkg.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] mt-2 shrink-0" />
                  <span className="leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* ── PRICING BLOCK ─────────────────────────────────────────── */}
        <motion.section
          {...fadeUp(0.05)}
          className="rounded-[28px] border border-[var(--gold)]/50 bg-gradient-to-br from-[#061e19] to-[#04150f] p-8 md:p-12 shadow-[0_0_60px_rgba(201,162,39,0.12)] relative overflow-hidden"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[var(--gold)]/8 blur-3xl" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <span className="eyebrow block mb-3">Investment</span>
              <div className="flex items-baseline gap-2.5 mb-3">
                <span className="font-display text-5xl md:text-6xl font-semibold text-[var(--gold-bright)]">
                  {pkg.price}
                </span>
                <span className="text-xl text-muted-foreground font-sans">{pkg.cadence}</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-sm">
                {pkg.name === "Enterprise"
                  ? "Starting price — final retainer scoped after discovery based on your specific requirements."
                  : "Monthly retainer. No hidden setup fees. Cancel or upgrade anytime."}
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-[var(--gold)] text-black font-semibold hover:bg-[var(--gold-bright)] transition-colors shadow-[var(--shadow-glow-gold)] text-base"
              >
                Enquire Now
                <ArrowRight className="size-4" />
              </a>
              {nextPackage && (
                <Link
                  to={`/packages/${slugify(nextPackage.name)}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-white/15 text-sm text-muted-foreground hover:text-white hover:border-white/30 transition-colors"
                >
                  Compare: {nextPackage.name} ({nextPackage.price}
                  {nextPackage.cadence})
                  <ArrowRight className="size-3.5" />
                </Link>
              )}
            </div>
          </div>
        </motion.section>

        {/* ── FAQs ──────────────────────────────────────────────────── */}
        {pkg.faqs && pkg.faqs.length > 0 && (
          <motion.section {...fadeUp(0.05)} className="space-y-4">
            <h2 className="font-display text-3xl font-semibold text-white mb-2">
              Frequently Asked Questions
            </h2>
            <GoldRule className="w-16 mb-6" />
            <div className="rounded-[24px] border border-white/10 bg-white/[0.02] px-8 py-2">
              {pkg.faqs.map((faq, idx) => (
                <FaqItem key={idx} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </motion.section>
        )}

        {/* ── NEXT / PREV TIER NAV ──────────────────────────────────── */}
        <motion.section
          {...fadeUp(0.05)}
          className="flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-r from-transparent via-[var(--teal-deep)]/20 to-transparent border-y border-[var(--teal-deep)]/40 text-center gap-6"
        >
          {nextPackage ? (
            <>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-[var(--gold-bright)]">
                Looking for more?
              </h4>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <span className="text-white font-medium">{nextPackage.name}</span>
                <span className="text-muted-foreground text-sm">
                  {nextPackage.price}
                  {nextPackage.cadence}
                </span>
                <Link
                  to={`/packages/${slugify(nextPackage.name)}`}
                  className="text-sm font-semibold text-[var(--teal-bright)] hover:text-white transition-colors underline underline-offset-4 flex items-center gap-1"
                >
                  View {nextPackage.name} <ArrowRight className="size-3" />
                </Link>
              </div>
            </>
          ) : (
            <>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-[var(--gold-bright)]">
                Need something custom?
              </h4>
              <p className="text-muted-foreground text-sm max-w-md">
                We can build a tailored ecosystem for your specific enterprise needs.
              </p>
              <a
                href="/contact"
                className="text-sm font-semibold text-[var(--teal-bright)] hover:text-white transition-colors underline underline-offset-4"
              >
                Contact Our Enterprise Team
              </a>
            </>
          )}
        </motion.section>

        {/* ── FINAL CTA ─────────────────────────────────────────────── */}
        <motion.section {...fadeUp(0.05)} className="text-center pt-4 pb-6">
          <h2 className="font-display text-4xl font-semibold text-white mb-3">
            Ready to accelerate your growth?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto text-sm">
            Start with {pkg.name} today and build the digital presence your business deserves.
          </p>
          <a
            href={`/?package=${slugify(pkg.name)}#contact`}
            className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-md bg-[var(--gold)] text-black font-semibold hover:bg-[var(--gold-bright)] transition-colors shadow-[var(--shadow-glow-gold)] text-lg"
          >
            Get Started with {pkg.name}
            <ArrowRight className="size-5" />
          </a>
          <p className="mt-6 text-sm text-muted-foreground">
            Have questions?{" "}
            <a href="/contact" className="text-[var(--gold-bright)] hover:underline">
              Let's talk
            </a>
            .
          </p>
        </motion.section>
      </div>
    </div>
  );
}
