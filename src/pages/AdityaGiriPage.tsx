import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import "./shared-styles.css";

function AdityaGiriPage() {
  return (
    <>
      <SEOHead
        title="Aditya Kumar Giri - Founder & Director"
        description="Meet Aditya Kumar Giri, Founder & Director of HRK Groups. Learn about his vision for sustainable industrial recycling and electric mobility solutions."
        keywords="Aditya Giri, HRK Founder, Industrial Recycling, Sustainable Business, East Champaran"
        ogUrl="https://hrkgroups.com/aditya-giri"
      />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* Biography Section */}
        <BiographySection />

        {/* Vision & Values Section */}
        <VisionSection />

        {/* Leadership Approach Section */}
        <LeadershipSection />

        {/* Achievements Section */}
        <AchievementsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>
    </>
  );
}

// Hero Section for Aditya Giri Page
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
      {/* Background Image */}
      <motion.div
        ref={imageRef}
        className="absolute inset-0 z-0"
        style={{
          scale: imageScale,
          opacity: imageOpacity,
        }}
      >
        <img
          src="/hero-portrait.png"
          alt="Aditya Kumar Giri - Founder & Director"
          className="w-full h-full object-cover hero-image"
        />
        <div className="vignette-overlay" />
        <div className="absolute inset-0 hero-overlay-gradient" />
      </motion.div>

      {/* Floating Brand */}
      <motion.div
        className="absolute top-8 left-8 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <span className="font-mono text-xs tracking-[0.3em] text-hrk-gray uppercase">
          Founder & Director
        </span>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Panel */}
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
              Aditya
              <br />
              Kumar Giri
            </motion.h1>

            <motion.p
              className="font-mono text-sm tracking-[0.18em] text-hrk-blue uppercase mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Innovator & Business Leader
            </motion.p>

            <motion.p
              className="text-hrk-gray text-lg lg:text-xl leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Pioneering sustainable industrial solutions and driving the
              transition to green mobility across Eastern India.
            </motion.p>
          </motion.div>

          {/* Right Card */}
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
            <motion.div
              className="relative mx-auto w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border border-white/10 shadow-[0_18px_45px_rgba(0,0,0,0.7)]"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img
                src="/founder-portrait.png"
                alt="Aditya Kumar Giri Portrait"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </motion.div>

            <h2 className="font-display font-bold text-lg tracking-[0.12em] text-hrk-white uppercase mb-6">
              Quick Overview
            </h2>
            <div className="space-y-4">
              {[
                "HRK Enterprises - Industrial Recycling",
                "HRK Merchants & Co. - EV Mobility",
                "HRK Traders - B2B Trading",
                "Team Size: 150+ employees",
                "Based in East Champaran, Bihar",
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
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
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

// Biography Section
function BiographySection() {
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
            Professional Journey
          </motion.span>

          <motion.h2
            className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-hrk-white uppercase tracking-[0.06em] leading-[1] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From Vision to Reality
          </motion.h2>

          <div className="space-y-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="font-display font-bold text-xl text-hrk-blue mb-3 uppercase tracking-[0.03em]">
                Early Beginnings
              </h3>
              <p className="text-hrk-gray text-base lg:text-lg leading-relaxed">
                Aditya Kumar Giri started his entrepreneurial journey with a
                deep understanding of industrial waste management and the
                critical need for sustainable recycling solutions in India. His
                dedication to environmental responsibility and business
                excellence laid the foundation for HRK Groups.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="font-display font-bold text-xl text-hrk-blue mb-3 uppercase tracking-[0.03em]">
                Building the Ecosystem
              </h3>
              <p className="text-hrk-gray text-base lg:text-lg leading-relaxed">
                With a vision to create a comprehensive ecosystem of businesses,
                Aditya established three distinct but interconnected business
                units. Each unit was designed to address specific market gaps
                while maintaining the core values of transparency, efficiency,
                and sustainability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="font-display font-bold text-xl text-hrk-blue mb-3 uppercase tracking-[0.03em]">
                Expansion & Innovation
              </h3>
              <p className="text-hrk-gray text-base lg:text-lg leading-relaxed">
                Today, under Aditya's leadership, HRK Groups operates across
                multiple sectors including industrial recycling, electric
                mobility, and B2B trading. The organization has grown to employ
                over 150 professionals while maintaining its commitment to
                sustainable practices and transparent business operations.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Vision & Values Section
function VisionSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="section-pinned relative py-20">
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="font-mono text-xs tracking-[0.18em] text-hrk-blue uppercase mb-4 block"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Philosophy
          </motion.span>

          <motion.h2
            className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-hrk-white uppercase tracking-[0.06em] leading-[1] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Core Values & Vision
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Sustainability",
                description:
                  "Environmental responsibility is not just a practice but a core principle guiding every business decision.",
              },
              {
                title: "Transparency",
                description:
                  "Honest communication and ethical dealings form the foundation of all stakeholder relationships.",
              },
              {
                title: "Excellence",
                description:
                  "Continuous improvement and attention to detail ensure quality in every aspect of operations.",
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                className="glass-panel-sm p-6 lg:p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              >
                <h3 className="font-display font-bold text-lg tracking-[0.12em] text-hrk-blue uppercase mb-4">
                  {value.title}
                </h3>
                <p className="text-hrk-gray text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Leadership Approach Section
function LeadershipSection() {
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
            Leadership Style
          </motion.span>

          <motion.h2
            className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-hrk-white uppercase tracking-[0.06em] leading-[1] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Building Tomorrow Together
          </motion.h2>

          <p className="text-hrk-gray text-base lg:text-lg leading-relaxed max-w-3xl mb-8">
            Aditya Kumar Giri believes in collaborative leadership that empowers
            teams to innovate and take ownership. His approach combines
            strategic foresight with operational excellence, creating an
            environment where employees are encouraged to contribute ideas and
            take calculated risks. This philosophy has enabled HRK Groups to
            maintain agility while scaling operations across multiple sectors.
          </p>

          <div className="space-y-4 max-w-3xl">
            {[
              "Focus on long-term sustainable growth over short-term profits",
              "Investment in employee development and skill enhancement",
              "Transparent communication at all organizational levels",
              "Data-driven decision making combined with intuitive market insight",
              "Strategic partnerships with industry leaders and innovators",
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

// Achievements Section
function AchievementsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const achievements = [
    { value: "3+", label: "Years of Operations" },
    { value: "150+", label: "Team Members" },
    { value: "8500+", label: "Tons Recycled" },
    { value: "620+", label: "EV Customers Served" },
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
          By The Numbers
        </motion.span>

        <motion.h2
          className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-hrk-white uppercase tracking-[0.06em] leading-[1] mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Impact & Milestones
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
            >
              <div className="font-display font-black text-3xl lg:text-4xl text-hrk-blue mb-2">
                {stat.value}
              </div>
              <div className="text-hrk-gray text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
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
            Connect With Us
          </motion.h2>

          <motion.p
            className="text-hrk-gray text-lg max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Interested in learning more about HRK Groups or exploring business
            opportunities? Reach out to us directly.
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

export default AdityaGiriPage;
