import { motion, useInView, useMotionValue, useSpring, animate } from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
  type MouseEvent,
} from "react";
import { cn } from "@/lib/utils";

export function useReducedMotionPref() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

export function useIsMobile768() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setMobile(mq.matches);
    const on = () => setMobile(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return mobile;
}

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function GoldRule({ className }: { className?: string }) {
  return <div className={cn("gold-rule w-40", className)} aria-hidden />;
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
      )}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="max-w-3xl text-balance text-3xl leading-[1.15] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <GoldRule className={align === "center" ? "" : "w-28"} />
      {sub ? <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">{sub}</p> : null}
    </Reveal>
  );
}

export function MagneticButton({
  children,
  variant = "gold",
  className,
  as = "button",
  href,
  ...rest
}: {
  children: ReactNode;
  variant?: "gold" | "glass";
  className?: string;
  as?: "button" | "a";
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const ref = useRef<HTMLElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 240, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 240, damping: 18 });

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const classes = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-[0.72rem] font-medium uppercase tracking-[0.22em] transition-colors",
    variant === "gold"
      ? "bg-primary text-primary-foreground hover:bg-[var(--gold-bright)]"
      : "glass-panel text-foreground hover:text-[var(--gold-bright)]",
    className,
  );

  const Comp = as === "a" ? motion.a : motion.button;

  return (
    <Comp
      // @ts-expect-error polymorphic ref
      ref={ref}
      href={href}
      style={{ x, y }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={classes}
      {...(rest as object)}
    >
      {children}
    </Comp>
  );
}

export function TiltCard({
  children,
  className,
  intensity = 8,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * intensity * 2);
    rx.set(-py * intensity * 2);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      whileHover={{ translateY: -8 }}
      className={cn("glass-panel rounded-sm", className)}
    >
      {children}
    </motion.div>
  );
}

export function CountUp({
  value,
  suffix = "",
  duration = 1.8,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export function CustomCursor() {
  const reduced = useReducedMotionPref();
  const mobile = useIsMobile768();
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (reduced || mobile) return;
    let rx = 0;
    let ry = 0;
    let tx = 0;
    let ty = 0;
    let raf = 0;

    const move = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      const el = e.target as HTMLElement | null;
      setActive(Boolean(el?.closest("a, button, input, textarea, select, [data-cursor]")));
    };

    const loop = () => {
      rx += (tx - rx) * 0.16;
      ry += (ty - ry) * 0.16;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", move);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, [reduced, mobile]);

  if (reduced || mobile) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block" aria-hidden>
      <div
        ref={dot}
        className="absolute -ml-[3px] -mt-[3px] size-1.5 rounded-full bg-[var(--gold-bright)]"
      />
      <div
        ref={ring}
        className={cn(
          "absolute -ml-4 -mt-4 size-8 rounded-full border border-[var(--teal-bright)] transition-[opacity,scale] duration-300",
          active ? "scale-150 opacity-90" : "scale-100 opacity-45",
        )}
      />
    </div>
  );
}

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 44" className={cn("size-8", className)} aria-hidden>
      <g fill="none" strokeWidth="1.1">
        <path
          d="M6 22 L12 10 L24 5 L31 12 L28 24 L31 35 L20 39 L10 33 Z"
          fill="var(--teal-deep)"
          stroke="var(--cream)"
        />
        <path d="M12 10 L20 20 L10 33 M24 5 L20 20 L28 24 M6 22 L20 20" stroke="var(--cream)" />
        <path
          d="M31 12 L24 5 L31 12 L38 18 L36 30 L31 35 L28 24 Z"
          fill="var(--gold)"
          stroke="var(--cream)"
        />
        <path d="M31 12 L33 23 L36 30 M38 18 L33 23 L31 35" stroke="var(--cream)" />
      </g>
      <g fill="var(--gold)">
        <rect x="40" y="9" width="3.4" height="3.4" />
        <rect x="43" y="21" width="2.6" height="2.6" />
        <rect x="39.5" y="32" width="3" height="3" />
      </g>
      <g fill="var(--teal-bright)">
        <rect x="44" y="14" width="2.6" height="2.6" />
        <rect x="41" y="26" width="2.2" height="2.2" />
      </g>
    </svg>
  );
}

export function CircuitBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="grain-veil absolute inset-0 opacity-60" />
      <div className="circuit-trace absolute left-0 top-1/4 h-px w-full opacity-40" />
      <div
        className="circuit-trace absolute left-0 top-2/3 h-px w-full opacity-25"
        style={{ animationDelay: "3s" }}
      />
    </div>
  );
}
