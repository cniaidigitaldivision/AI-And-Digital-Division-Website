import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MagneticButton, useIsMobile768, useReducedMotionPref } from "./primitives";
import { ParallaxVideo } from "./ParallaxVideo";


const BrainScene = lazy(() => import("./BrainScene"));

const HEADLINE = ["Where", "Intelligence", "Meets", "Growth."];

export function Hero() {
  const progressRef = useRef(0);
  const pointer = useRef({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotionPref();
  const mobile = useIsMobile768();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => {
      const h = window.innerHeight;
      progressRef.current = Math.min(1, Math.max(0, window.scrollY / (h * 0.85)));
    };
    const onMove = (e: PointerEvent) => {
      if (reduced || mobile) return;
      pointer.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
    };
  }, [reduced, mobile]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[var(--ink)]"
    >
      <ParallaxVideo className="z-0" speed={0.4} />

      <div className="absolute inset-0 z-[1]">
        {mounted && !reduced ? (
          <Suspense fallback={null}>
            <BrainScene
              progressRef={progressRef}
              pointer={pointer}
              quality={mobile ? "low" : "high"}
              reducedMotion={reduced}
            />
          </Suspense>
        ) : (
          <div className="grain-veil absolute inset-0" />
        )}
      </div>


      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--ink)_12%,transparent)_0%,color-mix(in_oklab,var(--ink)_32%,transparent)_50%,color-mix(in_oklab,var(--ink)_70%,transparent)_92%)]" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pb-24 pt-32 text-center">
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

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <div className="h-14 w-px bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent" />
        <span className="size-1.5 rounded-full bg-[var(--gold-bright)] animate-pulse-dot" />
      </div>
    </section>
  );
}
