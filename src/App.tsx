import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import Lenis from "lenis";
import {
  Scale,
  FileCheck,
  Truck,
  Battery,
  Wrench,
  CreditCard,
  ChevronRight,
  Copy,
  Check,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import "./App.css";

// Magnetic Mouse Effect Hook
function useMagneticEffect(
  ref: React.RefObject<HTMLElement | null>,
  strength: number = 0.3,
) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) * strength;
      const y = (e.clientY - centerY) * strength;
      setPosition({ x, y });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, strength]);

  return position;
}

// Word by Word Reveal Component
function WordReveal({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={
              isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }
            }
            transition={{
              duration: 0.8,
              delay: delay + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// Hero Section
function HeroSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const magneticPos = useMagneticEffect(imageRef, 0.05);
  const springX = useSpring(magneticPos.x, { stiffness: 150, damping: 15 });
  const springY = useSpring(magneticPos.y, { stiffness: 150, damping: 15 });

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section className="section-pinned relative flex items-center justify-center">
      {/* Background Image with Magnetic Effect */}
      <motion.div
        ref={imageRef}
        className="absolute inset-0 z-0"
        style={{
          x: springX,
          y: springY,
          scale: imageScale,
          opacity: imageOpacity,
        }}
      >
        <img
          src="/hero-portrait.png"
          alt="Portrait of the founder"
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
          HRK GROUPS
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
              Founder & Director, HRK Groups
            </motion.p>

            <motion.p
              className="text-hrk-gray text-lg lg:text-xl leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Architecting the Future of Industrial Recycling and Sustainable
              Mobility.
            </motion.p>
          </motion.div>

          {/* Right Card */}
          <motion.div
            className="glass-panel-sm p-6 lg:p-8 ml-auto max-w-sm space-y-6"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Founder Portrait */}
            <motion.div
              className="relative mx-auto w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border border-white/10 shadow-[0_18px_45px_rgba(0,0,0,0.7)]"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img
                src="/founder-portrait.png"
                alt="Founder portrait"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </motion.div>

            <h3 className="font-display font-bold text-lg tracking-[0.12em] text-hrk-white uppercase mb-6">
              HRK Groups
            </h3>
            <div className="space-y-4">
              {[
                "Recycling & Trading",
                "EV Dealership Network",
                "East Champaran, Bihar",
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
          Scroll to Explore
        </span>
      </motion.div>
    </section>
  );
}

// HRK Enterprises Section
function EnterprisesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const values = [
    { icon: Scale, label: "Verified Weighing" },
    { icon: FileCheck, label: "Transparent Sourcing" },
    { icon: Truck, label: "Compliance-First Logistics" },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-pinned relative flex items-center justify-center"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: bgScale, y: bgY }}
      >
        <img
          src="/enterprises_warehouse.jpg"
          alt="HRK Enterprises"
          className="w-full h-full object-cover"
        />
        <div className="vignette-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-hrk-black/95 via-hrk-black/70 to-hrk-black/50" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Panel */}
          <motion.div
            className="glass-panel p-8 lg:p-12"
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              className="font-mono text-xs tracking-[0.18em] text-hrk-blue uppercase mb-4 block"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Business Unit 01
            </motion.span>

            <motion.h2
              className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-hrk-white uppercase tracking-[0.06em] leading-[1] mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              HRK
              <br />
              Enterprises
            </motion.h2>

            <motion.p
              className="font-mono text-sm tracking-[0.12em] text-hrk-gray uppercase mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Recycling & Trading
            </motion.p>

            <motion.p
              className="text-hrk-gray text-base lg:text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              HRK Enterprises functions as a high-integrity node in the
              recycling ecosystem. We manage complex scrap logistics with
              absolute transparency, ethical conduct, and verified
              documentation. From East Champaran, Bihar, we provide the 'Proof
              of Trust' required for modern industrial sustainability.
            </motion.p>

            {/* Ledger-style Values */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {values.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="ledger-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
                >
                  <item.icon className="w-5 h-5 text-hrk-blue" />
                  <span className="text-hrk-white text-sm font-medium">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Card - Stats */}
          <motion.div
            className="glass-panel-sm p-6 lg:p-8 ml-auto max-w-sm"
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-display font-bold text-sm tracking-[0.12em] text-hrk-white uppercase mb-6">
              Core Operations
            </h3>
            <div className="space-y-4">
              {[
                "Scrap Metal Sourcing",
                "Verified Weighbridge",
                "Documentation & Compliance",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-center justify-between py-3 border-b border-white/5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                >
                  <span className="text-hrk-gray text-sm">{item}</span>
                  <ChevronRight className="w-4 h-4 text-hrk-blue" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// HRK Merchants Section
function MerchantsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  const specs = [
    { label: "Battery Life", value: "120+", unit: "km/charge" },
    { label: "Charging Time", value: "4-6", unit: "hours" },
    { label: "Load Capacity", value: "500", unit: "kg" },
    { label: "Warranty", value: "3", unit: "years" },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-pinned relative flex items-center justify-center"
    >
      {/* Background */}
      <motion.div className="absolute inset-0 z-0" style={{ scale: bgScale }}>
        <img
          src="/ev_showroom.jpg"
          alt="HRK Merchants"
          className="w-full h-full object-cover"
        />
        <div className="vignette-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-hrk-black/95 via-hrk-black/70 to-hrk-black/50" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Panel */}
          <motion.div
            className="glass-panel p-8 lg:p-12"
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              className="font-mono text-xs tracking-[0.18em] text-hrk-blue uppercase mb-4 block"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Business Unit 02
            </motion.span>

            <motion.h2
              className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-hrk-white uppercase tracking-[0.06em] leading-[1] mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              HRK
              <br />
              Merchants & Co.
            </motion.h2>

            <motion.p
              className="font-mono text-sm tracking-[0.12em] text-hrk-gray uppercase mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Electric Mobility
            </motion.p>

            <motion.p
              className="text-hrk-gray text-base lg:text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Accelerating the shift to a green mainnet. HRK Merchants & Co.
              specializes in the high-liquidity trading of EV mobility
              solutions. We combine strategic market insight with a robust
              dealer network to ensure every vehicle transaction is seamless,
              efficient, and performance-backed.
            </motion.p>

            {/* Services */}
            <motion.div
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { icon: Battery, label: "2W & 3W EV Sales" },
                { icon: Wrench, label: "Service & Spares" },
                { icon: CreditCard, label: "Financing Support" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="text-center p-4 rounded-xl bg-white/5 border border-white/5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(46, 107, 255, 0.1)",
                  }}
                >
                  <item.icon className="w-6 h-6 text-hrk-blue mx-auto mb-2" />
                  <span className="text-hrk-white text-xs">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Card - Asset Terminal */}
          <motion.div
            className="glass-panel-sm p-6 lg:p-8 ml-auto max-w-sm"
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-bold text-sm tracking-[0.12em] text-hrk-white uppercase">
                Asset Terminal
              </h3>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-hrk-gray text-xs font-mono">LIVE</span>
              </span>
            </div>

            <div className="space-y-4">
              {specs.map((spec, i) => (
                <motion.div
                  key={spec.label}
                  className="flex items-center justify-between py-3 border-b border-white/5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                >
                  <span className="text-hrk-gray text-sm">{spec.label}</span>
                  <div className="text-right">
                    <span className="text-hrk-blue font-display font-bold text-lg">
                      {spec.value}
                    </span>
                    <span className="text-hrk-gray text-xs ml-1">
                      {spec.unit}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Quote Section
function QuoteSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  const quote =
    "I believe in building my own legacy through hard work, trust, and transparent business dealings. At HRK Enterprises, our goal is not just profit, but long-term relationships and sustainable growth.";

  return (
    <section
      ref={sectionRef}
      className="section-pinned relative flex items-center justify-center"
    >
      {/* Background */}
      <motion.div className="absolute inset-0 z-0" style={{ scale: bgScale }}>
        <img
          src="/quote_portrait.jpg"
          alt="Founder"
          className="w-full h-full object-cover"
        />
        <div className="vignette-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-hrk-black/95 via-hrk-black/80 to-hrk-black/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 lg:px-12">
        <motion.div
          className="glass-panel p-8 lg:p-16 max-w-4xl"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Quote Mark */}
          <motion.div
            className="text-hrk-blue text-6xl lg:text-8xl font-serif leading-none mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            "
          </motion.div>

          {/* Quote Text with Word Reveal */}
          <blockquote className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-hrk-white leading-[1.3] mb-8">
            <WordReveal text={quote} delay={0.3} />
          </blockquote>

          {/* Attribution */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="w-12 h-px bg-hrk-blue" />
            <div>
              <p className="text-hrk-white font-display font-semibold">
                Aditya Kumar Giri
              </p>
              <p className="text-hrk-gray text-sm">
                Founder & Director, HRK Groups
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Contact/Footer Section
function ContactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const address =
    "Ground Floor, HRK Commercial Complex, Near Main Market, Paharpur, East Champaran, Bihar – 845458";

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = [
    { value: "3+", label: "Years in Business" },
    { value: "8500+", label: "Tons Recycled" },
    { value: "620+", label: "EV Customers" },
    { value: "24h", label: "Documentation Turnaround" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center py-20"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-hrk-black via-hrk-navy/30 to-hrk-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
            >
              <div className="font-display font-black text-3xl lg:text-4xl text-hrk-blue mb-2">
                {stat.value}
              </div>
              <div className="text-hrk-gray text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main CTA Panel */}
        <motion.div
          className="glass-panel p-8 lg:p-16 text-center mb-16"
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
            Let's Build Together
          </motion.h2>

          <motion.p
            className="text-hrk-gray text-lg max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Visit us, call, or send a message. We reply within 24 hours.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          ></motion.div>
        </motion.div>

        {/* Contact Details */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {/* Address */}
          <div className="glass-panel-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-hrk-blue" />
              <span className="font-mono text-xs tracking-[0.12em] text-hrk-gray uppercase">
                Address
              </span>
            </div>
            <p className="text-hrk-white text-sm leading-relaxed mb-4">
              {address}
            </p>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 text-hrk-blue text-sm hover:underline"
            >
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copied ? "Copied!" : "Copy Address"}
            </button>
          </div>

          {/* Phone */}
          <div className="glass-panel-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-5 h-5 text-hrk-blue" />
              <span className="font-mono text-xs tracking-[0.12em] text-hrk-gray uppercase">
                Phone
              </span>
            </div>
            <p className="text-hrk-white text-lg font-display">
              +91 77008 56702
            </p>
          </div>

          {/* Email */}
          <div className="glass-panel-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-5 h-5 text-hrk-blue" />
              <span className="font-mono text-xs tracking-[0.12em] text-hrk-gray uppercase">
                Email
              </span>
            </div>
            <p className="text-hrk-white text-lg font-display">
              hrkgiri1714@gmail.com
            </p>
          </div>

          {/* Hours */}
          <div className="glass-panel-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-5 h-5 text-hrk-blue" />
              <span className="font-mono text-xs tracking-[0.12em] text-hrk-gray uppercase">
                Hours
              </span>
            </div>
            <p className="text-hrk-white text-sm">Mon – Sat</p>
            <p className="text-hrk-gray text-sm">9:00 AM – 6:00 PM</p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="mt-20 pt-8 border-t border-white/5"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="font-display font-bold text-lg tracking-[0.12em] text-hrk-white uppercase">
                HRK Groups
              </span>
              <span className="text-hrk-gray text-sm">|</span>
              <span className="font-mono text-xs tracking-[0.12em] text-hrk-gray uppercase">
                Registered Node 2026
              </span>
            </div>
            <p className="text-hrk-gray text-sm">
              Building trust. Powering tomorrow.
            </p>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}

// Main App
function App() {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative bg-hrk-black min-h-screen">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4 nav-glass">
        <div className="flex justify-between items-center">
          <motion.a
            href="#"
            className="font-mono text-xs tracking-[0.3em] text-hrk-white uppercase hover:text-hrk-blue transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            HRK GROUPS
          </motion.a>

          <motion.div
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {["Enterprises", "Merchants", "Vision", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-mono text-xs tracking-[0.18em] text-hrk-gray uppercase hover:text-hrk-white transition-colors"
              >
                {item}
              </a>
            ))}
          </motion.div>
        </div>
      </nav>

      {/* Sections */}
      <main className="relative">
        <HeroSection />
        <div id="enterprises">
          <EnterprisesSection />
        </div>
        <div id="merchants">
          <MerchantsSection />
        </div>
        <div id="vision">
          <QuoteSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
    </div>
  );
}

export default App;
