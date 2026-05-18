import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import { ScrollReveal } from "./ScrollReveal";
import { InterestForm } from "./InterestForm";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { type CarouselApi, Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import beeIcon from "../../imports/Beeicon.png";
import skyRangerBoy from "../../imports/SKYRANESD2.png";
import skyRangerGirl from "../../imports/skyrAGES.png";
import brandTCH from "../../imports/l1.png";
import brandOdyssey from "../../imports/l2.png";
import brandSmallWonder from "../../imports/l3.png";
import progSoccer from "../../imports/prog-soccer.jpg";
import progGenio from "../../imports/prog-genio.jpg";
import progKarate from "../../imports/prog-karate.jpg";
import progKidzCanLead from "../../imports/prog-kidzcanlead.jpg";
import progBallerina from "../../imports/prog-ballerina.jpg";
import progBuilder from "../../imports/prog-builder.jpg";
import progEinstein from "../../imports/prog-einstein.jpg";
import progThespian from "../../imports/prog-thespian.jpg";
import learningHorizonHero from "../../imports/learning_horizon_hero.png";

const programmeLeaflets = [
  { name: "Soccer Stars", img: progSoccer },
  { name: "Genio Art", img: progGenio },
  { name: "Karate Kid", img: progKarate },
  { name: "Kidz Can Lead", img: progKidzCanLead },
  { name: "Young Ballerina", img: progBallerina },
  { name: "Young Builder", img: progBuilder },
  { name: "Young Einstein", img: progEinstein },
  { name: "Young Thespian", img: progThespian },
];

const programmes = [
  {
    id: "sky-rangers",
    name: "Sky Rangers",
    tag: "Ages 7–9",
    intro: "Leadership, science & outdoor play across a 5-day holiday camp.",
    accent: "var(--brand-sun)",
    text: "var(--brand-navy)",
    art: skyRangerBoy,
  },
  {
    id: "brave-voices",
    name: "Brave Voices",
    tag: "Ages 5–6 · Mandarin",
    intro: "Speech & drama in Mandarin — confidence, courage, and personal safety.",
    accent: "var(--brand-red)",
    text: "var(--brand-cream)",
    art: skyRangerGirl,
  },
];

const camps = [
  {
    name: "Sky Rangers Holiday 2026",
    dates: "26 – 30 May 2026",
    venue: "TCH & Small Wonder Centres",
    accent: "var(--brand-yellow-light)",
    text: "var(--brand-blue)",
    programme: "sky-rangers" as const,
  },
  {
    name: "Brave Voices Holiday 2026",
    dates: "26 – 30 May 2026",
    venue: "Small Wonder Centres",
    accent: "var(--brand-red)",
    text: "var(--brand-cream)",
    programme: "brave-voices" as const,
  },
];

const brands = [
  "Busy Bees Asia",
  "The Children's House",
  "Small Wonder",
  "Asia Pacific Schools",
  "Pingu's English",
  "Learning Horizon",
];

function HeroAbout() {
  const reduced = useReducedMotion();
  return (
    <section id="about" className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #FDF5E8 0%, #FAF7F0 100%)" }}>
      <div className="max-w-[1280px] mx-auto px-5 lg:px-20 pt-16 lg:pt-24 pb-20 lg:pb-28 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <p className="text-[var(--brand-navy)]/70 text-[12px] tracking-[1.8px] mb-6" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>
            ABOUT LEARNING HORIZON
          </p>
          <h1 className="text-[44px] lg:text-[88px] leading-[1.02] tracking-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#00539B" }}>
            Holiday camps for{" "}
            <span className="italic" style={{ fontWeight: 600, color: "#00539B" }}>Malaysia&rsquo;s</span>{" "}
            <span className="italic" style={{ fontWeight: 600, color: "#00A94F" }}>curious kids.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[var(--ink-body)] mt-7 max-w-[560px] leading-[1.6]" style={{ fontFamily: "var(--font-body)" }}>
            Learning Horizon is the holiday programme arm of Busy Bees Asia. We run small-group camps across Klang Valley
            that mix play, story and craft — so children come home calmer, braver and a little more themselves.
          </p>
          <div className="flex flex-wrap gap-3 mt-9">
            <a href="#programmes" className="bg-[var(--brand-navy)] text-[var(--brand-cream)] px-6 py-3.5 rounded-full text-[15px] hover:scale-[1.02] transition-transform" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>
              See programmes →
            </a>
            <a href="#contact" className="border-[1.5px] border-[var(--brand-navy)] text-[var(--brand-navy)] px-6 py-3.5 rounded-full text-[15px] hover:bg-[var(--brand-navy)] hover:text-[var(--brand-cream)] transition-colors" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>
              Get in touch
            </a>
          </div>
        </div>
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.92 }}
          animate={reduced ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full aspect-square max-w-[520px] mx-auto rounded-full overflow-hidden flex items-end justify-center"
          style={{ background: "radial-gradient(circle at 50% 30%, #FFE9A8 0%, #F8A42B 60%, #EF4146 110%)" }}
        >
          <img src={skyRangerBoy} alt="Sky Ranger" className="absolute bottom-[6%] left-[4%] w-[50%] object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.18)]" />
          <img src={skyRangerGirl} alt="Sky Ranger" className="absolute bottom-[6%] right-[4%] w-[50%] object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.18)]" />
        </motion.div>
      </div>
    </section>
  );
}

function HeroAboutSlider() {
  const reduced = useReducedMotion();
  const [api, setApi] = useState<CarouselApi>();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateActiveSlide = () => {
      setActiveSlide(api.selectedScrollSnap());
    };

    updateActiveSlide();
    api.on("select", updateActiveSlide);
    api.on("reInit", updateActiveSlide);

    return () => {
      api.off("select", updateActiveSlide);
      api.off("reInit", updateActiveSlide);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const autoplay = window.setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 6500);

    return () => window.clearInterval(autoplay);
  }, [api]);

  function HeroSlide({
    eyebrow,
    title,
    description,
    showButtons,
    centerTitle = false,
  }: {
    eyebrow: string;
    title: ReactNode;
    description?: string;
    showButtons: boolean;
    centerTitle?: boolean;
  }) {
    return (
      <div className="max-w-[1280px] mx-auto px-5 lg:px-20 pt-16 lg:pt-24 pb-20 lg:pb-28 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div className={centerTitle ? "text-center lg:text-center" : undefined}>
          {eyebrow ? (
            <p className="text-[var(--brand-navy)]/70 text-[12px] tracking-[1.8px] mb-6" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-[44px] lg:text-[88px] leading-[1.02] tracking-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#00539B" }}>
            {title}
          </h1>
          {description ? (
            <p className="text-lg lg:text-xl text-[var(--ink-body)] mt-7 max-w-[560px] leading-[1.6]" style={{ fontFamily: "var(--font-body)" }}>
              {description}
            </p>
          ) : null}
          {showButtons ? (
            <div className="flex flex-wrap gap-3 mt-9">
              <a href="#programmes" className="bg-[var(--brand-navy)] text-[var(--brand-cream)] px-6 py-3.5 rounded-full text-[15px] hover:scale-[1.02] transition-transform" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>
                See programmes &rarr;
              </a>
              <a href="#contact" className="border-[1.5px] border-[var(--brand-navy)] text-[var(--brand-navy)] px-6 py-3.5 rounded-full text-[15px] hover:bg-[var(--brand-navy)] hover:text-[var(--brand-cream)] transition-colors" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>
                Get in touch
              </a>
            </div>
          ) : null}
        </div>
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.92 }}
          animate={reduced ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full aspect-square max-w-[520px] mx-auto rounded-full overflow-hidden flex items-end justify-center"
          style={{ background: "radial-gradient(circle at 50% 30%, #FFE9A8 0%, #F8A42B 60%, #EF4146 110%)" }}
        >
          <img src={skyRangerBoy} alt="Sky Ranger" className="absolute bottom-[6%] left-[4%] w-[50%] object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.18)]" />
          <img src={skyRangerGirl} alt="Sky Ranger" className="absolute bottom-[6%] right-[4%] w-[50%] object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.18)]" />
        </motion.div>
      </div>
    );
  }

  return (
    <section id="about" className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #FDF5E8 0%, #FAF7F0 100%)" }}>
      <div className="absolute inset-y-0 left-0 w-32 bg-[radial-gradient(circle_at_left,rgba(255,208,75,0.2),transparent_70%)] pointer-events-none" />
      <Carousel setApi={setApi} opts={{ loop: true, align: "start", duration: 30 }} className="w-full">
        <CarouselContent className="ml-0">
          <CarouselItem className="pl-0">
            <HeroSlide
              eyebrow=""
              title={
                <span className="flex flex-col items-center gap-4">
                  <span style={{ color: "#00A94F" }}>Welcome to</span>
                  <img
                    src={learningHorizonHero}
                    alt="Learning Horizon"
                    className="h-auto w-[300px] max-w-full lg:w-[440px] mx-auto"
                  />
                </span>
              }
              showButtons={false}
              centerTitle={true}
            />
          </CarouselItem>
          <CarouselItem className="pl-0">
            <HeroSlide
              eyebrow="ABOUT LEARNING HORIZON"
              title={
                <>
                  Holiday camps for{" "}
                  <span className="italic" style={{ fontWeight: 600, color: "#00539B" }}>Malaysia&rsquo;s</span>{" "}
                  <span className="italic" style={{ fontWeight: 600, color: "#00A94F" }}>curious kids.</span>
                </>
              }
              description="Learning Horizon is the holiday programme arm of Busy Bees Asia. We run small-group camps across Klang Valley that mix play, story and craft so children come home calmer, braver and a little more themselves."
              showButtons={true}
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="max-w-[1280px] mx-auto px-5 lg:px-20 -mt-8 lg:-mt-12 pb-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {[0, 1].map((index) => (
              <button
                key={index}
                type="button"
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to hero slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${activeSlide === index ? "w-10 bg-[var(--brand-navy)]" : "w-2.5 bg-[var(--brand-navy)]/25 hover:bg-[var(--brand-navy)]/45"}`}
              />
            ))}
          </div>
          <p className="text-[12px] tracking-[1.8px] text-[var(--brand-navy)]/55" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>
            {String(activeSlide + 1).padStart(2, "0")} / 02
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about-us" className="bg-white py-20 lg:py-28 px-5 lg:px-20">
      <div className="max-w-[1080px] mx-auto">
        <ScrollReveal>
          <p className="text-[var(--brand-navy)]/70 text-[12px] tracking-[1.8px] mb-5" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>ABOUT US</p>
          <h2 className="text-4xl lg:text-[52px] leading-[1.08] tracking-tight text-[var(--brand-navy)] mb-10" style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}>
            Part of the <span className="italic" style={{ fontWeight: 600, color: "#00539B" }}>Busy Bees</span>{" "}
            <span className="italic" style={{ fontWeight: 600, color: "#00A94F" }}>family.</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 text-[var(--ink-body)] text-[17px] leading-[1.7]" style={{ fontFamily: "var(--font-body)" }}>
          <ScrollReveal delay={0.05}>
            <p>
              Learning Horizon Malaysia is part of the Busy Bees Group, one of the world&rsquo;s leading providers of early
              childhood education and care. As a key Enrichment service provider within Busy Bees Asia, Learning Horizon
              supports a family of established preschool brands in Malaysia, namely The Children&rsquo;s House Montessori,
              Small Wonder Preschool Malaysia and Odyssey The Global Preschool.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              With a strong focus on quality, consistency and innovation, Learning Horizon Malaysia works closely with each
              brand to deliver exceptional, curated enrichment programmes and learning camps in the early years. By combining
              global best practices with deep local understanding, we ensure every child benefits from a nurturing environment
              that supports holistic growth and lifelong learning.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.15}>
          <p className="mt-10 text-[var(--ink-body)] text-[17px] leading-[1.7] max-w-[860px]" style={{ fontFamily: "var(--font-body)" }}>
            Guided by purpose and driven by care, Learning Horizon Malaysia plays a vital role in shaping the future of early
            childhood education &mdash; empowering educators, strengthening operations and creating meaningful, enriching
            learning journeys for children across Malaysia.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ProgrammesSection() {
  return (
    <section id="programmes" className="bg-[var(--brand-cream)] py-20 lg:py-28 px-5 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[var(--brand-navy)]/70 text-[12px] tracking-[1.8px] mb-5" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>OUR PROGRAMMES</p>
              <h2 className="text-4xl lg:text-[56px] leading-[1.05] tracking-tight text-[var(--brand-navy)]" style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}>
                Eight ways to{" "}
                <span className="italic" style={{ fontWeight: 600, color: "#00A94F" }}>spark curiosity.</span>
              </h2>
            </div>
            <p className="text-[var(--ink-body)] text-lg max-w-[420px]" style={{ fontFamily: "var(--font-body)" }}>
              Each of our Enrichment programmes are age-appropriate, small-group, and built around play. Pick the right fit for your child.
            </p>
          </div>
        </ScrollReveal>

        <div className="-mx-5 lg:-mx-20 px-5 lg:px-20 overflow-x-auto scroll-smooth snap-x snap-mandatory" style={{ scrollbarWidth: "thin" }}>
          <div className="flex gap-5 pb-4">
            {programmeLeaflets.map((p) => (
              <div
                key={p.name}
                className="snap-start shrink-0 w-[calc(100vw-40px)] sm:w-[300px] lg:w-[calc((1280px-3*20px)/4)] bg-white rounded-[24px] overflow-hidden border border-[var(--ink-border)] hover:shadow-[0_12px_32px_rgba(18,26,56,0.1)] transition-shadow"
              >
                <div className="aspect-[3/4] overflow-hidden bg-[var(--ink-bg)]">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <p className="text-lg leading-[1.2] text-[var(--brand-navy)]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>{p.name}</p>
                  <a href="#contact" className="text-[13px] text-[var(--brand-navy)] hover:underline" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>Enquire →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p
          className="mt-4 text-[12px] leading-[1.6] text-[var(--ink-muted)]"
          style={{ fontFamily: "var(--font-body)", fontStyle: "italic" }}
        >
          Note: Enrichment programmes currently only available for children enrolled in Busy Bees Group of preschools.
        </p>
      </div>
    </section>
  );
}

function OurBrandsSection() {
  const brandLogos = [
    { src: brandTCH, alt: "The Children's House Montessori" },
    { src: brandSmallWonder, alt: "Small Wonder Preschool Malaysia" },
    { src: brandOdyssey, alt: "Odyssey The Global Preschool" },
  ];
  return (
    <section id="brands" className="bg-white py-20 lg:py-28 px-5 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[var(--brand-navy)]/70 text-[12px] tracking-[1.8px] mb-5" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>OUR BRANDS</p>
              <h2 className="text-4xl lg:text-[56px] leading-[1.05] tracking-tight text-[var(--brand-navy)]" style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}>
                The preschools{" "}
                <span className="italic" style={{ fontWeight: 600, color: "#00539B" }}>we</span>{" "}
                <span className="italic" style={{ fontWeight: 600, color: "#00A94F" }}>serve.</span>
              </h2>
            </div>
            <p className="text-[var(--ink-body)] text-lg max-w-[420px]" style={{ fontFamily: "var(--font-body)" }}>
              Trusted preschool partners across Malaysia where Learning Horizon delivers its enrichment programmes.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brandLogos.map((b, i) => (
            <ScrollReveal key={b.alt} delay={i * 0.08}>
              <div className="bg-[var(--brand-cream)] rounded-[28px] h-[200px] lg:h-[220px] flex items-center justify-center p-8 transition-shadow hover:shadow-[0_12px_32px_rgba(18,26,56,0.08)]">
                <img src={b.src} alt={b.alt} className="max-h-full max-w-full object-contain" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CampsSection() {
  return (
    <section id="camps" className="bg-white py-20 lg:py-28 px-5 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        <ScrollReveal>
          <div className="mb-14">
            <p className="text-[var(--brand-navy)]/70 text-[12px] tracking-[1.8px] mb-5" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>UPCOMING CAMPS</p>
            <h2 className="text-4xl lg:text-[56px] leading-[1.05] tracking-tight text-[var(--brand-navy)]" style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}>
              May Holiday{" "}
              <span className="italic" style={{ fontWeight: 600, color: "#00539B" }}>2026.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {camps.map((c, i) => (
            <ScrollReveal key={c.name} delay={i * 0.08}>
              <div
                className="rounded-[40px] p-8 lg:p-10 flex flex-col gap-5 min-h-[260px]"
                style={{ background: c.accent, color: c.text }}
              >
                <p className="text-[12px] tracking-[1.2px]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
                  {c.dates.toUpperCase()}
                </p>
                <h3 className="text-3xl lg:text-[40px] leading-[1.05]" style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}>
                  {c.name}
                </h3>
                <p className="text-base opacity-90" style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>
                  {c.venue}
                </p>
                <a
                  href="#contact"
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.dispatchEvent(new CustomEvent("prefill-programme", { detail: c.programme }));
                    }
                  }}
                  className="self-start mt-auto bg-white/95 text-[var(--brand-navy)] px-5 py-3 rounded-full text-[14px] hover:bg-white transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
                >
                  RSVP now →
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandsMarquee() {
  const row = [...brands, ...brands];
  return (
    <section id="brands" className="bg-[var(--brand-cream)] py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-20 mb-10">
        <p className="text-[var(--brand-navy)]/70 text-[12px] tracking-[1.8px]" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>
          BRANDS WE SERVE
        </p>
      </div>
      <div className="relative">
        <div className="flex gap-14 whitespace-nowrap animate-[marquee_38s_linear_infinite]" style={{ width: "max-content" }}>
          {row.map((b, i) => (
            <span key={i} className="text-[28px] lg:text-[40px] text-[var(--brand-navy)] opacity-70 hover:opacity-100 transition-opacity" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
              {b}
              <span className="mx-7 text-[var(--brand-sun)]">✦</span>
            </span>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}

function ContactSection() {
  useEffect(() => {
    function onPrefill(e: Event) {
      const detail = (e as CustomEvent).detail;
      const sel = document.querySelector<HTMLSelectElement>("select[name='programme']");
      if (sel && (detail === "sky-rangers" || detail === "brave-voices")) {
        sel.value = detail;
        sel.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
    window.addEventListener("prefill-programme", onPrefill);
    return () => window.removeEventListener("prefill-programme", onPrefill);
  }, []);

  return (
    <section id="contact" className="bg-[var(--brand-navy)] py-20 lg:py-28 px-5 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        <ScrollReveal>
          <div className="max-w-[680px] mb-12">
            <p className="text-[var(--brand-yellow-light)] text-[12px] tracking-[1.8px] mb-5" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>CONTACT US</p>
            <h2 className="text-4xl lg:text-[56px] leading-[1.05] tracking-tight text-[var(--brand-cream)]" style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}>
              Reserve a spot, or{" "}
              <span className="italic" style={{ fontWeight: 600, color: "#00A94F" }}>just say hello.</span>
            </h2>
            <p className="text-[var(--ink-subtle)] text-lg mt-5 leading-[1.6]" style={{ fontFamily: "var(--font-body)" }}>
              Drop your details and we&rsquo;ll WhatsApp you within 24 hours with the centre options nearest to you.
            </p>
          </div>
        </ScrollReveal>
        <div className="bg-[var(--brand-cream)] rounded-[32px] p-6 lg:p-10">
          <InterestForm defaultProgramme="sky-rangers" accentColor="var(--brand-sun)" />
        </div>
      </div>
    </section>
  );
}

export function SinglePage() {
  return (
    <main id="main-content">
      <HeroAboutSlider />
      <AboutSection />
      <ProgrammesSection />
      <OurBrandsSection />
      <CampsSection />
      <ContactSection />
    </main>
  );
}

export default SinglePage;
