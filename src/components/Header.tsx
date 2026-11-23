import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { List, X, Phone } from "@phosphor-icons/react";
import { clinic } from "../content/clinic";
import { easeOutExpo } from "../lib/motion";

export const nav = [
  { to: "/o-nas", label: "O nás" },
  { to: "/ambulancie", label: "Ambulancie" },
  { to: "/tim", label: "Náš tím" },
  { to: "/cennik", label: "Cenník" },
  { to: "/novinky", label: "Novinky" },
  { to: "/blog", label: "Blog" },
  { to: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        solid
          ? "bg-white/85 shadow-[0_1px_0_rgba(10,38,43,0.08)] backdrop-blur-xl backdrop-saturate-150"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-6 px-5 md:px-10">
        <Link to="/" className="shrink-0" aria-label={`${clinic.name} – úvod`}>
          <img
            src={solid ? "/img/logo_color.png" : "/img/logo_white.png"}
            alt={clinic.name}
            className="h-11 w-auto md:h-[52px]"
          />
        </Link>

        <nav aria-label="Hlavné menu" className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors duration-300 ${
                  solid
                    ? isActive
                      ? "bg-mint text-petrol-deep"
                      : "text-ink-soft hover:text-petrol-deep"
                    : isActive
                      ? "bg-white/15 text-white"
                      : "text-white/85 hover:text-white"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/kontakt#objednanie"
            className={`hidden rounded-full px-5 py-2.5 text-[15px] font-semibold transition-colors duration-300 sm:inline-flex ${
              solid ? "bg-petrol text-white hover:bg-petrol-deep" : "bg-white text-petrol-night hover:bg-mint"
            }`}
          >
            Objednať sa
          </Link>
          <a
            href={clinic.phoneHref}
            aria-label={`Zavolať ${clinic.phone}`}
            className={`grid size-11 place-items-center rounded-full sm:hidden ${
              solid ? "bg-mint text-petrol-deep" : "bg-white/15 text-white"
            }`}
          >
            <Phone size={20} weight="bold" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Zavrieť menu" : "Otvoriť menu"}
            className={`grid size-11 place-items-center rounded-full lg:hidden ${
              solid ? "bg-mint text-petrol-deep" : "bg-white/15 text-white"
            }`}
          >
            {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobilné menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: easeOutExpo }}
            className="border-t border-line bg-white px-5 pb-8 pt-3 lg:hidden"
          >
            <ul className="flex flex-col">
              {nav.map((n) => (
                <li key={n.to}>
                  <NavLink
                    to={n.to}
                    className={({ isActive }) =>
                      `block border-b border-line py-4 text-xl font-medium ${isActive ? "text-petrol" : "text-ink"}`
                    }
                  >
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link
              to="/kontakt#objednanie"
              className="mt-6 flex w-full items-center justify-center rounded-full bg-petrol py-4 font-semibold text-white"
            >
              Objednať sa
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
