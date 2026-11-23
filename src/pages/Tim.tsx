import { lekari, sestry, administrativa, type Person } from "../content/tim";
import { PageIntro, Reveal, Section } from "../components/ui";

const initials = (name: string) =>
  name
    .replace(/(MUDr|Mgr|Bc|Ing|PhD)\.?,?/g, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0])
    .join("");

function Group({ title, people, large = false }: { title: string; people: Person[]; large?: boolean }) {
  return (
    <div className="grid gap-8 border-t border-line pt-10 md:grid-cols-12">
      <h2 className="text-2xl font-semibold tracking-[-0.02em] md:col-span-3">{title}</h2>
      <ul className={`grid gap-4 md:col-span-9 ${large ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
        {people.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.03}>
            <li className="flex items-center gap-4 rounded-[var(--radius-card)] bg-mist p-5">
              {/* TODO: portrétne fotky od kliniky */}
              <span
                aria-hidden
                className={`grid shrink-0 place-items-center rounded-full bg-petrol font-semibold text-white ${large ? "size-16 text-lg" : "size-12"}`}
              >
                {initials(p.name)}
              </span>
              <span>
                <span className={`block font-semibold tracking-[-0.01em] ${large ? "text-lg" : ""}`}>{p.name}</span>
                <span className="mt-0.5 block text-sm leading-snug text-ink-soft">{p.role}</span>
              </span>
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

export default function Tim() {
  return (
    <>
      <PageIntro
        title="Náš tím"
        lead="Jeden tím. Viacero odborností. Komplexná starostlivosť s dôrazom na vaše zdravie."
        photo="/img/logo-stena.webp"
      />
      <Section className="space-y-16 py-16 md:py-24">
        <Group title="Zdravotnícky personál – lekári" people={lekari} large />
        <Group title="Sestry" people={sestry} />
        <Group title="Administratíva" people={administrativa} />
      </Section>
    </>
  );
}
