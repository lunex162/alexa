import { Link } from "react-router-dom";
import { clinic, kramare } from "../content/clinic";
import { ambulancie } from "../content/ambulancie";
import { nav } from "./Header";
import { SocialIcons } from "./ui";

export default function Footer() {
  return (
    <footer className="bg-petrol-night px-5 pb-10 pt-20 text-white/75 md:px-10">
      <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <img src="/img/logo_white.png" alt={clinic.name} className="h-12 w-auto" />
          <p className="mt-6 max-w-[34ch] leading-relaxed">
            Súkromná rodinná klinika v Liptovskom Mikuláši. Ambulancie a jednodňová chirurgia pod jednou strechou.
          </p>
          <div className="mt-6">
            <SocialIcons tone="light" />
          </div>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-sm font-semibold text-white">Kontakt</h2>
          <address className="mt-4 space-y-1 not-italic leading-relaxed">
            <p>{clinic.street}</p>
            <p>{clinic.city}</p>
            <p className="pt-2">
              <a href={clinic.phoneHref} className="tabular text-white hover:underline">
                {clinic.phone}
              </a>
            </p>
          </address>
          <h2 className="mt-8 text-sm font-semibold text-white">Fakturačné údaje</h2>
          <p className="mt-4 text-sm leading-relaxed">
            {kramare.name}
            <br />
            {kramare.street}, {kramare.city}
            <br />
            <span className="tabular">IČO {kramare.ico} · DIČ {kramare.dic}</span>
          </p>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-sm font-semibold text-white">Ambulancie</h2>
          <ul className="mt-4 space-y-2">
            {ambulancie.map((a) => (
              <li key={a.slug}>
                <Link to={`/ambulancie/${a.slug}`} className="hover:text-white">
                  {a.short}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/jednodnova-chirurgia" className="hover:text-white">
                Jednodňová chirurgia
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-sm font-semibold text-white">Menu</h2>
          <ul className="mt-4 space-y-2">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-[1280px] flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} {clinic.name}</p>
        <p>
          <a href={kramare.web} target="_blank" rel="noreferrer" className="text-white/75 hover:text-white">
            Centrum Kramáre – jednodňová chirurgia, Bratislava
          </a>
        </p>
      </div>
    </footer>
  );
}
