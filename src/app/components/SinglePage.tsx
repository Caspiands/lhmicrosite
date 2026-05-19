import { useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ScrollReveal } from "./ScrollReveal";
import { InterestForm } from "./InterestForm";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import brandTCH from "../../imports/l1.png";
import brandOdyssey from "../../imports/l2.png";
import brandSmallWonder from "../../imports/l3.png";
import heroBannerClassroom from "../../imports/hero-banner-classroom.jpg";
import progSoccer from "../../imports/prog-soccer.jpg";
import progGenio from "../../imports/prog-genio.jpg";
import progKarate from "../../imports/prog-karate.jpg";
import progKidzCanLead from "../../imports/prog-kidzcanlead.jpg";
import progBallerina from "../../imports/prog-ballerina.jpg";
import progBuilder from "../../imports/prog-builder.jpg";
import progEinstein from "../../imports/prog-einstein.jpg";
import progThespian from "../../imports/prog-thespian.jpg";

const programmeLeaflets = [
  {
    name: "Soccer Stars",
    img: progSoccer,
    ageLabel: "Ages 2.5-6",
    blurb: "Basic soccer skills, coordination and active confidence through fun drills.",
    dialogTitle: "Soccer Stars leaflet preview",
  },
  {
    name: "Genio Art",
    img: progGenio,
    ageLabel: "Ages 3-6",
    blurb: "Creativity, self-expression and intuitive thinking through art, games and craft.",
    dialogTitle: "Genio Art leaflet preview",
  },
  {
    name: "Karate Kid",
    img: progKarate,
    ageLabel: "Ages 4-6",
    blurb: "Basic karate movements that build discipline, focus, balance and confidence.",
    dialogTitle: "Karate Kid leaflet preview",
  },
  {
    name: "Kidz Can Lead",
    img: progKidzCanLead,
    ageLabel: "Ages 4-6",
    blurb: "Leadership habits, emotional resilience and respectful teamwork for everyday life.",
    dialogTitle: "Kidz Can Lead leaflet preview",
  },
  {
    name: "Young Ballerina",
    img: progBallerina,
    ageLabel: "Ages 3-6",
    blurb: "Ballet basics that improve posture, poise, flexibility and body awareness.",
    dialogTitle: "Young Ballerina leaflet preview",
  },
  {
    name: "Young Builder",
    img: progBuilder,
    ageLabel: "Ages 4-6",
    blurb: "LEGO-based STEM play that grows imagination, logic and problem-solving.",
    dialogTitle: "Young Builder leaflet preview",
  },
  {
    name: "Young Einstein",
    img: progEinstein,
    ageLabel: "Ages 4-6",
    blurb: "Hands-on science experiments that spark inquiry, discovery and curiosity.",
    dialogTitle: "Young Einstein leaflet preview",
  },
  {
    name: "Young Thespian",
    img: progThespian,
    ageLabel: "Ages 4-6",
    blurb: "Speech, drama and storytelling that strengthen confidence and self-expression.",
    dialogTitle: "Young Thespian leaflet preview",
  },
] as const;

const camps = [
  {
    name: "Sky Rangers Holiday 2026",
    dates: "26 - 30 May 2026",
    venue: "TCH & Small Wonder Centres",
    accent: "rgb(0, 83, 155)",
    text: "var(--brand-cream)",
    buttonBg: "rgba(255, 248, 240, 0.95)",
    buttonText: "var(--brand-navy)",
    programme: "sky-rangers" as const,
  },
  {
    name: "Brave Voices Holiday 2026",
    dates: "26 - 30 May 2026",
    venue: "Small Wonder Centres",
    accent: "rgb(0, 169, 79)",
    text: "var(--brand-cream)",
    buttonBg: "rgba(255, 248, 240, 0.95)",
    buttonText: "var(--brand-navy)",
    programme: "brave-voices" as const,
  },
];

function HeroAbout() {
  const reduced = useReducedMotion();

  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FDF5E8 0%, #FAF7F0 100%)" }}
    >
      <div className="max-w-[1280px] mx-auto px-5 lg:px-20 pt-16 lg:pt-24 pb-20 lg:pb-28 grid grid-cols-1 lg:grid-cols-[1.15fr_0.95fr] gap-12 items-center">
        <div>
          <h1
            className="text-[44px] lg:text-[88px] leading-[1.02] tracking-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#00539B" }}
          >
            Holiday camps for{" "}
            <span className="italic" style={{ fontWeight: 600, color: "#00539B" }}>
              Malaysia&apos;s
            </span>{" "}
            <span className="italic" style={{ fontWeight: 600, color: "#00A94F" }}>
              curious kids.
            </span>
          </h1>
          <div className="flex flex-wrap gap-3 mt-10">
            <a
              href="#programmes"
              className="bg-[var(--brand-navy)] text-[var(--brand-cream)] px-6 py-3.5 rounded-full text-[15px] hover:scale-[1.02] transition-transform"
              style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
            >
              See programmes →
            </a>
            <a
              href="#contact"
              className="border-[1.5px] border-[var(--brand-navy)] text-[var(--brand-navy)] px-6 py-3.5 rounded-full text-[15px] hover:bg-[var(--brand-navy)] hover:text-[var(--brand-cream)] transition-colors"
              style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
            >
              Get in touch
            </a>
          </div>
        </div>
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.96, x: 18 }}
          animate={reduced ? undefined : { opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full max-w-[560px] mx-auto lg:ml-auto lg:mr-0"
        >
          <div
            className="pointer-events-none absolute inset-[-14px] rounded-[44px] opacity-70 blur-[10px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(0, 83, 155, 0.18) 0%, rgba(0, 169, 79, 0.2) 100%)",
            }}
          />
          <div
            className="relative overflow-hidden rounded-[40px] border border-white/70 bg-[#FFF8F0] p-3"
            style={{ boxShadow: "0 30px 80px rgba(18, 26, 56, 0.16)" }}
          >
            <ImageWithFallback
              src={heroBannerClassroom}
              alt="Teacher and children gathered around a globe in a classroom"
              className="block aspect-[4/3] w-full rounded-[30px] object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about-us" className="bg-white py-20 lg:py-28 px-5 lg:px-20">
      <div className="max-w-[1080px] mx-auto">
        <ScrollReveal>
          <p
            className="text-[var(--brand-navy)]/70 text-[12px] tracking-[1.8px] mb-5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
          >
            ABOUT US
          </p>
          <h2
            className="text-4xl lg:text-[52px] leading-[1.08] tracking-tight text-[var(--brand-navy)] mb-10"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
          >
            Part of the{" "}
            <span className="italic" style={{ fontWeight: 600, color: "#00539B" }}>
              Busy Bees
            </span>{" "}
            <span className="italic" style={{ fontWeight: 600, color: "#00A94F" }}>
              family.
            </span>
          </h2>
        </ScrollReveal>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 text-[var(--ink-body)] text-[17px] leading-[1.7]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <ScrollReveal delay={0.05}>
            <p>
              Learning Horizon Malaysia is part of the Busy Bees Group, one of the world&apos;s
              leading providers of early childhood education and care. As a key Enrichment service
              provider within Busy Bees Asia, Learning Horizon supports a family of established
              preschool brands in Malaysia, namely The Children&apos;s House Montessori, Small
              Wonder Preschool Malaysia and Odyssey The Global Preschool.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              With a strong focus on quality, consistency and innovation, Learning Horizon Malaysia
              works closely with each brand to deliver exceptional, curated enrichment programmes
              and learning camps in the early years. By combining global best practices with deep
              local understanding, we ensure every child benefits from a nurturing environment that
              supports holistic growth and lifelong learning.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.15}>
          <p
            className="mt-10 text-[var(--ink-body)] text-[17px] leading-[1.7] max-w-[860px]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Guided by purpose and driven by care, Learning Horizon Malaysia plays a vital role in
            shaping the future of early childhood education - empowering educators, strengthening
            operations and creating meaningful, enriching learning journeys for children across
            Malaysia.
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
              <p
                className="text-[var(--brand-navy)]/70 text-[12px] tracking-[1.8px] mb-5"
                style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
              >
                OUR PROGRAMMES
              </p>
              <h2
                className="text-4xl lg:text-[56px] leading-[1.05] tracking-tight text-[var(--brand-navy)]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
              >
                Eight ways to{" "}
                <span className="italic" style={{ fontWeight: 600, color: "#00A94F" }}>
                  spark curiosity.
                </span>
              </h2>
            </div>
            <p
              className="text-[var(--ink-body)] text-lg max-w-[420px]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Each holiday programme is age-appropriate, small-group, and built around play. Pick
              the right fit for your child.
            </p>
          </div>
        </ScrollReveal>

        <div
          className="-mx-5 lg:-mx-20 px-5 lg:px-20 overflow-x-auto scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: "thin" }}
        >
          <div className="flex gap-5 pb-4">
            {programmeLeaflets.map((programme) => (
              <Dialog key={programme.name}>
                <div className="group snap-start shrink-0 w-[calc(100vw-40px)] sm:w-[300px] lg:w-[calc((1280px-3*20px)/4)] bg-white rounded-[24px] overflow-hidden border border-[var(--ink-border)] hover:shadow-[0_12px_32px_rgba(18,26,56,0.1)] transition-shadow">
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      aria-label={`Open full leaflet for ${programme.name}`}
                      className="relative block w-full aspect-[3/4] overflow-hidden bg-[var(--ink-bg)] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-navy)]/30"
                    >
                      <img
                        src={programme.img}
                        alt={programme.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04] group-focus-within:scale-[1.04]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,26,56,0.08)_0%,rgba(18,26,56,0.82)_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100" />
                      <div className="absolute inset-x-0 bottom-0 p-5 text-white opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0">
                        <div
                          className="inline-flex rounded-full bg-white/18 px-3 py-1 text-[12px] tracking-[0.4px] backdrop-blur-sm"
                          style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
                        >
                          {programme.ageLabel}
                        </div>
                        <p
                          className="mt-3 text-[15px] leading-[1.55] text-white/92"
                          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                        >
                          {programme.blurb}
                        </p>
                        <p
                          className="mt-3 text-[12px] uppercase tracking-[1px] text-white/80"
                          style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
                        >
                          Click to enlarge
                        </p>
                      </div>
                    </button>
                  </DialogTrigger>
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <p
                        className="text-lg leading-[1.2] text-[var(--brand-navy)]"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                      >
                        {programme.name}
                      </p>
                      <p
                        className="mt-1 text-[13px] text-[var(--ink-muted)]"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                      >
                        {programme.ageLabel}
                      </p>
                    </div>
                    <a
                      href="#contact"
                      className="text-[13px] text-[var(--brand-navy)] hover:underline"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                    >
                      Enquire →
                    </a>
                  </div>
                </div>
                <DialogPrimitive.Portal>
                  <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-[rgba(18,26,56,0.82)]" />
                  <DialogPrimitive.Content
                    aria-label={programme.dialogTitle}
                    className="fixed inset-0 z-50 px-4 py-6 lg:px-8 lg:py-10 focus:outline-none"
                  >
                    <div className="mx-auto flex h-full max-w-[1180px] flex-col">
                      <div className="mb-4 flex items-start justify-between gap-4 text-white">
                        <div>
                          <DialogTitle
                            className="text-[28px] leading-[1.1] lg:text-[36px] text-white"
                            style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                          >
                            {programme.name}
                          </DialogTitle>
                          <DialogDescription
                            className="mt-2 text-[14px] text-white/80"
                            style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                          >
                            {programme.ageLabel}
                          </DialogDescription>
                        </div>
                        <DialogClose asChild>
                          <button
                            type="button"
                            className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[13px] text-white transition-colors hover:bg-white/16"
                            style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
                          >
                            Close
                          </button>
                        </DialogClose>
                      </div>
                      <div className="min-h-0 flex-1 overflow-auto rounded-[28px] bg-[rgba(255,248,240,0.96)] p-3 lg:p-5">
                        <img
                          src={programme.img}
                          alt={`${programme.name} leaflet`}
                          className="mx-auto h-auto w-full max-w-[820px] rounded-[20px] shadow-[0_24px_60px_rgba(18,26,56,0.22)]"
                        />
                      </div>
                    </div>
                  </DialogPrimitive.Content>
                </DialogPrimitive.Portal>
              </Dialog>
            ))}
          </div>
        </div>
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
              <p
                className="text-[var(--brand-navy)]/70 text-[12px] tracking-[1.8px] mb-5"
                style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
              >
                OUR BRANDS
              </p>
              <h2
                className="text-4xl lg:text-[56px] leading-[1.05] tracking-tight text-[var(--brand-navy)]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
              >
                The preschools{" "}
                <span className="italic" style={{ fontWeight: 600, color: "#00539B" }}>
                  we
                </span>{" "}
                <span className="italic" style={{ fontWeight: 600, color: "#00A94F" }}>
                  serve.
                </span>
              </h2>
            </div>
            <p
              className="text-[var(--ink-body)] text-lg max-w-[420px]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Trusted preschool partners across Malaysia where Learning Horizon delivers its
              enrichment programmes.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brandLogos.map((brand, index) => (
            <ScrollReveal key={brand.alt} delay={index * 0.08}>
              <div className="bg-[var(--brand-cream)] rounded-[28px] h-[200px] lg:h-[220px] flex items-center justify-center p-8 transition-shadow hover:shadow-[0_12px_32px_rgba(18,26,56,0.08)]">
                <img src={brand.src} alt={brand.alt} className="max-h-full max-w-full object-contain" />
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
            <p
              className="text-[var(--brand-navy)]/70 text-[12px] tracking-[1.8px] mb-5"
              style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
            >
              UPCOMING CAMPS
            </p>
            <h2
              className="text-4xl lg:text-[56px] leading-[1.05] tracking-tight text-[var(--brand-navy)]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            >
              May Holiday{" "}
              <span className="italic" style={{ fontWeight: 600, color: "#00539B" }}>
                2026.
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {camps.map((camp, index) => (
            <ScrollReveal key={camp.name} delay={index * 0.08}>
              <div
                className="rounded-[40px] p-8 lg:p-10 flex flex-col gap-5 min-h-[260px]"
                style={{ background: camp.accent, color: camp.text }}
              >
                <p
                  className="text-[12px] tracking-[1.2px]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  {camp.dates.toUpperCase()}
                </p>
                <h3
                  className="text-3xl lg:text-[40px] leading-[1.05]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                >
                  {camp.name}
                </h3>
                <p
                  className="text-base opacity-90"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                >
                  {camp.venue}
                </p>
                <a
                  href="#contact"
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.dispatchEvent(
                        new CustomEvent("prefill-programme", { detail: camp.programme }),
                      );
                    }
                  }}
                  className="self-start mt-auto px-5 py-3 rounded-full text-[14px] transition-colors"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                    background: camp.buttonBg,
                    color: camp.buttonText,
                  }}
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

function ContactSection() {
  useEffect(() => {
    function onPrefill(event: Event) {
      const detail = (event as CustomEvent).detail;
      const select = document.querySelector<HTMLSelectElement>("select[name='programme']");

      if (select && (detail === "sky-rangers" || detail === "brave-voices")) {
        select.value = detail;
        select.dispatchEvent(new Event("change", { bubbles: true }));
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
            <p
              className="text-[var(--brand-yellow-light)] text-[12px] tracking-[1.8px] mb-5"
              style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
            >
              CONTACT US
            </p>
            <h2
              className="text-4xl lg:text-[56px] leading-[1.05] tracking-tight text-[var(--brand-cream)]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            >
              Reserve a spot, or{" "}
              <span className="italic" style={{ fontWeight: 600, color: "#00A94F" }}>
                just say hello.
              </span>
            </h2>
            <p
              className="text-[var(--ink-subtle)] text-lg mt-5 leading-[1.6]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Drop your details and we&apos;ll WhatsApp you within 24 hours with the centre
              options nearest to you.
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
      <HeroAbout />
      <AboutSection />
      <ProgrammesSection />
      <OurBrandsSection />
      <CampsSection />
      <ContactSection />
    </main>
  );
}

export default SinglePage;
