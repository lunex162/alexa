import { Link } from "react-router-dom";
import { ArrowUpRight } from "@phosphor-icons/react";
import { ambulancie, jzs } from "../content/ambulancie";
import { about } from "../content/clinic";
import { PageIntro, Reveal, Section } from "../components/ui";

export default function Ambulancie() {
  const rows = [
    ...ambulancie.map((a) => ({ to: `/ambulancie/${a.slug}`, name: a.name, sub: a.tagline, who: a.doctors.join(", "), photo: a.photo })),
    { to: "/jednodnova-chirurgia", name: jzs.name, sub: jzs.tagline, who: "Operačné výkony pre deti aj dospelých", photo: "/img/izba-taska.webp" },
  ];
  return (
    <>
      <PageIntro title="Zoznam ambulancií" lead={about.text} photo="/img/orl-ambulancia.webp" />
      <Section className="py-16 md:py-24">
        <ul>
          {rows.map((r, i) => (
            <Reveal key={r.to} delay={i * 0.03}>
              <li>
                <Link
                  to={r.to}
                  className="group grid items-center gap-5 border-b border-line py-7 md:grid-cols-12 md:gap-8"
                >
                  <div className="overflow-hidden rounded-2xl md:col-span-2">
                    <img src={r.photo} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                  </div>
                  <div className="md:col-span-6">
                    <h2 className="text-2xl font-semibold tracking-[-0.02em] group-hover:text-petrol md:text-3xl">{r.name}</h2>
                    <p className="mt-2 text-ink-soft">{r.sub}</p>
                  </div>
                  <p className="text-sm font-medium text-petrol-deep md:col-span-3">{r.who}</p>
                  <ArrowUpRight size={26} weight="bold" className="hidden text-petrol transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:col-span-1 md:block md:justify-self-end" />
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
