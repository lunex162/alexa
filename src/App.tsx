import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AmbulanciaDetail from "./pages/AmbulanciaDetail";
import Ambulancie from "./pages/Ambulancie";
import Jzs from "./pages/Jzs";
import Tim from "./pages/Tim";
import ONas from "./pages/ONas";
import Kontakt from "./pages/Kontakt";
import NotFound from "./pages/NotFound";
import { Blog, BlogDetail, Cennik, Novinky } from "./pages/Content";
import { prefersReducedMotion } from "./lib/motion";

gsap.registerPlugin(ScrollTrigger);

function useSmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 4) });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => (lenis ? lenis.scrollTo(el as HTMLElement, { offset: -80 }) : el.scrollIntoView()), 60);
        return;
      }
    }
    lenis ? lenis.scrollTo(0, { immediate: true }) : window.scrollTo(0, 0);
    setTimeout(() => ScrollTrigger.refresh(), 120);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  useSmoothScroll();
  return (
    <>
      {/*
        THESIS: Klinika ako pokojný, svetlý priestor, nie katalóg služieb – prvé, čo pacient vidí, je
        ich vlastná recepcia a jedna veta; odmieta mriežku ikon „naše služby“.
        OWN-WORLD: petrolejová + mätová + biela (medicínske farby), Onest, zaoblenie 20 px, tlačidlá ako pilulky,
        fotografie kliniky ako materiál, žiadne ikonové karty.
        STORY: kto ste (úvod) → čo u vás vyriešim (ambulancie, vodorovne) → operácia bez hospitalizácie (JZS)
        → kto ma bude liečiť (tím) → kedy a kde (hodiny, mapa) → objednám sa.
        FIRST VIEWPORT: fotka recepcie na celú plochu, tmavý petrolejový prekryv zľava, nadpis vľavo dole,
        „Objednať sa“ + telefón pod ním, „Skrolujte“ dole; hero ostáva stáť a obsah prichádza ako plachta.
        FORM: rodinná klinika / editoriálna fotografia + pin/horizontal scroll; seed: lunex-manual-2026-11-23.
        FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict,
        DESIGN.md, and every shipping raster carrying its provenance
      */}
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ambulancie" element={<Ambulancie />} />
          <Route path="/ambulancie/:slug" element={<AmbulanciaDetail />} />
          <Route path="/jednodnova-chirurgia" element={<Jzs />} />
          <Route path="/tim" element={<Tim />} />
          <Route path="/o-nas" element={<ONas />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/cennik" element={<Cennik />} />
          <Route path="/novinky" element={<Novinky />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
