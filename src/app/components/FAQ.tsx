import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ScrollReveal } from "./ScrollReveal";

const faqData = [
  {
    q: "What's included in the camp fee?",
    a: "Three full half-day sessions (9:00am–12:30pm), all programme materials, snacks (bread/cake & milk), a take-home keepsake, and a post-camp parent reflection on your child. Everything your child needs, included."
  },
  {
    q: "What should my child bring?",
    a: "A water bottle, a change of clothes, and comfortable shoes for movement activities. Everything else is provided."
  },
  {
    q: "How does drop-off and pick-up work?",
    a: "Drop-off begins at 8:45am. Pick-up is at 12:30pm sharp. Children are handed over only to the registered guardian listed on the form. A daily reflection note goes home with each child."
  },
  {
    q: "What's your refund and transfer policy?",
    a: "Full refunds are available up to 7 days before camp starts. Transfers between centres or programmes are subject to availability. Contact us on WhatsApp for assistance."
  },
  {
    q: "My child has allergies / dietary needs — are you equipped?",
    a: "Yes — please note any allergies or dietary requirements in the registration form. Our team will follow up with you directly to ensure your child's safety and comfort."
  },
  {
    q: "What's the educator-to-child ratio?",
    a: "Sky Rangers caps at 15 children per centre, and Brave Voices at 10. Each session is led by trained educators with small-group experience."
  }
];

function FAQItem({ item, isOpen, toggle }: { item: typeof faqData[0]; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="border-t border-[var(--ink-border)]">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-7 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-sun)] rounded-lg"
        aria-expanded={isOpen}
      >
        <span className="text-xl lg:text-2xl pr-4" style={{ fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "-0.24px", lineHeight: "32px" }}>
          {item.q}
        </span>
        <span className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl transition-colors ${isOpen ? 'bg-[var(--brand-sun)] text-[var(--brand-cream)]' : 'bg-[var(--ink-bg)] text-[var(--ink-dark)]'}`}
          style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-7 text-lg text-[var(--ink-body)] leading-[30px]" style={{ fontFamily: "var(--font-body)" }}>
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[var(--brand-cream)] py-20 lg:py-28 px-5 lg:px-20">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
        <ScrollReveal className="lg:w-[440px] shrink-0">
          <p className="text-[var(--brand-sun-deep)] text-[13px] font-bold tracking-[1.56px] mb-5" style={{ fontFamily: "var(--font-body)" }}>
            06&ensp;/&ensp;FAQ
          </p>
          <h2 className="text-4xl lg:text-[56px] leading-[1.07] tracking-tight mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
            Everything a parent might ask.
          </h2>
          <p className="text-lg text-[var(--ink-body)] leading-[30px] mb-7" style={{ fontFamily: "var(--font-body)" }}>
            Can't find what you're looking for? Our team is happy to help. Reach us on WhatsApp at +603 6205 3033 or email hello@learninghorizon.my.
          </p>
          <div className="bg-[var(--brand-sun-light)] rounded-[20px] p-6">
            <p className="text-xs tracking-[0.6px] font-semibold text-[var(--brand-sun-deep)] mb-3">NEED HELP DECIDING?</p>
            <p className="text-[22px] mb-3" style={{ fontFamily: "var(--font-display)", fontWeight: 600, lineHeight: "36px" }}>
              Book a 10-minute chat with our programme team
            </p>
            <a href="https://wa.me/60362053033" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-[var(--brand-navy)] text-[var(--brand-cream)] px-5 py-3 rounded-full font-bold text-[15px] hover:scale-[1.02] transition-transform">
              WhatsApp us&ensp;→
            </a>
          </div>
        </ScrollReveal>

        <div className="flex-1 min-w-0">
          {faqData.map((item, i) => (
            <FAQItem key={i} item={item} isOpen={openIndex === i} toggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
          ))}
          <div className="border-t border-b border-[var(--ink-border)]" />
        </div>
      </div>
    </section>
  );
}
