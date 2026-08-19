import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { NAV_LINKS } from "@/lib/cni-data";
import { MagneticButton } from "./primitives";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-[color-mix(in_oklab,var(--gold)_22%,transparent)] bg-[color-mix(in_oklab,var(--ink)_78%,transparent)] backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="AI & Digital Division Logo" className="h-12 sm:h-14 md:h-16 w-auto object-contain shrink-0" />
          <span className="hidden font-display text-[0.8rem] sm:text-[0.9rem] uppercase tracking-[0.2em] text-[var(--cream)] sm:block shrink-0">
            AI &amp; Digital Solutions
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-[var(--gold-bright)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <MagneticButton as="a" href="#contact" className="hidden px-5 py-3 sm:inline-flex">
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
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
