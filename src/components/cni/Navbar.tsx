import { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS, SERVICES, PACKAGES } from "@/lib/cni-data";
import { BrandMark, MagneticButton } from "./primitives";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo.png";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const renderDesktopDropdown = (label: string) => {
    const isOpen = openDropdown === label;
    const isServices = label === "Services";
    const items = isServices
      ? SERVICES.map((s) => ({ title: s.title, href: `/services/${s.slug}` }))
      : PACKAGES.map((p) => ({ title: p.name, href: `/packages/${slugify(p.name)}` }));
    const mainHref = isServices ? "/services" : "/packages";

    return (
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter(label)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Label is a real navigable link; chevron toggles dropdown */}
        <div className="flex items-center gap-0.5">
          <a
            href={mainHref}
            className={cn(
              "text-[0.7rem] uppercase tracking-[0.2em] transition-colors hover:text-[var(--gold-bright)]",
              isOpen ? "text-[var(--gold-bright)]" : "text-white",
            )}
          >
            {label}
          </a>
          <button
            onClick={() => setOpenDropdown(isOpen ? null : label)}
            aria-expanded={isOpen}
            aria-haspopup="true"
            className={cn(
              "p-0.5 transition-colors hover:text-[var(--gold-bright)]",
              isOpen ? "text-[var(--gold-bright)]" : "text-white",
            )}
          >
            <ChevronDown
              className={cn("size-3 transition-transform duration-200", isOpen && "rotate-180")}
            />
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 mt-4 w-64 rounded-md border border-[var(--gold)]/40 bg-[#061e19] shadow-lg animate-in fade-in slide-in-from-top-2 p-2 backdrop-blur-xl">
            {items.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="block px-4 py-2 text-sm text-white hover:bg-[var(--gold)]/10 hover:text-[var(--gold-bright)] rounded-md transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderMobileDropdown = (label: string) => {
    const isOpen = openDropdown === label;
    const isServices = label === "Services";
    const items = isServices
      ? SERVICES.map((s) => ({ title: s.title, href: `/services/${s.slug}` }))
      : PACKAGES.map((p) => ({ title: p.name, href: `/packages/${slugify(p.name)}` }));
    const mainHref = isServices ? "/services" : "/packages";

    return (
      <div className="flex flex-col">
        {/* Row: navigable label + chevron toggle */}
        <div className="flex items-center justify-between py-2.5">
          <a
            href={mainHref}
            onClick={() => setOpen(false)}
            className="text-[0.72rem] uppercase tracking-[0.2em] text-white hover:text-[var(--gold-bright)] transition-colors"
          >
            {label}
          </a>
          <button
            onClick={() => setOpenDropdown(isOpen ? null : label)}
            className="p-1 text-white hover:text-[var(--gold-bright)] transition-colors"
            aria-label={`Toggle ${label} menu`}
          >
            <ChevronDown
              className={cn("size-4 transition-transform duration-200", isOpen && "rotate-180")}
            />
          </button>
        </div>

        {isOpen && (
          <div className="flex flex-col gap-1 pl-4 border-l border-[var(--gold)]/20 mt-1 mb-2 animate-in fade-in slide-in-from-top-2">
            {items.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-[0.7rem] text-white/80 hover:text-[var(--gold-bright)] transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-[color-mix(in_oklab,var(--gold)_22%,transparent)] bg-[color-mix(in_oklab,var(--ink)_78%,transparent)] backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-0">
        <a href="/" className="flex items-center gap-3">
          <img src={logoImg} alt="Logo" className="h-22 sm:h-30 w-auto object-contain" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) =>
            l.label === "Services" || l.label === "Packages" ? (
              <div key={l.href}>{renderDesktopDropdown(l.label)}</div>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="relative text-[0.7rem] uppercase tracking-[0.2em] text-white transition-colors hover:text-[var(--gold-bright)]"
              >
                {l.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <MagneticButton as="a" href="/contact" className="hidden px-5 py-3 sm:inline-flex">
            Get a Quote
          </MagneticButton>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="glass-panel rounded-sm p-2.5 lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="flex flex-col gap-1 border-t border-border bg-[color-mix(in_oklab,var(--ink)_94%,transparent)] px-6 py-4 backdrop-blur-xl lg:hidden">
          {NAV_LINKS.map((l) =>
            l.label === "Services" || l.label === "Packages" ? (
              <div key={l.href}>{renderMobileDropdown(l.label)}</div>
            ) : (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-[0.72rem] uppercase tracking-[0.2em] text-white hover:text-[var(--gold-bright)] transition-colors block"
              >
                {l.label}
              </a>
            ),
          )}
        </nav>
      ) : null}
    </header>
  );
}
