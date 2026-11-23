import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import { about, intro } from "../content/clinic";
import { ambulancie } from "../content/ambulancie";
import { PageIntro, Reveal, Section } from "../components/ui";

const photos = [
  { src: "/img/fasada.webp", alt: "Vchod do kliniky na Štúrovej ulici", cls: "md:col-span-7 aspect-[16/10]" },
  { src: "/img/recepcia.webp", alt: "Recepcia", cls: "md:col-span-5 aspect-[4/5] md:aspect-auto" },
  { src: "/img/cakaren.webp", alt: "Čakáreň", cls: "md:col-span-4 aspect-[4/3]" },
  { src: "/img/audiometria.webp", alt: "Pracovisko vyšetrenia sluchu", cls: "md:col-span-4 aspect-[4/3]" },
  { src: "/img/izba.webp", alt: "Izba pre pacientov", cls: "md:col-span-4 aspect-[4/3]" },
];

export default function ONas() {
  return (
    <>
      <PageIntro title="O nás" lead={intro.closing} photo="/img/budova.webp" />
      <Section className="py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-balance md:text-5xl">{about.title}</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-ink-soft">{about.text}</p>
            </Reveal>
            {intro.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.05}>
                <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-ink-soft">{p}</p>
              </Reveal>
            ))}
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <h3 className="text-sm font-semibold">Naše odborné pracoviská a služby</h3>
            <ul className="mt-4">
              {ambulancie.map((a) => (
                <li key={a.slug}>
                  <Link to={`/ambulancie/${a.slug}`} className="group flex items-center justify-between border-b border-line py-3.5 font-medium hover:text-petrol">
                    {a.name}
                    <ArrowRight size={16} weight="bold" className="text-petrol opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/jednodnova-chirurgia" className="group flex items-center justify-between border-b border-line py-3.5 font-medium hover:text-petrol">
                  Jednodňová chirurgia
                  <ArrowRight size={16} weight="bold" className="text-petrol opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            </ul>
            <p className="mt-6 text-lg font-medium leading-relaxed">{about.closing}</p>
          </div>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-12">
          {photos.map((p) => (
            <Reveal key={p.src} className={p.cls}>
              <img src={p.src} alt={p.alt} loading="lazy" className="size-full rounded-[var(--radius-card)] object-cover" />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
