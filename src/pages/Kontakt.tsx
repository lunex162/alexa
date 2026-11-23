import { ArrowUpRight, Buildings, Phone } from "@phosphor-icons/react";
import { clinic, kramare } from "../content/clinic";
import { PageIntro, Reveal, Section, SocialIcons } from "../components/ui";
import { BookingForm, Hours, MapBlock } from "../components/Info";

export default function Kontakt() {
  return (
    <>
      <PageIntro title="Kontakt" lead="Zavolajte nám, napíšte alebo sa zastavte na Štúrovej ulici v Liptovskom Mikuláši." photo="/img/vchod.webp" />

      <Section className="py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="space-y-10 md:col-span-5">
            <Reveal>
              <h2 className="text-sm font-semibold">Recepcia</h2>
              <a href={clinic.phoneHref} className="mt-3 inline-flex items-center gap-3 text-3xl font-semibold tracking-[-0.02em] text-petrol hover:text-petrol-deep md:text-4xl">
                <Phone size={30} weight="bold" aria-hidden />
                <span className="tabular">{clinic.phone}</span>
              </a>
              {clinic.email ? (
                <a href={`mailto:${clinic.email}`} className="mt-2 block text-lg text-ink-soft hover:text-petrol">{clinic.email}</a>
              ) : (
                <p className="mt-2 text-sm text-ink-soft">(E-mail recepcie doplníme.)</p>
              )}
              <address className="mt-6 not-italic text-lg leading-relaxed">
                {clinic.name}
                <br />
                {clinic.street}, {clinic.city}
              </address>
              <div className="mt-6">
                <SocialIcons />
              </div>
            </Reveal>
            <Reveal>
              <h2 className="text-sm font-semibold">Ordinačné hodiny</h2>
              <div className="mt-2">
                <Hours />
              </div>
            </Reveal>
          </div>
          <Reveal className="md:col-span-7">
            <h2 id="kde-nas-najdete" className="mb-4 text-sm font-semibold">Kde nás nájdete</h2>
            <MapBlock className="h-[min(70vh,560px)]" />
          </Reveal>
        </div>
      </Section>

      <Section id="objednanie" className="pb-16 md:pb-24">
        <div className="rounded-[calc(var(--radius-card)*1.5)] bg-mint px-6 py-12 md:px-14 md:py-16">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">Objednajte sa</h2>
          <p className="mt-3 max-w-[56ch] leading-relaxed text-ink-soft">
            Vyberte ambulanciu, kam sa chcete objednať, a nechajte nám kontakt. Recepcia sa vám ozve a dohodne termín.
          </p>
          <div className="mt-10">
            <BookingForm />
          </div>
        </div>
      </Section>

      <Section className="pb-24 md:pb-32">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[var(--radius-card)] border border-line p-8">
              <Buildings size={28} weight="duotone" className="text-petrol" aria-hidden />
              <h2 className="mt-4 text-xl font-semibold">Centrum Kramáre</h2>
              <p className="mt-2 leading-relaxed text-ink-soft">
                Klinika jednodňovej chirurgie v Bratislave.
              </p>
              <a href={kramare.web} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-semibold text-petrol">
                {kramare.webLabel} <ArrowUpRight size={16} weight="bold" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="h-full rounded-[var(--radius-card)] border border-line p-8">
              <h2 className="text-xl font-semibold">Fakturačné údaje</h2>
              <dl className="tabular mt-4 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 leading-relaxed">
                <dt className="text-ink-soft">Spoločnosť</dt>
                <dd className="font-medium">{kramare.name}</dd>
                <dt className="text-ink-soft">Sídlo</dt>
                <dd>{kramare.street}, {kramare.city}</dd>
                <dt className="text-ink-soft">IČO</dt>
                <dd>{kramare.ico}</dd>
                <dt className="text-ink-soft">DIČ</dt>
                <dd>{kramare.dic}</dd>
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
