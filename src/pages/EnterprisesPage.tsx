import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Scale, FileCheck, Truck, ChevronRight } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import "./shared-styles.css";

function EnterprisesPage() {
  return (
    <>
      <SEOHead
        title="HRK Enterprises - Industrial Recycling Solutions"
        description="HRK Enterprises specializes in sustainable industrial waste recycling and material recovery. Learn about our verified weighing, transparent sourcing, and compliance-first logistics."
        keywords="Industrial Recycling, Waste Management, Material Recovery, Sustainable Recycling, Industrial Waste"
        ogUrl="https://hrkgroups.com/hrk-enterprises"
      />

      {/* Main Content */}
      <main className="relative">
        <HeroSection />
        <OverviewSection />
        <ServicesSection />
        <ProcessSection />
        <ImpactSection />
        <ValuesSection />
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
          alt="HRK Enterprises - Industrial Recycling Facility"
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
          Business Unit 01
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
              Enterprises
            </motion.h1>

            <motion.p
              className="font-mono text-sm tracking-[0.18em] text-hrk-blue uppercase mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Industrial Recycling & Material Recovery
            </motion.p>

            <motion.p
              className="text-hrk-gray text-lg lg:text-xl leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Transforming industrial waste into valuable resources. Sustainable
              recycling solutions with verified quality and transparent
              sourcing.
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
                Key Metrics
              </h2>
              <div className="space-y-4">
                {[
                  "8,500+ tons recycled annually",
                  "99.5% uptime in operations",
                  "ISO certified processes",
                  "24-hour turnaround on documentation",
                  "Zero environmental incidents",
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
            About The Division
          </motion.span>

          <motion.h2
            className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-hrk-white uppercase tracking-[0.06em] leading-[1] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Leading Industrial Recycling Solutions
          </motion.h2>

          <div className="space-y-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="font-display font-bold text-xl text-hrk-blue mb-3 uppercase tracking-[0.03em]">
                Our Mission
              </h3>
              <p className="text-hrk-gray text-base lg:text-lg leading-relaxed">
                HRK Enterprises is committed to revolutionizing waste management
                in India by providing comprehensive, transparent, and
                environmentally responsible recycling solutions. We process
                industrial waste with precision and integrity, ensuring maximum
                material recovery while maintaining the highest environmental
                standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="font-display font-bold text-xl text-hrk-blue mb-3 uppercase tracking-[0.03em]">
                What Makes Us Different
              </h3>
              <p className="text-hrk-gray text-base lg:text-lg leading-relaxed">
                Unlike traditional recycling operations, HRK Enterprises
                combines state-of-the-art technology with transparent practices.
                Every ton of material is verified, tracked, and documented with
                full transparency. Our compliance-first approach ensures all
                environmental regulations are exceeded, not just met.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="font-display font-bold text-xl text-hrk-blue mb-3 uppercase tracking-[0.03em]">
                Operational Excellence
              </h3>
              <p className="text-hrk-gray text-base lg:text-lg leading-relaxed">
                Our facilities operate 24/7 with advanced sorting, compacting,
                and processing equipment. We maintain rigorous quality control
                at every stage, from intake to final material dispatch. This
                ensures consistent product quality and customer satisfaction
                across all market segments.
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
      icon: Scale,
      title: "Verified Weighing",
      description:
        "Precision weighing with ISO-certified scales and real-time documentation for complete transparency.",
    },
    {
      icon: FileCheck,
      title: "Transparent Sourcing",
      description:
        "Complete traceability from waste generation to material recovery with detailed audit trails.",
    },
    {
      icon: Truck,
      title: "Compliance-First Logistics",
      description:
        "Environmentally compliant transportation with full regulatory adherence and safety protocols.",
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
          Core Services
        </motion.span>

        <motion.h2
          className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-hrk-white uppercase tracking-[0.06em] leading-[1] mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Comprehensive Recycling Services
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

function ProcessSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const steps = [
    {
      num: "01",
      title: "Intake & Verification",
      desc: "Waste received and verified for composition and quality.",
    },
    {
      num: "02",
      title: "Sorting & Separation",
      desc: "Advanced machinery separates materials by type and grade.",
    },
    {
      num: "03",
      title: "Processing & Compaction",
      desc: "Materials compressed and processed for storage and transport.",
    },
    {
      num: "04",
      title: "Quality Assurance",
      desc: "Final quality checks ensure material standards are met.",
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
          Our Process
        </motion.span>

        <motion.h2
          className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-hrk-white uppercase tracking-[0.06em] leading-[1] mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Recycling Process Flow
        </motion.h2>

        <div className="grid lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="glass-panel-sm p-6 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
            >
              <div className="text-4xl font-display font-black text-hrk-blue/20 mb-4">
                {step.num}
              </div>
              <h3 className="font-display font-bold text-lg tracking-[0.12em] text-hrk-white uppercase mb-3">
                {step.title}
              </h3>
              <p className="text-hrk-gray text-sm leading-relaxed">
                {step.desc}
              </p>
              {i < steps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                >
                  <ChevronRight className="w-6 h-6 text-hrk-blue" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const impacts = [
    { value: "8,500+", label: "Tons Processed Annually" },
    { value: "99.5%", label: "Operational Uptime" },
    { value: "100%", label: "Compliance Rate" },
    { value: "24hr", label: "Documentation Turnaround" },
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
          Impact Metrics
        </motion.span>

        <motion.h2
          className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-hrk-white uppercase tracking-[0.06em] leading-[1] mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Results That Speak
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, i) => (
            <motion.div
              key={impact.label}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
            >
              <div className="font-display font-black text-3xl lg:text-4xl text-hrk-blue mb-2">
                {impact.value}
              </div>
              <div className="text-hrk-gray text-sm">{impact.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
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
            Our Commitment
          </motion.span>

          <motion.h2
            className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-hrk-white uppercase tracking-[0.06em] leading-[1] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Environmental Responsibility
          </motion.h2>

          <p className="text-hrk-gray text-base lg:text-lg leading-relaxed max-w-3xl">
            At HRK Enterprises, environmental responsibility is not a cost of
            doing business—it's the foundation of our business model. Every
            recycling process is designed to minimize environmental impact while
            maximizing resource recovery. We exceed regulatory standards and
            continuously invest in cleaner technologies and better practices to
            ensure a sustainable future for generations to come.
          </p>
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
            Partner With Us
          </motion.h2>

          <motion.p
            className="text-hrk-gray text-lg max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Ready to optimize your waste management strategy? Connect with our
            team to discuss custom recycling solutions for your organization.
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

export default EnterprisesPage;
