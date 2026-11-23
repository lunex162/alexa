import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, CheckCircle, MapPin, NavigationArrow } from "@phosphor-icons/react";
import { clinic, social } from "../content/clinic";
import { ambulancie } from "../content/ambulancie";
import { easeOutExpo, prefersReducedMotion } from "../lib/motion";
import { SocialIcons } from "./ui";

export function Hours({ tone = "light" }: { tone?: "light" | "dark" }) {
  const today = (new Date().getDay() + 6) % 7; // pondelok = 0
  return (
    <ul className="tabular">
      {clinic.hours.map((h, i) => {
        const isToday = i === today;
        const closed = h.time === "Zatvorené";
        return (
          <li
            key={h.day}
            className={`flex items-baseline justify-between gap-6 border-b py-3 ${
              tone === "dark" ? "border-white/10" : "border-line"
            } ${isToday ? (tone === "dark" ? "text-white" : "text-petrol-deep") : ""}`}
          >
            <span className={isToday ? "font-semibold" : ""}>
              {h.day}
              {isToday && (
                <span
                  className={`ml-2 rounded-full px-2 py-0.5 text-xs font-semibold ${
                    tone === "dark" ? "bg-glow/20 text-glow" : "bg-mint text-petrol"
                  }`}
                >
                  dnes
                </span>
              )}
            </span>
            <span className={closed ? "opacity-60" : "font-medium"}>{h.time}</span>
          </li>
        );
      })}
    </ul>
  );
}

export function MapBlock({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[var(--radius-card)] bg-mist ${className}`}>
      <iframe
        title="Mapa – Pinium Family Clinic, Štúrova 1, Liptovský Mikuláš"
        src={clinic.mapsEmbed}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="size-full min-h-[340px] border-0 grayscale-[0.35] contrast-[1.05]"
      />
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white/90 p-4 shadow-[0_10px_30px_-14px_rgba(5,47,51,0.45)] backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full bg-mint text-petrol">
            <MapPin size={20} weight="fill" aria-hidden />
          </span>
          <div>
            <p className="font-semibold">{clinic.street}</p>
            <p className="text-sm text-ink-soft">{clinic.city}</p>
          </div>
        </div>
        <a
          href={clinic.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-petrol px-4 py-2.5 text-sm font-semibold text-white hover:bg-petrol-deep"
        >
          <NavigationArrow size={16} weight="fill" aria-hidden />
          Navigovať
        </a>
      </div>
    </div>
  );
}

type Errors = Partial<Record<"name" | "phone" | "email" | "ambulancia" | "consent", string>>;

export function BookingForm({ defaultAmbulancia = "" }: { defaultAmbulancia?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const next: Errors = {};
    const name = String(f.get("name") || "").trim();
    const phone = String(f.get("phone") || "").trim();
    const email = String(f.get("email") || "").trim();
    if (name.length < 3) next.name = "Napíšte prosím meno a priezvisko.";
    if (!/^[+0-9 ()/-]{9,}$/.test(phone)) next.phone = "Zadajte telefón, na ktorom vás zastihneme (napr. 0908 123 456).";
    if (email && !/^\S+@\S+\.\S+$/.test(email)) next.email = "E-mail nie je v správnom tvare.";
    if (!f.get("ambulancia")) next.ambulancia = "Vyberte, kam sa chcete objednať.";
    if (!f.get("consent")) next.consent = "Bez súhlasu vás nemôžeme kontaktovať.";
    setErrors(next);
    if (Object.keys(next).length) return;
    // TODO: napojiť odosielanie na e-mail recepcie (Lovable Cloud edge function / Resend).
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 700);
  };

  const field =
    "w-full rounded-xl border border-line bg-white px-4 py-3.5 text-base text-ink placeholder:text-ink-soft/70 transition-[border-color,box-shadow] focus:border-petrol focus:shadow-[0_0_0_4px_rgba(11,107,112,0.12)] focus:outline-none";
  const label = "mb-2 block text-sm font-semibold text-ink";
  const err = (k: keyof Errors) =>
    errors[k] ? (
      <p id={`${k}-err`} className="mt-2 text-sm font-medium text-[#b42318]">
        {errors[k]}
      </p>
    ) : null;

  if (sent)
    return (
      <div className="rounded-[var(--radius-card)] bg-mint p-8 md:p-10" role="status">
        <CheckCircle size={40} weight="fill" className="text-petrol" aria-hidden />
        <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em]">Ďakujeme, žiadosť sme prijali.</h3>
        <p className="mt-3 max-w-[50ch] leading-relaxed text-ink-soft">
          Recepcia vás bude kontaktovať a dohodne s vami termín. Ak to súrne potrebujete, zavolajte nám na{" "}
          <a href={clinic.phoneHref} className="font-semibold text-petrol underline">
            {clinic.phone}
          </a>
          .
        </p>
        <p className="mt-4 text-sm text-ink-soft">(Ukážka: odosielanie na e-mail recepcie napojíme pred spustením.)</p>
      </div>
    );

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2">
      <div>
        <label htmlFor="name" className={label}>
          Meno a priezvisko
        </label>
        <input id="name" name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
        {err("name")}
      </div>
      <div>
        <label htmlFor="phone" className={label}>
          Telefón
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" className={field} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-err" : undefined} />
        {err("phone")}
      </div>
      <div>
        <label htmlFor="email" className={label}>
          E-mail <span className="font-normal text-ink-soft">(nepovinné)</span>
        </label>
        <input id="email" name="email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
        {err("email")}
      </div>
      <div>
        <label htmlFor="ambulancia" className={label}>
          Kam sa chcete objednať
        </label>
        <select id="ambulancia" name="ambulancia" defaultValue={defaultAmbulancia} className={`${field} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2214%22 height=%2214%22 viewBox=%220 0 256 256%22><path fill=%22%230b6b70%22 d=%22M213.66 101.66l-80 80a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 11.32-11.32L128 164.69l74.34-74.35a8 8 0 0 1 11.32 11.32Z%22/></svg>')] bg-[length:14px] bg-[right_1rem_center] bg-no-repeat pr-10`} aria-invalid={!!errors.ambulancia} aria-describedby={errors.ambulancia ? "ambulancia-err" : undefined}>
          <option value="" disabled>
            Vyberte ambulanciu
          </option>
          {ambulancie.map((a) => (
            <option key={a.slug} value={a.slug}>
              {a.name}
            </option>
          ))}
          <option value="jednodnova-chirurgia">Jednodňová chirurgia (konzultácia)</option>
        </select>
        {err("ambulancia")}
      </div>
      <div className="md:col-span-2">
        <label htmlFor="message" className={label}>
          S čím vám môžeme pomôcť <span className="font-normal text-ink-soft">(nepovinné)</span>
        </label>
        <textarea id="message" name="message" rows={4} className={`${field} resize-y`} placeholder="Napríklad preferovaný deň alebo krátky popis ťažkostí" />
      </div>
      <div className="md:col-span-2">
        <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-ink-soft">
          <input type="checkbox" name="consent" className="mt-1 size-5 shrink-0 accent-[var(--color-petrol)]" aria-invalid={!!errors.consent} aria-describedby={errors.consent ? "consent-err" : undefined} />
          <span>
            Súhlasím so spracovaním osobných údajov na účel vybavenia mojej žiadosti o termín. Údaje použijeme len na
            kontaktovanie ohľadom objednania.
          </span>
        </label>
        {err("consent")}
      </div>
      <div className="flex flex-wrap items-center gap-4 md:col-span-2">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center gap-2 rounded-full bg-petrol px-7 py-4 font-semibold text-white shadow-[0_10px_30px_-12px_rgba(7,68,74,0.55)] transition-[background-color,transform] duration-300 hover:bg-petrol-deep active:scale-[0.97] disabled:cursor-wait disabled:opacity-70"
        >
          {sending ? "Odosielam…" : "Odoslať žiadosť o termín"}
          {!sending && <ArrowRight size={18} weight="bold" aria-hidden />}
        </button>
        <p className="text-sm text-ink-soft">Recepcia sa vám ozve v pracovnom čase.</p>
      </div>
    </form>
  );
}

const slides = [
  { src: "/img/recepcia.webp", text: "Recepcia kliniky na Štúrovej ulici" },
  { src: "/img/orl-ambulancia.webp", text: "ORL ambulancia" },
  { src: "/img/izba-taska.webp", text: "Komfort po jednodňovom zákroku" },
  { src: "/img/usg.webp", text: "Ultrazvuková diagnostika" },
  { src: "/img/vstupna-hala.webp", text: "Vstupná hala" },
];

export function SocialSlideshow() {
  const [i, setI] = useState(0);
  const timer = useRef<number | null>(null);
  const reduce = prefersReducedMotion();
  useEffect(() => {
    if (reduce) return;
    timer.current = window.setInterval(() => setI((v) => (v + 1) % slides.length), 4500);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [reduce]);
  const go = (d: number) => {
    if (timer.current) window.clearInterval(timer.current);
    setI((v) => (v + d + slides.length) % slides.length);
  };
  const hasProfiles = social.facebook || social.instagram;
  return (
    <div className="grid items-center gap-10 md:grid-cols-12">
      <div className="md:col-span-5">
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-balance md:text-5xl">Sledujte nás</h2>
        <p className="mt-5 max-w-[42ch] text-lg leading-relaxed text-ink-soft">
          Novinky z kliniky, tipy pre zdravie a zákulisie nášho tímu nájdete aj na sociálnych sieťach.
        </p>
        <div className="mt-8">
          <SocialIcons />
        </div>
        {!hasProfiles && (
          <p className="mt-4 text-sm text-ink-soft">(Ukážka: odkazy na profily a ich príspevky napojíme.)</p>
        )}
      </div>
      <div className="md:col-span-7">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] bg-mist sm:aspect-[5/4]">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.img
              key={slides[i].src}
              src={slides[i].src}
              alt={slides[i].text}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: easeOutExpo }}
              className="absolute inset-0 size-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-petrol-night/80 to-transparent p-5 pt-16">
            <p className="font-medium text-white">{slides[i].text}</p>
            <div className="flex gap-2">
              <button type="button" onClick={() => go(-1)} aria-label="Predchádzajúca" className="grid size-10 place-items-center rounded-full bg-white/90 text-petrol-night hover:bg-white">
                <ArrowLeft size={18} weight="bold" />
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Ďalšia" className="grid size-10 place-items-center rounded-full bg-white/90 text-petrol-night hover:bg-white">
                <ArrowRight size={18} weight="bold" />
              </button>
            </div>
          </div>
          <div className="absolute left-5 top-5 flex gap-1.5" aria-hidden>
            {slides.map((s, k) => (
              <span key={s.src} className={`h-1 rounded-full transition-all duration-500 ${k === i ? "w-8 bg-white" : "w-3 bg-white/50"}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
