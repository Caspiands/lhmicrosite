import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ScrollReveal } from "./ScrollReveal";
import { InterestForm } from "./InterestForm";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
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
import heroImageHorizon from "../../imports/hero-image-horizon.png";
import heroDesktop from "../../imports/hero-desktop.jpg";
import heroMobile from "../../imports/hero-mobile.jpg";
import learningHorizonHero from "../../imports/the-logo-lh.png";
import progSoccer from "../../imports/prog-soccer.jpg";
import progGenio from "../../imports/prog-genio.jpg";
import progKarate from "../../imports/prog-karate.jpg";
import progKidzCanLead from "../../imports/prog-kidzcanlead.jpg";
import progBallerina from "../../imports/prog-ballerina.jpg";
import progBuilder from "../../imports/prog-builder.jpg";
import progEinstein from "../../imports/prog-einstein.jpg";
import progThespian from "../../imports/prog-thespian.jpg";
// ── Programme tabs images (upload to src/imports/ with these exact filenames) ──
import tabHolidayWorkshopsDesktop   from "../../imports/tab-holiday-workshops-desktop.png";
import tabHolidayWorkshopsMobile    from "../../imports/tab-holiday-workshops-mobile.png";
import tabDayCampsDesktop           from "../../imports/tab-day-camps-desktop.png";
import tabDayCampsMobile            from "../../imports/tab-day-camps-mobile.png";
import tabExcursionDesktop          from "../../imports/tab-excursion-desktop.png";
import tabExcursionMobile           from "../../imports/tab-excursion-mobile.png";
import tabParentChildDesktop        from "../../imports/tab-parent-child-desktop.png";
import tabParentChildMobile         from "../../imports/tab-parent-child-mobile.png";
import tabPreschoolDesktop          from "../../imports/tab-preschool-immersion-desktop.png";
import tabPreschoolMobile           from "../../imports/tab-preschool-immersion-mobile.png";
import tabParentalEngagementDesktop from "../../imports/tab-parental-engagement-desktop.png";
import tabParentalEngagementMobile  from "../../imports/tab-parental-engagement-mobile.png";

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


function HeroAbout() {
  return (
    <section id="about">
      {/* Desktop image — hidden on mobile */}
      <img
        src={heroDesktop}
        alt="Learning Horizon hero"
        className="hidden md:block w-full object-cover"
        style={{ height: "590px" }}
      />
      {/* Mobile image — hidden on desktop */}
      <img
        src={heroMobile}
        alt="Learning Horizon hero"
        className="block md:hidden w-full object-cover"
        style={{ height: "700px" }}
      />
    </section>
  );
}

/* ── Old HeroAbout (carousel) — kept for reference ──
function HeroAboutOld() {
  const reduced = useReducedMotion();
  const slides = [
    {
      id: "welcome",
      heading: (
        <div className="flex flex-col items-center lg:items-center gap-4 text-center">
          <h1
            className="text-[44px] lg:text-[88px] leading-[1.02] tracking-tight text-[#00A94F]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
          >
            Welcome to
          </h1>
          <img
            src={learningHorizonHero}
            alt="Learning Horizon"
            className="w-full max-w-[420px] lg:max-w-[500px] h-auto mx-auto"
          />
        </div>
      ),
      showButtons: false,
      glow: "linear-gradient(135deg, rgba(214, 164, 58, 0.24) 0%, rgba(243, 202, 107, 0.28) 100%)",
      heroImage: heroImageHorizon,
      heroAlt: "Children learning together outdoors at sunset",
    },
    {
      id: "holiday-camps",
      heading: (
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
      ),
      showButtons: true,
      glow: "linear-gradient(135deg, rgba(0, 83, 155, 0.18) 0%, rgba(0, 169, 79, 0.2) 100%)",
      heroImage: heroBannerClassroom,
      heroAlt: "Teacher and children gathered around a globe in a classroom",
    },
  ] as const;
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

    const timer = window.setInterval(() => {
      api.scrollNext();
    }, 5500);

    return () => window.clearInterval(timer);
  }, [api]);

  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FDF5E8 0%, #FAF7F0 100%)" }}
    >
      <div className="w-full pt-10 lg:pt-12 pb-10 lg:pb-14">
        <Carousel setApi={setApi} opts={{ loop: true, align: "start" }} className="w-full">
          <CarouselContent className="ml-0">
            {slides.map((slide) => (
              <CarouselItem key={slide.id} className="pl-0">
                <div className="max-w-[1280px] mx-auto px-5 lg:px-20">
                  <div className="grid min-h-[470px] lg:min-h-[540px] grid-cols-1 lg:grid-cols-[1.15fr_0.95fr] gap-12 items-center">
                    <div>
                      {slide.heading}
                      {slide.showButtons ? (
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
                      ) : null}
                    </div>
                    <motion.div
                      initial={reduced ? false : { opacity: 0, scale: 0.96, x: 18 }}
                      animate={reduced ? undefined : { opacity: 1, scale: 1, x: 0 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="relative w-full max-w-[540px] mx-auto lg:ml-auto lg:mr-0"
                    >
                      <div
                        className="pointer-events-none absolute inset-[-14px] rounded-[44px] opacity-70 blur-[10px]"
                        style={{ background: slide.glow }}
                      />
                      <div
                        className="relative overflow-hidden rounded-[40px] border border-white/70 bg-[#FFF8F0] p-3"
                        style={{ boxShadow: "0 30px 80px rgba(18, 26, 56, 0.16)" }}
                      >
                        <ImageWithFallback
                          src={slide.heroImage}
                          alt={slide.heroAlt}
                          className="block aspect-[4/3] w-full min-h-[280px] lg:min-h-[330px] rounded-[30px] object-cover object-center"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex items-center justify-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-pressed={activeSlide === index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2.5 rounded-full transition-all ${
                activeSlide === index ? "w-9 bg-[var(--brand-navy)]" : "w-2.5 bg-[rgba(18,26,56,0.24)]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
── */

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
              Each of our enrichment programmes are age-appropriate, small-group, and built around
              play. Pick the right fit for your child.
            </p>
          </div>
        </ScrollReveal>

        <div
          className="-mx-5 lg:-mx-20 px-5 lg:px-20 overflow-x-auto scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: "thin" }}
        >
          <div className="flex gap-5 px-2 lg:px-3 pb-4">
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
        <p
          className="mt-6 text-[12px] italic text-[var(--ink-muted)]"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          Note: Enrichment programmes currently only available for children enrolled in Busy Bees
          Group of preschools.
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


function PlusIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="6.66675" width="15" height="1.66667" fill="currentColor" />
      <rect x="8.33301" width="15" height="1.66667" transform="rotate(90 8.33301 0)" fill="currentColor" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="6.66675" width="15" height="1.66667" fill="currentColor" />
    </svg>
  );
}

const programmeTabs = [
  {
    title: "Holiday Workshops",
    desktopImg: tabHolidayWorkshopsDesktop,
    mobileImg: tabHolidayWorkshopsMobile,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[var(--ink-body)]">
        <div>
          <p className="mb-2 text-[var(--ink-dark)]" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>
            Framework
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-[17px]" style={{ fontFamily: "var(--font-body)" }}>
            <li>Sports</li>
            <li>Aesthetics and Creativity</li>
            <li>Development</li>
            <li>Information and Communication Technologies</li>
            <li>Lifeskills</li>
          </ul>
        </div>
        <div>
          <p className="text-[17px] mb-2" style={{ fontFamily: "var(--font-body)" }}>
            Embedded in our holistic SAIL framework, our programmes may focus on one or more of the following themes:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-[17px]" style={{ fontFamily: "var(--font-body)" }}>
            <li>Sports and Fitness Courses</li>
            <li>Confident and Communicators Courses</li>
            <li>Cultural Tour</li>
            <li>STEAM Courses</li>
            <li>Technopreneurship Courses</li>
            <li>Life Skills and Bush Craft</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Day Camps",
    desktopImg: tabDayCampsDesktop,
    mobileImg: tabDayCampsMobile,
    content: (
      <div className="text-[var(--ink-body)]">
        <ul className="list-disc pl-5 space-y-1.5 text-[17px]" style={{ fontFamily: "var(--font-body)" }}>
          <li>Camp Explorer</li>
          <li>Camp Adventure</li>
          <li>Camp Discovery</li>
        </ul>
        <p className="mt-3 text-[17px]" style={{ fontFamily: "var(--font-body)" }}>
          From exploring to discovering, take a look at our exciting camp series here.
        </p>
      </div>
    ),
  },
  {
    title: "Excursion / Field Trips",
    desktopImg: tabExcursionDesktop,
    mobileImg: tabExcursionMobile,
    content: (
      <div className="text-[var(--ink-body)]">
        <p className="text-[17px] mb-2" style={{ fontFamily: "var(--font-body)" }}>
          Having collaborated with private childcares and kindergartens, the following were customised as part of their curriculums:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[17px]" style={{ fontFamily: "var(--font-body)" }}>
          <li>Excursion</li>
          <li>Field Trips</li>
          <li>Learning Journey</li>
          <li>Cultural Trails</li>
        </ul>
        <p className="mt-3 text-[17px]" style={{ fontFamily: "var(--font-body)" }}>
          Speak to us to find out more!
        </p>
      </div>
    ),
  },
  {
    title: "Parent-Child Programme",
    desktopImg: tabParentChildDesktop,
    mobileImg: tabParentChildMobile,
    content: (
      <div className="text-[var(--ink-body)]">
        <p className="text-[17px] mb-2" style={{ fontFamily: "var(--font-body)" }}>
          Parents have also enjoyed the following programmes specially designed for them:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[17px]" style={{ fontFamily: "var(--font-body)" }}>
          <li>Parent-Child Cook-Off</li>
          <li>Take Flight</li>
          <li>Overseas Overnight Camps</li>
        </ul>
        <p className="mt-3 text-[17px]" style={{ fontFamily: "var(--font-body)" }}>
          Bond over fun and hands-on activities with us today!
        </p>
      </div>
    ),
  },
  {
    title: "Preschool Immersion",
    desktopImg: tabPreschoolDesktop,
    mobileImg: tabPreschoolMobile,
    content: (
      <div className="text-[var(--ink-body)] space-y-3">
        <p className="text-[17px]" style={{ fontFamily: "var(--font-body)" }}>
          A programme launched to provide a platform for international students to experience the preschool education learning environment of a different culture.
        </p>
        <p className="text-[17px]" style={{ fontFamily: "var(--font-body)" }}>
          We have successfully collaborated with preschools both locally and globally to be engaged in this wonderful experience, speak to us as we welcome students from all around the world.
        </p>
      </div>
    ),
  },
  {
    title: "Parental Engagement",
    desktopImg: tabParentalEngagementDesktop,
    mobileImg: tabParentalEngagementMobile,
    content: (
      <div className="text-[var(--ink-body)] space-y-3">
        <p className="text-[17px]" style={{ fontFamily: "var(--font-body)" }}>
          How do parents encourage 21st century learning?
        </p>
        <p className="text-[17px]" style={{ fontFamily: "var(--font-body)" }}>
          Join us as we conduct hands-on workshops highlighting the importance of the 21st century skills in today&apos;s society &ndash; a very different approach from the traditional education that parents received when they were younger.
        </p>
      </div>
    ),
  },
];

function ProgrammeTabsSection() {
  const [active, setActive] = useState(0);
  const [activeMobile, setActiveMobile] = useState<number | null>(0);

  return (
    <section id="programme-tabs" className="py-16 lg:py-20 px-5 lg:px-20" style={{ background: "rgb(250, 247, 240)" }}>
      <div className="max-w-[1280px] mx-auto">

        {/* Title */}
        <div className="text-center mb-12">
<h2
            className="text-4xl lg:text-[52px] leading-[1.08] tracking-tight text-[var(--brand-navy)]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
          >
            Customised Programmes
          </h2>
        </div>

        {/* ── Desktop: vertical tabs left + content right ── */}
        <div className="hidden md:flex gap-0 items-stretch">

          {/* Left: stacked tab buttons */}
          <div className="w-[300px] shrink-0 flex flex-col gap-3 h-full mt-5" role="tablist" aria-label="Programme categories">
            {programmeTabs.map((tab, i) => (
              <button
                key={tab.title}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`w-full flex-1 flex items-center px-6 py-7 rounded-l-full rounded-r-none text-[16px] transition-colors shadow-[inset_0_-6px_8px_rgba(0,0,0,0.08)] ${
                  active === i
                    ? "bg-[#e0f5ea] text-[#00A94F]"
                    : "bg-[#f0f0f0] text-[#333333] hover:bg-[#e8e8e8]"
                }`}
                style={{ fontFamily: "Raleway, Arial, sans-serif", fontWeight: 600 }}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Right: content — all panels rendered in same grid cell so height = tallest */}
          <div className="flex-1 min-w-0 p-10 rounded-2xl" style={{ background: "rgb(248, 248, 248)" }}>
            <div className="grid">
              {programmeTabs.map((tab, i) => (
                <div
                  key={tab.title}
                  className="transition-opacity duration-200"
                  style={{
                    gridArea: "1 / 1",
                    opacity: active === i ? 1 : 0,
                    pointerEvents: active === i ? "auto" : "none",
                  }}
                >
                  <img src={tab.desktopImg} alt={tab.title} className="w-full h-auto rounded-xl mb-6" />
                  {tab.content}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mobile: accordion ── */}
        <div className="md:hidden flex flex-col gap-3">
          {programmeTabs.map((tab, i) => (
            <div key={tab.title} className="rounded-xl overflow-hidden shadow-[inset_0_-6px_8px_rgba(0,0,0,0.08)]" style={{ background: activeMobile === i ? "#e0f5ea" : "#f0f0f0" }}>
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left text-[15px]"
                style={{ fontFamily: "Raleway, Arial, sans-serif", fontWeight: 600, color: activeMobile === i ? "#00A94F" : "#333333" }}
                onClick={() => setActiveMobile(activeMobile === i ? null : i)}
                aria-expanded={activeMobile === i}
              >
                <span>{tab.title}</span>
                <span className="text-[var(--ink-muted)] ml-3 shrink-0">
                  {activeMobile === i ? <MinusIcon /> : <PlusIcon />}
                </span>
              </button>
              {activeMobile === i && (
                <div className="p-5" style={{ background: "rgb(248, 248, 248)" }}>
                  <img src={tab.mobileImg} alt={tab.title} className="w-full h-auto mb-5 rounded-xl" />
                  {tab.content}
                </div>
              )}
            </div>
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
      <ProgrammeTabsSection />
      <ContactSection />
    </main>
  );
}

export default SinglePage;
