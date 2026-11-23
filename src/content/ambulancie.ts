// Texty doslovne z podkladov kliniky (Ambulancie_Pinium.odt). Fotky sú dočasné z profilu
// kliniky na Google Mapách – priradenie fotky k ambulancii treba potvrdiť s klinikou.

export type Block = { title: string; text?: string[]; list?: string[] };

export type Ambulancia = {
  slug: string;
  name: string;
  short: string;
  doctors: string[];
  tagline: string;
  intro: string[];
  listTitle: string;
  list: string[];
  blocks?: Block[];
  notice?: string;
  closing?: string;
  photo: string;
  gallery?: string[];
};

export const ambulancie: Ambulancia[] = [
  {
    slug: "vseobecny-lekar",
    name: "Ambulancia všeobecného lekára",
    short: "Všeobecný lekár",
    doctors: ["MUDr. Roman Jantoš", "MUDr. Yana Dobosh"],
    tagline: "Komplexná starostlivosť o vaše zdravie na jednom mieste",
    intro: [
      "Ambulancia všeobecného lekára predstavuje prvý kontakt so zdravotnou starostlivosťou a dôležitú súčasť prevencie, diagnostiky a liečby. V Pinium Family Clinic kladieme dôraz na individuálny prístup, dôkladné posúdenie zdravotného stavu a kontinuitu starostlivosti o každého pacienta.",
      "Naši lekári sa venujú prevencii, diagnostike a liečbe akútnych aj chronických ochorení. Súčasťou starostlivosti je sledovanie zdravotného stavu, vyhodnocovanie výsledkov vyšetrení a odporúčanie ďalšieho odborného postupu podľa individuálnych potrieb pacienta.",
    ],
    listTitle: "V ambulancii poskytujeme najmä",
    list: [
      "Preventívne prehliadky a pravidelné kontroly zdravotného stavu",
      "Diagnostiku a liečbu akútnych ochorení",
      "Starostlivosť o pacientov s chronickými ochoreniami",
      "Vyšetrenie a zhodnotenie celkového zdravotného stavu",
      "Odbery biologického materiálu a laboratórne vyšetrenia",
      "Vyšetrenia krvného tlaku a ďalších základných zdravotných parametrov",
      "Predoperačné vyšetrenia a posúdenie zdravotnej spôsobilosti podľa indikácie",
      "Očkovanie a preventívne zdravotné poradenstvo",
    ],
    closing:
      "Naším cieľom je poskytovať zdravotnú starostlivosť, pri ktorej sa pacient cíti vypočutý, rešpektovaný a v dobrých rukách.",
    photo: "/img/ambulancia-vseobecna.webp",
  },
  {
    slug: "orl",
    name: "ORL ambulancia",
    short: "ORL",
    doctors: ["MUDr. Stanislav Ďurík", "MUDr. Veronika Školková", "MUDr. Bibiana Kohútová Hartmannová"],
    tagline: "Odborná starostlivosť o uši, nos a hrdlo",
    intro: [
      "ORL ambulancie Pinium Family Clinic poskytujú odbornú diagnostiku, liečbu a prevenciu ochorení uší, nosa, prínosových dutín, hrdla a ďalších oblastí hlavy a krku.",
      "Vďaka modernému prístrojovému vybaveniu a odbornému prístupu zabezpečujeme komplexné ORL vyšetrenia pre detských aj dospelých pacientov. Dôraz kladieme na presnú diagnostiku, šetrnosť vyšetrení a individuálne nastavenie liečby.",
    ],
    listTitle: "V rámci ORL ambulancií sa venujeme najmä",
    list: [
      "Vyšetreniu a diagnostike ochorení uší, nosa a hrdla",
      "Vyšetreniu sluchu a diagnostike porúch sluchu",
      "Vyšetreniu nosovej priechodnosti a ochorení nosovej dutiny",
      "Diagnostike a liečbe zápalov uší, nosa, prínosových dutín a hrdla",
      "Vyšetreniu krčných mandlí a nosohltanovej mandle",
      "Diagnostike chrápania a ťažkostí s dýchaním cez nos",
      "Diagnostike ochorení a zmien v oblasti hlavy a krku",
    ],
    blocks: [
      {
        title: "Ambulantné ORL zákroky",
        text: [
          "Súčasťou poskytovanej starostlivosti sú aj vybrané ambulantné ORL zákroky, ktoré umožňujú riešiť konkrétne zdravotné ťažkosti bez potreby hospitalizácie, ak to zdravotný stav pacienta a charakter výkonu umožňujú.",
          "Medzi tieto zákroky patrí napríklad frenulotómia – úprava alebo uvoľnenie skrátenej podjazykovej uzdičky.",
        ],
      },
      {
        title: "Inzercia náušníc pre deti",
        text: [
          "V našej ORL ambulancii ponúkame aj inzerciu (aplikáciu) náušníc pre deti. Zákrok realizujeme s dôrazom na hygienu, šetrný postup a komfort malých pacientov.",
        ],
      },
    ],
    closing:
      "Naším cieľom je poskytovať modernú ORL starostlivosť v príjemnom prostredí, s využitím kvalitného prístrojového vybavenia a individuálneho prístupu ku každému pacientovi.",
    photo: "/img/orl-ambulancia.webp",
    gallery: ["/img/orl-kreslo.webp", "/img/audiometria.webp", "/img/orl-pracovisko.webp"],
  },
  {
    slug: "usg",
    name: "Ambulancia ultrasonografie (USG/SONO)",
    short: "USG / SONO",
    doctors: ["MUDr. Dáša Klobušiaková"],
    tagline: "Presná diagnostika pomocou moderného ultrazvukového vyšetrenia",
    intro: [
      "Ultrasonografické vyšetrenie patrí medzi dôležité neinvazívne diagnostické metódy, ktoré umožňujú lekárovi detailne zhodnotiť vnútorné orgány, mäkké tkanivá a ďalšie anatomické štruktúry.",
      "V Pinium Family Clinic poskytujeme ultrazvukové vyšetrenia s dôrazom na odbornú diagnostiku, precíznosť a komfort pacienta. Vyšetrenie je neinvazívne, bez radiačnej záťaže a umožňuje získať dôležité informácie o zdravotnom stave.",
    ],
    listTitle: "V našej USG ambulancii vykonávame",
    list: [
      "Ultrazvukové vyšetrenie brucha – vyšetrenie hornej časti brucha, brušnej dutiny a jednotlivých orgánov alebo orgánových systémov",
      "Vyšetrenie močového traktu – ultrazvukové vyšetrenie močových ciest u žien aj mužov",
      "Vyšetrenie mäkkých častí krku – vyšetrenie štítnej žľazy a krčných lymfatických uzlín",
      "Ultrazvukové vyšetrenie prsníkov – vyšetrenie prsníkov, axíl a príslušných regionálnych lymfatických uzlín",
      "Vyšetrenie pohybového aparátu – ultrazvukové vyšetrenie kĺbov, svalov a mäkkých tkanív",
    ],
    closing:
      "Ultrazvuková diagnostika pomáha odhaliť rôzne štrukturálne zmeny, podporuje včasné zachytenie zdravotných problémov a poskytuje lekárovi dôležité informácie pri rozhodovaní o ďalšom postupe.",
    photo: "/img/usg.webp",
  },
  {
    slug: "ortopedia",
    name: "Ortopedická ambulancia",
    short: "Ortopédia",
    doctors: ["MUDr. Stanislav Křivánek, PhD."],
    tagline: "Pohyb bez obmedzení. Starostlivosť o váš pohybový aparát.",
    intro: [
      "Ortopedická ambulancia Pinium Family Clinic sa zameriava na diagnostiku, prevenciu a liečbu ochorení a porúch pohybového aparátu. Venujeme sa problémom kĺbov, kostí, svalov, šliach a väzivových štruktúr, ktoré môžu ovplyvňovať každodenný pohyb a kvalitu života.",
      "Naším cieľom je identifikovať príčinu ťažkostí, navrhnúť vhodný postup liečby a pomôcť pacientom vrátiť sa k pohybu s čo najmenšími obmedzeniami.",
    ],
    listTitle: "V ambulancii sa venujeme najmä",
    list: [
      "Vyšetreniu a diagnostike ochorení veľkých kĺbov – ramenného, bedrového a kolenného kĺbu",
      "Diagnostike bolestí kĺbov a obmedzenia pohyblivosti",
      "Vyšetreniu plochých nôh a deformít chodidiel",
      "Diagnostike a liečbe degeneratívnych ochorení kĺbov",
      "Vyšetreniu ťažkostí pohybového aparátu",
      "Posúdeniu funkčných porúch a zmien pohybového aparátu",
      "Odporúčaniu vhodnej konzervatívnej liečby a ďalšieho terapeutického postupu",
    ],
    closing:
      "Ortopedická starostlivosť je zameraná na všetkých pacientov, ktorí chcú riešiť bolesti, pohybové obmedzenia alebo iné ťažkosti pohybového aparátu.",
    photo: "/img/ambulancia-ortopedia.webp",
  },
  {
    slug: "chirurgia",
    name: "Chirurgická ambulancia",
    short: "Chirurgia",
    doctors: ["MUDr. Lukáš Uhliarik"],
    tagline: "Odborná chirurgická starostlivosť a individuálny prístup",
    intro: [
      "Chirurgická ambulancia poskytuje odborné vyšetrenia, diagnostiku a ošetrenie vybraných chirurgických ochorení a zdravotných ťažkostí. Zameriavame sa na posúdenie zdravotného stavu pacienta, ošetrenie chirurgických problémov a návrh ďalšieho vhodného liečebného postupu.",
    ],
    listTitle: "V rámci chirurgickej ambulancie sa venujeme najmä",
    list: [
      "Vyšetreniu a ošetreniu vybraných chirurgických ochorení",
      "Diagnostike a ošetreniu kožných a podkožných útvarov",
      "Ošetreniu rán a drobných chirurgických poranení",
      "Kontrolným vyšetreniam a pooperačným kontrolám podľa indikácie",
      "Posúdeniu zdravotného stavu a odporúčaniu ďalšieho chirurgického postupu",
    ],
    blocks: [
      {
        title: "Infúzna terapia vitamínom C",
        text: [
          "Súčasťou ponuky ambulancie je aj infúzna liečba vitamínom C. Ide o podanie vitamínu C priamo do krvného obehu formou intravenóznej infúzie. Vhodnosť tejto terapie sa posudzuje individuálne na základe zdravotného stavu a po konzultácii s lekárom.",
        ],
      },
    ],
    notice: "Chirurgická ambulancia neposkytuje ošetrenie akútnych poúrazových stavov ani ošetrenie zlomenín.",
    photo: "/img/ambulancia-chirurgia.webp",
  },
  {
    slug: "proktologia",
    name: "Proktologická ambulancia",
    short: "Proktológia",
    doctors: ["MUDr. Lukáš Uhliarik"],
    tagline: "Citlivé zdravotné problémy si zaslúžia odborné riešenie",
    intro: [
      "Proktologická ambulancia sa špecializuje na diagnostiku a liečbu ochorení konečníka a análnej oblasti. Ide o zdravotné ťažkosti, ktoré môžu výrazne ovplyvňovať komfort a kvalitu každodenného života, no mnohí pacienti ich z ostychu odkladajú.",
      "V Pinium Family Clinic kladieme dôraz na diskrétnosť, citlivý prístup a profesionálnu diagnostiku. Naším cieľom je vytvoriť prostredie, v ktorom sa pacient môže bez obáv obrátiť na odborníka a začať svoje ťažkosti riešiť.",
    ],
    listTitle: "V proktologickej ambulancii sa venujeme najmä",
    list: [
      "Diagnostike a liečbe hemoroidálneho ochorenia",
      "Vyšetreniu a diagnostike análnych trhlín",
      "Diagnostike ďalších ochorení konečníka a análnej oblasti",
      "Vyšetreniu krvácania, bolesti, svrbenia a ďalších nepríjemných príznakov",
      "Návrhu vhodnej konzervatívnej alebo chirurgickej liečby",
    ],
    blocks: [
      {
        title: "Laserové odstránenie hemoroidov",
        text: [
          "Jednou z možností liečby hemoroidálneho ochorenia, ktorú na našom pracovisku ponúkame, je laserové ošetrenie hemoroidov. Ide o modernú metódu, pri ktorej sa využíva laserová energia na ošetrenie postihnutého tkaniva.",
          "Vhodnosť zákroku a konkrétny liečebný postup určuje lekár na základe odborného vyšetrenia a individuálneho posúdenia zdravotného stavu pacienta.",
        ],
      },
    ],
    closing:
      "Neodkladajte riešenie zdravotných ťažkostí, ktoré vás obmedzujú. Odborná pomoc je prvým krokom k úľave a lepšej kvalite života.",
    photo: "/img/ambulancia-svetla.webp",
  },
  {
    slug: "vyzivove-poradenstvo",
    name: "Ambulancia výživového poradenstva",
    short: "Výživové poradenstvo",
    doctors: ["Kristína Floriánová"],
    tagline: "Zdravé telo. Vyvážený životný štýl. Odborné vedenie na každom kroku.",
    intro: [
      "Ambulancia výživového poradenstva Pinium Family Clinic sa zameriava na individuálnu starostlivosť o výživu, zdravý životný štýl a manažment telesnej hmotnosti.",
      "Veríme, že udržateľné výsledky nevznikajú vďaka krátkodobým diétam a drastickým obmedzeniam, ale prostredníctvom správne nastavených stravovacích návykov, odborného vedenia a postupných zmien, ktoré dokážete zaradiť do svojho každodenného života.",
      "Každému klientovi pristupujeme individuálne s ohľadom na jeho zdravotný stav, životný štýl, stravovacie návyky a osobné ciele.",
    ],
    listTitle: "InBody meranie – vyhodnocujeme najmä",
    list: [
      "Celkovú telesnú hmotnosť",
      "Množstvo telesného tuku",
      "Množstvo svalovej hmoty",
      "Rozloženie svalovej a tukovej hmoty v jednotlivých častiach tela",
      "Ďalšie parametre telesného zloženia",
    ],
    blocks: [
      {
        title: "InBody meranie",
        text: [
          "Súčasťou našich služieb je analýza zloženia tela pomocou prístroja InBody. Meranie poskytuje podrobnejšie informácie o telesnom zložení, ktoré pomáhajú lepšie porozumieť zmenám v organizme a sledovať vývoj počas nastaveného programu.",
        ],
      },
      {
        title: "Individuálne výživové poradenstvo",
        text: [
          "Pomáhame vám nastaviť stravovanie podľa vašich individuálnych potrieb a cieľov. Zameriavame sa na úpravu stravovacích návykov, vyvážený jedálniček, správne zastúpenie živín a vytvorenie dlhodobo udržateľného životného štýlu.",
        ],
      },
      {
        title: "Program manažmentu telesnej hmotnosti",
        text: [
          "Pre klientov, ktorí potrebujú komplexnejšiu podporu pri redukcii telesnej hmotnosti, ponúkame odborný program manažmentu hmotnosti. Program je založený na individuálnom prístupe a spolupráci lekára a výživového poradcu.",
        ],
        list: [
          "Vstupnú konzultáciu a zhodnotenie zdravotného stavu",
          "Analýzu telesného zloženia pomocou InBody",
          "Individuálne nastavenie výživového režimu",
          "Odborné vedenie a pravidelné kontroly",
          "Priebežné sledovanie zmien telesnej hmotnosti a zloženia tela",
          "Podporu pri vytváraní dlhodobo udržateľných stravovacích návykov",
          "Možnosť farmakologickej liečby na základe lekárskej indikácie",
        ],
      },
      {
        title: "Farmakologická podpora – liečba liekom Mounjaro",
        text: [
          "Súčasťou programu môže byť aj farmakologická liečba liekom Mounjaro (tirzepatid), ktorá je určená pre pacientov spĺňajúcich medicínske kritériá na jej nasadenie.",
          "Liečba prebieha pod odborným dohľadom lekára, v kombinácii s individuálne nastaveným stravovacím režimom, pravidelným sledovaním zdravotného stavu a podporou výživového poradcu.",
          "Naším cieľom nie je iba dosiahnutie nižšieho čísla na váhe, ale predovšetkým zlepšenie zdravotného stavu, podpora zdravších návykov a dlhodobé udržanie dosiahnutých výsledkov.",
        ],
      },
    ],
    closing:
      "Vaša cesta k zdravšiemu životnému štýlu sa začína správnym rozhodnutím. My vás na nej budeme odborne sprevádzať.",
    photo: "/img/cakaren.webp",
  },
];

export const jzs = {
  slug: "jednodnova-chirurgia",
  name: "Jednodňová chirurgia",
  tagline: "Moderné operačné výkony s dôrazom na bezpečnosť a komfort pacienta",
  intro: [
    "Pinium Family Clinic poskytuje vybrané operačné výkony v režime jednodňovej zdravotnej starostlivosti. Tento spôsob liečby umožňuje pacientom absolvovať potrebný operačný zákrok a po splnení zdravotných a pooperačných kritérií odísť do domáceho prostredia bez potreby dlhodobej hospitalizácie.",
    "Jednodňová chirurgia predstavuje moderný spôsob poskytovania operačnej starostlivosti, pri ktorom kladieme dôraz na odborné prevedenie výkonu, bezpečnosť pacienta a kvalitnú pooperačnú starostlivosť.",
  ],
  groups: [
    {
      title: "ORL operačné výkony u detí",
      items: [
        "Endoskopická adenoidektómia – odstránenie nosohltanovej mandle",
        "Tonsilotómia – čiastočné odstránenie podnebných mandlí",
      ],
    },
    {
      title: "Operácie nosa a prínosových dutín u dospelých",
      items: [
        "Turbinoplastika – operačná úprava nosových mušlí",
        "FESS – funkčná endoskopická operácia prínosových dutín",
        "Septoplastika – operačná úprava nosovej priehradky",
      ],
    },
    {
      title: "Operácie uší",
      items: ["Aurikuloplastika (otoplastika) – korekcia odstávajúcich ušníc a úprava ich tvaru"],
    },
    {
      title: "Chirurgické výkony v oblasti hlavy a krku",
      items: ["Chirurgické odstránenie kožných a podkožných útvarov v oblasti hlavy a krku"],
    },
  ],
  closing:
    "Každému operačnému výkonu predchádza odborné vyšetrenie a posúdenie vhodnosti zákroku. Pacient je vopred informovaný o priebehu operácie, príprave aj následnej starostlivosti.",
  photos: ["/img/izba.webp", "/img/izba-taska.webp", "/img/detska-izba.webp"],
};
