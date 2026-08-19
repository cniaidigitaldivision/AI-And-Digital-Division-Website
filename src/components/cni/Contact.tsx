import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, Globe, MapPin } from "lucide-react";
import { toast } from "sonner";
import { BUDGET_OPTIONS, NAV_LINKS } from "@/lib/cni-data";
import {
  BrandMark,
  CircuitBackdrop,
  GoldRule,
  MagneticButton,
  Reveal,
  SectionHeading,
} from "./primitives";
import { ParallaxVideo } from "./ParallaxVideo";

const FIELD =
  "w-full rounded-sm border border-border bg-[color-mix(in_oklab,var(--teal-deep)_14%,transparent)] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-[var(--gold)]";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Thank you — our growth team will be in touch shortly.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--ink)] py-28 sm:py-36"
    >
      <ParallaxVideo
        speed={0.3}
        opacity={0.35}
        overlayClassName="bg-[linear-gradient(180deg,color-mix(in_oklab,var(--ink)_88%,transparent)_0%,color-mix(in_oklab,var(--ink)_94%,transparent)_100%)]"
      />
      <CircuitBackdrop />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, color-mix(in oklab, var(--teal-bright) 30%, transparent) 0, transparent 45%), radial-gradient(circle at 80% 70%, color-mix(in oklab, var(--gold) 22%, transparent) 0, transparent 45%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Let's Talk"
          title="Let's Build Your Next Growth System."
          sub="From brand identity to AI-enabled business operations, we help businesses grow with structure, speed and measurable impact."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <Reveal>
            <form onSubmit={onSubmit} className="glass-panel rounded-sm p-8 sm:p-10">
              <div className="grid gap-4 sm:grid-cols-2">
                <input required name="name" placeholder="Name" className={FIELD} />
                <input required type="email" name="email" placeholder="Email" className={FIELD} />
                <input name="company" placeholder="Company" className={FIELD} />
                <select name="budget" defaultValue="" className={FIELD}>
                  <option value="" disabled>
                    Budget / Package
                  </option>
                  {BUDGET_OPTIONS.map((b) => (
                    <option key={b} value={b} className="bg-[var(--ink)]">
                      {b}
                    </option>
                  ))}
                </select>
              </div>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell us about your business goals"
                className={`${FIELD} mt-4 resize-none`}
              />
              <div className="mt-7">
                <MagneticButton type="submit" disabled={sending}>
                  {sending ? "Sending…" : "Send Enquiry"}
                </MagneticButton>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-panel h-full rounded-sm p-8 sm:p-10">
              <span className="eyebrow">Direct Contact</span>
              <GoldRule className="my-5 w-16" />
              <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <MessageCircle className="size-4 text-[var(--gold-bright)]" />
                  <a href="https://wa.me/923427438726">WhatsApp 0342 7438726</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="size-4 text-[var(--gold-bright)]" />
                  <a href="mailto:info@attarigroupofcompanies.com">
                    info@attarigroupofcompanies.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="size-4 text-[var(--gold-bright)]" />
                  <a
                    href="https://crescentnovainternational.com/en/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    crescentnovainternational.com
                  </a>
                </li>
              </ul>
              <GoldRule className="my-7 w-16" />
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                {[
                  "Head Office — Wah Cantt, Pakistan",
                  "Islamabad Office — Blue Area",
                  "Chitral Office — Pakistan",
                  "Riyadh — Saudi Arabia",
                ].map((a) => (
                  <li key={a} className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--teal-bright)]" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--ink)] py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <a href="#top" className="flex items-center gap-3">
            <BrandMark />
            <span className="font-display text-[0.78rem] uppercase tracking-[0.3em]">
              AI &amp; Digital Division
            </span>
          </a>
          <nav className="flex flex-wrap gap-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-[var(--gold-bright)]"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="gold-rule w-full" />
        <p className="text-center text-xs text-muted-foreground">
          © 2026 Crescent Nova International — AI &amp; Digital Division. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
