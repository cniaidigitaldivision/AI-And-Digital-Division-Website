import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/cni/Navbar";
import { Footer } from "@/components/cni/Contact";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="relative min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 flex flex-col pt-32 pb-20 px-6 max-w-4xl mx-auto w-full space-y-16 md:space-y-24">
        
        {/* 1. HERO SECTION */}
        <section className="text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold leading-tight mb-4">
            CNI AI & Digital Division
          </h1>
          <h2 className="text-2xl md:text-3xl text-[var(--gold-bright)] font-display mb-4">
            Where Intelligence Meets Growth
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            Building smarter brands, scalable systems, and sustainable growth across Pakistan and Saudi Arabia.
          </p>
        </section>

        {/* 2. WHO WE ARE */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-both space-y-6">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-white">Who We Are</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>
              CNI AI & Digital Division is the modern growth and technology arm of Crescent Nova International (SMC-Private) Limited. We are not just a service vendor; we believe that modern businesses need a comprehensive growth engine to truly thrive in today's landscape.
            </p>
            <p>
              We approach every project by combining sharp strategy, cutting-edge technology, and bold creativity to build intelligent solutions. Our goal is to accelerate your growth, streamline your daily operations, and create a measurable impact on your bottom line. 
            </p>
            <p>
              For example, rather than just building a website and handing it over, we design a digital storefront integrated directly with your CRM and automated marketing campaigns—turning a simple web presence into an active revenue generator.
            </p>
          </div>
        </section>

        {/* 3. OUR VISION & MISSION */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-both space-y-6">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-white">Our Vision & Mission</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>
              <strong className="text-white font-medium">Our Vision</strong> is to be the most trusted and innovative business growth and digital transformation partner in Pakistan and Saudi Arabia. This means we are dedicated to helping organizations grow smarter, lead their industries into the future, and achieve lasting, sustainable success.
            </p>
            <p>
              <strong className="text-white font-medium">Our Mission</strong> is to deliver innovative branding, digital growth, automation, custom software, and AI solutions. We focus on driving efficiency, enhancing the customer experience, and creating measurable business value that you can actually see in your results.
            </p>
          </div>
        </section>

        {/* 4. WHAT WE VALUE */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both space-y-6">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-white">What We Value</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>
              Our work is guided by six core values that shape every decision we make. We believe in <strong className="text-white font-medium">Innovation</strong>, constantly embracing new ideas and emerging technologies to build what's next. We pride ourselves on <strong className="text-white font-medium">Reliability</strong>, ensuring we deliver on our promises with consistency and accountability.
            </p>
            <p>
              We lead with <strong className="text-white font-medium">Transparency</strong> through honest communication and deep collaboration with your team. Our focus is always on <strong className="text-white font-medium">Performance</strong>, driving results that create a measurable impact for our clients. We treat every client relationship as a true <strong className="text-white font-medium">Partnership</strong>, growing together in success. Finally, we build for <strong className="text-white font-medium">Scalability</strong>, delivering solutions that grow seamlessly with your business, today and tomorrow.
            </p>
          </div>
        </section>

        {/* 5. WHAT WE DO — OUR SERVICES */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-both space-y-6">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-white">What We Do — Our Services</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>
              We offer nine core service pillars: Branding & Identity, Printing & Corporate Collateral, Website Development & Ecommerce, SEO & AI Visibility, Digital Marketing & Paid Media, Content & Influencers, CRM & WhatsApp Automation, Custom Software & ERPs, and AI Automations & Dashboards.
            </p>
            <p>
              These are not isolated offerings. They work together to form one integrated ecosystem. From defining your brand to automating your back-office, we cover the entire business journey to ensure every piece of your operation is aligned for growth.
            </p>
            <p>
              For example, we might start by building your brand identity, then create a beautiful website to showcase it, drive traffic through SEO and paid ads, capture incoming leads via WhatsApp automation, and finally, help you analyze everything with real-time AI-powered dashboards.
            </p>
          </div>
        </section>

        {/* 6. HOW WE WORK — OUR DELIVERY JOURNEY */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-both space-y-6">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-white">How We Work — Our Delivery Journey</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>
              Businesses work with us on a complete end-to-end journey, taking them from a simple idea to a fully scalable system. This isn't about quick fixes or disjointed tactics; it's a structured, proven approach designed to build a lasting foundation.
            </p>
            <p>
              We begin with deep Survey & Discovery to truly understand your business and market. Next, we develop a data-driven Strategy tailored specifically to your goals, and craft a Brand Identity that stands out. We support this with high-quality Print & Collateral and develop modern Websites & E-commerce platforms. To get you noticed, we optimize your visibility through advanced SEO & AI, build an engaging Content & Social Presence, and run targeted Paid Campaigns & Influencer partnerships. Finally, we automate your customer relationships via CRM & WhatsApp, streamline operations with ERP & automation tools, and deploy real-time Dashboards to keep you informed.
            </p>
            <p>
              This entire process is supported by Continuous Growth and ongoing optimization. We don't just hand over a project and walk away; we stay by your side to ensure your systems evolve and your business continues to scale.
            </p>
          </div>
        </section>

        {/* 7. OUR TECHNOLOGY & TOOLS */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-both space-y-6">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-white">Our Technology & Tools</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>
              We use modern, proven technologies because they simply work better. For frontend and web experiences, we rely on React, Next.js, and clean HTML/CSS. Our robust backends are powered by Node.js, Python, and REST APIs, while our mobile apps are built beautifully using Flutter and React Native. We safely store your data using PostgreSQL, MySQL, and MongoDB. To streamline your operations, we implement automation tools like n8n, Make, Zapier, and the WhatsApp API. We then track it all with analytics platforms like Google Analytics, Looker Studio, and custom dashboards, all hosted securely on reliable cloud infrastructure like Vercel, AWS, and DigitalOcean.
            </p>
            <p>
              We choose these tools because they are reliable, scalable, and trusted by leading companies worldwide. This ensures your solutions are built on a rock-solid foundation that will effortlessly grow with your business over time.
            </p>
          </div>
        </section>

        {/* 8. WHERE WE OPERATE — OUR GLOBAL PRESENCE */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-both space-y-6">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-white">Where We Operate — Our Global Presence</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>
              We serve businesses across Pakistan with a deep understanding of the local market. Our operations are anchored by our Head Office in Wah Cantt, an additional office in the bustling Blue Area of Islamabad, and our Chitral location. From these hubs, we actively work with and support companies across major cities including Islamabad, Lahore, and Karachi.
            </p>
            <p>
              We are also expanding rapidly in Saudi Arabia to serve ambitious businesses across the region. With a dedicated regional office focusing on Riyadh, Jeddah, and Dammam, we bring the same level of technical expertise combined with crucial local insight directly to the Saudi market.
            </p>
          </div>
        </section>

        {/* 9. OUR TRACK RECORD — PORTFOLIO & IMPACT */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-both space-y-6">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-white">Our Track Record — Portfolio & Impact</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>
              We've worked with over 11 active brands across a diverse range of sectors, from real estate and hospitality to retail, technology, and corporate services. Along the way, we have successfully delivered more than 150 campaigns, built 25+ live websites, and deployed over 20 comprehensive business systems.
            </p>
            <p>
              But the numbers that truly matter are the ones that affect our clients' bottom lines. We currently generate a combined monthly reach of over 5 million, driving more than 1 million total engagements every single month. We've captured over 200,000 leads for our clients, managed by more than 100 active automation flows. These numbers represent real growth and tangible business impact.
            </p>
          </div>
        </section>

        {/* 10. SUPPORT & PARTNERSHIP */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-both space-y-6">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-white">Support & Partnership</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>
              We know that not all businesses are the same, so support shouldn't be one-size-fits-all. To ensure you always have the right level of technical and strategic backing, we offer three tailored levels of support.
            </p>
            <p>
              Our Essential Care package is designed for businesses just getting started or those needing reliable, basic support. It includes uptime monitoring, helpdesk support, regular monthly reports, and routine security updates, with a response time of up to 8 business hours. This starts at PKR 35,000 per month in Pakistan, or SAR 1,500 per month in Saudi Arabia.
            </p>
            <p>
              For growing businesses that need a more proactive approach, our Business Care tier includes everything in Essential Care, plus priority support with a 4-hour response time, ongoing performance optimization, and quarterly strategic reviews. This is available at PKR 85,000 per month, or SAR 3,500 per month.
            </p>
            <p>
              Finally, our Enterprise Managed Service is built for established companies needing full-service management. This includes a dedicated account manager, 24/7 priority support, advanced security protocols, high-level strategic advisory, and AI enablement. This tier starts from PKR 225,000 per month, or SAR 9,000 per month. We grow when you grow — that is the core of our partnership philosophy.
            </p>
          </div>
        </section>

        {/* 11. LET'S WORK TOGETHER (CTA Section) */}
        <section className="text-center pt-16 pb-8 border-t border-white/10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          <h3 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6">Let's Work Together</h3>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto">
            <p>
              From building a distinctive brand identity to deploying AI-enabled business operations, we're here to help your business grow with structure, speed, and measurable impact.
            </p>
            <p>
              Ready to transform your business? Let's talk about your goals and how we can help you achieve them.
            </p>
          </div>
          
          <div className="mt-10 mb-12">
            <a 
              href="/#contact" 
              className="inline-flex items-center justify-center px-10 py-5 rounded-md bg-[var(--gold)] text-black font-semibold hover:bg-[var(--gold-bright)] transition-colors shadow-[var(--shadow-glow-gold)] text-lg"
            >
              Get Started Today
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <p>WhatsApp: +92 331 111 9966</p>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[var(--teal-bright)]" />
            <p>Email: hello@crescentnova.com</p>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[var(--teal-bright)]" />
            <p>www.crescentnova.com</p>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
