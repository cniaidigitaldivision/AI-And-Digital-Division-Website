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
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0A1414] px-5 pb-28 pt-20 sm:px-8 sm:pb-32 md:px-10"
    >
      <FloatIcon
        src={brainIcon}
        alt="Faceted AI brain"
        from={-80}
        delay={0.1}
        className="left-[1%] top-[4%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]"
      />
      <FloatIcon
        src={nodesIcon}
        alt="Automation node network"
        from={80}
        delay={0.15}
        float={16}
        className="right-[1%] top-[4%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]"
      />

      <div className="relative z-10 flex w-full flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient-brand font-display text-center font-bold uppercase leading-[0.95] tracking-[0.02em]"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          About Us
        </motion.h2>

        <div className="flex w-full flex-col items-center gap-6 sm:gap-8">
          <CharReveal text={COPY} />
          <CharReveal text={SERVICES_COPY} />

          <MagneticButton as="a" href="#contact" className="mt-8 sm:mt-10">
            Let&apos;s Talk
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
