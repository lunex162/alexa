// Novinky (oznamy) a blog. Klinika chce písať sama → po presune do Lovable sa tieto dáta
// nahradia tabuľkou v Lovable Cloud (Supabase) s jednoduchou administráciou.
// Príspevky nižšie sú UKÁŽKOVÉ (demo = true) – len aby bolo vidno dizajn; pred spustením zmazať.

export type Post = {
  slug: string;
  kind: "oznam" | "blog";
  title: string;
  date: string; // ISO
  excerpt: string;
  body: string[];
  cover?: string;
  demo?: boolean;
};

export const posts: Post[] = [
  {
    slug: "ukazka-oznam-ordinacne-hodiny",
    kind: "oznam",
    title: "Ukážka oznamu: zmena ordinačných hodín počas sviatkov",
    date: "2026-11-20",
    excerpt: "Takto bude vyzerať krátky oznam pre pacientov – napríklad dovolenka lekára alebo zmena hodín.",
    body: [
      "Toto je ukážkový oznam, ktorý ukazuje, ako sa na webe zobrazia krátke správy pre pacientov.",
      "Skutočné oznamy bude klinika písať sama v jednoduchej administrácii.",
    ],
    demo: true,
  },
  {
    slug: "ukazka-clanok-preventivna-prehliadka",
    kind: "blog",
    title: "Ukážka článku: ako sa pripraviť na preventívnu prehliadku",
    date: "2026-11-18",
    excerpt: "Ukážkový článok blogu – s titulnou fotkou, perexom a textom. Obsah doplní klinika.",
    body: [
      "Toto je ukážkový článok. Ukazuje rozloženie blogu: titulná fotka, nadpis, dátum a text.",
      "Obsah článkov bude písať tím kliniky.",
    ],
    cover: "/img/ambulancia-ortopedia.webp",
    demo: true,
  },
  {
    slug: "ukazka-clanok-jednodnova-chirurgia",
    kind: "blog",
    title: "Ukážka článku: čo čakať pri jednodňovom zákroku",
    date: "2026-11-10",
    excerpt: "Druhý ukážkový článok, aby bolo vidno, ako vyzerá zoznam viacerých príspevkov.",
    body: ["Toto je ukážkový článok. Obsah doplní klinika."],
    cover: "/img/izba-taska.webp",
    demo: true,
  },
];

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("sk-SK", { day: "numeric", month: "long", year: "numeric" });
