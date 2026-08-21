import { ServiceData, SERVICES } from "@/lib/cni-data";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ServiceDetailPage({ service }: { service: ServiceData }) {
  const relatedServices = service.relatedServices
    .map(slug => SERVICES.find(s => s.slug === slug))
    .filter(Boolean) as ServiceData[];

  return (
    <div className="flex-1 flex flex-col items-center pt-32 pb-20 px-6">
      <div className="w-full max-w-5xl mx-auto space-y-16">
        
        {/* 1. HERO SECTION */}
        <section className="text-center relative">
          <span className="eyebrow block mb-4">SERVICE DETAILS</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl text-foreground font-semibold leading-tight py-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            {service.subtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`/?service=${service.slug}#contact`} 
              className="px-8 py-4 rounded-md bg-[var(--gold)] text-black font-semibold hover:bg-[var(--gold-bright)] transition-colors w-full sm:w-auto text-center shadow-[var(--shadow-glow-gold)]"
            >
              Get a Quote
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
               {service.items.map((feature, idx) => (
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

        {/* 3. HOW WE WORK (if any) */}
        {service.processSteps && service.processSteps.length > 0 && (
          <section className="rounded-[32px] border border-white/10 bg-white/[0.02] p-8 md:p-12 backdrop-blur-sm">
            <h2 className="font-display text-3xl font-semibold text-white mb-8 text-center">How We Work</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative">
              <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent" />
              {service.processSteps.map((step, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--teal-deep)] border border-[var(--gold)]/30 flex items-center justify-center font-display text-[var(--gold-bright)] font-semibold mb-4 shadow-[inset_0_0_20px_rgba(201,162,39,0.1)]">
                    {idx + 1}
                  </div>
                  <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 4. WHO THIS IS FOR */}
          {service.idealClientProfile && service.idealClientProfile.length > 0 && (
            <section className="rounded-[32px] border border-white/10 bg-white/[0.02] p-8 md:p-10 backdrop-blur-sm md:col-span-2">
              <h3 className="font-display text-2xl font-semibold text-white mb-6">Who This Is For</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {service.idealClientProfile.map((profile, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--teal-bright)] mt-2 shrink-0" />
                    <span className="text-muted-foreground">{profile}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* 5. RELATED SERVICES */}
        {relatedServices.length > 0 && (
          <section className="flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-r from-transparent via-[var(--teal-deep)]/20 to-transparent border-y border-[var(--teal-deep)]/40 text-center">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[var(--gold-bright)] mb-6">Commonly Paired With</h4>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
              {relatedServices.map((rs, idx) => (
                <Link 
                  key={idx}
                  to={`/services/${rs.slug}`}
                  className="flex flex-col items-center p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors w-full sm:w-1/3 min-h-[140px] justify-center group"
                >
                  <span className="text-white text-lg font-medium mb-2 group-hover:text-[var(--gold-bright)] transition-colors">{rs.title}</span>
                  <span className="text-sm font-semibold text-[var(--teal-bright)] group-hover:text-white transition-colors flex items-center gap-1">
                    View Service <ArrowRight className="size-3" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 6. FINAL CTA */}
        <section className="text-center pt-10 pb-8">
          <h2 className="font-display text-4xl font-semibold text-white mb-6">Ready to get started?</h2>
          <a 
            href={`/?service=${service.slug}#contact`} 
            className="inline-flex items-center justify-center px-10 py-5 rounded-md bg-[var(--gold)] text-black font-semibold hover:bg-[var(--gold-bright)] transition-colors shadow-[var(--shadow-glow-gold)] text-lg"
          >
            Let's Talk About {service.title}
          </a>
          <p className="mt-6 text-sm text-muted-foreground">
            Have questions? <a href="/#contact" className="text-[var(--gold-bright)] hover:underline">Reach out to us</a>.
          </p>
        </section>

      </div>
    </div>
  );
}
