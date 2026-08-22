import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/cni/Navbar";
import { Footer } from "@/components/cni/Contact";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { MagneticButton } from "@/components/cni/primitives";
import { cn } from "@/lib/utils";
import { MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AnimatedCounter({ value, duration = 2 }: { value: number, duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalSteps = Math.min(end, 100);
      const stepTime = Math.abs(Math.floor((duration * 1000) / totalSteps));
      const stepValue = end / totalSteps;

      const timer = setInterval(() => {
        start += 1;
        setCount(Math.min(Math.floor(start * stepValue), end));
        if (start >= totalSteps) {
          setCount(end);
          clearInterval(timer);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

function RevealText({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.05, delayChildren: delay } },
        hidden: {},
      }}
      className="inline-block"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mb-8 relative inline-block"
    >
      <h3 className="font-display text-3xl md:text-4xl font-semibold text-white">
        {children}
      </h3>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
        className="h-1 bg-[var(--gold)] mt-2 w-full origin-left shadow-[var(--shadow-glow-gold)]"
      />
    </motion.div>
  );
}

function AboutPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const yBg = useTransform(heroProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(heroProgress, [0, 1], [1, 0]);

  return (
    <div className="relative min-h-screen bg-background flex flex-col font-sans overflow-hidden">
      <Navbar />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--gold)] origin-left z-[60] shadow-[0_0_10px_var(--gold)]"
        style={{ scaleX }}
      />
      
      <main className="flex-1 flex flex-col w-full">
        
        {/* 1. HERO SECTION */}
        <section 
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6"
        >
          {/* Animated Background Mesh / Particles */}
          <motion.div style={{ y: yBg, opacity: opacityHero }} className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-[var(--gold)]/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-[var(--teal)]/10 rounded-full blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }} />
            
            {/* Floating Nodes */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-[var(--gold-bright)]/40 shadow-[0_0_15px_var(--gold)]"
                initial={{ 
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000) 
                }}
                animate={{
                  y: [null, Math.random() * -100 - 50],
                  x: [null, Math.random() * 100 - 50],
                  opacity: [0.2, 0.8, 0.2]
                }}
                transition={{
                  duration: 10 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "reverse"
                }}
              />
            ))}
          </motion.div>

          <div className="max-w-5xl mx-auto w-full text-center relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground font-semibold leading-tight mb-6 tracking-tight"
            >
              CNI AI & Digital Division
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative inline-block mb-8"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[var(--gold)] via-[var(--gold-bright)] to-[var(--gold)] bg-[length:200%_auto] text-transparent bg-clip-text animate-gradient font-display font-medium">
                Where Intelligence Meets Growth
              </h2>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed"
            >
              Building smarter brands, scalable systems, and sustainable growth across Pakistan and Saudi Arabia.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[0.7rem] uppercase tracking-widest text-muted-foreground">Scroll to explore</span>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-[1px] h-12 bg-gradient-to-b from-[var(--gold)] to-transparent"
            />
          </motion.div>
        </section>

        <div className="max-w-5xl mx-auto w-full px-6 space-y-32 md:space-y-48 pb-32">
          
          {/* 2. WHO WE ARE */}
          <section className="relative">
            <div className="absolute -left-[10%] top-0 text-[15rem] font-display font-bold text-white/5 pointer-events-none select-none z-0">01</div>
            <div className="grid md:grid-cols-12 gap-12 items-start relative z-10">
              <div className="md:col-span-5 pt-4">
                <SectionHeading>Who We Are</SectionHeading>
              </div>
              <div className="md:col-span-7 space-y-6 text-muted-foreground leading-relaxed text-lg md:text-xl font-light">
                <p><RevealText text="CNI AI & Digital Division is the modern growth and technology arm of Crescent Nova International (SMC-Private) Limited. We are not just a service vendor; we believe that modern businesses need a comprehensive growth engine to truly thrive in today's landscape." /></p>
                <p><RevealText text="We approach every project by combining sharp strategy, cutting-edge technology, and bold creativity to build intelligent solutions. Our goal is to accelerate your growth, streamline your daily operations, and create a measurable impact on your bottom line." delay={0.2} /></p>
                <p><RevealText text="For example, rather than just building a website and handing it over, we design a digital storefront integrated directly with your CRM and automated marketing campaigns—turning a simple web presence into an active revenue generator." delay={0.4} /></p>
              </div>
            </div>
          </section>

          {/* 3. OUR VISION & MISSION */}
          <section className="relative">
             <div className="absolute -right-[10%] top-0 text-[15rem] font-display font-bold text-white/5 pointer-events-none select-none z-0">02</div>
             <div className="relative z-10 flex flex-col items-center mb-16">
               <SectionHeading>Our Vision & Mission</SectionHeading>
             </div>
             
             <div className="grid md:grid-cols-2 gap-8 relative z-10">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="glass-panel p-10 rounded-2xl border border-[var(--gold)]/20 hover:border-[var(--gold)]/50 transition-colors group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <h4 className="text-2xl text-white font-display font-medium mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center text-[var(--gold)]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    </span>
                    Our Vision
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-lg relative z-10">
                    To be the most trusted and innovative business growth and digital transformation partner in Pakistan and Saudi Arabia. This means we are dedicated to helping organizations grow smarter, lead their industries into the future, and achieve lasting, sustainable success.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="glass-panel p-10 rounded-2xl border border-[var(--gold)]/20 hover:border-[var(--gold)]/50 transition-colors group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-bl from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <h4 className="text-2xl text-white font-display font-medium mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center text-[var(--gold)]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </span>
                    Our Mission
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-lg relative z-10">
                    To deliver innovative branding, digital growth, automation, custom software, and AI solutions. We focus on driving efficiency, enhancing the customer experience, and creating measurable business value that you can actually see in your results.
                  </p>
                </motion.div>
             </div>
          </section>

          {/* 4. WHAT WE VALUE */}
          <section className="relative">
            <div className="absolute left-[30%] top-[-5%] text-[15rem] font-display font-bold text-white/5 pointer-events-none select-none z-0">03</div>
            <div className="relative z-10">
              <SectionHeading>What We Value</SectionHeading>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg md:text-xl font-light mb-12 max-w-3xl">
                <p>Our work is guided by six core values that shape every decision we make.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
                {[
                  { title: "Innovation", desc: "Constantly embracing new ideas and emerging technologies to build what's next." },
                  { title: "Reliability", desc: "Ensuring we deliver on our promises with consistency and accountability." },
                  { title: "Transparency", desc: "Honest communication and deep collaboration with your team." },
                  { title: "Performance", desc: "Driving results that create a measurable impact for our clients." },
                  { title: "Partnership", desc: "Treating every client relationship as a true partnership, growing together." },
                  { title: "Scalability", desc: "Delivering solutions that grow seamlessly with your business, today and tomorrow." }
                ].map((value, idx) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
                    className="glass-panel p-8 rounded-xl border border-white/5 hover:border-[var(--gold)]/40 hover:shadow-[0_0_30px_rgba(217,169,98,0.15)] transition-all duration-300"
                  >
                    <h5 className="text-white text-xl font-display mb-3 flex items-center justify-between">
                      {value.title}
                      <span className="text-[var(--gold)]/30 text-sm font-mono">0{idx + 1}</span>
                    </h5>
                    <p className="text-muted-foreground/80 text-base leading-relaxed">{value.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Divider */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-full h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent"
          />

          {/* 5. WHAT WE DO — OUR SERVICES */}
          <section className="relative">
            <div className="absolute right-[20%] top-[-10%] text-[15rem] font-display font-bold text-white/5 pointer-events-none select-none z-0">04</div>
            <div className="relative z-10 text-center mb-16">
              <SectionHeading>What We Do — Our Services</SectionHeading>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>We offer nine core service pillars: Branding & Identity, Printing & Corporate Collateral, Website Development & Ecommerce, SEO & AI Visibility, Digital Marketing & Paid Media, Content & Influencers, CRM & WhatsApp Automation, Custom Software & ERPs, and AI Automations & Dashboards.</p>
                <p>These are not isolated offerings. They work together to form one integrated ecosystem. From defining your brand to automating your back-office, we cover the entire business journey to ensure every piece of your operation is aligned for growth.</p>
                <p>For example, we might start by building your brand identity, then create a beautiful website to showcase it, drive traffic through SEO and paid ads, capture incoming leads via WhatsApp automation, and finally, help you analyze everything with real-time AI-powered dashboards.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["Branding", "Websites", "SEO & AI", "Marketing", "CRM & WA", "Custom Software"].map((item, i) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="p-4 border border-[var(--gold)]/20 rounded-lg text-center bg-white/5 hover:bg-[var(--gold)]/10 text-white font-medium transition-colors cursor-default"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 6. HOW WE WORK — OUR DELIVERY JOURNEY */}
          <section className="relative">
            <SectionHeading>Our Delivery Journey</SectionHeading>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg max-w-3xl mb-12">
              <p>Businesses work with us on a complete end-to-end journey, taking them from a simple idea to a fully scalable system. This isn't about quick fixes or disjointed tactics; it's a structured, proven approach designed to build a lasting foundation.</p>
            </div>
            
            <div className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
              <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-white/10 ml-3" />
              
              {[
                { title: "Survey & Discovery", desc: "Deep understanding of your business and market." },
                { title: "Strategy & Branding", desc: "Data-driven strategy and stand-out brand identity." },
                { title: "Build & Develop", desc: "Modern websites, e-commerce, and quality collateral." },
                { title: "Visibility & Growth", desc: "SEO, Content, Paid Campaigns & Influencer partnerships." },
                { title: "Automate & Scale", desc: "CRM, WhatsApp, ERP, and real-time dashboards." }
              ].map((step, i) => (
                <motion.div 
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row gap-8 mb-12 md:mb-24 last:mb-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="absolute left-[-25px] md:left-1/2 w-4 h-4 rounded-full bg-[var(--gold)] md:-translate-x-1/2 mt-1.5 shadow-[0_0_10px_var(--gold)] z-10" />
                  
                  <div className="md:w-1/2" />
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <h5 className="text-xl text-white font-display font-medium mb-2">{step.title}</h5>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 7. OUR TECHNOLOGY & TOOLS */}
          <section className="relative text-center">
            <SectionHeading>Our Technology & Tools</SectionHeading>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto mb-12">
              We use modern, proven technologies because they simply work better. From React and Node.js to AWS and AI automation tools, we build on a rock-solid foundation that will effortlessly grow with your business.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {["React", "Next.js", "Node.js", "Python", "Flutter", "PostgreSQL", "MongoDB", "n8n", "Make", "AWS", "Vercel"].map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -5, backgroundColor: "rgba(217,169,98,0.15)", borderColor: "rgba(217,169,98,0.5)" }}
                  className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium tracking-wide transition-colors cursor-default shadow-sm hover:shadow-[var(--shadow-glow-gold)]"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </section>

          {/* 8. WHERE WE OPERATE */}
          <section className="relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading>Global Presence</SectionHeading>
                <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                  <p>We serve businesses across Pakistan with a deep understanding of the local market. Our operations are anchored by our Head Office in Wah Cantt, an additional office in the bustling Blue Area of Islamabad, and our Chitral location. From these hubs, we actively work with and support companies across major cities including Islamabad, Lahore, and Karachi.</p>
                  <p>We are also expanding rapidly in Saudi Arabia to serve ambitious businesses across the region. With a dedicated regional office focusing on Riyadh, Jeddah, and Dammam, we bring the same level of technical expertise combined with crucial local insight directly to the Saudi market.</p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl border border-white/10 bg-[var(--ink)] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--gold)_0%,_transparent_70%)]" />
                
                <div className="relative z-10 flex flex-col gap-8 w-full max-w-xs">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10"
                  >
                    <div className="relative">
                      <MapPin className="text-[var(--gold)] relative z-10" />
                      <div className="absolute inset-0 bg-[var(--gold)] blur-md opacity-50 animate-pulse" />
                    </div>
                    <div>
                      <h6 className="text-white font-medium">Pakistan</h6>
                      <p className="text-sm text-muted-foreground">Islamabad, Lahore, Karachi</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-4 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10"
                  >
                    <div className="relative">
                      <MapPin className="text-[var(--gold-bright)] relative z-10" />
                      <div className="absolute inset-0 bg-[var(--gold-bright)] blur-md opacity-50 animate-pulse" />
                    </div>
                    <div>
                      <h6 className="text-white font-medium">Saudi Arabia</h6>
                      <p className="text-sm text-muted-foreground">Riyadh, Jeddah, Dammam</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* 9. OUR TRACK RECORD */}
          <section className="relative py-12">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--gold)]/5 via-transparent to-[var(--gold)]/5 rounded-3xl" />
            <div className="relative z-10 text-center mb-12">
              <SectionHeading>Our Track Record</SectionHeading>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                The numbers that truly matter are the ones that affect our clients' bottom lines. These represent real growth and tangible business impact.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10 px-6">
              {[
                { label: "Active Brands", value: 11, suffix: "+" },
                { label: "Campaigns", value: 150, suffix: "+" },
                { label: "Websites Built", value: 25, suffix: "+" },
                { label: "Leads Captured", value: 200000, suffix: "+" }
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 flex items-center justify-center">
                    <AnimatedCounter value={stat.value} />
                    <span className="text-[var(--gold)] ml-1">{stat.suffix}</span>
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 10. SUPPORT & PARTNERSHIP */}
          <section className="relative">
            <div className="text-center mb-16">
              <SectionHeading>Support & Partnership</SectionHeading>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We know that not all businesses are the same, so support shouldn't be one-size-fits-all. We offer three tailored levels of support.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 items-stretch">
              {[
                { title: "Essential Care", desc: "For businesses just getting started.", price: "PKR 35k / SAR 1.5k" },
                { title: "Business Care", desc: "Proactive approach for growing businesses.", price: "PKR 85k / SAR 3.5k", highlight: true },
                { title: "Enterprise", desc: "Full-service management for established companies.", price: "PKR 225k / SAR 9k" }
              ].map((tier, i) => (
                <motion.div
                  key={tier.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className={`glass-panel p-8 rounded-2xl border flex flex-col transition-all duration-300 ${tier.highlight ? 'border-[var(--gold)] shadow-[0_0_30px_rgba(217,169,98,0.15)] relative scale-105 z-10' : 'border-white/10 hover:border-white/30'}`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--gold)] text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      Recommended
                    </div>
                  )}
                  <h4 className="text-2xl text-white font-display mb-2">{tier.title}</h4>
                  <p className="text-muted-foreground mb-6 flex-1">{tier.desc}</p>
                  <div className="pt-6 border-t border-white/10 text-sm font-mono text-[var(--gold-bright)]">
                    Starts at {tier.price}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* 11. LET'S WORK TOGETHER (CTA Section) */}
        <section className="relative overflow-hidden border-t border-white/10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--gold)]/10" />
          <motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: "100%" }}
             viewport={{ once: true }}
             transition={{ duration: 1.5, ease: "easeInOut" }}
             className="absolute top-0 left-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent"
          />

          <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6"
            >
              Let's Work Together
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground leading-relaxed text-xl max-w-2xl mx-auto mb-12"
            >
              From building a distinctive brand identity to deploying AI-enabled business operations, we're here to help your business grow with structure, speed, and measurable impact.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mb-16"
            >
              <MagneticButton as="a" href="/#contact" className="px-12 py-6 text-lg group">
                <span className="flex items-center gap-3">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </MagneticButton>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground/80 font-mono"
            >
              <a href="#" className="hover:text-[var(--gold)] transition-colors">WhatsApp: +92 331 111 9966</a>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[var(--gold)]/50" />
              <a href="mailto:hello@crescentnova.com" className="hover:text-[var(--gold)] transition-colors">hello@crescentnova.com</a>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[var(--gold)]/50" />
              <a href="https://www.crescentnova.com" className="hover:text-[var(--gold)] transition-colors">www.crescentnova.com</a>
            </motion.div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
