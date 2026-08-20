import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Check,
  Cpu,
  Globe2,
  LayoutDashboard,
  MessageSquare,
  MonitorSmartphone,
  Store,
  Truck,
  Users,
  Wrench,
  Building2,
  Search,
  Boxes,
  Sparkles,
  Loader2,
} from "lucide-react";
import {
  INDUSTRIES,
  LEADERSHIP,
  METHOD_STEPS,
  PACKAGES,
  SOLUTIONS_DELIVERED,
  STATS,
  SUPPORT_PLANS,
  TECH_SOLUTIONS,
  TECH_STACK,
} from "@/lib/cni-data";
import {
  CircuitBackdrop,
  CountUp,
  GoldRule,
  MagneticButton,
  Reveal,
  SectionHeading,
  TiltCard,
} from "./primitives";
import { cn } from "@/lib/utils";

const SOLUTION_ICONS = [
  Users,
  MessageSquare,
  Globe2,
  Search,
  MonitorSmartphone,
  LayoutDashboard,
  MonitorSmartphone,
  Building2,
  Boxes,
  Store,
  Truck,
  Wrench,
];

function PackageCardBody({ p, isActive, prefersReducedMotion }: { p: (typeof PACKAGES)[number]; isActive: boolean; prefersReducedMotion: boolean }) {
  return (
    <div className="flex flex-col md:flex-row gap-10 lg:gap-16 w-full">
      {/* Left Column */}
      <div className="flex-1 flex flex-col items-start justify-center">
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold-bright)]">
          {p.subtitle}
        </span>
        <h3 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-white">
          {p.name}
        </h3>
        <GoldRule className="my-6 w-16" />
        <div className="font-display text-4xl md:text-5xl text-[var(--gold-bright)] flex items-baseline gap-2">
          {!prefersReducedMotion && isActive ? (
            <CountUp value={extractNumber(p.price)} suffix="" />
          ) : (
            p.price
          )}
          <span className="text-lg md:text-xl text-muted-foreground font-sans tracking-normal">{p.cadence}</span>
        </div>
        <div className="mt-10 w-full sm:w-auto">
          <MagneticButton
            as="a"
            href="#contact"
            variant="glass"
            className="w-full sm:w-auto transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(201,162,39,0.4)] hover:border-[var(--gold)]"
          >
            Enquire
          </MagneticButton>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-[1.2] flex flex-col justify-center">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {p.features.map((f, i) => (
            <motion.li
              key={f}
              initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-3 text-sm md:text-base text-muted-foreground"
            >
              <Check className="mt-1 size-4 shrink-0 text-[var(--teal-bright)]" />
              <span>{f}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function StackedPackageCard({
  p,
  index,
  total,
  progress,
  prefersReducedMotion,
}: {
  p: (typeof PACKAGES)[number];
  index: number;
  total: number;
  progress: any;
  prefersReducedMotion: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: cardProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    return cardProgress.on("change", (v) => {
      if (v > 0.5 && !isActive) setIsActive(true);
    });
  }, [cardProgress, isActive]);

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [0, 1], [1, targetScale]);
  
  const opacity = useTransform(progress, [0, 1], [1, 0.85]);

  if (prefersReducedMotion) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl xl:max-w-6xl mx-auto mb-8 rounded-[32px] md:rounded-[48px] border border-[#C9A227]/40 bg-[#061e19] p-8 sm:p-10 md:p-14 shadow-[inset_0_0_80px_rgba(201,162,39,0.06)]"
      >
        <PackageCardBody p={p} isActive={true} prefersReducedMotion={true} />
      </motion.div>
    );
  }

  return (
    <div
      className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32 px-4"
      style={{ top: `calc(6rem + ${index * 28}px)`, zIndex: index }}
    >
      <motion.div
        ref={cardRef}
        style={{ scale, opacity }}
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 }}
        className="w-full max-w-5xl xl:max-w-6xl mx-auto origin-top will-change-transform rounded-[32px] md:rounded-[48px] border border-[#C9A227]/40 bg-[#061e19] p-8 sm:p-10 md:p-14 shadow-[inset_0_0_80px_rgba(201,162,39,0.06)] backdrop-blur-md"
      >
        <PackageCardBody p={p} isActive={isActive} prefersReducedMotion={false} />
      </motion.div>
    </div>
  );
}

function PackagesStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full", !prefersReducedMotion && "pb-[15vh]")}
      style={!prefersReducedMotion ? { height: `${PACKAGES.length * 85}vh` } : undefined}
    >
      {PACKAGES.map((p, i) => (
        <StackedPackageCard
          key={p.name}
          p={p}
          index={i}
          total={PACKAGES.length}
          progress={scrollYProgress}
          prefersReducedMotion={!!prefersReducedMotion}
        />
      ))}
    </div>
  );
}

export function Packages() {
  return (
    <section
      id="packages"
      className="relative overflow-x-clip border-y border-border bg-[var(--ink)] py-28 sm:py-36"
    >
      <CircuitBackdrop />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col items-center text-center"
        >
          <span className="eyebrow">Digital Growth Packages</span>
          <GoldRule className="my-4 w-20" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground font-semibold leading-tight max-w-3xl py-1">
            Scalable solutions designed to accelerate your brand.
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground">
            Built to grow your digital presence, engagement, and measurable results month over month.
          </p>
        </motion.div>
      </div>

      <div className="mt-16 sm:mt-24 w-full">
        <PackagesStack />
      </div>

      <p className="mx-auto max-w-7xl px-6 mt-16 text-center text-xs text-muted-foreground">
        Saudi Arabia pricing is available based on market delivery scope and requirements.
      </p>
    </section>
  );
}

function DataNodesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const setupCanvas = () => {
      if (!canvas || !canvas.parentElement) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const displayWidth = canvas.parentElement.clientWidth;
      const displayHeight = canvas.parentElement.clientHeight;

      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      canvas.style.width = `${displayWidth}px`;
      canvas.style.height = `${displayHeight}px`;

      ctx.scale(dpr, dpr);
      return { width: displayWidth, height: displayHeight };
    };

    let dimensions = setupCanvas() || {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const handleResize = () => {
      const dims = setupCanvas();
      if (dims) {
        dimensions = dims;
      }
    };

    window.addEventListener("resize", handleResize);

    const NODE_COUNT = Math.min(Math.floor((dimensions.width * dimensions.height) / 14000), 55);
    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.8 + 2.4,
      color: Math.random() > 0.35 ? "#F5D77F" : "#34d399",
    }));

    const maxDistance = 160;

    const draw = () => {
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.restore();

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > dimensions.width) node.vx *= -1;
        if (node.y < 0 || node.y > dimensions.height) node.vy *= -1;

        // Draw crisp particle node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        // Draw connecting lines
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.55;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(245, 215, 127, ${alpha})`;
            ctx.lineWidth = 1.3;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-65">
      <canvas ref={canvasRef} className="h-full w-full block" />
    </div>
  );
}

export function Technology() {
  return (
    <section id="technology" className="relative overflow-hidden py-28 sm:py-36">
      <CircuitBackdrop />

      {/* Floating Data Nodes Network Background Canvas (Dimmed for maximum readability) */}
      <DataNodesCanvas />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Technology Solutions"
          title="Business Systems Engineered for Scale."
          sub="Enterprise-grade architecture, intelligent automation, and custom software systems built to power your operations."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TECH_SOLUTIONS.map((t, i) => {
            const Icon = SOLUTION_ICONS[i] ?? Cpu;
            return (
              <Reveal key={t.name} delay={Math.min(i * 0.04, 0.3)}>
                <TiltCard
                  className="group flex h-full items-start gap-4.5 p-7 backdrop-blur-xl bg-[#061e19]/90 border border-[#14473d] transition-all duration-300 hover:border-[var(--gold)] hover:shadow-[var(--shadow-glow-gold)]"
                  intensity={5}
                >
                  <div className="rounded-sm border border-[var(--gold)]/40 bg-[#0d2a23] p-2.5 shrink-0 transition-all duration-300 group-hover:border-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-black">
                    <Icon className="size-5 text-[var(--gold-bright)] group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-[var(--gold-bright)] transition-colors">
                      {t.name}
                    </h3>
                    <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--gold-bright)]">
                      {t.price}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TechIcon({ name }: { name: string }) {
  const size = "size-3.5 shrink-0 transition-colors group-hover/tag:text-[var(--gold-bright)]";

  switch (name) {
    case "React":
    case "React Native":
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
        </svg>
      );
    case "Next.js":
      return (
        <svg className={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm3.8 14.5l-6-8.2V16H8.5V8.5h1.8l5.8 8v-8h1.3v8h-.6z" />
        </svg>
      );
    case "Node.js":
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zM12 12l9-5.2M12 12v10.8M12 12L3 6.8" />
        </svg>
      );
    case "Python":
      return (
        <svg className={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.9 2c-5.2 0-4.8 2.2-4.8 2.2v2.3h4.9v.7H5.2S2 6.8 2 12.1c0 5.3 2.8 5.1 2.8 5.1h1.7v-2.4s-.1-2.8 2.8-2.8h4.8s2.7.1 2.7-2.6V4.8s.5-2.8-4.9-2.8zm-2.6 1.5a.9.9 0 110 1.8.9.9 0 010-1.8zm2.7 18.5c5.2 0 4.8-2.2 4.8-2.2v-2.3h-4.9v-.7h6.8s3.2.4 3.2-4.9c0-5.3-2.8-5.1-2.8-5.1h-1.7v2.4s.1 2.8-2.8 2.8h-4.8s-2.7-.1-2.7 2.6v4.6s-.5 2.8 4.9 2.8zm2.6-1.5a.9.9 0 110-1.8.9.9 0 010 1.8z" />
        </svg>
      );
    case "Flutter":
      return (
        <svg className={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.4 2L4 12.4l3.1 3.1L20.6 2h-6.2zm0 10.3l-4.1 4.1 4.1 4.1h6.2l-4.1-4.1 4.1-4.1h-6.2z" />
        </svg>
      );
    case "Vercel":
      return (
        <svg className={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L24 22H0L12 2z" />
        </svg>
      );
    case "AWS":
    case "Cloud & Deployment":
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6.5 17.5A4.5 4.5 0 014 9.5a5.5 5.5 0 0110.5-2A4.5 4.5 0 0120 12a3.5 3.5 0 01-3.5 5.5h-10z" />
        </svg>
      );
    case "PostgreSQL":
    case "MySQL":
    case "MongoDB":
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
          <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
        </svg>
      );
    case "n8n":
    case "Make":
    case "Zapier":
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    case "WhatsApp API":
      return (
        <svg className={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.5 14.3c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1s-.8 1-.9 1.2c-.1.2-.3.2-.6.1-1.3-.6-2.5-1.7-3.2-3-.2-.3 0-.5.1-.6s.3-.4.5-.6c.1-.2.2-.3.3-.5s0-.4 0-.5c-.1-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.8 1.2 3.3 1.4 3.5c.2.3 2.4 3.7 5.9 5.2 2.5 1.1 3.3 1 4.5.9.8-.1 1.7-.7 2-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.3zm-5.5 7.7c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.7 16 2 14.1 2 12c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10z" />
        </svg>
      );
    default:
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
  }
}

export function Methodology() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-[var(--ink)] py-28 sm:py-36">
      <CircuitBackdrop />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Delivery Methodology"
          title="Our Proven Approach. Modern Tools. Measurable Outcomes."
        />

        {/* Methodology Flow (Steps 01 to 08) */}
        <div className="mt-16 pb-4">
          <div className="flex flex-wrap items-center justify-center gap-y-6 gap-x-2 sm:gap-x-3 px-1">
            {METHOD_STEPS.map((s, i) => (
              <Reveal key={s} delay={Math.min(i * 0.05, 0.35)}>
                <div className="group flex items-center gap-2 sm:gap-3">
                  <div className="glass-panel min-w-[155px] sm:min-w-[170px] rounded-sm px-5 py-4 transition-all duration-300 transform-gpu hover:-translate-y-1.5 hover:border-[var(--gold)] hover:shadow-[var(--shadow-glow-teal)]">
                    <div className="flex items-center justify-between">
                      <span className="text-[0.6rem] font-semibold tracking-[0.24em] text-[var(--gold-bright)]">
                        STEP {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="size-1.5 rounded-full bg-[var(--gold-bright)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                    <p className="mt-2 text-sm font-medium text-foreground group-hover:text-[var(--cream)]">
                      {s}
                    </p>
                  </div>

                  {/* Sequential Animated Flow Connector */}
                  {i < METHOD_STEPS.length - 1 && (
                    <div className="relative flex items-center justify-center w-5 sm:w-8">
                      <span className="h-px w-full bg-[color-mix(in_oklab,var(--gold)_30%,transparent)]" />
                      <span
                        className="absolute top-1/2 -translate-y-1/2 h-[2px] w-full bg-gradient-to-r from-transparent via-[var(--gold-bright)] to-transparent circuit-trace"
                        style={{ animationDelay: `${i * 0.4}s` }}
                      />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Visual Hierarchy Divider */}
        <div className="my-16 sm:my-20 relative">
          <div className="gold-rule w-full opacity-60" />
          <div className="mt-10 text-center">
            <span className="eyebrow">Production Tech Stack</span>
            <h3 className="mt-2 font-display text-2xl text-foreground sm:text-3xl">
              Modern Tools &amp; Industrial Infrastructure
            </h3>
          </div>
        </div>

        {/* Tech Stack Cards Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TECH_STACK.map((g, i) => (
            <Reveal key={g.group} delay={Math.min(i * 0.05, 0.3)}>
              <div className="group glass-panel relative h-full overflow-hidden rounded-sm p-7 transition-all duration-300 transform-gpu hover:-translate-y-1.5 hover:border-[var(--gold)] hover:shadow-[var(--shadow-glow-gold)]">
                {/* Spotlight hover effect background glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full bg-[color-mix(in_oklab,var(--gold)_18%,transparent)] blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="eyebrow transition-colors group-hover:text-[var(--gold-bright)]">
                  {g.group}
                </span>
                <GoldRule className="my-4 w-14" />

                <ul className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="group/tag flex items-center gap-1.5 rounded-sm border border-border bg-[color-mix(in_oklab,var(--ink)_60%,transparent)] px-3 py-1.5 text-xs text-muted-foreground transition-all duration-200 hover:scale-105 hover:border-[var(--gold)] hover:bg-[color-mix(in_oklab,var(--gold)_12%,transparent)] hover:text-[var(--gold-bright)] hover:shadow-sm"
                    >
                      <TechIcon name={it} />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden py-28 sm:py-36">
      <CircuitBackdrop />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Impact"
          title="Portfolio & Selected Solution Footprint"
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={Math.min(i * 0.05, 0.3)}>
              <div className="h-full bg-[var(--ink)] p-8 text-center">
                <p className="font-display text-4xl text-[var(--gold-bright)] sm:text-5xl">
                  <CountUp value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 overflow-hidden w-full relative">
          {/* Fade gradients on edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[var(--ink)] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[var(--ink)] to-transparent z-10" />
          
          <div className="flex flex-col gap-4">
            {/* Row 1: Left */}
            <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused]">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex gap-3 pr-3">
                  {INDUSTRIES.slice(0, Math.ceil(INDUSTRIES.length / 2)).map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-[color-mix(in_oklab,var(--gold)_40%,transparent)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground whitespace-nowrap shrink-0"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              ))}
            </div>

            {/* Row 2: Right */}
            <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused]">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex gap-3 pr-3">
                  {INDUSTRIES.slice(Math.ceil(INDUSTRIES.length / 2)).map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-[color-mix(in_oklab,var(--gold)_40%,transparent)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground whitespace-nowrap shrink-0"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS_DELIVERED.map((s, i) => (
            <Reveal key={s} delay={Math.min(i * 0.04, 0.3)}>
              <TiltCard className="flex h-full items-center gap-4 p-6" intensity={4}>
                <Sparkles className="size-4 shrink-0 text-[var(--teal-bright)]" />
                <p className="text-sm">{s}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeadingMasked({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const titleWords = title.split(" ");

  return (
    <div ref={ref} className="relative z-10 flex flex-col items-center text-center">
      <span className="eyebrow">{eyebrow}</span>
      <GoldRule className="my-4 w-20" />
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground font-semibold leading-tight max-w-3xl overflow-hidden py-1">
        <span className="inline-block overflow-hidden">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-2"
              initial={{ y: "100%", opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.85,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </span>
      </h2>
      {sub && <p className="mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground">{sub}</p>}
    </div>
  );
}

function AnimatedCheckmark({ isActive, delay }: { isActive: boolean; delay: number }) {
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setResolved(true), 350 + delay * 180);
      return () => clearTimeout(timer);
    } else {
      setResolved(false);
    }
  }, [isActive, delay]);

  return (
    <div className="relative size-4 shrink-0 flex items-center justify-center">
      {resolved ? (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 350, damping: 20 }}
        >
          <Check className="size-3.5 text-[var(--gold-bright)]" />
        </motion.div>
      ) : (
        <Loader2 className="size-3.5 animate-spin text-[var(--teal-bright)] opacity-70" />
      )}
    </div>
  );
}

function extractNumber(priceStr: string): number {
  const match = priceStr.match(/\d+[\d,]*/);
  if (!match) return 0;
  return parseInt(match[0].replace(/,/g, ""), 10);
}

function extractSuffix(priceStr: string): string {
  if (priceStr.includes("from PKR")) return " (from PKR)";
  if (priceStr.includes("/mo")) return " PKR/mo";
  return "";
}

function ProcessStepCard({
  plan,
  index,
  progress,
  isActive,
}: {
  plan: (typeof SUPPORT_PLANS)[number];
  index: number;
  progress: any;
  isActive: boolean;
}) {
  const enterStart = index === 0 ? 0 : index === 1 ? 0.35 : 0.7;
  const activeStart = index === 0 ? 0.05 : index === 1 ? 0.45 : 0.8;
  const activeEnd = index === 0 ? 0.35 : index === 1 ? 0.7 : 1.0;
  const exitEnd = index === 0 ? 0.45 : index === 1 ? 0.8 : 1.0;

  const opacity = useTransform(
    progress,
    [enterStart, activeStart, activeEnd, exitEnd],
    index === 2 ? [0, 1, 1, 1] : [0, 1, 1, 0.35],
  );

  const y = useTransform(
    progress,
    [enterStart, activeStart, activeEnd, exitEnd],
    index === 2 ? [60, 0, 0, 0] : [60, 0, 0, -40],
  );

  const scale = useTransform(
    progress,
    [enterStart, activeStart, activeEnd, exitEnd],
    index === 2 ? [0.92, 1, 1, 1] : [0.92, 1, 1, 0.94],
  );

  const blur = useTransform(
    progress,
    [enterStart, activeStart, activeEnd, exitEnd],
    index === 2
      ? ["blur(8px)", "blur(0px)", "blur(0px)", "blur(0px)"]
      : ["blur(8px)", "blur(0px)", "blur(0px)", "blur(6px)"],
  );

  const bgParallax = useTransform(progress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.div
      style={{
        opacity,
        y,
        scale,
        filter: blur,
        zIndex: index + 10,
      }}
      className="absolute inset-0 w-full flex items-center justify-center pointer-events-auto"
    >
      <div
        className={cn(
          "glass-panel relative w-full max-w-xl overflow-hidden rounded-sm p-8 sm:p-10 shadow-2xl backdrop-blur-xl transition-colors duration-500",
          plan.featured
            ? "border-[var(--gold)] bg-[color-mix(in_oklab,var(--teal-deep)_35%,#041c17)] shadow-[var(--shadow-glow-gold)]"
            : "border-[#14473d] bg-[#051c17]/95",
        )}
      >
        {/* Card Background Parallax Glow */}
        <motion.div
          style={{ y: bgParallax }}
          className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[color-mix(in_oklab,var(--gold)_14%,transparent)] blur-3xl"
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[0.65rem] font-semibold tracking-widest text-[var(--gold-bright)] uppercase">
              Plan {String(index + 1).padStart(2, "0")}
            </span>
            <span className="size-2 rounded-full bg-[var(--gold-bright)] animate-pulse-dot" />
          </div>

          {/* Featured Badge Spring Pop */}
          {plan.featured && (
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0.7 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-full border border-[var(--gold)] bg-[color-mix(in_oklab,var(--gold)_20%,transparent)] px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold-bright)]"
            >
              Most Popular
            </motion.span>
          )}
        </div>

        <h3 className="mt-4 font-display text-3xl font-semibold text-white">{plan.name}</h3>
        <GoldRule className="my-5 w-16" />

        <p className="font-display text-3xl font-bold text-[var(--gold-bright)]">
          {isActive ? (
            <CountUp value={extractNumber(plan.price)} suffix={extractSuffix(plan.price)} />
          ) : (
            plan.price
          )}
        </p>

        {/* Staggered Features List */}
        <ul className="mt-6 flex flex-col gap-3.5">
          {plan.features.map((f, fIdx) => (
            <motion.li
              key={f}
              initial={{ opacity: 0, y: 12 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.6, y: 0 }}
              transition={{ duration: 0.35, delay: fIdx * 0.12 }}
              className="flex items-center gap-3 text-sm text-foreground/90"
            >
              <AnimatedCheckmark isActive={isActive} delay={fIdx} />
              <span>{f}</span>
            </motion.li>
          ))}
        </ul>

        <div className="mt-8 pt-4">
          <MagneticButton as="a" href="#contact" variant="glass" className="w-full">
            Enquire for {plan.name}
          </MagneticButton>
        </div>
      </div>
    </motion.div>
  );
}

function SupportProcessFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 26,
    restDelta: 0.001,
  });

  const activeStepTransform = useTransform(smoothProgress, [0, 0.4, 0.75, 1], [0, 1, 2, 2]);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    return activeStepTransform.on("change", (v) => {
      setCurrentStep(Math.round(v));
    });
  }, [activeStepTransform]);

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full hidden md:block">
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden py-16">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <SectionHeadingMasked
            eyebrow="Managed Support"
            title="Continuity Plans That Keep Systems Performing."
            sub="Proactive SLA monitoring, dedicated account management, and strategic optimization."
          />

          <div className="mt-12 grid grid-cols-12 gap-8 items-center">
            {/* Left Timeline Progress Indicator Column */}
            <div className="col-span-4 flex flex-col gap-6">
              <div className="relative pl-6 border-l border-border/40">
                <motion.div
                  className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--gold-bright)] via-[var(--teal-bright)] to-[var(--gold)]"
                  style={{ scaleY: smoothProgress, transformOrigin: "top" }}
                />

                {SUPPORT_PLANS.map((p, idx) => {
                  const isActive = currentStep === idx;
                  const isPassed = currentStep > idx;
                  return (
                    <div
                      key={p.name}
                      className={cn(
                        "py-3 transition-all duration-300",
                        isActive ? "opacity-100 translate-x-2" : "opacity-40",
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={cn(
                            "flex size-7 items-center justify-center rounded-full border text-xs font-semibold font-display transition-all duration-300",
                            isActive
                              ? "border-[var(--gold)] bg-[var(--gold)] text-black"
                              : isPassed
                                ? "border-[var(--gold-bright)] text-[var(--gold-bright)]"
                                : "border-border text-muted-foreground",
                          )}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm font-medium text-foreground">{p.name}</span>
                      </div>
                      <p className="mt-1 pl-10 text-xs text-muted-foreground">{p.price}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Stacked Cards Area */}
            <div className="col-span-8 relative h-[420px] w-full flex items-center justify-center">
              {SUPPORT_PLANS.map((p, i) => (
                <ProcessStepCard
                  key={p.name}
                  plan={p}
                  index={i}
                  progress={smoothProgress}
                  isActive={currentStep === i}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SupportMobile() {
  return (
    <div className="block md:hidden">
      <SectionHeadingMasked
        eyebrow="Managed Support"
        title="Continuity Plans That Keep Systems Performing."
        sub="Proactive SLA monitoring, dedicated account management, and strategic optimization."
      />
      <div className="mt-12 grid gap-6">
        {SUPPORT_PLANS.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <TiltCard
              className={cn(
                "h-full p-8 backdrop-blur-xl bg-[#051c17]/95 border border-[#14473d]",
                p.featured && "border-[var(--gold)] shadow-[var(--shadow-glow-gold)]",
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-display font-semibold text-white">{p.name}</h3>
                {p.featured && (
                  <span className="rounded-full border border-[var(--gold)] bg-[color-mix(in_oklab,var(--gold)_20%,transparent)] px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold-bright)]">
                    Popular
                  </span>
                )}
              </div>
              <GoldRule className="my-5 w-16" />
              <p className="font-display text-2xl font-bold text-[var(--gold-bright)]">{p.price}</p>
              <ul className="mt-6 flex flex-col gap-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/90">
                    <Check className="size-3.5 shrink-0 text-[var(--gold-bright)]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-4">
                <MagneticButton as="a" href="#contact" variant="glass" className="w-full">
                  Enquire
                </MagneticButton>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function Support() {
  return (
    <section className="relative border-y border-border bg-[var(--ink)]">
      <CircuitBackdrop />
      {/* Desktop Scroll-Driven Process Flow */}
      <SupportProcessFlow />
      {/* Mobile Touch Fallback */}
      <div className="relative mx-auto max-w-7xl px-6 py-28 md:hidden">
        <SupportMobile />
      </div>
    </section>
  );
}

export function GlobalPresence() {
  const markets = [
    {
      country: "Pakistan",
      cities: ["Islamabad", "Lahore", "Karachi"],
      offices: ["Head Office — Wah Cantt", "Islamabad Office — Blue Area", "Chitral Office"],
      caption: "Serving businesses across Pakistan with local insight and dedicated support.",
    },
    {
      country: "Saudi Arabia",
      cities: ["Riyadh", "Jeddah", "Dammam"],
      offices: ["Riyadh — Regional Presence"],
      caption:
        "Empowering businesses across Saudi Arabia with proximity, presence and performance.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <CircuitBackdrop />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Global Presence" title="Two Markets. One Growth System." />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {markets.map((m, i) => (
            <Reveal key={m.country} delay={i * 0.1}>
              <div className="glass-panel relative h-full overflow-hidden rounded-sm p-8 sm:p-10">
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-24 opacity-25"
                  style={{
                    background:
                      "repeating-linear-gradient(90deg, var(--teal-bright) 0 3px, transparent 3px 18px)",
                    maskImage: "linear-gradient(to top, black, transparent)",
                  }}
                  aria-hidden
                />
                <div className="flex items-center gap-3">
                  <Globe2 className="size-5 text-[var(--gold-bright)]" />
                  <h3 className="text-2xl">{m.country}</h3>
                </div>
                <GoldRule className="my-5 w-20" />
                <div className="flex flex-wrap gap-2">
                  {m.cities.map((c) => (
                    <span
                      key={c}
                      className="rounded-sm border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground">
                  {m.offices.map((o) => (
                    <li key={o}>— {o}</li>
                  ))}
                </ul>
                <p className="relative mt-6 text-sm text-foreground/80">{m.caption}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipSectionHeading({ progress }: { progress: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const yParallax = useTransform(progress, [0, 1], [0, -25]);
  const underlineScaleX = useTransform(progress, [0.05, 0.35], [0, 1]);

  const words = "Built by Operators, Not Observers.".split(" ");

  return (
    <div ref={ref} className="flex flex-col items-start text-left">
      <motion.div style={{ y: yParallax }}>
        <span className="eyebrow text-[var(--gold-bright)]">LEADERSHIP</span>
        <GoldRule className="my-4 w-20" />
      </motion.div>

      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-tight max-w-lg overflow-hidden py-1">
        <span className="inline-block overflow-hidden">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-3"
              initial={{ y: "100%", opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </span>
      </h2>

      {/* Gold Underline Draw-in */}
      <motion.div
        className="mt-4 h-[2px] w-36 bg-gradient-to-r from-[var(--gold)] via-[var(--gold-bright)] to-transparent"
        style={{ scaleX: underlineScaleX, transformOrigin: "left" }}
      />
    </div>
  );
}

function LeadershipStackedCards({ progress }: { progress: any }) {
  // Card 1 Motion (Saif Ur Rehman) - Enters first, then recedes behind Card 2
  const card1Opacity = useTransform(progress, [0.05, 0.25, 0.45, 0.75], [0, 1, 1, 0.4]);
  const card1Y = useTransform(progress, [0.05, 0.25, 0.45, 0.75], [50, 0, 0, -35]);
  const card1Scale = useTransform(progress, [0.05, 0.25, 0.45, 0.75], [0.96, 1, 1, 0.94]);
  const card1Blur = useTransform(
    progress,
    [0.05, 0.25, 0.45, 0.75],
    ["blur(6px)", "blur(0px)", "blur(0px)", "blur(4px)"],
  );

  // Card 2 Motion (Ammar Afzal) - Slides up and stacks over Card 1
  const card2Opacity = useTransform(progress, [0.45, 0.75, 1.0], [0, 1, 1]);
  const card2Y = useTransform(progress, [0.45, 0.75, 1.0], [70, 0, 0]);
  const card2Scale = useTransform(progress, [0.45, 0.75, 1.0], [0.95, 1, 1]);
  const card2Blur = useTransform(
    progress,
    [0.45, 0.75, 1.0],
    ["blur(8px)", "blur(0px)", "blur(0px)"],
  );

  // Ambient shifting glow position
  const yGlow = useTransform(progress, [0, 1], ["-15%", "25%"]);

  return (
    <div className="relative w-full max-w-xl h-[420px] flex items-center justify-center">
      {/* Shifting Ambient Glow behind cards */}
      <motion.div
        style={{ y: yGlow }}
        className="pointer-events-none absolute -inset-4 rounded-full bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.25)_0%,transparent_70%)] blur-3xl opacity-60"
      />

      {/* Card 1: Saif Ur Rehman */}
      <motion.div
        style={{
          opacity: card1Opacity,
          y: card1Y,
          scale: card1Scale,
          filter: card1Blur,
          zIndex: 10,
        }}
        className="absolute inset-0 w-full flex items-center justify-center will-change-transform pointer-events-auto"
      >
        <div className="glass-panel relative w-full rounded-sm p-8 sm:p-10 bg-[#051d1b]/95 border border-[#14473d] shadow-2xl backdrop-blur-xl transition-all duration-300">
          <p className="font-display text-xl leading-relaxed text-white sm:text-2xl">
            “We built this division because ambitious businesses deserve a growth engine — structure, systems and intelligence working together, not a scattered list of services.”
          </p>
          <GoldRule className="my-6 w-20" />
          <p className="text-base font-semibold text-[var(--gold-bright)]">Saif Ur Rehman</p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--gold-bright)]/90">
            CEO, CRESCENT NOVA INTERNATIONAL
          </p>
        </div>
      </motion.div>

      {/* Card 2: Ammar Afzal (Stacks over Card 1) */}
      <motion.div
        style={{
          opacity: card2Opacity,
          y: card2Y,
          scale: card2Scale,
          filter: card2Blur,
          zIndex: 20,
        }}
        className="absolute inset-0 w-full flex items-center justify-center will-change-transform pointer-events-auto"
      >
        <div className="glass-panel relative w-full rounded-sm p-8 sm:p-10 bg-[color-mix(in_oklab,var(--teal-deep)_35%,#051d1b)] border border-[var(--gold)] shadow-[var(--shadow-glow-gold)] backdrop-blur-xl transition-all duration-300">
          <p className="font-display text-xl leading-relaxed text-white sm:text-2xl">
            “Integrated transformation means brand, marketing, CRM, ERP and AI speaking the same language. That is when growth becomes measurable and repeatable.”
          </p>
          <GoldRule className="my-6 w-20" />
          <p className="text-base font-semibold text-[var(--gold-bright)]">Ammar Afzal</p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--gold-bright)]/90">
            HEAD OF AI &amp; DIGITAL DIVISION
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function Leadership() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <section className="relative border-y border-border bg-[var(--ink)]">
      <CircuitBackdrop />

      {/* Desktop Scroll-Driven Pinned Stacking Cards */}
      <div ref={containerRef} className="relative h-[250vh] w-full hidden lg:block">
        <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden py-16">
          <div className="mx-auto max-w-7xl px-6 w-full">
            <div className="grid grid-cols-12 gap-12 items-center">
              {/* Left Column: Heading + Underline + Parallax */}
              <div className="col-span-6">
                <LeadershipSectionHeading progress={smoothProgress} />
              </div>

              {/* Right Column: DevSignal Stacking Cards */}
              <div className="col-span-6">
                <LeadershipStackedCards progress={smoothProgress} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Touch Fallback (< 768px) */}
      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:hidden">
        <SectionHeading eyebrow="LEADERSHIP" title="Built by Operators, Not Observers." />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {LEADERSHIP.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.1}>
              <div className="glass-panel h-full rounded-sm p-8 sm:p-10 bg-[#051d1b]/95 border border-[#14473d]">
                <p className="font-display text-xl leading-relaxed text-white sm:text-2xl">
                  “{l.quote}”
                </p>
                <GoldRule className="my-6 w-20" />
                <p className="text-base font-semibold text-[var(--gold-bright)]">{l.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold-bright)]/90">
                  {l.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
