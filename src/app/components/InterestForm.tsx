import { useState, useCallback } from "react";
import { motion, useReducedMotion } from "motion/react";
import confetti from "canvas-confetti";

const skyRangersCentres = [
  "TCH Ampang", "TCH Ara Damansara", "TCH Bangsar",
  "TCH Mont Kiara", "TCH Bukit Jalil", "TCH Cyberjaya", "Small Wonder TTDI"
];
const braveVoicesCentres = [
  "SW Mutiara Damansara", "SW Eco Ardence", "SW Bandar Parklands", "SW OUG"
];

interface Props {
  defaultProgramme?: "sky-rangers" | "brave-voices";
}

export function InterestForm({ defaultProgramme = "sky-rangers" }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [loading, setLoading] = useState(false);
  const reduced = useReducedMotion();

  const centres = defaultProgramme === "sky-rangers" ? skyRangersCentres : braveVoicesCentres;

  const fireConfetti = useCallback(() => {
    if (reduced) return;
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ["#FFB820", "#EF4146", "#3BB4B8", "#2A368C", "#F8A42B"] });
  }, [reduced]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    data.programme = defaultProgramme;

    try {
      const webhookUrl = (import.meta as any).env?.VITE_FORM_WEBHOOK_URL || "";
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      }
      setSubmitted(true);
      fireConfetti();
    } catch {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 600);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[32px] p-8 lg:p-12 border border-[var(--ink-border)] shadow-lg text-center"
      >
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl lg:text-3xl mb-3" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
          You're on the list!
        </h3>
        <p className="text-[var(--ink-body)] text-lg">
          We'll WhatsApp you within 24 hours to confirm your spot and share next steps. No payment required at this stage.
        </p>
      </motion.div>
    );
  }

  const inputClass = "w-full rounded-2xl border border-[var(--ink-border)] bg-[var(--ink-bg)] px-4 py-3.5 text-base placeholder:text-[var(--ink-light)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-sun)] transition-shadow";
  const labelClass = "block text-sm font-semibold text-[var(--ink-muted)] tracking-[0.6px] mb-2";

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-[32px] p-6 lg:p-12 border border-[var(--ink-border)] shadow-[0_20px_40px_rgba(26,26,38,0.05)]">
      <h3 className="text-2xl lg:text-3xl mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 900, color: "var(--ink-dark)" }}>
        Register Interest
      </h3>
      <p className="text-[var(--ink-muted)] mb-8" style={{ fontFamily: "var(--font-body)" }}>No payment required. We'll WhatsApp you within 24 hours.</p>


      <div className="grid lg:grid-cols-2 gap-5 mb-6">
        {/* Parent info */}
        <div>
          <label className={labelClass}>PARENT / GUARDIAN NAME *</label>
          <input name="parentName" required className={inputClass} placeholder="Full name" />
        </div>
        <div>
          <label className={labelClass}>RELATIONSHIP *</label>
          <select name="relationship" required className={inputClass}>
            <option value="">Select</option>
            <option>Mother</option>
            <option>Father</option>
            <option>Guardian</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>EMAIL *</label>
          <input name="email" type="email" required className={inputClass} placeholder="you@email.com" />
        </div>
        <div>
          <label className={labelClass}>PHONE *</label>
          <input name="phone" type="tel" required className={inputClass} placeholder="+60 12 345 6789" />
        </div>
        <div className="lg:col-span-2">
          <label className={labelClass}>SECOND GUARDIAN (OPTIONAL)</label>
          <input name="secondGuardian" className={inputClass} placeholder="Name and phone" />
        </div>
      </div>

      <div className="border-t border-[var(--ink-border)] pt-6 mb-6">
        <div className="grid lg:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>CHILD'S NAME *</label>
            <input name="childName" required className={inputClass} placeholder="Child's full name" />
          </div>
          <div>
            <label className={labelClass}>DATE OF BIRTH *</label>
            <input name="dob" type="date" required className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>AGE *</label>
            <input name="age" type="number" min="4" max="6" required className={inputClass} placeholder="4, 5, or 6" />
          </div>
          <div>
            <label className={labelClass}>PRESCHOOL (OPTIONAL)</label>
            <input name="preschool" className={inputClass} placeholder="Current preschool name" />
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--ink-border)] pt-6 mb-6">
        <div className="flex justify-center">
          <div className="w-full lg:w-1/2">
            <label className={labelClass}>PREFERRED CENTRE *</label>
            <select name="centre" required className={inputClass}>
              <option value="">Choose a centre</option>
              {centres.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>
      </div>

      <label className="flex items-start gap-3 mb-8 cursor-pointer">
        <input type="checkbox" name="consent" required className="mt-1 w-5 h-5 rounded border-[var(--ink-border)] accent-[var(--brand-sun)] shrink-0" />
        <span className="text-sm text-[var(--ink-body)]">
          I consent to Learning Horizon contacting me via WhatsApp, email, or phone regarding my child's camp registration. No payment will be taken at this stage.
        </span>
      </label>

      <motion.button
        type="submit"
        disabled={loading}
        animate={shaking ? { x: [0, -8, 8, -8, 8, 0] } : {}}
        transition={shaking ? { duration: 0.5 } : {}}
        className="w-full bg-[var(--brand-navy)] text-[var(--brand-cream)] py-4 rounded-full font-bold text-[17px] transition-all hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {loading ? "Submitting..." : "Register interest"}
      </motion.button>

      {error && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 p-4 rounded-2xl bg-red-50 border border-red-200 text-center">
          <p className="text-[var(--brand-red)] font-semibold mb-1">Something went wrong</p>
          <p className="text-sm text-[var(--ink-body)]">
            Please try again, or reach us directly on{" "}
            <a href="https://wa.me/60362053033" className="underline font-semibold" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </p>
        </motion.div>
      )}

      <p className="text-center text-sm text-[var(--ink-muted)] mt-4">
        We'll WhatsApp you within 24 hours. No payment required at this stage.
      </p>
    </form>
  );
}