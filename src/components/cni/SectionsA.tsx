import { useRef, useState } from "react";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { Sparkles, ShieldCheck, Eye, Gauge, Handshake, Layers, ArrowUpRight } from "lucide-react";
import { CORE_VALUES, SERVICES } from "@/lib/cni-data";
import {
  CircuitBackdrop,
  GoldRule,
  Reveal,
  SectionHeading,
  TiltCard,
  MagneticButton,
} from "./primitives";
import { cn } from "@/lib/utils";

const VALUE_ICONS = [Sparkles, ShieldCheck, Eye, Gauge, Handshake, Layers];

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
              <span className="eyebrow">Service {String(active + 1).padStart(2, "0")} / 09</span>
              <h3 className="mt-4 text-2xl sm:text-3xl">{SERVICES[active]?.title}</h3>
              <GoldRule className="my-6 w-24" />
              <ul className="grid gap-3 sm:grid-cols-2">
                {(SERVICES[active]?.items ?? []).map((it) => (
                  <li
                    key={it.title}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
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

        <div className="mt-16 flex justify-center">
          <Reveal delay={0.2}>
            <MagneticButton as="a" href="/services">
              See More Details
            </MagneticButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
