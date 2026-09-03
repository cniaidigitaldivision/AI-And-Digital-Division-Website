import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { GoldRule } from "./primitives";

/* ─────────────────────────────────────────────────────────────────
   FAQ data — answers are placeholder copy; client will refine.
───────────────────────────────────────────────────────────────── */
const FAQS = [
  {
    question: "What services does CNI's AI & Digital Division offer?",
    answer:
      "CNI's AI & Digital Division is a full-service growth partner offering branding & identity, website development, SEO & AI visibility, digital marketing, content production, CRM & WhatsApp automation, custom ERP/POS software, and advanced AI-powered dashboards. Whether you're a startup establishing your presence or an enterprise streamlining operations, we deliver integrated solutions under one roof.",
  },
  {
    question: "How is CNI different from a regular digital marketing agency?",
    answer:
      "Unlike traditional agencies that focus solely on ads or social media, CNI combines branding, technology, and intelligent automation into a single, cohesive growth system. We build the underlying infrastructure — CRMs, AI workflows, custom portals — that makes your marketing efforts compoundingly more effective over time. We're not just a vendor; we're a strategic growth partner embedded in your success.",
  },
  {
    question: "Which markets/countries do you currently serve?",
    answer:
      "We primarily serve ambitious businesses in Pakistan and Saudi Arabia, with active client relationships in Karachi, Lahore, Islamabad, and Riyadh. Our digital-first model also enables us to partner with clients across the GCC and beyond. Reach out and we'll let you know how we can best support your market.",
  },
  {
    question: "How long does it take to see results after starting a package?",
    answer:
      "Results vary by service — brand identity and website projects are typically delivered within 3–6 weeks, while SEO and organic marketing show meaningful traction within 3–4 months. Paid media campaigns and automation systems can generate results within the first 30 days. We set clear milestones from day one so you always know where you stand.",
  },
  {
    question: "Can I customize a package instead of choosing a fixed tier?",
    answer:
      "Absolutely. Our packages are designed as starting points, not rigid constraints. During your initial discovery call, we assess your specific goals and build a tailored scope that fits your budget and growth stage. Many of our clients run fully bespoke engagements combining services from multiple tiers.",
  },
  {
    question: "How do I get started working with CNI?",
    answer:
      "Getting started is simple — reach out via our contact form or WhatsApp us directly. We'll schedule a complimentary discovery call to understand your business, current challenges, and growth objectives. From there, we'll propose a custom roadmap and package recommendation with full transparency on timelines and deliverables.",
  },
];

/* ─────────────────────────────────────────────────────────────────
   Single row — mirrors FaqItem in PackageDetailPage exactly,
   but with parent-controlled open state (one-at-a-time accordion).
───────────────────────────────────────────────────────────────── */
function FaqRow({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-5 text-left text-sm font-medium text-foreground hover:text-[var(--gold-bright)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]/50 rounded-sm"
      >
        <span>{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.26, ease: "easeInOut" }}
          className="shrink-0 flex"
          aria-hidden="true"
        >
          <ChevronDown
            className={`size-4 transition-colors duration-200 ${
              isOpen ? "text-[var(--gold-bright)]" : "text-muted-foreground"
            }`}
          />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-muted-foreground leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   FAQ Section — between Testimonials and CTASection on homepage.
   Mirrors the package detail page FAQ block exactly.
───────────────────────────────────────────────────────────────── */
export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section style={{ background: "var(--ink, #040f0d)" }} className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-4"
        >
          {/* ── Left-aligned heading ── */}
          <h2 className="font-display text-3xl font-semibold text-white mb-2">
            Frequently Asked Questions
          </h2>
          <GoldRule className="w-16 mb-6" />

          {/* ── Single unified container — exact match to package page ── */}
          <div className="rounded-[24px] border border-white/10 bg-white/[0.02] px-8 py-2">
            {FAQS.map((faq, idx) => (
              <FaqRow
                key={idx}
                index={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === idx}
                onToggle={() => toggle(idx)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
