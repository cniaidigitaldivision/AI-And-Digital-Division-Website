import { useState, useEffect, type FormEvent } from "react";
import { Mail, MessageCircle, Globe, MapPin, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { BUDGET_OPTIONS, NAV_LINKS } from "@/lib/cni-data";
import { submitContactForm } from "@/lib/contact.functions";
import { CustomDropdown } from "./CustomDropdown";
import {
  BrandMark,
  CircuitBackdrop,
  GoldRule,
  MagneticButton,
  Reveal,
  SectionHeading,
} from "./primitives";
import { ParallaxVideo } from "./ParallaxVideo";
import logoUrl from "@/assets/logo.png";

const FIELD =
  "w-full rounded-sm border border-border bg-[color-mix(in_oklab,var(--teal-deep)_14%,transparent)] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-[var(--gold)]";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(
    null,
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pkg = params.get("package");
    if (pkg) {
      // Find a matching budget option (e.g. "Spark — PKR 50,000/mo")
      const matchedOption = BUDGET_OPTIONS.find(opt => opt.toLowerCase().includes(pkg.toLowerCase()));
      if (matchedOption) {
        setFormData(prev => ({ ...prev, budget: matchedOption }));
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBudgetChange = (value: string) => {
    setFormData((prev) => ({ ...prev, budget: value }));
    if (fieldErrors.budget) {
      setFieldErrors((prev) => ({ ...prev, budget: "" }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      errors.message = "Tell us about your business goals.";
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedback(null);

    if (!validateForm()) {
      toast.error("Please fix the errors in the form before submitting.");
      return;
    }

    setSending(true);
    try {
      await submitContactForm({ data: formData });
      setFeedback({
        type: "success",
        message: "Thank you! Your enquiry has been submitted successfully. Our growth team will be in touch shortly.",
      });
      toast.success("Enquiry sent successfully!");
      setFormData({ name: "", email: "", company: "", budget: "", message: "" });
      setFieldErrors({});
    } catch (err: unknown) {
      console.error("Submission error:", err);
      const errMsg =
        err instanceof Error ? err.message : "Failed to send enquiry. Please try again.";
      setFeedback({ type: "error", message: errMsg });
      toast.error(errMsg);
    } finally {
      setSending(false);
    }
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
            <form onSubmit={onSubmit} noValidate className="glass-panel rounded-sm p-8 sm:p-10">
              {/* Feedback Alert Banners */}
              {feedback && (
                <div
                  className={`mb-6 flex items-start gap-3 rounded-sm border p-4 text-sm ${
                    feedback.type === "success"
                      ? "border-[var(--gold)]/60 bg-[color-mix(in_oklab,var(--teal-deep)_30%,transparent)] text-[var(--gold-bright)]"
                      : "border-red-500/60 bg-red-950/40 text-red-300"
                  }`}
                >
                  {feedback.type === "success" ? (
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[var(--gold-bright)]" />
                  ) : (
                    <AlertCircle className="mt-0.5 size-5 shrink-0 text-red-400" />
                  )}
                  <div>
                    <p className="font-semibold">
                      {feedback.type === "success" ? "Enquiry Sent" : "Submission Failed"}
                    </p>
                    <p className="mt-0.5 text-xs opacity-90">{feedback.message}</p>
                  </div>
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name *"
                    className={`${FIELD} ${fieldErrors.name ? "border-red-500/80" : ""}`}
                  />
                  {fieldErrors.name && (
                    <p className="mt-1 text-xs text-red-400">{fieldErrors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email *"
                    className={`${FIELD} ${fieldErrors.email ? "border-red-500/80" : ""}`}
                  />
                  {fieldErrors.email && (
                    <p className="mt-1 text-xs text-red-400">{fieldErrors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company"
                    className={FIELD}
                  />
                </div>

                <div>
                  <CustomDropdown
                    name="budget"
                    options={BUDGET_OPTIONS}
                    value={formData.budget}
                    onChange={handleBudgetChange}
                    placeholder="Budget / Package"
                  />
                </div>
              </div>

              <div className="mt-4">
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your business goals *"
                  className={`${FIELD} resize-none ${fieldErrors.message ? "border-red-500/80" : ""}`}
                />
                {fieldErrors.message && (
                  <p className="mt-1 text-xs text-red-400">{fieldErrors.message}</p>
                )}
              </div>

              <div className="mt-7 flex items-center gap-4">
                <MagneticButton type="submit" disabled={sending}>
                  {sending ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="size-4 animate-spin" />
                      Sending…
                    </span>
                  ) : (
                    "Send Enquiry"
                  )}
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
            <img src={logoUrl} alt="CNI Logo" className="h-14 sm:h-16 w-auto object-contain" />
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
