import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowRight, ArrowUpRight, Megaphone, Star } from "@phosphor-icons/react";
import { clinic, intro } from "../content/clinic";
import { ambulancie, jzs } from "../content/ambulancie";
import { lekari } from "../content/tim";
import { posts, formatDate } from "../content/posts";
import { Button, PhoneButton, Reveal, Section } from "../components/ui";
import { BookingForm, Hours, MapBlock, SocialSlideshow } from "../components/Info";
import { prefersReducedMotion } from "../lib/motion";

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div ref={ref} className="sticky top-0 h-[100dvh] min-h-[620px] overflow-hidden bg-petrol-night">
      <motion.img
        src="/img/recepcia.webp"
        alt="Recepcia Pinium Family Clinic s logom kliniky na stene"
        style={reduce ? undefined : { scale }}
        className="absolute inset-0 size-full object-cover object-[60%_center]"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(5,47,51,0.92)_0%,rgba(5,47,51,0.78)_38%,rgba(5,47,51,0.25)_75%,rgba(5,47,51,0.1)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-petrol-night/70 to-transparent" />

      <motion.div
        style={reduce ? undefined : { y: textY, opacity: textOpacity }}
        className="relative mx-auto flex h-full max-w-[1280px] flex-col justify-end px-5 pb-28 md:px-10 md:pb-32"
      >
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[12ch] text-[clamp(2.75rem,7vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-white"
        >
          Vaše zdravie.
          <span className="block text-glow">Naša priorita.</span>
        </motion.h1>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-[44ch] text-lg leading-relaxed text-white/85 md:text-xl"
        >
          Súkromná rodinná klinika v Liptovskom Mikuláši. Odborné ambulancie a jednodňová chirurgia pod jednou strechou.
        </motion.p>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <Button to="/kontakt#objednanie" variant="light">
            Objednať sa
            <ArrowRight size={18} weight="bold" aria-hidden />
          </Button>
          <PhoneButton variant="ghost" className="!bg-white/12 !text-white backdrop-blur-md hover:!bg-white/20" />
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-14 flex justify-center">
        <span className="flex flex-col items-center gap-2 text-xs font-medium tracking-[0.2em] text-white/70">
          SKROLUJTE
          <ArrowDown size={16} weight="bold" className="scroll-cue" aria-hidden />
        </span>
      </div>
    </div>
  );
}

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.24em] inline-block">
      {word}
    </motion.span>
  );
}

function IntroStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = intro.lead.split(" ");
  return (
    <Section className="pb-24 pt-28 md:pb-36 md:pt-40">
      <div ref={ref}>
        <p className="max-w-[24ch] text-[clamp(1.9rem,4.2vw,3.6rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-ink">
          {reduce
            ? intro.lead
            : words.map((w, i) => (
                <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
              ))}
        </p>
      </div>
      <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-12">
        <Reveal className="md:col-span-5 md:col-start-2">
          <img
            src="/img/vstupna-hala.webp"
            alt="Vstupná hala kliniky"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-[var(--radius-card)] object-cover"
          />
        </Reveal>
        <div className="flex flex-col justify-center gap-6 md:col-span-5 md:col-start-8">
          {intro.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="max-w-[56ch] text-lg leading-relaxed text-ink-soft">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <Link to="/o-nas" className="group inline-flex items-center gap-2 font-semibold text-petrol">
              Viac o klinike
              <ArrowRight size={18} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function AmbulancieRail() {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (prefersReducedMotion() || !wrap.current || !track.current) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 900px)", () => {
      const t = track.current!;
      const dist = () => t.scrollWidth - window.innerWidth + 80;
      const tween = gsap.to(t, {
        x: () => -dist(),
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: () => `+=${dist()}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });
      return () => tween.scrollTrigger?.kill();
    });
    return () => mm.revert();
  }, []);

  const cards = [
    ...ambulancie.map((a) => ({ to: `/ambulancie/${a.slug}`, title: a.name, sub: a.tagline, doctors: a.doctors, photo: a.photo })),
    { to: "/jednodnova-chirurgia", title: jzs.name, sub: jzs.tagline, doctors: [] as string[], photo: "/img/izba-taska.webp" },
  ];

  return (
    <div ref={wrap} className="overflow-hidden bg-mist py-20 md:flex md:h-[100dvh] md:flex-col md:justify-center md:pb-0 md:pt-[72px]">
      <div className="mx-auto mb-10 flex w-full max-w-[1280px] items-end justify-between gap-6 px-5 md:mb-12 md:px-10">
        <h2 className="max-w-[16ch] text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-balance md:text-5xl">
          Sedem ambulancií a operačné pracovisko
        </h2>
        <Link to="/ambulancie" className="hidden shrink-0 items-center gap-2 font-semibold text-petrol md:inline-flex">
          Zoznam ambulancií <ArrowRight size={18} weight="bold" />
        </Link>
      </div>
      <div
        ref={track}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:snap-none md:overflow-visible md:px-10 md:pb-0"
      >
        {cards.map((c) => (
          <Link
            key={c.to}
            to={c.to}
            className="group relative flex w-[78vw] shrink-0 snap-start flex-col overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[0_18px_40px_-28px_rgba(5,47,51,0.45)] transition-shadow duration-500 hover:shadow-[0_26px_50px_-24px_rgba(5,47,51,0.5)] sm:w-[48vw] md:w-[380px] lg:w-[420px]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={c.photo}
                alt=""
                loading="lazy"
                className="size-full object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.06]"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold tracking-[-0.02em]">{c.title}</h3>
              <p className="mt-2 text-ink-soft">{c.sub}</p>
              {c.doctors.length > 0 && (
                <p className="mt-4 text-sm font-medium text-petrol-deep">{c.doctors.join(" · ")}</p>
              )}
              <span className="mt-auto flex items-center gap-2 pt-6 font-semibold text-petrol">
                Detail ambulancie
                <ArrowUpRight size={18} weight="bold" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function JzsBlock() {
  return (
    <section className="bg-petrol-night px-5 py-24 text-white md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1280px] gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-28">
            <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-balance md:text-5xl">
              {jzs.name}
            </h2>
            <p className="mt-5 max-w-[40ch] text-lg leading-relaxed text-white/75">{jzs.tagline}.</p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <img src="/img/izba-taska.webp" alt="Pooperačná izba" loading="lazy" className="col-span-2 aspect-[16/10] w-full rounded-[var(--radius-card)] object-cover" />
              <img src="/img/izba.webp" alt="Izba pre pacientov" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
              <img src="/img/detska-izba.webp" alt="Izba pre detských pacientov" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
            </div>
          </div>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          {jzs.intro.map((p, i) => (
            <Reveal key={i}>
              <p className="mb-6 max-w-[58ch] text-lg leading-relaxed text-white/80">{p}</p>
            </Reveal>
          ))}
          <div className="mt-10 space-y-4">
            {jzs.groups.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.04}>
                <div className="rounded-[var(--radius-card)] bg-white/[0.06] p-6 ring-1 ring-white/10 md:p-8">
                  <h3 className="text-lg font-semibold text-glow">{g.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {g.items.map((it) => {
                      const [head, ...rest] = it.split(" – ");
                      return (
                        <li key={it} className="leading-relaxed text-white/85">
                          <span className="font-semibold text-white">{head}</span>
                          {rest.length > 0 && <span className="text-white/70"> – {rest.join(" – ")}</span>}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-10 max-w-[58ch] leading-relaxed text-white/70">{jzs.closing}</p>
            <div className="mt-8">
              <Button to="/jednodnova-chirurgia" variant="light">
                Viac o jednodňovej chirurgii <ArrowRight size={18} weight="bold" />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProofLine() {
  return (
    <Section className="py-16 md:py-20">
      <Reveal>
        <div className="flex flex-col gap-6 border-y border-line py-8 text-lg md:flex-row md:items-center md:justify-between md:gap-10">
          <p className="flex items-center gap-3">
            <span className="flex text-[#e2a62b]" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} weight="fill" />
              ))}
            </span>
            <span>
              <strong className="tabular font-semibold">{clinic.rating.value}</strong> na Google z{" "}
              <span className="tabular">{clinic.rating.count}</span> hodnotení
            </span>
          </p>
          <p>
            V Liptovskom Mikuláši od roku <strong className="tabular font-semibold">{clinic.since}</strong>
          </p>
          <p>
            <strong className="tabular font-semibold">{lekari.length}</strong> lekárov, 7 ambulancií a jednodňová chirurgia
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

function TeamTeaser() {
  return (
    <Section className="py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">Lekári, ktorí vás budú liečiť</h2>
          <Reveal>
            <Link to="/tim" className="group mt-8 inline-flex items-center gap-2 font-semibold text-petrol">
              Celý tím kliniky
              <ArrowRight size={18} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <ul className="md:col-span-8">
          {lekari.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.03}>
              <li className="group flex flex-col gap-1 border-b border-line py-5 md:flex-row md:items-baseline md:justify-between md:gap-8">
                <span className="text-xl font-semibold tracking-[-0.01em] transition-colors duration-300 group-hover:text-petrol md:text-2xl">
                  {l.name}
                </span>
                <span className="text-ink-soft md:text-right">{l.role.replace(/^lekár, /, "")}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function NewsTeaser() {
  const latest = [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
  return (
    <Section className="bg-mist py-20 md:py-28">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-5xl">Novinky a blog</h2>
        <Link to="/blog" className="hidden items-center gap-2 font-semibold text-petrol md:inline-flex">
          Všetky články <ArrowRight size={18} weight="bold" />
        </Link>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {latest.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.06}>
            <Link
              to={p.kind === "blog" ? `/blog/${p.slug}` : `/novinky#${p.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-white"
            >
              {p.cover ? (
                <img src={p.cover} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              ) : (
                <div className="flex aspect-[16/10] flex-col justify-between bg-petrol p-6 text-white">
                  <Megaphone size={36} weight="duotone" className="text-glow" aria-hidden />
                  <span className="self-start rounded-full bg-white/15 px-3 py-1 text-sm font-semibold">Oznam pre pacientov</span>
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm text-ink-soft">
                  {formatDate(p.date)}
                  {p.demo && <span className="ml-2 rounded-full bg-mint px-2 py-0.5 text-xs font-semibold text-petrol">ukážka</span>}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-snug tracking-[-0.01em] group-hover:text-petrol">{p.title}</h3>
                <p className="mt-3 text-ink-soft">{p.excerpt}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function FindUs() {
  return (
    <Section id="kde-nas-najdete" className="py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-5xl">Kde nás nájdete</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            V centre Liptovského Mikuláša, na Štúrovej ulici.
          </p>
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-ink">Ordinačné hodiny</h3>
            <div className="mt-2">
              <Hours />
            </div>
            <p className="mt-3 text-sm text-ink-soft">Hodiny jednotlivých ambulancií sa môžu líšiť – overte si ich telefonicky.</p>
          </div>
        </div>
        <Reveal className="md:col-span-7">
          <MapBlock className="h-full min-h-[440px]" />
        </Reveal>
      </div>
    </Section>
  );
}

function BookingBlock() {
  return (
    <Section id="objednanie" className="pb-24 md:pb-32">
      <div className="rounded-[calc(var(--radius-card)*1.5)] bg-mint px-6 py-12 md:px-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">Objednajte sa</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Zavolajte na recepciu alebo nám nechajte kontakt a vyberte ambulanciu. Ozveme sa vám a dohodneme termín.
            </p>
            <div className="mt-6">
              <PhoneButton variant="solid" />
            </div>
          </div>
          <div className="md:col-span-8">
            <BookingForm />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function Home() {
  return (
    <>
      <div className="relative">
        <Hero />
        <div className="relative z-10 -mt-8 rounded-t-[2rem] bg-white shadow-[0_-30px_60px_-30px_rgba(5,47,51,0.5)]">
          <IntroStatement />
          <AmbulancieRail />
          <JzsBlock />
          <ProofLine />
          <TeamTeaser />
          <NewsTeaser />
          <Section className="py-20 md:py-28">
            <SocialSlideshow />
          </Section>
          <FindUs />
          <BookingBlock />
        </div>
      </div>
    </>
  );
}

// ScrollTrigger musí byť zaregistrovaný aj pri priamom importe stránky
gsap.registerPlugin(ScrollTrigger);
