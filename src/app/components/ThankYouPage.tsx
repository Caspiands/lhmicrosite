import { useEffect } from "react";
import { Link } from "react-router";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function ThankYouPage() {
  useEffect(() => {
    document.title = "Thank You | Learning Horizon";

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "thank_you_page_view",
      page_path: "/learning-horizon/thank-you",
      page_title: "Thank You | Learning Horizon",
    });

    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: "/learning-horizon/thank-you",
        page_title: "Thank You | Learning Horizon",
      });
      window.gtag("event", "generate_lead", {
        event_category: "form",
        event_label: "interest_form",
      });
    }

    return () => {
      document.title = "Learning Horizon | Busy Bees Asia";
    };
  }, []);

  return (
    <section className="bg-[var(--brand-cream)] min-h-[70vh] flex items-center justify-center px-5 py-20 lg:py-28">
      <div className="max-w-[640px] w-full text-center">
        <p
          className="text-[var(--brand-navy)]/70 text-[12px] tracking-[1.8px] mb-5"
          style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
        >
          SUBMISSION RECEIVED
        </p>
        <h1
          className="text-4xl lg:text-[52px] leading-[1.1] tracking-tight text-[var(--brand-navy)] mb-6"
          style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
        >
          Thank you for your submission
        </h1>
        <p
          className="text-[var(--ink-body)] text-lg lg:text-xl leading-[1.6] mb-10"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Our team will contact you within 24 hours to confirm the next steps.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center bg-[var(--brand-navy)] text-[var(--brand-cream)] px-7 py-4 rounded-full text-[17px] font-bold transition-transform hover:scale-[1.02]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Back to home →
        </Link>
      </div>
    </section>
  );
}
