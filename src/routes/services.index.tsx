import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/cni/Navbar";
import { Footer } from "@/components/cni/Contact";
import { Technology, Support } from "@/components/cni/SectionsB";
import { SERVICES } from "@/lib/cni-data";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Reveal, GoldRule } from "@/components/cni/primitives";
import { ArrowUpRight, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services/")({
  component: ServicesIndexPage,
});

const serviceImages = import.meta.glob("../assets/services/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

function getImageUrl(name: string | undefined) {
  if (!name) return "";
  const path = `../assets/services/${name}`;
  return (serviceImages[path] as string) || "";
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  const imageUrl = getImageUrl(service.imageName);

  return (
    <Reveal delay={index * 0.1}>
      <Link
        to={`/services/${service.slug}`}
        className="block h-full group relative rounded-2xl overflow-hidden glass-panel border border-border hover:border-[var(--gold)] hover:shadow-[var(--shadow-glow-gold)] transition-all duration-500 hover:-translate-y-2 bg-[var(--ink)]"
      >
        {/* Image Header with Gradient Overlay */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-2xl">
          <img
            src={imageUrl}
            alt={service.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/40 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative p-8 pt-6 flex flex-col h-full">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-3 group-hover:text-[var(--gold)] transition-colors">
            {service.title}
          </h3>

          {service.simpleExplainer && (
            <p className="text-sm text-[var(--gold)] font-medium mb-6 italic opacity-90 leading-relaxed">
              {service.simpleExplainer}
            </p>
          )}

          {/* Process Strip */}
          {service.miniProcess && service.miniProcess.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-6 text-xs font-mono uppercase tracking-wider text-muted-foreground">
              {service.miniProcess.map((step: string, i: number) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[var(--cream)] bg-[var(--teal)]/20 px-2 py-1 rounded-md">
                    {step}
                  </span>
                  {i < service.miniProcess!.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-[var(--gold)] opacity-50" />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* What you get bullets */}
          <ul className="space-y-3 mb-8 flex-1">
            {service.items.slice(0, 3).map((item: any, i: number) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-[var(--gold)] shrink-0 mt-0.5" />
                <span className="leading-tight">{item.title}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex items-center justify-between text-sm font-semibold text-[var(--gold)] group-hover:text-[var(--cream)] transition-colors pt-4 border-t border-border/50">
            Explore Service
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

function ServicesIndexPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--gold)] origin-left z-[60] shadow-[0_0_10px_var(--gold)]"
        style={{ scaleX }}
      />

      <main className="flex-1 flex flex-col w-full">
        {/* HERO SECTION */}
        <section
          ref={heroRef}
          className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 px-6"
        >
          {/* Animated Background Mesh */}
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative inline-block mb-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl bg-gradient-to-r from-[var(--gold)] via-[var(--gold-bright)] to-[var(--gold)] bg-[length:200%_auto] text-transparent bg-clip-text animate-gradient font-display font-medium">
                Our Services
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed mt-6"
            >
              Comprehensive solutions designed to transform your ideas into intelligent systems,
              powerful brands, and sustainable growth.
            </motion.p>
          </div>
        </section>

        {/* DETAILED SERVICES LIST -> NOW GRID OF CARDS */}
        <div className="w-full max-w-7xl mx-auto px-6 py-24 sm:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* EXTRACTED SECTIONS */}
        <Technology />
        <Support />
      </main>

      <Footer />
    </div>
  );
}
