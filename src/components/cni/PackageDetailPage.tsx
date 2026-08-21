import { PackageData, PACKAGES } from "@/lib/cni-data";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, Check } from "lucide-react";
import { cn } from "@/lib/utils";

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

export function PackageDetailPage({ pkg }: { pkg: PackageData }) {

  const currentIndex = PACKAGES.findIndex(p => p.name === pkg.name);
  const nextPackage = currentIndex >= 0 && currentIndex < PACKAGES.length - 1 ? PACKAGES[currentIndex + 1] : null;

  return (
    <div className="flex-1 flex flex-col items-center pt-32 pb-20 px-6">
      <div className="w-full max-w-5xl mx-auto space-y-16">
        
        {/* 1. HERO SECTION */}
        <section className="text-center relative">
          <span className="eyebrow block mb-4">{pkg.subtitle}</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl text-foreground font-semibold leading-tight py-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {pkg.name}
          </h1>
          <div className="mt-6 font-display text-4xl md:text-5xl text-[var(--gold-bright)] flex items-baseline justify-center gap-2">
            {pkg.price}
            <span className="text-lg md:text-xl text-muted-foreground font-sans tracking-normal">{pkg.cadence}</span>
          </div>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            {pkg.description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`/?package=${slugify(pkg.name)}#contact`} 
              className="px-8 py-4 rounded-md bg-[var(--gold)] text-black font-semibold hover:bg-[var(--gold-bright)] transition-colors w-full sm:w-auto text-center shadow-[var(--shadow-glow-gold)]"
            >
              Get Started with {pkg.name}
            </a>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 px-6 py-4 rounded-md text-sm text-white border border-white/20 hover:bg-white/5 transition-colors w-full sm:w-auto justify-center"
            >
              <ChevronLeft className="size-4" />
              Back to Home
            </Link>
          </div>
        </section>

        {/* 2. WHAT'S INCLUDED */}
        <section className="rounded-[32px] border border-[#C9A227]/40 bg-[#061e19] p-8 md:p-12 shadow-[inset_0_0_80px_rgba(201,162,39,0.06)] relative overflow-hidden">
           <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--teal-bright)]/10 via-transparent to-transparent opacity-50" />
           <div className="relative z-10">
             <h2 className="font-display text-3xl font-semibold text-white mb-8">What's Included</h2>
             <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {pkg.features.map((feature, idx) => (
                 <li key={idx} className="flex items-start gap-4">
                   <div className="rounded-full bg-[var(--gold)]/20 p-2 shrink-0">
                     <Check className="size-5 text-[var(--gold-bright)]" />
                   </div>
                   <div>
                     <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                     <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                   </div>
                 </li>
               ))}
             </ul>
           </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 3. WHO THIS IS FOR */}
          <section className="rounded-[32px] border border-white/10 bg-white/[0.02] p-8 md:p-10 backdrop-blur-sm">
            <h3 className="font-display text-2xl font-semibold text-white mb-6">Who This Is For</h3>
            <ul className="space-y-4">
              {pkg.idealClientProfile.map((profile, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--teal-bright)] mt-2 shrink-0" />
                  <span className="text-muted-foreground">{profile}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 4. WHAT YOU CAN EXPECT */}
          <section className="rounded-[32px] border border-white/10 bg-white/[0.02] p-8 md:p-10 backdrop-blur-sm">
            <h3 className="font-display text-2xl font-semibold text-white mb-6">What You Can Expect</h3>
            <ul className="space-y-4">
              {pkg.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] mt-2 shrink-0" />
                  <span className="text-muted-foreground">{outcome}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* 5. HOW IT COMPARES */}
        <section className="flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-r from-transparent via-[var(--teal-deep)]/20 to-transparent border-y border-[var(--teal-deep)]/40 text-center">
          {nextPackage ? (
            <>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-[var(--gold-bright)] mb-4">Looking for more?</h4>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <span className="text-white text-lg font-medium">{nextPackage.name}</span>
                <span className="text-muted-foreground">{nextPackage.price}</span>
                <Link 
                  to={`/packages/${slugify(nextPackage.name)}`}
                  className="text-sm font-semibold text-[var(--teal-bright)] hover:text-white transition-colors underline underline-offset-4"
                >
                  View Next Tier
                </Link>
              </div>
            </>
          ) : (
            <>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-[var(--gold-bright)] mb-4">Need something custom?</h4>
              <p className="text-muted-foreground mb-4">We can build a tailored ecosystem for your specific enterprise needs.</p>
              <a 
                href="/#contact"
                className="text-sm font-semibold text-[var(--teal-bright)] hover:text-white transition-colors underline underline-offset-4"
              >
                Contact Our Enterprise Team
              </a>
            </>
          )}
        </section>



        {/* 7. FINAL CTA */}
        <section className="text-center pt-10 pb-8">
          <h2 className="font-display text-4xl font-semibold text-white mb-6">Ready to accelerate your growth?</h2>
          <a 
            href={`/?package=${slugify(pkg.name)}#contact`} 
            className="inline-flex items-center justify-center px-10 py-5 rounded-md bg-[var(--gold)] text-black font-semibold hover:bg-[var(--gold-bright)] transition-colors shadow-[var(--shadow-glow-gold)] text-lg"
          >
            Get Started with {pkg.name}
          </a>
          <p className="mt-6 text-sm text-muted-foreground">
            Have questions? <a href="/#contact" className="text-[var(--gold-bright)] hover:underline">Let's talk</a>.
          </p>
        </section>

      </div>
    </div>
  );
}
