import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";
import beeIcon from "../../imports/Beeicon.png";
import busyBeesLogo from "../../imports/BusyBeesAsia.png";

const navLinks = [
  { label: "About us", href: "#about-us" },
  { label: "Programmes", href: "#programmes" },
  { label: "Brands", href: "#brands" },
  { label: "Contact", href: "#contact" },
];

export function Nav({ bgColor = "bg-[#faf7f0]" }: { bgColor?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Skip to content */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:bg-[var(--brand-navy)] focus:text-white focus:px-4 focus:py-2 focus:rounded-full">
        Skip to content
      </a>
      {/* Utility bar */}
      <div className="bg-[var(--brand-navy)] w-full hidden lg:block">
        <div className="flex items-center justify-between px-20 py-2.5 text-[var(--brand-cream)] text-xs" style={{ fontFamily: "var(--font-body)" }}>
          <p>busybeesasia.my&ensp;/&ensp;Learning Horizon</p>
          <div className="flex gap-6">
            <a
              href="mailto:enquiry@learninghorizon.asia"
              className="hover:underline"
            >
              ✉&ensp;enquiry@learninghorizon.asia
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className={`${bgColor} sticky top-0 z-50 w-full shadow-[0_2px_12px_rgba(18,26,56,0.06)]`}>
        <div className="flex items-center justify-between px-5 py-4 lg:px-20 lg:py-6 max-w-[1440px] mx-auto">
          <div className="flex items-center gap-3">
            <Logo size="md" />
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10" aria-label="Main navigation">
            {navLinks.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-[15px] text-[var(--ink-dark)] hover:text-[var(--brand-sun-dark)] transition-colors"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center gap-2">
              <span className="text-[11px] tracking-[1.2px] text-[var(--ink-muted)]" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>BY</span>
              <img src={busyBeesLogo} alt="Busy Bees" className="h-7 w-auto object-contain" />
            </div>
            <a href="#contact" className="bg-[var(--brand-navy)] text-[var(--brand-cream)] px-5 py-3 rounded-full text-[15px] font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]" style={{ fontFamily: "var(--font-body)" }}>
              Register interest&ensp;→
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden bg-[var(--brand-navy)] rounded-xl p-3.5 flex flex-col gap-1 items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className="block w-4 h-0.5 bg-[var(--brand-cream)] rounded-sm" />
            <span className="block w-4 h-0.5 bg-[var(--brand-cream)] rounded-sm" />
            <span className="block w-4 h-0.5 bg-[var(--brand-cream)] rounded-sm" />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-[var(--brand-cream)]"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-4 px-5 pb-6 pt-2">
                {navLinks.map(l => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-[17px] font-medium text-[var(--ink-dark)] py-2"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="bg-[var(--brand-navy)] text-[var(--brand-cream)] px-6 py-4 rounded-full text-center font-bold text-[17px]"
                >
                  Register interest →
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
