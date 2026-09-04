import { useState, useEffect, type FormEvent } from "react";
import {
  Mail,
  MessageCircle,
  Globe,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Linkedin,
} from "lucide-react";
import { toast } from "sonner";
import { BUDGET_OPTIONS, NAV_LINKS, SERVICES, PACKAGES } from "@/lib/cni-data";
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
import { Instagram, Facebook } from "lucide-react";

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
      const matchedOption = BUDGET_OPTIONS.find((opt) =>
        opt.toLowerCase().includes(pkg.toLowerCase()),
      );
      if (matchedOption) {
        setFormData((prev) => ({ ...prev, budget: matchedOption }));
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
        message:
          "Thank you! Your enquiry has been submitted successfully. Our growth team will be in touch shortly.",
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
    <section id="contact" className="relative overflow-hidden bg-[var(--ink)] py-28 sm:py-36">
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

              <div className="mb-8">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] text-[var(--gold-bright)] font-semibold mb-3">
                Let's Connect
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-3">
                Great Partnerships Begin With a Conversation.
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                Tell us where you are, where you want to be and we'll map out exactly how to get you there.
              </p>
            </div>

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

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceLinks = SERVICES.slice(0, 6).map((s) => ({
    label: s.title,
    href: `/services#${s.slug}`,
  }));

  const packageLinks = PACKAGES.slice(0, 6).map((p) => ({
    label: p.name,
    href: `/packages/${slugify(p.name)}`,
  }));

  const columns = [
    {
      title: "Services",
      links: serviceLinks,
    },
    {
      title: "Packages",
      links: packageLinks,
    },
    {
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "About Us", href: "/about" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-[var(--ink)]">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        {/* Top Grid: Brand + Columns */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] items-start">
          {/* Brand Column */}
          <div className="flex flex-col gap-5">
            {/* Invisible spacer matching h4 label height to align logo top with column titles */}
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--gold-bright)] leading-none">
              CNI AI &amp; Digital Division
            </span>
            <a href="/" aria-label="CNI Home" className="-mt-1">
              <img
                src={logoUrl}
                alt="CNI Logo"
                className="h-24 sm:h-32 w-auto object-contain object-left"
              />
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Intelligent growth for ambitious businesses — branding, digital, AI and beyond.
            </p>

            {/* Address */}
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-3.5 shrink-0 text-[var(--gold-bright)]" />
                <span>
                  Green Trust Tower, Ground Floor,
                  <br />
                  Blue Area, Islamabad
                </span>
              </span>
              <a
                href="https://wa.me/923427438726"
                className="flex items-center gap-2 hover:text-[var(--gold-bright)] transition-colors"
              >
                <MessageCircle className="size-3.5 shrink-0 text-[var(--gold-bright)]" />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/cniaianddigitaldivision/"
                className="flex items-center gap-2 hover:text-[var(--gold-bright)] transition-colors"
              >
                <Instagram className="size-3.5 shrink-0 text-[var(--gold-bright)]" />
                Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61593357982871"
                className="flex items-center gap-2 hover:text-[var(--gold-bright)] transition-colors"
              >
                <Facebook className="size-3.5 shrink-0 text-[var(--gold-bright)]" />
                Facebook
              </a>
              <a
                href="https://www.linkedin.com/company/aidigitaldivision/"
                className="flex items-center gap-2 hover:text-[var(--gold-bright)] transition-colors"
              >
                <Linkedin className="size-3.5 shrink-0 text-[var(--gold-bright)]" />
                LinkedIn
              </a>
              <a
                href="https://www.tiktok.com/@cniaianddigitaldivision"
                className="flex items-center gap-2 hover:text-[var(--gold-bright)] transition-colors"
              >
                <svg
    className="size-3.5 shrink-0 text-[var(--gold-bright)]"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06Z" />
  </svg>
                Tiktok
              </a>
              <a
                href="mailto:info@attarigroupofcompanies.com"
                className="flex items-center gap-2 hover:text-[var(--gold-bright)] transition-colors"
              >
                <Mail className="size-3.5 shrink-0 text-[var(--gold-bright)]" />
                info@attarigroupofcompanies.com
              </a>
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--gold-bright)]">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground hover:translate-x-0.5 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Google Map */}
        <div className="mt-12 w-full rounded-xl overflow-hidden border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.4787052931015!2d73.07596197441562!3d33.7224355350753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf8308ecc255%3A0x7060e58f1e852b66!2sGreen%20Trust%20Tower!5e0!3m2!1sen!2s!4v1787639142439!5m2!1sen!2s"
            width="100%"
            height="260"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="CNI Office Location — Green Trust Tower, Islamabad"
          />
        </div>

        {/* Gold Divider */}
        <div className="gold-rule w-full mt-10 mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Crescent Nova International — AI &amp; Digital Division. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
