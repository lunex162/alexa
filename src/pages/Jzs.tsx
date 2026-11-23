import { Check } from "@phosphor-icons/react";
import { jzs } from "../content/ambulancie";
import { Button, PageIntro, PhoneButton, Reveal, Section } from "../components/ui";

export default function Jzs() {
  return (
    <>
      <PageIntro title={jzs.name} lead={jzs.tagline} photo="/img/izba-taska.webp" />
      <Section className="py-16 md:py-24">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            {jzs.intro.map((p, i) => (
              <Reveal key={i}>
                <p className="mb-6 max-w-[62ch] text-lg leading-relaxed text-ink-soft">{p}</p>
              </Reveal>
            ))}
            <h2 className="mt-10 text-2xl font-semibold tracking-[-0.02em] md:text-3xl">Spektrum operačných výkonov</h2>
            <div className="mt-8 space-y-10">
              {jzs.groups.map((g) => (
                <Reveal key={g.title}>
                  <h3 className="text-lg font-semibold text-petrol">{g.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {g.items.map((it) => {
                      const [head, ...rest] = it.split(" – ");
                      return (
                        <li key={it} className="flex gap-3 rounded-2xl bg-mist p-4 leading-relaxed">
                          <Check size={18} weight="bold" className="mt-1 shrink-0 text-petrol" aria-hidden />
                          <span>
                            <strong className="font-semibold">{head}</strong>
                            {rest.length > 0 && <span className="text-ink-soft"> – {rest.join(" – ")}</span>}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="mt-12 border-t border-line pt-8 text-xl font-medium leading-relaxed tracking-[-0.01em]">{jzs.closing}</p>
            </Reveal>
          </div>
          <aside className="space-y-4 md:col-span-4 md:col-start-9">
            {jzs.photos.map((p) => (
              <img key={p} src={p} alt="Priestory jednodňovej chirurgie" loading="lazy" className="aspect-[4/3] w-full rounded-[var(--radius-card)] object-cover" />
            ))}
            <div className="rounded-[var(--radius-card)] bg-mint p-7">
              <h2 className="text-xl font-semibold">Konzultácia pred zákrokom</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">Každému výkonu predchádza odborné vyšetrenie. Dohodnite si termín.</p>
              <div className="mt-6 flex flex-col gap-3">
                <PhoneButton variant="solid" />
                <Button to="/kontakt#objednanie" variant="light">Formulár na objednanie</Button>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
