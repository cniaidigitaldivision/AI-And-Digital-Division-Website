import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "./primitives";
import { cn } from "@/lib/utils";
import brainIcon from "@/assets/icon-brain.png";
import nodesIcon from "@/assets/icon-nodes.png";

const SERVICES_COPY =
  "Our services include Branding & Identity, Printing & Corporate Collateral, Website Development & Ecommerce, SEO, AEO & AI Visibility, Digital Marketing & Paid Media, Content Creation, CRM & WhatsApp Automation, ERP, POS, Portals & Custom Software, and AI Automations, Dashboards & Integrations.";

const COPY =
  "We are the AI & Digital Division of Crescent Nova International — a team that combines strategy, technology and creativity to build intelligent solutions. We believe businesses need a growth engine, not just a service vendor, so we craft brands, websites, CRM, ERP and AI-powered systems that accelerate growth, streamline operations and future-proof our clients across Pakistan and Saudi Arabia.";

function FloatIcon({
  src,
  alt,
  from,
  delay,
  className,
  float = 14,
}: {
  src: string;
  alt: string;
  from: number;
  delay: number;
  className?: string;
  float?: number;
}) {
  return (
    <motion.div
      aria-hidden
      className={cn("pointer-events-none absolute select-none", className)}
      initial={{ opacity: 0, x: from }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={{ y: [0, -float, 0] }}
        transition={{ duration: 6 + delay * 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div className="absolute inset-[12%] rounded-full bg-[color-mix(in_oklab,var(--gold)_28%,transparent)] blur-2xl" />
        <img
          src={src}
          alt={alt}
          loading="lazy"
          width={512}
          height={512}
          className="relative w-full opacity-80 drop-shadow-[0_0_28px_color-mix(in_oklab,var(--teal-bright)_35%,transparent)]"
        />
      </motion.div>
    </motion.div>
  );
}

function CharReveal({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.25"],
  });
  const chars = Array.from(text);

  return (
    <p
      ref={ref}
      className={cn("mx-auto w-full max-w-[700px] sm:max-w-[800px] md:max-w-[900px] px-4 text-center leading-relaxed text-[var(--cream)] whitespace-normal break-words", className)}
      style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
    >
      {chars.map((c, i) => (
        <Char key={i} char={c} progress={scrollYProgress} index={i} total={chars.length} />
      ))}
    </p>
  );
}

function Char({
  char,
  progress,
  index,
  total,
}: {
  char: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number;
  total: number;
}) {
  const start = index / total;
  const end = Math.min(start + 1.5 / total, 1);
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  return (
    <motion.span style={{ opacity }}>
      {char}
    </motion.span>
  );
}

export function AboutReveal() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A1414] via-[#0F2E2C] to-[#0D2624] py-28 sm:py-36"
    >
      {/* Global Container Wrapper - Consistent with all other sections */}
      <div className="relative mx-auto max-w-7xl px-6 w-full flex flex-col items-center justify-center">
        {/* Floating 3D Icons positioned absolutely relative to max-w-7xl container */}
        <FloatIcon
          src={brainIcon}
          alt="Faceted AI brain"
          from={-60}
          delay={0.1}
          className="absolute -left-2 sm:left-2 lg:left-4 top-4 sm:top-8 md:top-12 w-[90px] sm:w-[130px] md:w-[170px] lg:w-[210px]"
        />
        <FloatIcon
          src={nodesIcon}
          alt="Automation node network"
          from={60}
          delay={0.15}
          float={16}
          className="absolute -right-2 sm:right-2 lg:right-4 top-4 sm:top-8 md:top-12 w-[90px] sm:w-[130px] md:w-[170px] lg:w-[210px]"
        />

        {/* Centered Main Content Wrapper */}
        <div className="relative z-10 flex w-full flex-col items-center gap-8 sm:gap-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-gradient-brand font-display font-bold uppercase leading-[0.95] tracking-[0.02em]"
            style={{ fontSize: "clamp(2.8rem, 9vw, 120px)" }}
          >
            About Us
          </motion.h2>

          <div className="flex w-full flex-col items-center gap-6 sm:gap-8 max-w-3xl mx-auto">
            <CharReveal text={COPY} />
            <CharReveal text={SERVICES_COPY} />

            <MagneticButton as="a" href="#contact" className="mt-6 sm:mt-8">
              Let&apos;s Talk
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
