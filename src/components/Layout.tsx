import { motion } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative bg-hrk-black min-h-screen">
      {/* Grain Overlay - Persistent */}
      <div className="grain-overlay" />

      {/* Navigation - Persistent */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4 nav-glass">
        <div className="flex justify-between items-center">
          <motion.a
            href="/"
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
            <a
              href="/"
              className="font-mono text-xs tracking-[0.18em] text-hrk-gray uppercase hover:text-hrk-white transition-colors"
            >
              Home
            </a>
            <a
              href="/aditya-giri"
              className="font-mono text-xs tracking-[0.18em] text-hrk-gray uppercase hover:text-hrk-white transition-colors"
            >
              Founder
            </a>
            <a
              href="/hrk-enterprises"
              className="font-mono text-xs tracking-[0.18em] text-hrk-gray uppercase hover:text-hrk-white transition-colors"
            >
              Enterprises
            </a>
            <a
              href="/hrk-merchants-co"
              className="font-mono text-xs tracking-[0.18em] text-hrk-gray uppercase hover:text-hrk-white transition-colors"
            >
              Merchants
            </a>
          </motion.div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="relative">{children}</main>
    </div>
  );
}
