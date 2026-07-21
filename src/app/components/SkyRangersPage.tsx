import { Link } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import { ScrollReveal } from "./ScrollReveal";
import { InterestForm } from "./InterestForm";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { IMG } from "./images";
import skyRangerBoy from "../../imports/SKYRANESD2.png";
import skyRangerGirl from "../../imports/skyrAGES.png";
import braveBee from "../../imports/Beeicon.png";

const outcomes = [
  { num: "01", title: "Take responsibility", desc: "For their own actions and tasks — building ownership from day one.", bg: "bg-[var(--brand-yellow)]", text: "text-[var(--ink-dark)]", img: IMG.handsRaised },
  { num: "02", title: "Be proactive", desc: "Speak up, ask questions, and take initiative instead of waiting to be told.", bg: "bg-[var(--brand-navy)]", text: "text-[var(--brand-yellow)]", img: IMG.boySpeaking },
  { num: "03", title: "Build independence", desc: "Complete tasks with minimal reminders and grow into self-managers.", bg: "bg-[var(--brand-teal)]", text: "text-[var(--brand-cream)]", img: IMG.blocks },
  { num: "04", title: "Develop good habits", desc: "Through consistent practice — habits that stick far beyond camp.", bg: "bg-white", text: "text-[var(--ink-dark)]", border: true },
  { num: "05", title: "Improve listening", desc: "Focused listening skills that reduce confusion and build comprehension.", bg: "bg-white", text: "text-[var(--ink-dark)]", border: true },
  { num: "06", title: "Build confidence", desc: "Through real participation and gently-pitched challenges. No fear of trying.", bg: "bg-[var(--brand-yellow)]", text: "text-[var(--ink-dark)]", img: IMG.classroomLearn },
  { num: "07", title: "Self-discipline & grit", desc: "Practise perseverance with tasks that require a little patience and practice.", bg: "bg-[var(--brand-sun)]", text: "text-[var(--ink-dark)]" },
];

const schedule = [
  { time: "9:00 AM", color: "#FFB820", title: "Drop-off & Welcome Circle", desc: "Children arrive, settle in, and gather in circle for the day's theme and intentions.", img: IMG.circleTime },
  { time: "9:30 AM", color: "#3BB4B8", title: "Ranger Mission of the Day", desc: "A core activity themed around a leadership skill — responsibility, initiative, or follow-through.", img: IMG.kidsPlaying },
  { time: "10:30 AM", color: "#F8A42B", title: "Snack & Play Break", desc: "Bread/cake and milk — plus free play to recharge those little brains.", img: IMG.snackTime },
  { time: "11:00 AM", color: "#EF4146", title: "Creative Expression Block", desc: "Art, drama or movement that lets children process and embody what they've learned.", img: IMG.girlPainting },
  { time: "12:00 PM", color: "#FFB820", title: "Reflection & Showcase Prep", desc: "Circle back — what did I try today? What will I bring home? Rehearse for final day showcase.", img: IMG.classroomLearn },
  { time: "12:30 PM", color: "#3BB4B8", title: "Pick-up", desc: "Signed handover to registered guardian. Daily reflection note goes home with each child.", img: IMG.momReading },
];

const centres = [
  { name: "Ampang", brand: "TCH", location: "U-Thant & Damai · East KL", img: "https://www.thechildrenshouse.com.my/wp-content/uploads/2025/01/Frame-10-1.png" },
  { name: "Ara Damansara", brand: "TCH", location: "Seri Villa cluster · Petaling Jaya", img: "https://www.thechildrenshouse.com.my/wp-content/uploads/2025/01/Frame-10-10.png" },
  { name: "Bangsar", brand: "TCH", location: "Lorong Maarof · KL City", img: "https://www.thechildrenshouse.com.my/wp-content/uploads/2025/01/Frame-10.png" },
  { name: "Mont Kiara", brand: "TCH", location: "Desa Sri Hartamas · North KL", img: "https://www.thechildrenshouse.com.my/wp-content/uploads/2025/01/Frame-10-3.png" },
  { name: "Bukit Jalil", brand: "TCH", location: "Pavilion 2 cluster · South KL", img: "https://www.thechildrenshouse.com.my/wp-content/uploads/2025/01/Frame-10-9.png" },
  { name: "Cyberjaya", brand: "TCH", location: "Cyberjaya · Sepang", img: "https://www.thechildrenshouse.com.my/wp-content/uploads/2025/01/Frame-10-1-2.png" },
  { name: "TTDI", brand: "SW", location: "Taman Tun Dr Ismail · KL", img: "https://www.thechildrenshouse.com.my/wp-content/uploads/2025/01/Frame-10-4.png" },
];

const pricing = [
  { tier: "EARLY BIRD", dates: "11–15 MAY", price: "RM 400", featured: false },
  { tier: "STANDARD", dates: "16–24 MAY", price: "RM 500", featured: true },
  { tier: "LATE", dates: "25–29 MAY", price: "RM 600", featured: false },
];

function Hero() {
  const reduced = useReducedMotion();
  return (
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #FFF6E1 0%, #FEECC5 60%, #FAF7F0 100%)" }}>
      <div className="max-w-[1440px] mx-auto px-5 lg:px-20 pt-8 lg:pt-14 pb-14 lg:pb-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <div className="flex-1 max-w-[680px]">
          <div className="flex items-center gap-2 text-sm text-[var(--ink-muted)] mb-6" style={{ fontFamily: "var(--font-body)" }}>
            <Link to="/" className="hover:underline">&larr; Programmes</Link>
            <span className="text-[var(--ink-subtle)]">/</span>
            <span className="text-[var(--brand-sun-deep)]" style={{ fontWeight: 600 }}>Sky Rangers</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-[var(--brand-navy)] text-[var(--brand-yellow)] text-xs tracking-[0.6px] px-3 py-1.5 rounded-full" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>PROGRAMME 01</span>
            <span className="bg-[var(--brand-yellow)] text-[var(--ink-dark)] text-xs tracking-[0.6px] px-3 py-1.5 rounded-full" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>AGES 4–6</span>
            <span className="bg-[var(--brand-cream)] text-[var(--ink-dark)] text-xs tracking-[0.6px] px-3 py-1.5 rounded-full" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>ENGLISH</span>
          </div>

          <motion.h1
            initial={reduced ? undefined : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl lg:text-[96px] lg:leading-[96px] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 900, letterSpacing: "-3px" }}
          >
            Sky<br />Rangers.
          </motion.h1>

          <p className="text-2xl lg:text-[36px] lg:leading-[44px] italic text-[var(--brand-teal-dark)] mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
            Building confident,<br />independent leaders.
          </p>

          <p className="text-lg lg:text-[20px] text-[var(--ink-body)] leading-[32px] mb-8" style={{ fontFamily: "var(--font-body)" }}>
            A hands-on leadership camp where 4–6 year-olds learn to take responsibility, speak up, finish what they start, and do it all with minimal reminders. Delivered in English through guided experiential play.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-2 mb-8">
            {[["DATES", "3 – 5 June 2026"], ["TIME", "9:00am – 12:30pm"], ["CENTRES", "7 across KL"]].map(([l, v]) => (
              <div key={l} className="border-t-2 border-[var(--brand-navy)] pt-4">
                <p className="text-[11px] tracking-[0.6px] text-[var(--ink-muted)]" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>{l}</p>
                <p className="text-[15px]" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>{v}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#form" className="bg-[var(--brand-navy)] text-[var(--brand-yellow)] px-8 py-5 rounded-full text-[17px] shadow-[0_10px_30px_rgba(18,26,56,0.3)] hover:scale-[1.02] transition-transform inline-flex items-center gap-2" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>
              Register interest &mdash; RM 400&ensp;&rarr;
            </a>
            <a href="#schedule" className="border-[1.5px] border-[var(--brand-navy)] px-7 py-[18px] rounded-full text-[17px] text-[var(--brand-navy)] hover:bg-[var(--brand-navy)] hover:text-[var(--brand-cream)] transition-colors" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>
              See sample day &rarr;
            </a>
          </div>
        </div>

        <motion.div
          initial={reduced ? undefined : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-full lg:w-[520px] h-[400px] lg:h-[620px] relative shrink-0"
        >
          <div className="absolute inset-4 rounded-[48px] shadow-[0_30px_60px_rgba(51,31,5,0.2)] overflow-hidden flex items-end justify-center" style={{ background: "radial-gradient(circle at 50% 30%, var(--brand-sun-light) 0%, var(--brand-yellow) 60%, var(--brand-sun) 100%)" }}>
            <img src={skyRangerBoy} alt="Sky Rangers mascot — boy stacking colourful rings" className="max-h-[95%] w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)]" />
          </div>
          <motion.div
            initial={reduced ? undefined : { opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="absolute bottom-4 right-4 lg:right-[40px] bg-[var(--brand-navy)] rounded-full px-5 py-4 shadow-[0_8px_16px_rgba(0,0,0,0.2)] -rotate-[8deg]"
          >
            <p className="text-xl text-[var(--brand-yellow)]" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>Small</p>
            <p className="text-xs text-[var(--brand-cream)] text-center" style={{ fontFamily: "var(--font-body)" }}>groups</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function PhotoStrip() {
  return (
    <section className="bg-white py-10 px-5 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-2xl overflow-hidden h-[220px] lg:h-[320px] flex items-end justify-center" style={{ background: "linear-gradient(180deg, #FFF6E1 0%, #FFD04B 100%)" }}>
            <img src={skyRangerBoy} alt="Sky Rangers mascot stacking rings" className="max-h-[95%] w-auto object-contain" />
          </div>
          <div className="rounded-2xl overflow-hidden h-[220px] lg:h-[320px] flex items-end justify-center" style={{ background: "linear-gradient(180deg, #FCDCDC 0%, #FFB6D4 100%)" }}>
            <img src={skyRangerGirl} alt="Sky Rangers mascot in superhero cape" className="max-h-[95%] w-auto object-contain" />
          </div>
          <div className="rounded-2xl overflow-hidden h-[220px] lg:h-[320px]">
            <ImageWithFallback src={IMG.kidsPlaying} alt="Children playing on a colourful playground" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Outcomes() {
  return (
    <section className="bg-[var(--brand-cream)] py-20 lg:py-28 px-5 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <p className="text-[var(--brand-sun-deep)] text-[13px] tracking-[1.56px] mb-5" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>WHAT YOUR CHILD LEARNS</p>
              <h2 className="text-4xl lg:text-[56px] lg:leading-[62px] tracking-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
                Seven habits for<br />
                <span className="italic" style={{ fontWeight: 600, color: "var(--brand-teal-dark)" }}>little leaders.</span>
              </h2>
            </div>
            <p className="text-lg text-[var(--ink-body)] leading-[30px] max-w-[380px]" style={{ fontFamily: "var(--font-body)" }}>
              Grounded in positive discipline and proactive learning theory, every activity builds a specific capability your child will carry home.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          {outcomes.slice(0, 4).map((o, i) => (
            <ScrollReveal key={o.num} delay={i * 0.08}>
              <div className={`${o.bg} ${o.text} rounded-3xl overflow-hidden h-full ${o.border ? 'border border-[var(--ink-border)]' : ''}`}>
                {o.img && (
                  <div className="h-[100px] lg:h-[120px] overflow-hidden">
                    <ImageWithFallback src={o.img} alt={o.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-5 lg:p-6">
                  <p className="text-[40px] leading-none tracking-tight opacity-85" style={{ fontFamily: "var(--font-body)", fontWeight: 800 }}>{o.num}</p>
                  <div className="mt-3">
                    <p className="text-[18px] leading-[26px] mb-1.5" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>{o.title}</p>
                    <p className="text-[13px] opacity-80 leading-[20px]" style={{ fontFamily: "var(--font-body)" }}>{o.desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {outcomes.slice(4).map((o, i) => (
            <ScrollReveal key={o.num} delay={i * 0.08}>
              <div className={`${o.bg} ${o.text} rounded-3xl overflow-hidden h-full ${o.border ? 'border border-[var(--ink-border)]' : ''}`}>
                {o.img && (
                  <div className="h-[100px] lg:h-[120px] overflow-hidden">
                    <ImageWithFallback src={o.img} alt={o.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-5 lg:p-6">
                  <p className="text-[40px] leading-none tracking-tight opacity-85" style={{ fontFamily: "var(--font-body)", fontWeight: 800 }}>{o.num}</p>
                  <div className="mt-3">
                    <p className="text-[18px] leading-[26px] mb-1.5" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>{o.title}</p>
                    <p className="text-[13px] opacity-80 leading-[20px]" style={{ fontFamily: "var(--font-body)" }}>{o.desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  return (
    <section id="schedule" className="bg-[var(--brand-navy)] py-20 lg:py-28 px-5 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <p className="text-[var(--brand-yellow)] text-[13px] tracking-[1.56px] mb-5" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>A TYPICAL DAY</p>
              <h2 className="text-4xl lg:text-[56px] lg:leading-[62px] tracking-tight text-[var(--brand-cream)]" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
                3.5 hours of<br />
                focused, <span className="italic" style={{ fontWeight: 600, color: "var(--brand-yellow)" }}>joyful play.</span>
              </h2>
            </div>
            <p className="text-lg text-[var(--ink-subtle)] leading-[30px] max-w-[380px]" style={{ fontFamily: "var(--font-body)" }}>
              Every session balances structured learning, creative play, movement, and reflection — with a snack break in between.
            </p>
          </div>
        </ScrollReveal>

        <div>
          {schedule.map((item, i) => (
            <ScrollReveal key={item.time} delay={i * 0.05}>
              <div className="border-t border-white/10 py-6 flex gap-4 lg:gap-8 items-start">
                <p className="w-24 lg:w-32 shrink-0 text-lg lg:text-[22px] tracking-tight" style={{ fontFamily: "var(--font-body)", fontWeight: 700, color: item.color }}>{item.time}</p>
                <div className="w-3 h-3 rounded-full shrink-0 mt-2" style={{ background: item.color }} />
                <div className="flex-1 flex gap-5 items-start">
                  <div className="flex-1">
                    <p className="text-lg lg:text-[22px] text-[var(--brand-cream)] mb-1.5" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>{item.title}</p>
                    <p className="text-[15px] text-[var(--ink-subtle)] leading-[24px]" style={{ fontFamily: "var(--font-body)" }}>{item.desc}</p>
                  </div>
                  {item.img && (
                    <div className="hidden lg:block w-[120px] h-[80px] rounded-xl overflow-hidden shrink-0">
                      <ImageWithFallback src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}

function Centres() {
  return (
    <section id="centres" className="bg-[var(--brand-cream)] py-20 lg:py-28 px-5 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <p className="text-[var(--brand-sun-deep)] text-[13px] tracking-[1.56px] mb-5" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>7 CENTRES &middot; CHOOSE YOURS</p>
              <h2 className="text-4xl lg:text-[56px] lg:leading-[62px] tracking-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
                Pick the centre<br />
                <span className="italic" style={{ fontWeight: 600, color: "var(--brand-teal-dark)" }}>closest to home.</span>
              </h2>
            </div>
            <p className="text-lg text-[var(--ink-body)] leading-[30px] max-w-[400px]" style={{ fontFamily: "var(--font-body)" }}>
              Sky Rangers runs across 7 trusted Busy Bees centres. Same programme, same curriculum — just whichever works for your family.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {centres.map((c, i) => (
            <ScrollReveal key={c.name} delay={i * 0.06}>
              <div className="bg-white rounded-[20px] overflow-hidden border border-[var(--ink-border)] h-full flex flex-col">
                <div className="h-[160px] overflow-hidden bg-[var(--brand-cream-warm)]">
                  <ImageWithFallback src={c.img} alt={`${c.name} centre`} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-[var(--brand-sun-light)] text-[var(--brand-sun-deep)] text-[11px] tracking-[0.6px] px-2.5 py-1 rounded-full" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>{c.brand}</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-[11px] text-[var(--ink-muted)]" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>Small group</span>
                    </div>
                  </div>
                  <p className="text-[22px] leading-[26px] mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>{c.name}</p>
                  <p className="text-[13px] text-[var(--ink-body)]" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>The children&rsquo;s house</p>
                  <p className="text-[12px] text-[var(--ink-muted)] mb-4" style={{ fontFamily: "var(--font-body)" }}>{c.location}</p>
                  <a href="#form" className="mt-auto bg-[var(--brand-sun-lighter)] rounded-full px-4 py-2.5 flex items-center justify-between text-[13px] text-[var(--ink-dark)] hover:bg-[var(--brand-yellow)] transition-colors" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>
                    <span>Select this centre</span><span>&rarr;</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="bg-[var(--brand-navy)] py-20 lg:py-28 px-5 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-[var(--brand-yellow)] text-[13px] tracking-[1.56px] mb-5" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>PRICING &middot; 3-DAY CAMP</p>
            <h2 className="text-4xl lg:text-[56px] lg:leading-[62px] tracking-tight text-[var(--brand-cream)]" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
              Register early,<br />
              <span className="italic" style={{ fontWeight: 600, color: "var(--brand-yellow)" }}>save more.</span>
            </h2>
            <p className="text-lg text-[var(--ink-subtle)] leading-[30px] max-w-[640px] mx-auto mt-4" style={{ fontFamily: "var(--font-body)" }}>
              Registration opens 11 May and closes 29 May 2026. The earlier you register, the more you save — same programme, all tiers.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-6 max-w-[960px] mx-auto">
          {pricing.map((p, i) => (
            <ScrollReveal key={p.tier} delay={i * 0.1}>
              <div className={`rounded-[28px] p-8 ${p.featured ? 'bg-[var(--brand-navy)] border-2 border-[var(--brand-yellow)] shadow-[0_0_40px_rgba(255,184,32,0.15)]' : 'bg-[var(--brand-navy-mid)] border border-white/[0.08]'}`}>
                <p className="text-[11px] tracking-[0.6px] text-[var(--brand-yellow)] mb-2" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>{p.tier}</p>
                <p className="text-[12px] text-[var(--ink-light)] mb-4" style={{ fontFamily: "var(--font-body)" }}>{p.dates}</p>
                <p className="text-[48px] leading-none tracking-tight text-[var(--brand-cream)] mb-6" style={{ fontFamily: "var(--font-body)", fontWeight: 800 }}>
                  <span className="text-[18px] align-top" style={{ fontWeight: 600 }}>RM</span> {p.price.replace("RM ", "")}
                </p>
                <ul className="space-y-2 mb-8 text-[14px] text-[var(--ink-subtle)]" style={{ fontFamily: "var(--font-body)" }}>
                  {["3 half-day sessions", "All materials included", "Snacks provided", "Take-home keepsake", "Parent reflection"].map(item => (
                    <li key={item} className="flex items-center gap-2"><span className="text-[var(--brand-teal)]">&#10003;</span>{item}</li>
                  ))}
                </ul>
                <a href="#form" className={`block text-center rounded-full py-3.5 text-[15px] transition-all hover:scale-[1.02] ${p.featured ? 'bg-[var(--brand-yellow)] text-[var(--brand-navy)]' : 'bg-white/10 text-[var(--brand-cream)] hover:bg-white/20'}`} style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>
                  Register interest &rarr;
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FormSection() {
  return (
    <section id="form" className="bg-[var(--brand-cream)] py-20 lg:py-28 px-5 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal className="max-w-[760px] mb-10 lg:mb-14">
          <p className="text-[var(--brand-sun-deep)] text-[13px] tracking-[1.56px] mb-5" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>RESERVE YOUR CHILD&rsquo;S SPOT</p>
          <h2 className="text-4xl lg:text-[48px] lg:leading-[54px] tracking-tight mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
            Reserve your <span className="italic" style={{ fontWeight: 600, color: "var(--brand-teal-dark)" }}>child&rsquo;s spot.</span>
          </h2>
          <p className="text-lg text-[var(--ink-body)] leading-[30px]" style={{ fontFamily: "var(--font-body)" }}>
            Fill in the form and we&rsquo;ll WhatsApp you within 24 hours. No payment at this stage &mdash; just an interest registration. Registration is open 11&ndash;29 May 2026; Early Bird pricing ends 15 May.
          </p>
        </ScrollReveal>
        <div className="w-full">
          <InterestForm />
        </div>
      </div>
    </section>
  );
}

function CrossLink() {
  return (
    <section className="bg-[var(--brand-red)] py-14 lg:py-14 px-5 lg:px-20 relative overflow-hidden">
      <div className="hidden lg:block absolute right-[100px] top-[-80px] w-72 h-72 rounded-full bg-[var(--brand-red-dark)] opacity-35" />
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        <div className="max-w-[720px]">
          <p className="text-[var(--brand-yellow-light)] text-[13px] tracking-[1.56px] mb-4" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>ALSO AVAILABLE</p>
          <h2 className="text-3xl lg:text-[48px] lg:leading-[54px] tracking-tight text-[var(--brand-cream)] mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
            Looking for Mandarin?<br />
            <span className="italic" style={{ fontWeight: 600, color: "var(--brand-yellow-light)" }}>Meet Brave Voices.</span>
          </h2>
          <p className="text-lg text-[var(--brand-cream)] leading-[30px] mb-6" style={{ fontFamily: "var(--font-body)" }}>
            Our Mandarin speech-and-drama camp on boundaries &amp; self-protection for 5–6 year-olds. Same dates, four Small Wonder centres.
          </p>
          <Link to="/brave-voices" className="bg-[var(--brand-cream)] text-[var(--brand-red-dark)] px-7 py-[18px] rounded-full text-[17px] hover:scale-[1.02] transition-transform inline-flex items-center gap-2" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>
            Explore Brave Voices&ensp;&rarr;
          </Link>
        </div>
        <div className="w-[200px] lg:w-[260px] h-[250px] lg:h-[300px] rounded-3xl overflow-hidden -rotate-[6deg] shadow-lg shrink-0 flex items-end justify-center" style={{ background: "linear-gradient(180deg, #FCDCDC 0%, #EF4146 100%)" }}>
          <img src={braveBee} alt="Brave Voices bee mascot" className="max-h-[95%] w-auto object-contain" />
        </div>
      </div>
    </section>
  );
}

export function SkyRangersPage() {
  return (
    <>
      <Hero />
      <PhotoStrip />
      <Outcomes />
      <Schedule />
      <Centres />
      <Pricing />
      <FormSection />
      <CrossLink />
    </>
  );
}
