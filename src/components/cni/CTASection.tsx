import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function CTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-background pb-24 sm:pb-32">
      {/* Subtle background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute h-[500px] w-[800px] rounded-full bg-[var(--gold)]/[0.03] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-center"
        >
          {/* Eyebrow label */}
          <span className="mb-5 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold-bright)] shadow-[0_0_20px_rgba(201,162,39,0.15)]">
            Let's Talk
          </span>

          {/* Heading */}
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            Ready to Build Your <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold)] to-[var(--gold-bright)]">
              Next Growth System?
            </span>
          </h2>

          {/* Subtext */}
          <p className="mt-6 mb-10 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Partner with Crescent Nova International to automate your processes, elevate your brand,
            and drive measurable revenue. Let's start mapping out your custom growth strategy today.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
            {/* Primary Contact Button */}
            <Link
              to="/contact"
              className="group relative flex h-14 w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-full bg-[var(--gold)] px-8 font-semibold text-[#030908] transition-all hover:scale-[1.02] hover:bg-[var(--gold-bright)] hover:shadow-[0_0_30px_rgba(201,162,39,0.3)] active:scale-95"
            >
              <span>Get a Quote</span>
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Secondary WhatsApp Button */}
            <a
              href="https://wa.me/923427438726"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-14 w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-full border border-white/20 bg-white/5 px-8 font-semibold text-white transition-all hover:border-[var(--gold)]/50 hover:bg-white/10 active:scale-95"
            >
              <MessageCircle className="size-5 text-[var(--gold-bright)]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
