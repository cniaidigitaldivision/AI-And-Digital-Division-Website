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

export function Packages() {
  return (
    <section
      id="packages"
      className="relative overflow-hidden border-y border-border bg-[var(--ink)] py-28 sm:py-36"
    >
      <CircuitBackdrop />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Digital Growth Packages"
          title="Scalable solutions designed to accelerate your brand."
          sub="Built to grow your digital presence, engagement, and measurable results month over month."
        />
      </div>

      <div className="mt-16 pb-6">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-6 px-6">

          {PACKAGES.map((p, i) => (
            <Reveal key={p.name} delay={Math.min(i * 0.05, 0.35)}>
              <TiltCard className="flex h-full w-[300px] flex-col p-8">
                <span className="eyebrow">{p.subtitle}</span>
                <h3 className="mt-4 text-3xl">{p.name}</h3>
                <GoldRule className="my-5 w-16" />
                <p className="font-display text-2xl text-[var(--gold-bright)]">
                  {p.price}
                  <span className="text-sm text-muted-foreground">{p.cadence}</span>
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-[var(--teal-bright)]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <MagneticButton as="a" href="#contact" variant="glass" className="w-full">
                    Enquire
                  </MagneticButton>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>

      <p className="mx-auto max-w-7xl px-6 text-center text-xs text-muted-foreground">
        Saudi Arabia pricing is available based on market delivery scope and requirements.
      </p>
    </section>
  );
}

export function Technology() {
  return (
    <section id="technology" className="relative overflow-hidden py-28 sm:py-36">
      <CircuitBackdrop />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Technology Solutions"
          title="Business Systems Engineered for Scale."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TECH_SOLUTIONS.map((t, i) => {
            const Icon = SOLUTION_ICONS[i] ?? Cpu;
            return (
              <Reveal key={t.name} delay={Math.min(i * 0.04, 0.3)}>
                <TiltCard className="flex h-full items-start gap-4 p-7" intensity={5}>
                  <Icon className="mt-1 size-5 shrink-0 text-[var(--gold-bright)]" />
                  <div>
                    <h3 className="text-lg">{t.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
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

export function Methodology() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-[var(--ink)] py-28 sm:py-36">
      <CircuitBackdrop />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Delivery Methodology"
          title="Our Proven Approach. Modern Tools. Measurable Outcomes."
        />

        <div className="mt-16 pb-4">
          <div className="flex flex-wrap items-center justify-center gap-4 px-1">

            {METHOD_STEPS.map((s, i) => (
              <Reveal key={s} delay={Math.min(i * 0.05, 0.35)}>
                <div className="flex items-center gap-4">
                  <div className="glass-panel min-w-[170px] rounded-sm px-5 py-4">
                    <span className="text-[0.6rem] tracking-[0.24em] text-[var(--gold-bright)]">
                      STEP {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-sm">{s}</p>
                  </div>
                  {i < METHOD_STEPS.length - 1 ? (
                    <span className="h-px w-8 bg-[color-mix(in_oklab,var(--gold)_60%,transparent)]" />
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TECH_STACK.map((g, i) => (
            <Reveal key={g.group} delay={Math.min(i * 0.05, 0.3)}>
              <div className="glass-panel h-full rounded-sm p-7">
                <span className="eyebrow">{g.group}</span>
                <GoldRule className="my-4 w-14" />
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-sm border border-border px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {it}
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

        <Reveal className="mt-12 flex flex-wrap justify-center gap-3">
          {INDUSTRIES.map((c) => (
            <span
              key={c}
              className="rounded-full border border-[color-mix(in_oklab,var(--gold)_40%,transparent)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground"
            >
              {c}
            </span>
          ))}
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

export function Support() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-[var(--ink)] py-28 sm:py-36">
      <CircuitBackdrop />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Managed Support"
          title="Continuity Plans That Keep Systems Performing."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {SUPPORT_PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <TiltCard
                className={cn(
                  "h-full p-8",
                  p.featured && "border-[var(--gold)] shadow-[var(--shadow-glow-gold)]",
                )}
              >
                <h3 className="text-2xl">{p.name}</h3>
                <GoldRule className="my-5 w-16" />
                <p className="font-display text-xl text-[var(--gold-bright)]">{p.price}</p>
                <ul className="mt-6 flex flex-col gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-[var(--teal-bright)]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          ))}
        </div>
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

export function Leadership() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-[var(--ink)] py-28 sm:py-36">
      <CircuitBackdrop />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Leadership" title="Built by Operators, Not Observers." />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {LEADERSHIP.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.1}>
              <div className="glass-panel h-full rounded-sm p-8 sm:p-10">
                <p className="font-display text-xl leading-relaxed text-foreground/90 sm:text-2xl">
                  “{l.quote}”
                </p>
                <GoldRule className="my-7 w-20" />
                <p className="text-sm text-[var(--gold-bright)]">{l.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{l.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
