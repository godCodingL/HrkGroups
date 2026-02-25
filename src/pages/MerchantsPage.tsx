import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Battery, Wrench, CreditCard, ChevronRight } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import "./shared-styles.css";

function MerchantsPage() {
  return (
    <>
      <SEOHead
        title="HRK Merchants & Co - Electric Mobility Solutions"
        description="HRK Merchants & Co specializes in high-liquidity EV mobility solutions. Explore our 2W & 3W electric vehicles, financing options, and comprehensive dealer network."
        keywords="Electric Vehicles, EV Sales, Two Wheeler, Three Wheeler, EV Financing, Mobility Solutions"
        ogUrl="https://hrkgroups.com/hrk-merchants-co"
      />

      {/* Main Content */}
      <main className="relative">
        <HeroSection />
        <OverviewSection />
        <ProductsSection />
        <SpecificationsSection />
        <DealerNetworkSection />
        <FinancingSection />
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
          src="/ev_showroom.jpg"
          alt="HRK Merchants & Co - Electric Vehicles Showroom"
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
          Business Unit 02
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
              HRK Merchants
              <br />& Co.
            </motion.h1>

            <motion.p
              className="font-mono text-sm tracking-[0.18em] text-hrk-blue uppercase mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Electric Mobility Solutions
            </motion.p>

            <motion.p
              className="text-hrk-gray text-lg lg:text-xl leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Accelerating the shift to green mobility. High-liquidity EV
              trading with seamless transactions and performance-backed dealer
              support.
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
                Quick Facts
              </h2>
              <div className="space-y-4">
                {[
                  "620+ customers served",
                  "Multi-brand vehicles",
                  "Flexible financing options",
                  "24/7 after-sales support",
                  "Pan-Eastern India presence",
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
            Pioneering Green Mobility
          </motion.h2>

          <div className="space-y-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="font-display font-bold text-xl text-hrk-blue mb-3 uppercase tracking-[0.03em]">
                Our Vision
              </h3>
              <p className="text-hrk-gray text-base lg:text-lg leading-relaxed">
                HRK Merchants & Co. is positioned at the forefront of India's
                electric vehicle revolution. We combine market intelligence,
                dealer relationships, and customer-first service to drive
                adoption of sustainable mobility solutions across Eastern India
                and beyond.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="font-display font-bold text-xl text-hrk-blue mb-3 uppercase tracking-[0.03em]">
                Market Leadership
              </h3>
              <p className="text-hrk-gray text-base lg:text-lg leading-relaxed">
                Through strategic partnerships with leading EV manufacturers, we
                maintain a diverse and competitive vehicle portfolio. Our high
                inventory turnover and efficient logistics ensure customers
                always have access to the latest models and technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="font-display font-bold text-xl text-hrk-blue mb-3 uppercase tracking-[0.03em]">
                Customer Ecosystem
              </h3>
              <p className="text-hrk-gray text-base lg:text-lg leading-relaxed">
                We've built a complete ecosystem around EV ownership—from
                vehicle purchase to after-sales support. Our commitment to
                customer success extends beyond the transaction, ensuring
                long-term satisfaction and loyalty.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Battery,
      title: "2W & 3W EV Sales",
      description:
        "Premium selection of two and three-wheelers with latest battery technology and performance specifications.",
    },
    {
      icon: Wrench,
      title: "Service & Spares",
      description:
        "Comprehensive after-sales service network with genuine spare parts and trained technicians.",
    },
    {
      icon: CreditCard,
      title: "Financing Support",
      description:
        "Flexible financing options tailored to customer needs with competitive rates and simple approval.",
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
          Our Services
        </motion.span>

        <motion.h2
          className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-hrk-white uppercase tracking-[0.06em] leading-[1] mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Comprehensive EV Solutions
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

function SpecificationsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const specs = [
    { label: "Battery Range", value: "120+", unit: "km/charge" },
    { label: "Charging Time", value: "4-6", unit: "hours" },
    { label: "Load Capacity", value: "500", unit: "kg" },
    { label: "Warranty", value: "3", unit: "years" },
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
          Vehicle Specifications
        </motion.span>

        <motion.h2
          className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-hrk-white uppercase tracking-[0.06em] leading-[1] mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Performance Specifications
        </motion.h2>

        <div className="glass-panel p-8 lg:p-12 max-w-2xl">
          <div className="space-y-6">
            {specs.map((spec, i) => (
              <motion.div
                key={spec.label}
                className="flex items-center justify-between pb-6 border-b border-white/5 last:border-b-0 last:pb-0"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              >
                <span className="text-hrk-gray text-base font-semibold">
                  {spec.label}
                </span>
                <div className="text-right">
                  <span className="text-hrk-blue font-display font-bold text-2xl">
                    {spec.value}
                  </span>
                  <span className="text-hrk-gray text-sm ml-2">
                    {spec.unit}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DealerNetworkSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const regions = [
    { name: "Bihar", status: "Active", dealers: "35+" },
    { name: "Jharkhand", status: "Active", dealers: "28+" },
    { name: "West Bengal", status: "Active", dealers: "42+" },
    { name: "Odisha", status: "Expanding", dealers: "18+" },
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
          Dealer Network
        </motion.span>

        <motion.h2
          className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-hrk-white uppercase tracking-[0.06em] leading-[1] mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Pan-Eastern India Coverage
        </motion.h2>

        <div className="grid lg:grid-cols-4 gap-6">
          {regions.map((region, i) => (
            <motion.div
              key={region.name}
              className="glass-panel-sm p-6 lg:p-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
            >
              <h3 className="font-display font-bold text-lg text-hrk-white mb-2">
                {region.name}
              </h3>
              <div className="flex items-center justify-between mb-3">
                <span className="text-hrk-gray text-sm">{region.status}</span>
                <span className="px-2 py-1 rounded-full text-xs font-mono bg-hrk-blue/20 text-hrk-blue">
                  {region.dealers} Dealers
                </span>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-hrk-blue rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "85%" } : {}}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinancingSection() {
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
            Financing Options
          </motion.span>

          <motion.h2
            className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-hrk-white uppercase tracking-[0.06em] leading-[1] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Making Ownership Affordable
          </motion.h2>

          <p className="text-hrk-gray text-base lg:text-lg leading-relaxed max-w-3xl mb-8">
            We understand that vehicle affordability is key to EV adoption. Our
            financing partners offer flexible loan terms, low down payments, and
            competitive interest rates tailored to individual customer profiles.
            We simplify the process so you can focus on choosing your perfect
            vehicle.
          </p>

          <div className="space-y-4 max-w-3xl">
            {[
              "Flexible loan tenures from 24 to 60 months",
              "Competitive interest rates starting from 6.99% p.a.",
              "Minimal documentation and quick approval",
              "Insurance products bundled with financing",
              "Special schemes for government employees and bulk buyers",
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
            Ready to Go Green?
          </motion.h2>

          <motion.p
            className="text-hrk-gray text-lg max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Discover our latest EV models and flexible financing options. Visit
            us or contact our team to schedule a test drive today.
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

export default MerchantsPage;
