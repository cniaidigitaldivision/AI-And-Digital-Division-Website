import { motion } from "framer-motion";
import { MagneticButton } from "./primitives";
import heroVideo from "@/assets/hero.mp4";

const HEADLINE = ["Where", "Intelligence", "Meets", "Growth."];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[var(--ink)]"
    >
      {/* Full-bleed AI environment video — the section's own background */}
      <motion.video
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 size-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        controls={false}
        aria-hidden
      />

      {/* Large dark radial scrim, left-weighted, for text contrast against the video */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_1100px_900px_at_18%_50%,color-mix(in_oklab,var(--ink)_92%,transparent)_0%,color-mix(in_oklab,var(--ink)_68%,transparent)_35%,color-mix(in_oklab,var(--ink)_28%,transparent)_60%,transparent_78%)]" />

      {/* Static grain-veil overlay */}
      <div className="grain-veil absolute inset-0" />

      {/* Radial vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--ink)_12%,transparent)_0%,color-mix(in_oklab,var(--ink)_32%,transparent)_50%,color-mix(in_oklab,var(--ink)_70%,transparent)_92%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-32">
        <div className="flex max-w-2xl flex-col items-start text-left">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="eyebrow"
          >
            Crescent Nova International
          </motion.span>

          <h1 className="mt-7 text-4xl leading-[1.05] sm:text-6xl md:text-7xl">
            {HEADLINE.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="mr-[0.28em] inline-block"
              >
                {i === 1 || i === 3 ? (
                  <span className="text-gradient-brand">{word}</span>
                ) : (
                  <span>{word}</span>
                )}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0.3 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="gold-rule mt-8 w-64 max-w-full"
          />

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            AI &amp; Digital Division of Crescent Nova International — Branding, Websites, CRM, ERP
            &amp; AI Automation for ambitious businesses in Pakistan &amp; Saudi Arabia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.95 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <MagneticButton as="a" href="#contact" variant="gold">
              Start Your Growth Journey
            </MagneticButton>
            <MagneticButton as="a" href="#services" variant="glass">
              Explore Services
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <div className="h-14 w-px bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent" />
        <span className="size-1.5 rounded-full bg-[var(--gold-bright)] animate-pulse-dot" />
      </div>
    </section>
  );
}
