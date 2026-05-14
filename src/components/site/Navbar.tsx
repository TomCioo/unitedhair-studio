import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#o-nas", label: "O nas" },
  { href: "#oferta", label: "Oferta" },
  { href: "#galeria", label: "Galeria" },
  { href: "#opinie", label: "Opinie" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="font-display text-2xl tracking-wide">
          United<span className="text-gold">Hair</span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wider uppercase text-foreground/80 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="https://booksy.com/pl-pl/234739_unitedhair_fryzjer_11597_katowice#ba_s=seo"
          target="_blank"
          rel="noreferrer"
          className="hidden lg:inline-flex items-center px-6 py-3 text-xs tracking-[0.25em] uppercase bg-graphite text-primary-foreground hover:bg-gold hover:text-graphite transition-all duration-500"
        >
          Rezerwacja
        </a>

        <button
          aria-label="Menu"
          className="lg:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-wider uppercase"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://booksy.com/pl-pl/234739_unitedhair_fryzjer_11597_katowice#ba_s=seo"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex justify-center items-center px-6 py-3 text-xs tracking-[0.25em] uppercase bg-graphite text-primary-foreground"
            >
              Rezerwacja
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
