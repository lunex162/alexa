# Pinium Family Clinic – web

Web súkromnej rodinnej kliniky Pinium (Štúrova 1, Liptovský Mikuláš). Vite + React + TypeScript +
Tailwind v4 (rovnaký stack ako Lovable), Motion, GSAP ScrollTrigger, Lenis, Phosphor ikony, písmo Onest.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## Štruktúra
| Cesta | Obsah |
|---|---|
| `src/content/clinic.ts` | adresa, telefón, hodiny, hodnotenie, úvod, O nás, fakturačné údaje (Centrum Kramáre), sociálne siete |
| `src/content/ambulancie.ts` | 7 ambulancií + jednodňová chirurgia (texty doslovne od kliniky) |
| `src/content/tim.ts` | lekári, sestry, administratíva |
| `src/content/posts.ts` | novinky (oznamy) a blog – zatiaľ **ukážkové** príspevky |
| `src/pages/*` | Úvod, Ambulancie (+ detail), Jednodňová chirurgia, Náš tím, O nás, Cenník, Novinky, Blog, Kontakt |
| `public/img/` | fotky (dočasne z profilu kliniky na Google Mapách), logo farebné a biele |

## Presun do Lovable
1. Repo na GitHube pod účtom **lunex162** (až po súhlase), potom v Lovable „Import from GitHub“.
2. **Blog a oznamy** (klinika ich chce písať sama): v Lovable zapnúť Lovable Cloud, tabuľka `posts`
   (slug, kind = oznam|blog, title, date, excerpt, body, cover), jednoduchý admin s prihlásením
   (registrácia VYPNUTÁ), nahradiť `src/content/posts.ts` načítaním z DB.
3. **Formulár na objednanie** → e-mail recepcie: edge function + Resend (TODO v `components/Info.tsx`).

## Treba od kliniky / overiť
- [ ] Originálne fotky (priestory, **portréty lekárov**) – súčasné sú z Google Máp, nižšie rozlíšenie
- [ ] Priradenie fotiek k ambulanciám (proktológia, výživa majú zatiaľ neutrálne fotky)
- [ ] Logo vo vektore (SVG/PDF)
- [ ] E-mail recepcie (kam majú chodiť objednávky z formulára)
- [ ] Odkazy na Facebook a Instagram
- [ ] Cenník (ceny nevymýšľame)
- [ ] Zoznam letákov a ambulancií (sľúbili poslať)
- [ ] Fakturačné údaje Centra Kramáre – potvrdiť (IČ DPH; zatiaľ z OR: IČO 36842079, DIČ 2022484277, Limbová 22, Bratislava)
- [ ] Ordinačné hodiny jednotlivých ambulancií (zatiaľ len spoločné z Google)
- [ ] Ambulancia estetickej a preventívnej medicíny (MUDr. Hartmannová) – text, ak ju chcú na webe
- [ ] „Ing. Tataiana Kaliská“ – preklep? (Tatiana)
- [ ] Ukážkové príspevky v `posts.ts` pred spustením zmazať
