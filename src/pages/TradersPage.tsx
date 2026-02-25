import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Briefcase, TrendingUp, Globe, ChevronRight } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import "./shared-styles.css";

function TradersPage() {
  return (
    <>
      <SEOHead
        title="HRK Traders - B2B Trading & Commodity Solutions"
        description="HRK Traders specializes in strategic B2B trading, commodities sourcing, and wholesale distribution. Connect with our experienced trading network."
        keywords="B2B Trading, Commodities Trading, Wholesale Distribution, Trade Services, Commodity Export"
        ogUrl="https://hrkgroups.com/hrk-traders"
      />

      {/* Main Content */}
      <main className="relative">
        <HeroSection />
        <OverviewSection />
        <ServicesSection />
        <CommoditiesSection />
        <MarketReachSection />
        <PartnershipsSection />
        <ContactSection />
      </main>
    </>
  );
}

function HeroSection() {
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section className="section-pinned relative flex items-center justify-center">
      <motion.div
        ref={imageRef}
        className="absolute inset-0 z-0"
        style={{
          scale: imageScale,
          opacity: imageOpacity,
        }}
      >
        <img
          src="/enterprises_warehouse.jpg"
          alt="HRK Traders - B2B Trading Operations"
          className="w-full h-full object-cover hero-image"
        />
        <div className="vignette-overlay" />
        <div className="absolute inset-0 hero-overlay-gradient" />
      </motion.div>

      <motion.div
        className="absolute top-8 left-8 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <span className="font-mono text-xs tracking-[0.3em] text-hrk-gray uppercase">
          Business Unit 03
        </span>
      </motion.div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="glass-panel p-8 lg:p-12"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.h1
              className="font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-hrk-white uppercase tracking-[0.06em] leading-[0.95] mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              HRK
              <br />
              Traders
            </motion.h1>

            <motion.p
              className="font-mono text-sm tracking-[0.18em] text-hrk-blue uppercase mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Strategic B2B Trading Solutions
            </motion.p>

            <motion.p
              className="text-hrk-gray text-lg lg:text-xl leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Connecting markets with strategic trading expertise. Building
              lasting B2B relationships through reliability and market insight.
            </motion.p>
          </motion.div>

          <motion.div
            className="glass-panel-sm p-6 lg:p-8 ml-auto max-w-sm space-y-6"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div>
              <h2 className="font-display font-bold text-lg tracking-[0.12em] text-hrk-white uppercase mb-6">
                Trading Expertise
              </h2>
              <div className="space-y-4">
                {[
                  "15+ years trading experience",
                  "Multiple commodity categories",
                  "Regional and national reach",
                  "Strong logistical network",
                  "Transparent pricing models",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-hrk-blue" />
                    <span className="text-hrk-gray text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <span className="font-mono text-xs tracking-[0.18em] text-hrk-gray/60 uppercase">
          Scroll to Learn More
        </span>
      </motion.div>
    </section>
  );
}

function OverviewSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="section-pinned relative py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-hrk-black via-hrk-navy/20 to-hrk-black" />
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 lg:px-12">
        <motion.div
          className="glass-panel p-8 lg:p-16"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className="font-mono text-xs tracking-[0.18em] text-hrk-blue uppercase mb-4 block"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About This Division
          </motion.span>

          <motion.h2
            className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-hrk-white uppercase tracking-[0.06em] leading-[1] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Strategic Market Connections
          </motion.h2>

          <div className="space-y-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="font-display font-bold text-xl text-hrk-blue mb-3 uppercase tracking-[0.03em]">
                Core Business Model
              </h3>
              <p className="text-hrk-gray text-base lg:text-lg leading-relaxed">
                HRK Traders operates as a strategic intermediary in the B2B
                trading space, leveraging deep market knowledge and logistics
                expertise to connect suppliers with buyers. We specialize in
                identifying market opportunities, negotiating favorable terms,
                and executing transactions with complete transparency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="font-display font-bold text-xl text-hrk-blue mb-3 uppercase tracking-[0.03em]">
                Market Expertise
              </h3>
              <p className="text-hrk-gray text-base lg:text-lg leading-relaxed">
                With over 15 years of experience in commodity trading, our team
                possesses deep industry knowledge and established relationships
                with key market players. We stay ahead of market trends to
                ensure our partners always get competitive pricing and reliable
                supply chains.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="font-display font-bold text-xl text-hrk-blue mb-3 uppercase tracking-[0.03em]">
                Quality Assurance
              </h3>
              <p className="text-hrk-gray text-base lg:text-lg leading-relaxed">
                Every commodity passing through our trading operations undergoes
                rigorous quality checks. We maintain strict standards to ensure
                our clients always receive materials that meet their exact
                specifications and quality requirements.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Briefcase,
      title: "Commodity Trading",
      description:
        "Strategic sourcing and trading of industrial commodities with market-competitive pricing and reliable delivery.",
    },
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description:
        "Real-time market intelligence and trend analysis to support informed trading decisions and strategy.",
    },
    {
      icon: Globe,
      title: "Logistics & Distribution",
      description:
        "End-to-end logistics solutions ensuring timely delivery and supply chain optimization for all shipments.",
    },
  ];

  return (
    <section ref={sectionRef} className="section-pinned relative py-20">
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 lg:px-12">
        <motion.span
          className="font-mono text-xs tracking-[0.18em] text-hrk-blue uppercase mb-4 block"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Trading Services
        </motion.span>

        <motion.h2
          className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-hrk-white uppercase tracking-[0.06em] leading-[1] mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Comprehensive Trading Solutions
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="glass-panel-sm p-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(46, 107, 255, 0.1)",
              }}
            >
              <service.icon className="w-8 h-8 text-hrk-blue mb-4" />
              <h3 className="font-display font-bold text-lg tracking-[0.12em] text-hrk-white uppercase mb-3">
                {service.title}
              </h3>
              <p className="text-hrk-gray text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommoditiesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const categories = [
    { name: "Recycled Materials", items: "Metal scraps, plastics, composites" },
    { name: "Industrial Inputs", items: "Chemicals, minerals, raw materials" },
    { name: "Logistics Support", items: "Transport, storage, distribution" },
    {
      name: "Custom Solutions",
      items: "Tailored sourcing and trading services",
    },
  ];

  return (
    <section ref={sectionRef} className="section-pinned relative py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-hrk-black via-hrk-navy/20 to-hrk-black" />
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 lg:px-12">
        <motion.span
          className="font-mono text-xs tracking-[0.18em] text-hrk-blue uppercase mb-4 block"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Commodity Categories
        </motion.span>

        <motion.h2
          className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-hrk-white uppercase tracking-[0.06em] leading-[1] mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Diverse Product Portfolio
        </motion.h2>

        <div className="grid lg:grid-cols-4 gap-6">
          {categories.map((category, i) => (
            <motion.div
              key={category.name}
              className="glass-panel-sm p-6 lg:p-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
            >
              <h3 className="font-display font-bold text-lg tracking-[0.12em] text-hrk-white uppercase mb-3">
                {category.name}
              </h3>
              <p className="text-hrk-gray text-sm leading-relaxed">
                {category.items}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarketReachSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const metrics = [
    { value: "50+", label: "Active Suppliers" },
    { value: "200+", label: "Corporate Buyers" },
    { value: "15+", label: "States Served" },
    { value: "$50M+", label: "Annual Trade Volume" },
  ];

  return (
    <section ref={sectionRef} className="section-pinned relative py-20">
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 lg:px-12">
        <motion.span
          className="font-mono text-xs tracking-[0.18em] text-hrk-blue uppercase mb-4 block"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Market Reach
        </motion.span>

        <motion.h2
          className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-hrk-white uppercase tracking-[0.06em] leading-[1] mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Scale & Growth
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
            >
              <div className="font-display font-black text-3xl lg:text-4xl text-hrk-blue mb-2">
                {metric.value}
              </div>
              <div className="text-hrk-gray text-sm">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnershipsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="section-pinned relative py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-hrk-black via-hrk-navy/20 to-hrk-black" />
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 lg:px-12">
        <motion.div
          className="glass-panel p-8 lg:p-16"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className="font-mono text-xs tracking-[0.18em] text-hrk-blue uppercase mb-4 block"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Partnership Model
          </motion.span>

          <motion.h2
            className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-hrk-white uppercase tracking-[0.06em] leading-[1] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Why Partner With HRK Traders
          </motion.h2>

          <p className="text-hrk-gray text-base lg:text-lg leading-relaxed max-w-3xl mb-8">
            Long-term partnerships built on trust, reliability, and mutual
            growth. We invest time to understand each partner's unique needs and
            deliver customized solutions that drive business success. Our
            transparent pricing, reliable delivery, and dedicated support make
            us a trusted trading partner across industries.
          </p>

          <div className="space-y-4 max-w-3xl">
            {[
              "Competitive market pricing with volume discounts",
              "Flexible payment terms tailored to business cash flow",
              "Real-time inventory tracking and logistics updates",
              "Dedicated account management and priority support",
              "Quality certifications and compliance documentation",
            ].map((point, i) => (
              <motion.div
                key={point}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.08 }}
              >
                <ChevronRight className="w-5 h-5 text-hrk-blue flex-shrink-0 mt-1" />
                <span className="text-hrk-gray text-base leading-relaxed">
                  {point}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center py-20"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-hrk-black via-hrk-navy/30 to-hrk-black" />
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 lg:px-12">
        <motion.div
          className="glass-panel p-8 lg:p-16 text-center"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h2
            className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-hrk-white uppercase tracking-[0.06em] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Let's Talk Trade
          </motion.h2>

          <motion.p
            className="text-hrk-gray text-lg max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Whether you're a supplier looking for new market opportunities or a
            buyer seeking reliable partners, we're here to connect you with
            sustainable trading solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="tel:+919801900817"
              className="px-8 py-4 rounded-xl bg-hrk-blue text-hrk-black font-mono font-bold hover:bg-hrk-blue/90 transition-colors"
            >
              +91 9801900817
            </a>
            <a
              href="mailto:hrkgiri1714@gmail.com"
              className="px-8 py-4 rounded-xl border border-hrk-blue text-hrk-blue font-mono font-bold hover:bg-hrk-blue/10 transition-colors"
            >
              hrkgiri1714@gmail.com
            </a>
          </motion.div>
        </motion.div>

        <motion.footer
          className="mt-20 pt-8 border-t border-white/5 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <p className="text-hrk-gray text-sm">
            © 2026 HRK Groups. Building trust. Powering tomorrow.
          </p>
        </motion.footer>
      </div>
    </section>
  );
}

export default TradersPage;
