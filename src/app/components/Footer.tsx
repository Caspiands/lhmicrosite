import { Logo } from "./Logo";
import busyBeesLogo from "../../imports/BusyBeesAsia.png";

export function Footer() {
  return (
    <footer className="bg-[#FFF8F0] w-full">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-20 pt-16 pb-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b border-[var(--ink-border)]">
          <div className="flex items-center gap-4">
            <Logo size="lg" variant="light" />
          </div>

          <div className="flex items-center gap-3">
            <span
              className="text-[11px] tracking-[1.4px] text-[var(--ink-muted)]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
            >
              PART OF
            </span>
            <img src={busyBeesLogo} alt="Busy Bees Asia" className="h-12 w-auto object-contain" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-10 text-[var(--brand-navy)]">
          <div>
            <p
              className="text-[var(--brand-blue)] text-[11px] tracking-[0.6px] mb-3"
              style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
            >
              CONTACT
            </p>
            <a href="mailto:enquiry@learninghorizon.asia" className="block text-[15px] hover:underline">
              enquiry@learninghorizon.asia
            </a>
          </div>

          <div>
            <p
              className="text-[var(--brand-green)] text-[11px] tracking-[0.6px] mb-3"
              style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
            >
              EXPLORE
            </p>
            <a href="#about-us" className="block text-[15px] hover:underline">
              About us
            </a>
            <a href="#programmes" className="block text-[15px] hover:underline mt-1">
              Programmes
            </a>
<a href="#contact" className="block text-[15px] hover:underline mt-1">
              Contact
            </a>
          </div>

          <div>
            <p
              className="text-[var(--brand-blue)] text-[11px] tracking-[0.6px] mb-3"
              style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
            >
              OFFICE
            </p>
            <p className="text-[15px] leading-[1.55] text-[var(--ink-body)]">
              2nd Floor, Lot 15229, Persiaran Dutamas,
              <br />
              50480 Kuala Lumpur, Malaysia
            </p>
          </div>
        </div>

        <div className="border-t border-[var(--ink-border)] pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between text-[var(--ink-muted)] text-[13px] gap-3">
          <p>&copy; 2026 Learning Horizon &middot; Part of Busy Bees Asia</p>
          <div className="flex gap-6">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
