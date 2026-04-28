import { Link } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import { ScrollReveal } from "./ScrollReveal";
import { FAQ } from "./FAQ";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { IMG } from "./images";
import beeMascot from "../../imports/Beeicon.png";
import braveTalkingImg from "../../imports/pexels-yankrukov-8613111.jpg";
import skyRangerBoy from "../../imports/SKYRANESD2.png";
import skyRangerGirl from "../../imports/skyrAGES.png";

/* ── Hero ── */
function Hero() {
  const reduced = useReducedMotion();
  return (
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #FFF6E1 0%, #FEECC5 50%, #FAF7F0 100%)" }}>
      {/* Decorative blobs */}
      <div className="hidden lg:block absolute right-[200px] top-20 w-80 h-80 rounded-full bg-[var(--brand-sun)] opacity-20" />
      <div className="hidden lg:block absolute left-[-80px] bottom-[-40px] w-64 h-64 rounded-full bg-[var(--brand-red)] opacity-10" />

      <div className="max-w-[1440px] mx-auto px-5 lg:px-20 pt-10 lg:pt-14 pb-10 lg:pb-14">
        {/* Top text */}
        <div className="text-center relative z-10 mb-10 lg:mb-14">
          <motion.div
            initial={reduced ? undefined : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 border-[1.5px] border-[var(--brand-sun)] rounded-full pl-3.5 pr-4 py-2 mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--brand-sun)]" />
            <span className="text-[13px] tracking-[1.56px] text-[var(--brand-sun-deep)]" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>HOLIDAY CAMP&ensp;&middot;&ensp;3&ndash;5 JUNE 2026</span>
          </motion.div>

          <motion.h1
            initial={reduced ? undefined : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[44px] lg:text-[80px] lg:leading-[86px] tracking-tight mb-5 mx-auto max-w-[900px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 900, letterSpacing: "-2px" }}
          >
            A June to <span className="italic" style={{ fontWeight: 600, color: "var(--brand-sun-dark)" }}>Remember.</span><br />
            Skills for a <span className="italic" style={{ fontWeight: 600, color: "var(--brand-red)" }}>Lifetime.</span>
          </motion.h1>

          <motion.p
            initial={reduced ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg lg:text-[20px] text-[var(--ink-body)] leading-[32px] max-w-[640px] mx-auto mb-6"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Two hands-on, 3-day holiday programmes for curious 4 to 6 year-olds &mdash; designed by Learning Horizon and hosted across 11 Klang Valley centres.
          </motion.p>

          <motion.div
            initial={reduced ? undefined : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
          >
            <Link to="/#programmes" className="bg-[var(--brand-navy)] text-[var(--brand-cream)] px-7 py-[18px] rounded-full text-[17px] shadow-[0_8px_24px_rgba(18,26,56,0.25)] hover:scale-[1.02] transition-transform inline-flex items-center justify-center gap-2" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>
              Explore programmes&ensp;&rarr;
            </Link>
            <Link to="/#centres" className="border-[1.5px] border-[var(--brand-navy)] px-6 py-[16px] rounded-full text-[17px] text-[var(--brand-navy)] hover:bg-[var(--brand-navy)] hover:text-[var(--brand-cream)] transition-colors inline-flex items-center justify-center" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>
              See all centres
            </Link>
          </motion.div>

          <div className="flex flex-wrap gap-8 justify-center">
            {[["9:00am – 12:30pm", "Half-day sessions"], ["Ages 4 – 6", "Early learners"], ["11 centres", "Across KL"]].map(([top, bottom]) => (
              <div key={top} className="text-center">
                <p className="text-[15px] text-[var(--ink-dark)]" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>{top}</p>
                <p className="text-[13px] text-[var(--ink-muted)]" style={{ fontFamily: "var(--font-body)" }}>{bottom}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Two programme cards side-by-side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {/* Sky Rangers */}
          <motion.div
            initial={reduced ? undefined : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <Link to="/sky-rangers" className="block group">
              <div className="relative rounded-[28px] overflow-hidden h-[280px] sm:h-[340px] lg:h-[400px] shadow-[0_16px_48px_rgba(51,31,5,0.18)]" style={{ background: "radial-gradient(circle at 50% 30%, #FFF6E1 0%, #FFD04B 60%, #F8A42B 100%)" }}>
                <div className="absolute inset-0 flex items-end justify-center gap-4 px-6 pt-6">
                  <img src={skyRangerBoy} alt="Sky Rangers mascot stacking rings" className="h-[82%] w-auto object-contain object-bottom group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_12px_20px_rgba(0,0,0,0.25)]" />
                  <img src={skyRangerGirl} alt="Sky Rangers mascot in pink cape" className="h-[88%] w-auto object-contain object-bottom group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_12px_20px_rgba(0,0,0,0.25)]" />
                </div>
                <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(45,33,6,0.75) 100%)" }} />
                <div className="absolute top-5 left-5">
                  <span className="bg-[var(--brand-teal)] text-white text-xs tracking-[0.8px] px-3 py-1.5 rounded-full" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>PROGRAMME 01</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] leading-[1] text-white tracking-tight mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
                    Sky Rangers
                  </h2>
                  <p className="text-[16px] lg:text-[18px] text-white/90 leading-[24px]" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
                    Leadership &amp; independence in English
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-[13px] px-3 py-1 rounded-full" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>Ages 4–6</span>
                    <span className="bg-white/20 backdrop-blur-sm text-white text-[13px] px-3 py-1 rounded-full" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>English</span>
                    <span className="bg-[var(--brand-sun)] text-[var(--brand-navy)] text-[13px] px-3 py-1 rounded-full" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>From RM 400</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Brave Voices */}
          <motion.div
            initial={reduced ? undefined : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <Link to="/brave-voices" className="block group">
              <div className="relative rounded-[28px] overflow-hidden h-[280px] sm:h-[340px] lg:h-[400px] shadow-[0_16px_48px_rgba(38,13,26,0.22)]">
                <ImageWithFallback src={braveTalkingImg} alt="Child presenting at the board while classmates watch" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(140,30,50,0.75) 100%)" }} />
                <div className="absolute top-5 left-5">
                  <span className="bg-[var(--brand-yellow-light)] text-[var(--brand-red)] text-xs tracking-[0.8px] px-3 py-1.5 rounded-full" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>PROGRAMME 02</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] leading-[1] text-white tracking-tight mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
                    Brave Voices
                  </h2>
                  <p className="text-[16px] lg:text-[18px] text-white/90 leading-[24px]" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
                    Boundaries &amp; self-protection in Mandarin
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-[13px] px-3 py-1 rounded-full" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>Ages 5–6</span>
                    <span className="bg-white/20 backdrop-blur-sm text-white text-[13px] px-3 py-1 rounded-full" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>Mandarin</span>
                    <span className="bg-[var(--brand-sun)] text-[var(--brand-navy)] text-[13px] px-3 py-1 rounded-full" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>From RM 350</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Limited seats badge */}
        <motion.div
          initial={reduced ? undefined : { opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, type: "spring" }}
          className="flex justify-center mt-6"
        >
          <div className="bg-[var(--brand-navy)] rounded-full px-6 py-3 shadow-[0_6px_16px_rgba(0,0,0,0.15)] inline-flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-sun)] animate-pulse" />
            <p className="text-[15px] text-[var(--brand-cream)]" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>Limited seats available &mdash; early bird pricing ends 15 May</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Programme Cards ── */
function ProgrammeCards() {
  return (
    <section id="programmes" className="py-12 lg:py-16 px-5 lg:px-20" style={{ background: "linear-gradient(180deg, #FAF7F0 0%, #FEECC5 100%)" }}>
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-14">
            <div>
              <p className="text-[var(--brand-sun-deep)] text-[13px] tracking-[1.56px] mb-3" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>02&ensp;/&ensp;THE PROGRAMMES</p>
              <h2 className="text-4xl lg:text-[56px] lg:leading-[62px] tracking-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
                Two programmes.<br />
                <span className="italic" style={{ fontWeight: 600, color: "var(--brand-sun-dark)" }}>One unforgettable June.</span>
              </h2>
            </div>
            <p className="text-lg text-[var(--ink-body)] leading-[30px] max-w-[420px]" style={{ fontFamily: "var(--font-body)" }}>
              Each programme runs for 3 days of half-day sessions. Choose the one that fits your child &mdash; or pair them with siblings at the same centre cluster.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Sky Rangers Card */}
          <ScrollReveal delay={0.1}>
            <div className="bg-[var(--brand-yellow)] rounded-[36px] overflow-hidden h-full flex flex-col">
              <div className="h-[220px] lg:h-[280px] relative overflow-hidden" style={{ background: "radial-gradient(circle at 50% 30%, #FFF6E1 0%, #FFD04B 70%, #F8A42B 100%)" }}>
                <div className="absolute inset-0 flex items-end justify-center gap-3 px-6">
                  <img src={skyRangerBoy} alt="Sky Rangers mascot stacking rings" className="h-[88%] w-auto object-contain object-bottom drop-shadow-[0_12px_20px_rgba(0,0,0,0.25)]" />
                  <img src={skyRangerGirl} alt="Sky Rangers mascot in pink cape" className="h-[94%] w-auto object-contain object-bottom drop-shadow-[0_12px_20px_rgba(0,0,0,0.25)]" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-yellow)] via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-5 left-5">
                  <span className="bg-[var(--brand-navy)] text-[var(--brand-yellow)] text-xs tracking-[0.6px] px-3 py-1.5 rounded-full" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>PROGRAMME 01&ensp;&middot;&ensp;KIDZCANLEAD</span>
                </div>
              </div>
              <div className="p-8 lg:p-10 flex flex-col flex-1">
                <h3 className="text-4xl lg:text-[56px] lg:leading-[56px] tracking-tight mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 900, color: "var(--ink-dark)" }}>
                  Sky Rangers
                </h3>
                <p className="text-[22px] leading-[30px] mb-4 text-[var(--brand-teal-dark)]" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
                  Building confident, independent leaders.
                </p>
                <p className="text-[16px] text-[var(--ink-dark)] leading-[26px] mb-6" style={{ fontFamily: "var(--font-body)" }}>
                  A hands-on leadership camp where children take responsibility, speak up, and complete real tasks with minimal reminders.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[["AGES", "4 – 6"], ["LANGUAGE", "English"], ["SEATS", "15 / centre"]].map(([label, val]) => (
                    <div key={label}>
                      <p className="text-[11px] tracking-[0.6px] text-[var(--brand-teal-dark)]" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>{label}</p>
                      <p className="text-[20px]" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>{val}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2.5 mb-8">
                  {["Take responsibility for actions and tasks", "Build independence through consistent habits", "Practise self-discipline and perseverance", "Daily showcase to celebrate courage", "Snacks: bread/cake & milk included"].map(t => (
                    <div key={t} className="flex items-start gap-3">
                      <span className="bg-[var(--brand-teal-dark)] text-[var(--brand-yellow)] w-5 h-5 rounded-full flex items-center justify-center text-[12px] shrink-0 mt-0.5">&#10003;</span>
                      <span className="text-[15px]" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>{t}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 border-t border-black/10">
                  <div>
                    <p className="text-[11px] tracking-[0.6px] text-[var(--brand-teal-dark)]" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>EARLY BIRD (11&ndash;15 MAY)</p>
                    <p className="text-[36px] tracking-tight" style={{ fontFamily: "var(--font-body)", fontWeight: 800 }}>RM 400</p>
                  </div>
                  <Link to="/sky-rangers" className="bg-[var(--brand-navy)] text-[var(--brand-yellow)] px-5 py-3.5 rounded-full text-[15px] mt-4 sm:mt-0 hover:scale-[1.02] transition-transform inline-flex items-center gap-1.5" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>
                    Explore Sky Rangers&ensp;&rarr;
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Brave Voices Card */}
          <ScrollReveal delay={0.2}>
            <div className="bg-[var(--brand-red)] rounded-[36px] overflow-hidden h-full flex flex-col text-[var(--brand-cream)]">
              <div className="h-[220px] lg:h-[280px] relative overflow-hidden">
                <ImageWithFallback src={braveTalkingImg} alt="Child presenting at the board while classmates listen" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-red)] via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-5 left-5">
                  <span className="bg-[var(--brand-yellow-light)] text-[var(--brand-blue)] text-xs tracking-[0.6px] px-3 py-1.5 rounded-full" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>PROGRAMME 02&ensp;&middot;&ensp;POCO FUN PLAY</span>
                </div>
              </div>
              <div className="p-8 lg:p-10 flex flex-col flex-1">
                <h3 className="text-4xl lg:text-[56px] lg:leading-[56px] tracking-tight mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
                  Brave Voices
                </h3>
                <p className="text-[22px] leading-[30px] mb-4 text-[var(--brand-yellow-light)]" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
                  A Mandarin camp on boundaries &amp; self-protection.
                </p>
                <p className="text-[16px] leading-[26px] mb-6" style={{ fontFamily: "var(--font-body)" }}>
                  Speech and drama in Mandarin that gives young children the words and the confidence to say no in uncomfortable situations.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[["AGES", "5 – 6"], ["LANGUAGE", "Mandarin"], ["SEATS", "10 / centre"]].map(([label, val]) => (
                    <div key={label}>
                      <p className="text-[11px] tracking-[0.6px] text-[var(--brand-yellow-light)]" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>{label}</p>
                      <p className="text-[20px]" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>{val}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2.5 mb-8">
                  {["Develop self-awareness and body respect", "Say \"No\" confidently when uncomfortable", "Recognise kindness, bullying & boundaries", "Final drama or video showcase", "All activities led in Mandarin"].map(t => (
                    <div key={t} className="flex items-start gap-3">
                      <span className="bg-[var(--brand-yellow-light)] text-[var(--brand-red)] w-5 h-5 rounded-full flex items-center justify-center text-[12px] shrink-0 mt-0.5">&#10003;</span>
                      <span className="text-[15px]" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>{t}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 border-t border-white/20">
                  <div>
                    <p className="text-[11px] tracking-[0.6px] text-[var(--brand-yellow-light)]" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>EARLY BIRD (11&ndash;15 MAY)</p>
                    <p className="text-[36px] tracking-tight" style={{ fontFamily: "var(--font-body)", fontWeight: 800 }}>RM 350</p>
                  </div>
                  <Link to="/brave-voices" className="bg-[var(--brand-cream)] text-[var(--brand-red)] px-5 py-3.5 rounded-full text-[15px] mt-4 sm:mt-0 hover:scale-[1.02] transition-transform inline-flex items-center gap-1.5" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>
                    Explore Brave Voices&ensp;&rarr;
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ── Photo Mosaic ── */
function PhotoMosaic() {
  return (
    <section className="bg-white py-10 lg:py-12 px-5 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {[
              { src: IMG.girlPainting, alt: "Asian girl painting at a craft table", span: "lg:col-span-2 lg:row-span-2" },
              { src: IMG.blocks, alt: "Asian toddler building with colourful blocks", span: "" },
              { src: IMG.malaysianKids, alt: "Malaysian children smiling together", span: "" },
              { src: IMG.circleTime, alt: "Preschool teacher with children in circle time", span: "" },
              { src: IMG.classroomBright, alt: "Bright colourful preschool classroom", span: "" },
            ].map((img, i) => (
              <div key={i} className={`${img.span} rounded-[20px] overflow-hidden ${i === 0 ? 'h-[200px] lg:h-full' : 'h-[160px] lg:h-[200px]'}`}>
                <ImageWithFallback src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ── Why Learning Horizon ── */
function WhySection() {
  const cards = [
    { num: "01", color: "var(--brand-sun)", title: "Early-years specialists", desc: "Our educators are trained in play-based pedagogy, positive discipline and child development — and every session is co-designed with the Learning Horizon curriculum team.", img: IMG.circleTime },
    { num: "02", color: "var(--brand-teal)", title: "Small groups. Real attention.", desc: "Each cohort caps at 10–15 children, so your child is seen, heard and encouraged — never lost in the crowd. Parents get a post-camp reflection on their child.", img: IMG.classroomLearn },
    { num: "03", color: "var(--brand-red)", title: "Trusted centres, close to home", desc: "Programmes run inside The children's house Montessori and Small Wonder preschools — the same warm, well-equipped spaces that families already know and love.", img: IMG.classroomBright },
  ];

  return (
    <section className="bg-[var(--brand-navy)] py-14 lg:py-18 px-5 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-20">
            <div>
              <p className="text-[var(--brand-sun)] text-[13px] tracking-[1.56px] mb-3" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>03&ensp;/&ensp;WHY LEARNING HORIZON</p>
              <h2 className="text-4xl lg:text-[56px] lg:leading-[62px] tracking-tight text-[var(--brand-cream)]" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
                Built by educators.<br />
                <span className="italic" style={{ fontWeight: 600, color: "var(--brand-sun)" }}>Loved by parents.</span>
              </h2>
            </div>
            <p className="text-lg text-[var(--ink-subtle)] leading-[30px] max-w-[420px]" style={{ fontFamily: "var(--font-body)" }}>
              Every Learning Horizon programme is crafted by experienced early-years specialists and delivered in trusted Busy Bees centres. Small groups. Serious play. Real learning.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <ScrollReveal key={card.num} delay={i * 0.1}>
              <div className="bg-[var(--brand-navy-mid)] rounded-[28px] overflow-hidden h-full border border-white/[0.08]">
                <div className="h-[160px] relative overflow-hidden">
                  <ImageWithFallback src={card.img} alt={card.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy-mid)] to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[40px] leading-none tracking-tight" style={{ fontFamily: "var(--font-body)", fontWeight: 800, color: card.color }}>{card.num}</span>
                  </div>
                  <h3 className="text-[22px] leading-[28px] tracking-tight text-[var(--brand-cream)] mb-3" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
                    {card.title}
                  </h3>
                  <p className="text-base text-[var(--ink-subtle)] leading-[26px]" style={{ fontFamily: "var(--font-body)" }}>{card.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── About Section ── */
function About() {
  return (
    <section className="bg-[var(--brand-cream)] py-14 lg:py-18 px-5 lg:px-20">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
        <ScrollReveal className="lg:w-[480px] shrink-0">
          <div className="rounded-[32px] h-[260px] lg:h-[400px] overflow-hidden relative">
            <ImageWithFallback src={IMG.momReading} alt="Asian mother reading with child at home" className="w-full h-full object-cover" />
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg">
              <p className="text-[11px] tracking-[0.6px] text-[var(--brand-sun-deep)]" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>LEARNING HORIZON</p>
              <p className="text-[17px]" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>Enriching Journeys</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="flex-1">
          <p className="text-[var(--brand-sun-deep)] text-[13px] tracking-[1.56px] mb-3" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>04&ensp;/&ensp;ABOUT</p>
          <h2 className="text-4xl lg:text-[48px] lg:leading-[54px] tracking-tight mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
            Enrichment programmes designed for curious minds.
          </h2>
          <p className="text-lg text-[var(--ink-body)] leading-[30px] mb-3" style={{ fontFamily: "var(--font-body)" }}>
            Learning Horizon is the enrichment arm of the Busy Bees family in Malaysia &mdash; a global early-years group with nurseries and preschools across multiple countries.
          </p>
          <p className="text-lg text-[var(--ink-body)] leading-[30px] mb-6" style={{ fontFamily: "var(--font-body)" }}>
            Our holiday camps bring the same play-based, child-led approach families love in our preschools &mdash; compressed into joyful, high-impact 3-day experiences.
          </p>
          <div className="flex gap-10 border-t border-[var(--ink-border)] pt-6">
            {[["11", "centres in KL"], ["3", "days of camp"], ["25+", "educators"]].map(([num, label]) => (
              <div key={label}>
                <p className="text-[44px] tracking-tight" style={{ fontFamily: "var(--font-body)", fontWeight: 800 }}>{num}</p>
                <p className="text-sm text-[var(--ink-muted)]" style={{ fontFamily: "var(--font-body)" }}>{label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ── Testimonials Placeholder ── */
function TestimonialsPlaceholder() {
  const testimonials = [
    {
      quote: "My daughter used to be so shy she wouldn't even say hello to her teachers. After just 3 days at Sky Rangers, she came home and told us exactly what she did that day — unprompted! The confidence boost was incredible.",
      name: "Siti Aminah",
      detail: "Mother of Nur Aisyah, 5 · Bangsar centre",
    },
    {
      quote: "We signed up for Brave Voices because our son had trouble expressing when he was uncomfortable. The Mandarin drama approach made it fun and safe. He now tells us clearly when something doesn't feel right.",
      name: "Tan Wei Lin",
      detail: "Mother of Ethan, 6 · Mutiara Damansara centre",
    },
    {
      quote: "What surprised me most was the daily reflection note. I could see exactly what my child learned and how she participated. It felt like the teachers really knew her — not just another kid in a big group.",
      name: "Priya Nair",
      detail: "Mother of Aanya, 4 · Mont Kiara centre",
    },
  ];

  return (
    <section className="bg-[var(--brand-cream)] py-12 lg:py-16 px-5 lg:px-20">
      <div className="max-w-[1440px] mx-auto text-center">
        <div className="inline-flex items-center gap-2 border-[1.5px] border-[var(--brand-sun)] rounded-full pl-3.5 pr-4 py-2 mb-5">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="text-xs tracking-[0.6px] text-[var(--brand-sun-deep)]" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>WHAT PARENTS SAY</span>
        </div>

        <h2 className="text-4xl lg:text-[48px] lg:leading-[54px] tracking-tight mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
          Real parent stories <span className="italic" style={{ fontWeight: 600, color: "var(--brand-sun-dark)" }}>from real families.</span>
        </h2>
        <p className="text-lg text-[var(--ink-body)] leading-[30px] max-w-[720px] mx-auto mb-8" style={{ fontFamily: "var(--font-body)" }}>
          Here's what parents had to say after their children completed a Learning Horizon holiday camp programme.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          {testimonials.map((t, i) => (
            <div key={i} className="w-full sm:w-[380px] bg-white border border-[var(--ink-border)] rounded-3xl p-6 flex flex-col items-start text-left gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <span className="text-4xl text-[var(--brand-sun)]" style={{ fontFamily: "var(--font-display)", fontWeight: 900, lineHeight: 1 }}>&ldquo;</span>
              <p className="text-[15px] text-[var(--ink-body)] leading-[24px] flex-1" style={{ fontFamily: "var(--font-body)" }}>
                {t.quote}
              </p>
              <div className="border-t border-[var(--ink-border)] pt-3 w-full">
                <p className="text-[15px] text-[var(--ink-dark)]" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>{t.name}</p>
                <p className="text-[13px] text-[var(--ink-muted)]" style={{ fontFamily: "var(--font-body)" }}>{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Full Home Page ── */
export function HomePage() {
  return (
    <>
      <Hero />
      <ProgrammeCards />
      <PhotoMosaic />
      <WhySection />
      <About />
      <TestimonialsPlaceholder />
      <FAQ />
    </>
  );
}