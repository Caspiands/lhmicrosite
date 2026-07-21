import { Link } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import { ScrollReveal } from "./ScrollReveal";
import { InterestForm } from "./InterestForm";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { IMG } from "./images";
import beeIcon from "../../imports/Beeicon.png";
import braveHeroImg from "../../imports/pexels-yankrukov-8613111.jpg";
import braveFormImg from "../../imports/pexels-pavel-danilyuk-8422142.jpg";

const outcomes = [
  { num: "01", title: "Self-awareness", desc: "Develop self-awareness and appreciation of themselves.", bg: "bg-[var(--brand-red)]", text: "text-[var(--brand-cream)]", mascot: true },
  { num: "02", title: "Personal boundaries", desc: "Understand personal boundaries and respect for self and others.", bg: "bg-[var(--brand-blue)]", text: "text-[var(--brand-yellow-light)]" },
  { num: "03", title: "Build confidence", desc: "Express themselves through speech and drama.", bg: "bg-[var(--brand-yellow-light)]", text: "text-[var(--brand-blue)]" },
  { num: "04", title: "Say \"No\" with confidence", desc: "Learn how to say \u201cNo\u201d with confidence in uncomfortable situations.", bg: "bg-white", text: "text-[var(--brand-blue)]", border: true },
  { num: "05", title: "Recognise behaviour", desc: "Recognise different types of behaviour (e.g. kindness, bullying).", bg: "bg-white", text: "text-[var(--brand-blue)]", border: true },
  { num: "06", title: "Positive values", desc: "Respect, self-control, love and compassion in daily language and play.", bg: "bg-[var(--brand-red)]", text: "text-[var(--brand-cream)]" },
  { num: "07", title: "Courage to seek help", desc: "Build courage to face challenges and seek help when needed.", bg: "bg-[var(--brand-yellow-light)]", text: "text-[var(--brand-blue)]" },
];

const schedule = [
  { time: "9:00 AM", color: "#FFD04B", title: "Welcome Circle \u00b7 \u6668\u95f4\u5708", desc: "Children arrive, settle in, share a Mandarin greeting and set the day\u2019s intention together.", img: IMG.circleTime },
  { time: "9:30 AM", color: "#EF4146", title: "Story of the Day \u00b7 \u4eca\u65e5\u6545\u4e8b", desc: "A themed story that sets up the day\u2019s value \u2014 boundaries, kindness, or courage.", img: IMG.storytelling },
  { time: "10:00 AM", color: "#3BB4B8", title: "Drama Exploration \u00b7 \u620f\u5267\u63a2\u7d22", desc: "Children embody characters, practise saying \u2018no\u2019, role-play standing up for themselves.", img: IMG.dramaKid },
  { time: "10:45 AM", color: "#F8A42B", title: "Snack & Free Play", desc: "Bread/cake and milk \u2014 plus quiet time to talk and digest (literally and figuratively).", img: IMG.snackTime },
  { time: "11:15 AM", color: "#FFD04B", title: "Creative Voice \u00b7 \u521b\u610f\u8868\u8fbe", desc: "Art, poetry, or music that lets children process what they\u2019ve learned in their own way.", img: IMG.kidsDrawing },
  { time: "12:00 PM", color: "#EF4146", title: "Showcase Rehearsal", desc: "Practise for the final day performance or recorded video \u2014 building stage confidence.", img: IMG.boySpeaking },
  { time: "12:30 PM", color: "#3BB4B8", title: "Pick-up", desc: "Signed handover. Daily reflection note goes home with each child, in Mandarin and English.", img: IMG.familyHappy },
];

const centres = [
  { name: "Mutiara Damansara", brand: "SW", location: "Petaling Jaya \u00b7 West", img: "https://smallwonderpreschool.com/MY/wp-content/uploads/2022/11/MD-mob.jpeg" },
  { name: "Eco Ardence", brand: "SW", location: "Setia Alam \u00b7 Shah Alam", img: "https://smallwonderpreschool.com/MY/wp-content/uploads/2025/10/Eco-Ardence.webp" },
  { name: "Bandar Parklands", brand: "SW", location: "Klang \u00b7 South", img: "https://smallwonderpreschool.com/MY/wp-content/uploads/2025/10/Bandar-Parklands.webp" },
  { name: "OUG", brand: "SW", location: "Old Klang Road \u00b7 KL South", img: "https://smallwonderpreschool.com/MY/wp-content/uploads/2025/10/Taman-OUG-Junior-v1.webp" },
  { name: "Bandar Bukit Tinggi", brand: "SW", location: "Klang \u00b7 South", img: "https://smallwonderpreschool.com/MY/wp-content/uploads/2022/11/MD-mob.jpeg" },
];

const pricing = [
  { tier: "EARLY BIRD", dates: "11\u201315 MAY", price: "RM 450", featured: false },
  { tier: "USUAL PRICE", dates: "16\u201324 MAY", price: "RM 650", featured: true },
  { tier: "AFTER 25 MAY", dates: "25\u201329 MAY", price: "RM 550", featured: false },
];

function Hero() {
  const reduced = useReducedMotion();
  return (
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #FDF5E8 0%, #FCDCDC 50%, #FAF7F0 100%)" }}>
      <div className="max-w-[1440px] mx-auto px-5 lg:px-20 pt-8 lg:pt-14 pb-14 lg:pb-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <div className="flex-1 max-w-[680px]">
          <div className="flex items-center gap-2 text-sm text-[var(--ink-muted)] mb-6" style={{ fontFamily: "var(--font-body)" }}>
            <Link to="/" className="hover:underline">&larr; Programmes</Link>
            <span className="text-[var(--ink-subtle)]">/</span>
            <span className="text-[var(--brand-red-dark)]" style={{ fontWeight: 600 }}>Brave Voices</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-[var(--brand-blue)] text-[var(--brand-yellow-light)] text-xs tracking-[0.6px] px-3 py-1.5 rounded-full" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>PROGRAMME 02</span>
            <span className="bg-[var(--brand-red)] text-[var(--brand-cream)] text-xs tracking-[0.6px] px-3 py-1.5 rounded-full" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>AGES 5 & 6</span>
            <span className="bg-[var(--brand-red-dark)] text-[var(--brand-cream)] text-xs tracking-[0.6px] px-3 py-1.5 rounded-full" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>LIMITED TO 10 SEATS</span>
          </div>

          <motion.h1
            initial={reduced ? undefined : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl lg:text-[96px] lg:leading-[96px] tracking-tight mb-6 text-[var(--brand-blue)]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 900, letterSpacing: "-3px" }}
          >
            Brave<br />Voices.
          </motion.h1>

          <p className="text-2xl lg:text-[36px] lg:leading-[44px] italic text-[var(--brand-red-dark)] mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
            A Mandarin camp on<br />boundaries &amp; self-protection.
          </p>

          <p className="text-lg lg:text-[20px] text-[var(--ink-body)] leading-[32px] mb-8" style={{ fontFamily: "var(--font-body)" }}>
            Join us for an engaging Mandarin speech and drama-based holiday camp designed to help children build confidence, self-awareness and personal safety skills through play, storytelling and performance.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-2 mb-8">
            {[["DATES", "3 – 5 June 2026"], ["TIME", "9:00am – 12:30pm"], ["CENTRES", "5 Small Wonder"]].map(([l, v]) => (
              <div key={l} className="border-t-2 border-[var(--brand-blue)] pt-4">
                <p className="text-[11px] tracking-[0.6px] text-[var(--ink-muted)]" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>{l}</p>
                <p className="text-[15px] text-[var(--brand-blue)]" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>{v}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#form" className="bg-[var(--brand-red)] text-[var(--brand-cream)] px-8 py-5 rounded-full text-[17px] shadow-[0_10px_30px_rgba(51,13,13,0.3)] hover:scale-[1.02] transition-transform inline-flex items-center gap-2" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>
              Register interest &mdash; RM 450&ensp;&rarr;
            </a>
            <a href="#schedule" className="border-[1.5px] border-[var(--brand-blue)] px-7 py-[18px] rounded-full text-[17px] text-[var(--brand-blue)] hover:bg-[var(--brand-blue)] hover:text-[var(--brand-cream)] transition-colors" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>
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
          <div className="absolute inset-4 rounded-[48px] shadow-[0_30px_60px_rgba(51,13,13,0.25)] overflow-hidden">
            <ImageWithFallback src={braveHeroImg} alt="Preschool children at a speech and drama class" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-red)]/40 via-transparent to-transparent" />
          </div>
          <motion.div
            initial={reduced ? undefined : { opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="absolute bottom-4 right-4 bg-[var(--brand-navy)] rounded-full px-5 py-4 shadow-[0_8px_16px_rgba(0,0,0,0.2)] rotate-[8deg]"
          >
            <p className="text-xl text-[var(--brand-yellow-light)]" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>Small</p>
            <p className="text-xs text-[var(--brand-cream)] text-center" style={{ fontFamily: "var(--font-body)" }}>groups</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function PhotoStrip() {
  const tiles = [
    { img: "https://images.unsplash.com/photo-1686285996307-5d1f9fb13abc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", overlay: "linear-gradient(180deg, rgba(255,208,75,0.15) 0%, rgba(255,208,75,0.85) 100%)", label: "\u81ea\u4fe1", sub: "Confidence", textColor: "var(--brand-blue)" },
    { img: "https://images.unsplash.com/photo-1667386425968-c36b01b63e54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", overlay: "linear-gradient(180deg, rgba(252,220,220,0.15) 0%, rgba(239,65,70,0.85) 100%)", label: "\u52c7\u6562", sub: "Courage", textColor: "var(--brand-cream)" },
    { img: "https://images.unsplash.com/photo-1641713423348-4677071d2dfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", overlay: "linear-gradient(180deg, rgba(212,233,255,0.15) 0%, rgba(42,54,140,0.85) 100%)", label: "\u5c0a\u91cd", sub: "Respect", textColor: "var(--brand-cream)" },
  ];
  return (
    <section className="bg-white py-10 px-5 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {tiles.map((t, i) => (
            <div key={i} className="rounded-2xl overflow-hidden h-[220px] lg:h-[320px] relative">
              <ImageWithFallback src={t.img} alt={t.sub} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: t.overlay }} />
              <div className="absolute top-5 left-5" style={{ color: t.textColor }}>
                <p className="text-[36px] lg:text-[48px] leading-none" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>{t.label}</p>
                <p className="text-[13px] tracking-[1.2px] mt-1" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>{t.sub.toUpperCase()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OutcomesSection() {
  return (
    <section className="bg-[var(--brand-cream)] py-20 lg:py-28 px-5 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <p className="text-[var(--brand-red-dark)] text-[13px] tracking-[1.56px] mb-5" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>WHAT YOUR CHILD LEARNS</p>
              <h2 className="text-4xl lg:text-[56px] lg:leading-[62px] tracking-tight text-[var(--brand-blue)]" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
                Seven seeds for<br />
                <span className="italic" style={{ fontWeight: 600, color: "var(--brand-red)" }}>brave little voices.</span>
              </h2>
            </div>
            <p className="text-lg text-[var(--ink-body)] leading-[30px] max-w-[380px]" style={{ fontFamily: "var(--font-body)" }}>
              Age-appropriate storytelling, role-play, and guided discussion &mdash; all in Mandarin &mdash; that plants the seeds of self-awareness, confidence, and personal safety.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          {outcomes.slice(0, 4).map((o, i) => (
            <ScrollReveal key={o.num} delay={i * 0.08}>
              <div className={`${o.bg} ${o.text} rounded-3xl overflow-hidden h-full ${o.border ? 'border border-[var(--ink-border)]' : ''}`}>
                {o.mascot && (
                  <div className="h-[120px] lg:h-[150px] flex items-end justify-center overflow-hidden">
                    <img src={beeIcon} alt="Brave Voices bee mascot" className="h-full w-auto object-contain" />
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
                {o.mascot && (
                  <div className="h-[120px] lg:h-[150px] flex items-end justify-center overflow-hidden">
                    <img src={beeIcon} alt="Brave Voices bee mascot" className="h-full w-auto object-contain" />
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

function ScheduleSection() {
  return (
    <section id="schedule" className="bg-[var(--brand-blue)] py-20 lg:py-28 px-5 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <p className="text-[var(--brand-yellow-light)] text-[13px] tracking-[1.56px] mb-5" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>A TYPICAL DAY</p>
              <h2 className="text-4xl lg:text-[56px] lg:leading-[62px] tracking-tight text-[var(--brand-cream)]" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
                3.5 hours of<br />
                <span className="italic" style={{ fontWeight: 600, color: "var(--brand-yellow-light)" }}>story, play &amp; stage.</span>
              </h2>
            </div>
            <p className="text-lg text-[var(--ink-subtle)] leading-[30px] max-w-[400px]" style={{ fontFamily: "var(--font-body)" }}>
              Sensitive topics (personal safety, body respect) are handled with age-appropriate care. No graphic content, no fear-based teaching &mdash; just clear, empowering language.
            </p>
          </div>
        </ScrollReveal>

        <div>
          {schedule.map((item, i) => (
            <ScrollReveal key={item.time} delay={i * 0.05}>
              <div className="border-t border-white/[0.12] py-6 flex gap-4 lg:gap-8 items-start">
                <p className="w-24 lg:w-32 shrink-0 text-lg lg:text-[22px] tracking-tight" style={{ fontFamily: "var(--font-body)", fontWeight: 700, color: item.color }}>{item.time}</p>
                <div className="w-3 h-3 rounded-full shrink-0 mt-2" style={{ background: item.color }} />
                <div className="flex-1 flex gap-5 items-start">
                  <div className="flex-1">
                    <p className="text-lg lg:text-[22px] text-[var(--brand-cream)] mb-1.5" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>{item.title}</p>
                    <p className="text-[15px] text-[var(--ink-subtle)] leading-[24px]" style={{ fontFamily: "var(--font-body)" }}>{item.desc}</p>
                  </div>
                  <div className="hidden lg:block w-[120px] h-[80px] rounded-xl shrink-0 overflow-hidden ring-2" style={{ boxShadow: `0 0 0 2px ${item.color}` }}>
                    <ImageWithFallback src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
          <div className="border-t border-white/[0.12]" />
        </div>
      </div>
    </section>
  );
}

function CentresSection() {
  return (
    <section className="bg-[var(--brand-cream)] py-20 lg:py-28 px-5 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <p className="text-[var(--brand-red-dark)] text-[13px] tracking-[1.56px] mb-5" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>5 SMALL WONDER CENTRES</p>
              <h2 className="text-4xl lg:text-[56px] lg:leading-[62px] tracking-tight text-[var(--brand-blue)]" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
                Small groups.<br />
                <span className="italic" style={{ fontWeight: 600, color: "var(--brand-red)" }}>Warm spaces.</span>
              </h2>
            </div>
            <p className="text-lg text-[var(--ink-body)] leading-[30px] max-w-[400px]" style={{ fontFamily: "var(--font-body)" }}>
              Limited to 10 seats only across Small Wonder centres, led in Mandarin by trained speech &amp; drama specialists. Pick the centre closest to home.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {centres.map((c, i) => (
            <ScrollReveal key={c.name} delay={i * 0.06}>
              <div className="bg-white rounded-[20px] overflow-hidden border border-[var(--ink-border)] h-full flex flex-col">
                <div className="h-[160px] overflow-hidden bg-[var(--brand-cream-warm)]">
                  <ImageWithFallback src={c.img} alt={`${c.name} Small Wonder centre`} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-[var(--brand-cream-warm)] text-[var(--brand-red-dark)] text-[11px] tracking-[0.6px] px-2.5 py-1 rounded-full" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>{c.brand}</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-[11px] text-[var(--ink-muted)]" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>10 seats</span>
                    </div>
                  </div>
                  <p className="text-[22px] leading-[26px] mb-2 text-[var(--brand-blue)]" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>{c.name}</p>
                  <p className="text-[13px] text-[var(--ink-body)]" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>Small Wonder</p>
                  <p className="text-[12px] text-[var(--ink-muted)] mb-4" style={{ fontFamily: "var(--font-body)" }}>{c.location}</p>
                  <a href="#form" className="mt-auto bg-[var(--brand-cream-warm)] rounded-full px-4 py-2.5 flex items-center justify-between text-[13px] text-[var(--brand-blue)] hover:bg-[var(--brand-yellow-light)] transition-colors" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>
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

function PricingSection() {
  return (
    <section className="bg-[var(--brand-blue)] py-20 lg:py-28 px-5 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-[var(--brand-yellow-light)] text-[13px] tracking-[1.56px] mb-5" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>PRICING &middot; 3-DAY CAMP</p>
            <h2 className="text-4xl lg:text-[56px] lg:leading-[62px] tracking-tight text-[var(--brand-cream)]" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
              Register early,<br />
              <span className="italic" style={{ fontWeight: 600, color: "var(--brand-yellow-light)" }}>save more.</span>
            </h2>
            <p className="text-lg text-[var(--ink-subtle)] leading-[30px] max-w-[640px] mx-auto mt-4" style={{ fontFamily: "var(--font-body)" }}>
              Limited to 10 seats only. Registration closes on 29th May 2026. The earlier you register, the more you save.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-6 max-w-[960px] mx-auto">
          {pricing.map((p, i) => (
            <ScrollReveal key={p.tier} delay={i * 0.1}>
              <div className={`rounded-[28px] p-8 ${p.featured ? 'bg-[var(--brand-blue)] border-2 border-[var(--brand-yellow-light)] shadow-[0_0_40px_rgba(255,208,75,0.15)]' : 'bg-[rgba(255,255,255,0.06)] border border-white/[0.08]'}`}>
                <p className="text-[11px] tracking-[0.6px] text-[var(--brand-yellow-light)] mb-2" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>{p.tier}</p>
                <p className="text-[12px] text-[var(--ink-light)] mb-4" style={{ fontFamily: "var(--font-body)" }}>{p.dates}</p>
                <p className="text-[48px] leading-none tracking-tight text-[var(--brand-cream)] mb-6" style={{ fontFamily: "var(--font-body)", fontWeight: 800 }}>
                  <span className="text-[18px] align-top" style={{ fontWeight: 600 }}>RM</span> {p.price.replace("RM ", "")}
                </p>
                <ul className="space-y-2 mb-8 text-[14px] text-[var(--ink-subtle)]" style={{ fontFamily: "var(--font-body)" }}>
                  {["3 half-day sessions", "All materials included", "Snacks provided", "Drama showcase", "Parent reflection (bilingual)"].map(item => (
                    <li key={item} className="flex items-center gap-2"><span className="text-[var(--brand-yellow-light)]">&#10003;</span>{item}</li>
                  ))}
                </ul>
                <a href="#form" className={`block text-center rounded-full py-3.5 text-[15px] transition-all hover:scale-[1.02] ${p.featured ? 'bg-[var(--brand-red)] text-[var(--brand-cream)]' : 'bg-white/10 text-[var(--brand-cream)] hover:bg-white/20'}`} style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>
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
          <p className="text-[var(--brand-red-dark)] text-[13px] tracking-[1.56px] mb-5" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>GIVE YOUR CHILD THE WORDS</p>
          <h2 className="text-4xl lg:text-[48px] lg:leading-[54px] tracking-tight mb-6 text-[var(--brand-blue)]" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
            Give your child <span className="italic" style={{ fontWeight: 600, color: "var(--brand-red)" }}>the words.</span>
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
    <section className="bg-[var(--brand-yellow)] py-14 px-5 lg:px-20 relative overflow-hidden">
      <div className="hidden lg:block absolute right-[100px] top-[-80px] w-72 h-72 rounded-full bg-[var(--brand-sun-dark)] opacity-35" />
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        <div className="max-w-[720px]">
          <p className="text-[var(--brand-sun-deep)] text-[13px] tracking-[1.56px] mb-4" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>ALSO AVAILABLE</p>
          <h2 className="text-3xl lg:text-[48px] lg:leading-[54px] tracking-tight text-[var(--ink-dark)] mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
            Prefer English?<br />
            <span className="italic" style={{ fontWeight: 600, color: "var(--brand-teal-dark)" }}>Meet Sky Rangers.</span>
          </h2>
          <p className="text-lg text-[var(--ink-dark)] leading-[30px] mb-6" style={{ fontFamily: "var(--font-body)" }}>
            Our English leadership camp for 4–6 year-olds. Same dates, seven centres across KL.
          </p>
          <Link to="/sky-rangers" className="bg-[var(--brand-navy)] text-[var(--brand-yellow)] px-7 py-[18px] rounded-full text-[17px] hover:scale-[1.02] transition-transform inline-flex items-center gap-2" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>
            Explore Sky Rangers&ensp;&rarr;
          </Link>
        </div>
        <div className="w-[200px] lg:w-[260px] h-[250px] lg:h-[300px] rounded-3xl overflow-hidden rotate-[6deg] shadow-lg shrink-0">
          <ImageWithFallback src={IMG.kidsPlaying} alt="Asian children playing together" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

export function BraveVoicesPage() {
  return (
    <>
      <Hero />
      <PhotoStrip />
      <OutcomesSection />
      <ScheduleSection />
      <CentresSection />
      <PricingSection />
      <FormSection />
      <CrossLink />
    </>
  );
}
