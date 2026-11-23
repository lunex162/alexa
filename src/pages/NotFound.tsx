import { Button, Section } from "../components/ui";

export default function NotFound() {
  return (
    <Section className="flex min-h-[80dvh] items-center pt-32">
      <div>
        <p className="text-sm font-semibold text-petrol">Chyba 404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] md:text-6xl">Táto stránka neexistuje</h1>
        <p className="mt-4 max-w-[48ch] text-lg text-ink-soft">Možno bola presunutá. Pokračujte na úvod alebo do zoznamu ambulancií.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/">Na úvod</Button>
          <Button to="/ambulancie" variant="ghost">Zoznam ambulancií</Button>
        </div>
      </div>
    </Section>
  );
}
