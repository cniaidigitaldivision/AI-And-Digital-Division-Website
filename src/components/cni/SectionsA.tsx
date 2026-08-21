import { useRef, useState } from "react";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Eye,
  Gauge,
  Handshake,
  Layers,
  ArrowUpRight,
  RefreshCw,
} from "lucide-react";
import { CORE_VALUES, JOURNEY, SERVICES } from "@/lib/cni-data";
import { CircuitBackdrop, GoldRule, Reveal, SectionHeading, TiltCard } from "./primitives";
import { cn } from "@/lib/utils";

const VALUE_ICONS = [Sparkles, ShieldCheck, Eye, Gauge, Handshake, Layers];

/**
 * Scroll-triggered SVG Golden Path that snakes through the 12-step Business Transformation grid.
 * Strictly contained within the cards grid container with a soft, subtle glow.
 */
function GoldenPathSVG({ containerRef }: { containerRef: React.RefObject<HTMLElement | null> }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 60%"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    restDelta: 0.001,
  });

  // Desktop serpentine path connecting 3 rows of 4 cards (01..12) inside the grid container
  const desktopPath = `
    M 150 75 
    L 450 75 
    L 750 75 
    L 1050 75
    C 1140 75 1140 260 1050 260
    L 750 260 
    L 450 260 
    L 150 260
    C 60 260 60 445 150 445
    L 450 445 
    L 750 445 
    L 1050 445
  `;

  // Mobile vertical path along left side of the single-column cards container
  const mobilePath = "M 32 20 L 32 1550";

  return (
    <>
      <svg className="sr-only" aria-hidden="true">
        <defs>
          {/* Softer, subtle golden glow filter */}
          <filter id="golden-path-glow-soft" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComponentTransfer in="blur" result="dimmedBlur">
              <feFuncA type="linear" slope="0.45" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="dimmedBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="golden-path-gradient-soft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E5C158" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#B89328" stopOpacity="0.85" />
          </linearGradient>
        </defs>
      </svg>

      {/* Desktop Golden Path - Contained inside cards grid */}
      <svg
        className="pointer-events-none absolute inset-0 hidden h-full w-full md:block z-0"
        viewBox="0 0 1200 520"
        preserveAspectRatio="none"
        aria-hidden
      >
        {/* Subtle background guide line */}
        <path
          d={desktopPath}
          fill="none"
          stroke="color-mix(in oklab, var(--gold) 12%, transparent)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        {/* Animated soft glowing Golden Path */}
        <motion.path
          d={desktopPath}
          fill="none"
          stroke="url(#golden-path-gradient-soft)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#golden-path-glow-soft)"
          style={{ pathLength }}
        />
      </svg>

      {/* Mobile Vertical Golden Path */}
      <svg
        className="pointer-events-none absolute inset-0 block h-full w-full md:hidden z-0"
        viewBox="0 0 100 1600"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d={mobilePath}
          fill="none"
          stroke="color-mix(in oklab, var(--gold) 12%, transparent)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <motion.path
          d={mobilePath}
          fill="none"
          stroke="url(#golden-path-gradient-soft)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#golden-path-glow-soft)"
          style={{ pathLength }}
        />
      </svg>
    </>
  );
}

/**
 * Animated SVG golden line that draws itself when it enters the viewport.
 * Positioned absolutely behind all section content (z-0).
 */
function GoldenLineSVG() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const d =
    "M -60 120 C 80 20, 200 260, 360 160 S 560 40, 720 180 S 900 300, 1100 160 S 1300 20, 1500 200 S 1700 340, 1920 160";

  const LENGTH = 2800;

  return (
    <svg
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1920 400"
      preserveAspectRatio="xMidYMid slice"
      style={{ zIndex: 0 }}
    >
      <defs>
        <linearGradient id="gold-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
          <stop offset="20%" stopColor="#D4AF37" stopOpacity="0.7" />
          <stop offset="80%" stopColor="#C9A227" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
        </linearGradient>
        <filter id="gold-glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <motion.path
        d={d}
        fill="none"
        stroke="url(#gold-line-grad)"
        strokeWidth="4"
        filter="url(#gold-glow)"
        strokeLinecap="round"
        strokeDasharray={LENGTH}
        initial={{ strokeDashoffset: LENGTH, opacity: 0 }}
        animate={inView ? { strokeDashoffset: 0, opacity: 0.45 } : {}}
        transition={{ duration: 3.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      />

      <motion.path
        d={d}
        fill="none"
        stroke="url(#gold-line-grad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray={LENGTH}
        initial={{ strokeDashoffset: LENGTH, opacity: 0 }}
        animate={inView ? { strokeDashoffset: 0, opacity: 1 } : {}}
        transition={{ duration: 3.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      />
    </svg>
  );
}

export function About() {
  return (
    <section id="why-we-exist" className="relative overflow-hidden py-28 sm:py-36">
      <GoldenLineSVG />
      <CircuitBackdrop />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why We Exist"
          title="Businesses need a growth engine, not just a service vendor."
          sub="We combine strategy, technology and creativity to build intelligent solutions that accelerate growth, streamline operations and future-proof brands."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {[
            {
              label: "Vision",
              body: "To be the most trusted and innovative business growth and digital transformation partner across Pakistan and Saudi Arabia — empowering organizations to grow smarter and lead the future.",
            },
            {
              label: "Mission",
              body: "To deliver innovative branding, digital growth, automation, software and AI solutions that drive efficiency, enhance customer experience and create measurable, sustainable business value.",
            },
          ].map((b, i) => (
            <Reveal key={b.label} delay={i * 0.1}>
              <div className="glass-panel h-full rounded-sm p-8 sm:p-10">
                <span className="eyebrow">{b.label}</span>
                <GoldRule className="my-5 w-20" />
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {b.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CORE_VALUES.map((v, i) => {
            const Icon = VALUE_ICONS[i] ?? Sparkles;
            return (
              <Reveal key={v.name} delay={i * 0.06}>
                <TiltCard className="group h-full p-7" intensity={5}>
                  <Icon className="size-6 text-[var(--gold-bright)] transition-transform duration-500 group-hover:rotate-y-180" />
                  <h3 className="mt-5 text-xl">{v.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.detail}</p>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ServiceEcosystem() {
  const [active, setActive] = useState(0);
  const radius = 35;

  return (
    <section
      id="services"
      className="relative overflow-hidden border-y border-border bg-[var(--ink)] py-28 sm:py-36"
    >
      <CircuitBackdrop />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Service Ecosystem"
          title="One Integrated Ecosystem. Growth Accelerated by AI."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <Reveal>
            <div className="relative mx-auto aspect-square w-full max-w-[400px]">
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              >
                {SERVICES.map((s, i) => {
                  const angle = (i / SERVICES.length) * Math.PI * 2 - Math.PI / 2;
                  const left = 50 + Math.cos(angle) * radius;
                  const top = 50 + Math.sin(angle) * radius;
                  return (
                    <motion.div
                      key={s.title}
                      className="absolute size-0"
                      style={{ left: `${left}%`, top: `${top}%` }}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                    >
                      <button
                        type="button"
                        onMouseEnter={() => setActive(i)}
                        onFocus={() => setActive(i)}
                        onClick={() => setActive(i)}
                        style={{ left: 0, top: 0 }}
                        className={cn(
                          "absolute -translate-x-1/2 -translate-y-1/2 rounded-full border p-3 transition-all duration-300",
                          active === i
                            ? "scale-125 border-[var(--gold)] bg-[color-mix(in_oklab,var(--gold)_22%,transparent)]"
                            : "border-[color-mix(in_oklab,var(--teal-bright)_50%,transparent)] bg-[color-mix(in_oklab,var(--teal-deep)_40%,transparent)]",
                        )}
                        aria-label={s.title}
                      >
                        <span className="block size-2 rounded-full bg-[var(--gold-bright)]" />
                      </button>
                    </motion.div>
                  );
                })}
              </motion.div>

              <div
                className="pointer-events-none absolute inset-[10%] rounded-full border border-dashed opacity-30"
                style={{ borderColor: "var(--teal-bright)" }}
              />

              <div className="absolute left-1/2 top-1/2 flex size-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[var(--gold)] bg-[color-mix(in_oklab,var(--teal-deep)_45%,transparent)] text-center backdrop-blur-md animate-float-soft">
                <span className="font-display text-2xl text-[var(--gold-bright)]">CNI</span>
                <span className="mt-1 text-[0.55rem] uppercase tracking-[0.28em] text-muted-foreground">
                  AI Core
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-panel min-h-[260px] rounded-sm p-8 sm:p-10">
              <span className="eyebrow">
                Service {String(active + 1).padStart(2, "0")} / 09
              </span>
              <h3 className="mt-4 text-2xl sm:text-3xl">{SERVICES[active]?.title}</h3>
              <GoldRule className="my-6 w-24" />
              <ul className="grid gap-3 sm:grid-cols-2">
                {(SERVICES[active]?.items ?? []).map((it) => (
                  <li key={it.title} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ArrowUpRight className="mt-0.5 size-3.5 shrink-0 text-[var(--gold-bright)]" />
                    {it.title}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <button
              key={s.title}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className={cn(
                "rounded-sm border px-5 py-4 text-left text-sm transition-all duration-300",
                active === i
                  ? "border-[var(--gold)] bg-[color-mix(in_oklab,var(--gold)_10%,transparent)] text-foreground"
                  : "border-border text-muted-foreground hover:border-[color-mix(in_oklab,var(--gold)_55%,transparent)]",
              )}
            >
              <span className="mr-3 text-[0.65rem] tracking-[0.2em] text-[var(--gold-bright)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              {s.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Journey() {
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="process" className="relative overflow-hidden py-28 sm:py-36">
      <CircuitBackdrop />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="360° Business Transformation"
          title="From First Idea to Scalable Business Systems."
          sub="A complete end-to-end journey that transforms your ideas into intelligent systems, powerful brands, and sustainable growth."
        />

        {/* 12-Step Cards Container with SVG Golden Path confined strictly to cards */}
        <div ref={cardsContainerRef} className="relative mt-16">
          <GoldenPathSVG containerRef={cardsContainerRef} />

          {/* 12-Step Grid Layout */}
          <div className="relative z-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {JOURNEY.map((step, i) => (
              <Reveal key={step} delay={Math.min(i * 0.04, 0.4)}>
                <div className="group relative flex flex-col glass-panel h-full rounded-sm p-6 backdrop-blur-md transition-all duration-300 hover:border-[var(--gold)] hover:shadow-[var(--shadow-glow-gold)]">
                  <div className="flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-full border border-[var(--gold)] font-display text-sm font-semibold text-[var(--gold-bright)] transition-all duration-300 group-hover:bg-[var(--gold)] group-hover:text-black">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.65rem] uppercase tracking-widest text-muted-foreground/60 group-hover:text-[var(--gold-bright)]">
                      Step {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-6 flex-1">
                    <h3 className="text-base font-medium leading-snug text-foreground group-hover:text-[var(--cream)]">
                      {step}
                    </h3>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground/80">
                    <span>Phase {Math.floor(i / 3) + 1}</span>
                    <ArrowUpRight className="size-3.5 text-[var(--gold-bright)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Continuous Loop Callout */}
        <div className="mt-12 flex justify-center">
          <Reveal delay={0.4}>
            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--gold)]/40 bg-[color-mix(in_oklab,var(--teal-deep)_25%,transparent)] px-6 py-2.5 backdrop-blur-md">
              <RefreshCw className="size-4 animate-spin text-[var(--gold-bright)]" style={{ animationDuration: "10s" }} />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--gold-bright)]">
                Continuous Growth &amp; Feedback Loop back to Discovery
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

