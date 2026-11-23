// Fakty overené 23. 11. 2026 (Google Mapy „Klinika Pinium“, článok SITA 20. 12. 2023).
// Texty úvodu a „O nás“ sú doslovne z podkladov kliniky (Úvod_Pinium.odt).

export const clinic = {
  name: "Pinium Family Clinic",
  short: "Pinium",
  street: "Štúrova 1",
  city: "031 01 Liptovský Mikuláš",
  phone: "+421 908 259 689",
  phoneHref: "tel:+421908259689",
  // TODO: potvrdiť e-mail kliniky (na objednávky z formulára)
  email: "",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Klinika%20Pinium%20%C5%A0t%C3%BArova%201%20Liptovsk%C3%BD%20Mikul%C3%A1%C5%A1",
  mapsEmbed:
    "https://maps.google.com/maps?q=Klinika%20Pinium%2C%20%C5%A0t%C3%BArova%201%2C%20Liptovsk%C3%BD%20Mikul%C3%A1%C5%A1&z=16&output=embed",
  rating: { value: "4,7", count: 94 },
  since: 2016,
  hours: [
    { day: "Pondelok", time: "7:00 – 15:30" },
    { day: "Utorok", time: "7:00 – 15:30" },
    { day: "Streda", time: "7:00 – 17:00" },
    { day: "Štvrtok", time: "7:00 – 15:30" },
    { day: "Piatok", time: "7:00 – 14:00" },
    { day: "Sobota", time: "Zatvorené" },
    { day: "Nedeľa", time: "Zatvorené" },
  ],
};

// Fakturačné údaje – podľa kliniky fakturuje Centrum Kramáre. Údaje z Obchodného registra (finstat.sk, 23. 11. 2026).
// TODO: potvrdiť s klinikou (IČ DPH, telefón, e-mail).
export const kramare = {
  name: "Centrum Kramáre, spol. s r.o.",
  street: "Limbová 22",
  city: "831 01 Bratislava",
  ico: "36842079",
  dic: "2022484277",
  web: "https://www.centrumkramare.sk",
  webLabel: "centrumkramare.sk",
};

// TODO: doplniť odkazy na profily kliniky (zatiaľ neznáme – verejne sa nenašli)
export const social = {
  facebook: "",
  instagram: "",
};

export const intro = {
  title: "Vaše zdravie. Naša priorita.",
  lead: "Sme moderná súkromná rodinná klinika v Liptovskom Mikuláši, kde sa spája odbornosť, individuálny prístup a komfort na úrovni, ktorú si zaslúžite.",
  paragraphs: [
    "Veríme, že kvalitná zdravotná starostlivosť sa začína počúvaním, pokračuje dôkladnou diagnostikou a spočíva v individuálnom prístupe ku každému pacientovi.",
    "V Pinium Family Clinic kladieme dôraz na vaše potreby, čas a predovšetkým zdravie. Pod jednou strechou prinášame široké spektrum odborných ambulancií, skúsený zdravotnícky tím a moderné diagnostické možnosti, vďaka ktorým vám poskytujeme starostlivosť na jednom mieste.",
    "Či už prichádzate na preventívnu prehliadku, odborné vyšetrenie, diagnostiku alebo potrebujete riešiť konkrétny zdravotný problém, môžete sa spoľahnúť na profesionálny prístup, diskrétnosť a starostlivosť, ktorá rešpektuje vaše individuálne potreby.",
  ],
  closing: "Pinium Family Clinic – miesto, kde ste na prvom mieste vy a vaše zdravie.",
};

export const about = {
  title: "Komplexná zdravotná starostlivosť pod jednou strechou",
  text: "Zdravie si zaslúži pozornosť, odbornosť a správnu starostlivosť. V Pinium Family Clinic nájdete ambulancie rôznych medicínskych špecializácií, moderné diagnostické možnosti aj operačné pracovisko jednodňovej chirurgie. Vďaka širokému spektru zdravotníckych služieb môžete mnohé svoje zdravotné potreby riešiť pohodlne na jednom mieste.",
  closing: "Jeden tím. Viacero odborností. Komplexná starostlivosť s dôrazom na vaše zdravie.",
};
