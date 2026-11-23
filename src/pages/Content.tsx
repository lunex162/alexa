import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Megaphone, Receipt } from "@phosphor-icons/react";
import { posts, formatDate, type Post } from "../content/posts";
import { Button, PageIntro, PhoneButton, Reveal, Section } from "../components/ui";
import NotFound from "./NotFound";

const DemoTag = () => (
  <span className="ml-2 rounded-full bg-mint px-2 py-0.5 text-xs font-semibold text-petrol">ukážka</span>
);

export function Cennik() {
  return (
    <>
      <PageIntro title="Cenník" lead="Prehľad cien nadštandardných a samoplatiteľských výkonov." photo="/img/rollup.webp" />
      <Section className="py-16 md:py-24">
        <div className="mx-auto max-w-[760px] rounded-[var(--radius-card)] bg-mist p-8 text-center md:p-14">
          <Receipt size={40} weight="duotone" className="mx-auto text-petrol" aria-hidden />
          <h2 className="mt-5 text-2xl font-semibold tracking-[-0.02em] md:text-3xl">Cenník pripravujeme</h2>
          <p className="mx-auto mt-4 max-w-[48ch] leading-relaxed text-ink-soft">
            Aktuálne ceny výkonov vám radi povieme na recepcii. Cenník tu čoskoro zverejníme.
          </p>
          <div className="mt-8 flex justify-center">
            <PhoneButton variant="solid" />
          </div>
        </div>
      </Section>
    </>
  );
}

export function Novinky() {
  const items = posts.filter((p) => p.kind === "oznam").sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageIntro title="Novinky" lead="Oznamy pre pacientov – zmeny ordinačných hodín, dovolenky a novinky z kliniky." photo="/img/vstupna-hala.webp" />
      <Section className="py-16 md:py-24">
        {items.length === 0 ? (
          <p className="text-ink-soft">Momentálne nemáme žiadne oznamy.</p>
        ) : (
          <ul className="mx-auto max-w-[860px] space-y-4">
            {items.map((p) => (
              <Reveal key={p.slug}>
                <li id={p.slug} className="flex gap-5 rounded-[var(--radius-card)] bg-mist p-6 md:p-8">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-petrol text-white">
                    <Megaphone size={22} weight="fill" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm text-ink-soft">
                      {formatDate(p.date)}
                      {p.demo && <DemoTag />}
                    </p>
                    <h2 className="mt-1 text-xl font-semibold tracking-[-0.01em]">{p.title}</h2>
                    {p.body.map((t, i) => (
                      <p key={i} className="mt-3 leading-relaxed text-ink-soft">{t}</p>
                    ))}
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        )}
      </Section>
    </>
  );
}

function PostCard({ p }: { p: Post }) {
  return (
    <Link to={`/blog/${p.slug}`} className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-mist">
      {p.cover && (
        <div className="overflow-hidden">
          <img src={p.cover} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm text-ink-soft">
          {formatDate(p.date)}
          {p.demo && <DemoTag />}
        </p>
        <h2 className="mt-2 text-xl font-semibold leading-snug tracking-[-0.01em] group-hover:text-petrol">{p.title}</h2>
        <p className="mt-3 leading-relaxed text-ink-soft">{p.excerpt}</p>
        <span className="mt-auto flex items-center gap-2 pt-6 font-semibold text-petrol">
          Čítať <ArrowRight size={16} weight="bold" />
        </span>
      </div>
    </Link>
  );
}

export function Blog() {
  const items = posts.filter((p) => p.kind === "blog").sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageIntro title="Blog" lead="Rady a informácie od lekárov a tímu Pinium Family Clinic." photo="/img/usg.webp" />
      <Section className="py-16 md:py-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <PostCard p={p} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

export function BlogDetail() {
  const { slug } = useParams();
  const p = posts.find((x) => x.slug === slug && x.kind === "blog");
  if (!p) return <NotFound />;
  return (
    <>
      <PageIntro title={p.title} lead={p.excerpt} photo={p.cover} />
      <Section className="py-16 md:py-24">
        <article className="mx-auto max-w-[68ch]">
          <p className="text-sm text-ink-soft">
            {formatDate(p.date)}
            {p.demo && <DemoTag />}
          </p>
          {p.body.map((t, i) => (
            <p key={i} className="mt-6 text-lg leading-relaxed text-ink">{t}</p>
          ))}
          <div className="mt-12 flex flex-wrap gap-3 border-t border-line pt-8">
            <Button to="/blog" variant="ghost">
              <ArrowLeft size={16} weight="bold" /> Späť na blog
            </Button>
            <Button to="/kontakt#objednanie">Objednať sa</Button>
          </div>
        </article>
      </Section>
    </>
  );
}
