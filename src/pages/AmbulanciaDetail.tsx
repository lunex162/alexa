import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Info, UserCircle } from "@phosphor-icons/react";
import { ambulancie } from "../content/ambulancie";
import { Button, PhoneButton, Reveal, Section } from "../components/ui";
import NotFound from "./NotFound";

export default function AmbulanciaDetail() {
  const { slug } = useParams();
  const idx = ambulancie.findIndex((a) => a.slug === slug);
  if (idx < 0) return <NotFound />;
  const a = ambulancie[idx];
  const next = ambulancie[(idx + 1) % ambulancie.length];

  return (
    <>
      <header className="relative bg-petrol-night px-5 pb-14 pt-32 text-white md:px-10 md:pt-40">
        <div className="mx-auto grid max-w-[1280px] items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Link to="/ambulancie" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white">
              <ArrowLeft size={16} weight="bold" /> Zoznam ambulancií
            </Link>
            <Reveal>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.04] tracking-[-0.03em] text-balance md:text-6xl">{a.name}</h1>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-5 max-w-[46ch] text-lg text-white/80 md:text-xl">{a.tagline}</p>
            </Reveal>
            <Reveal delay={0.12}>
              <ul className="mt-8 flex flex-wrap gap-2">
                {a.doctors.map((d) => (
                  <li key={d} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                    <UserCircle size={18} weight="fill" className="text-glow" aria-hidden /> {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal className="md:col-span-5" delay={0.1}>
            <img src={a.photo} alt={a.name} className="aspect-[4/3] w-full rounded-[var(--radius-card)] object-cover md:translate-y-28" />
          </Reveal>
        </div>
      </header>

      <Section className="py-16 md:pb-24 md:pt-40">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="space-y-6 md:col-span-7">
            {a.intro.map((p, i) => (
              <Reveal key={i}>
                <p className="max-w-[62ch] text-lg leading-relaxed text-ink-soft">{p}</p>
              </Reveal>
            ))}

            <Reveal>
              <h2 className="pt-6 text-2xl font-semibold tracking-[-0.02em]">{a.listTitle}</h2>
              <ul className="mt-6 grid gap-3">
                {a.list.map((it) => (
                  <li key={it} className="flex gap-3 rounded-2xl bg-mist p-4 leading-relaxed">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-petrol text-white">
                      <Check size={14} weight="bold" aria-hidden />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>

            {a.blocks?.map((b) => (
              <Reveal key={b.title}>
                <div className="pt-6">
                  <h2 className="text-2xl font-semibold tracking-[-0.02em]">{b.title}</h2>
                  {b.text?.map((t, i) => (
                    <p key={i} className="mt-4 max-w-[62ch] text-lg leading-relaxed text-ink-soft">
                      {t}
                    </p>
                  ))}
                  {b.list && (
                    <ul className="mt-5 space-y-2">
                      {b.list.map((it) => (
                        <li key={it} className="flex gap-3 leading-relaxed">
                          <Check size={18} weight="bold" className="mt-1 shrink-0 text-petrol" aria-hidden />
                          {it}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}

            {a.notice && (
              <Reveal>
                <div className="flex gap-4 rounded-2xl bg-[#fff4e5] p-5 text-[#7a4b00]" role="note">
                  <Info size={24} weight="fill" className="shrink-0" aria-hidden />
                  <p className="leading-relaxed">
                    <strong className="font-semibold">Dôležité upozornenie: </strong>
                    {a.notice}
                  </p>
                </div>
              </Reveal>
            )}

            {a.closing && (
              <Reveal>
                <p className="border-t border-line pt-8 text-xl font-medium leading-relaxed tracking-[-0.01em] text-ink">{a.closing}</p>
              </Reveal>
            )}

            {a.gallery && (
              <div className="grid grid-cols-3 gap-3 pt-4">
                {a.gallery.map((g) => (
                  <img key={g} src={g} alt="" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
                ))}
              </div>
            )}
          </div>

          <aside className="md:col-span-4 md:col-start-9">
            <div className="rounded-[var(--radius-card)] bg-mint p-7 md:sticky md:top-28">
              <h2 className="text-xl font-semibold tracking-[-0.02em]">Objednajte sa</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">Zavolajte na recepciu alebo vyplňte krátky formulár.</p>
              <div className="mt-6 flex flex-col gap-3">
                <PhoneButton variant="solid" />
                <Button to="/kontakt#objednanie" variant="light">
                  Formulár na objednanie
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="pb-24">
        <Link to={`/ambulancie/${next.slug}`} className="group flex items-center justify-between gap-6 border-t border-line pt-8">
          <span>
            <span className="block text-sm text-ink-soft">Ďalšia ambulancia</span>
            <span className="mt-1 block text-2xl font-semibold tracking-[-0.02em] group-hover:text-petrol md:text-3xl">{next.name}</span>
          </span>
          <ArrowRight size={28} weight="bold" className="text-petrol transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Section>
    </>
  );
}
