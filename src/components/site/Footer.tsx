import { Instagram, Facebook } from "lucide-react";

const BOOKSY = "https://booksy.com/pl-pl/234739_unitedhair_fryzjer_11597_katowice#ba_s=seo";

export function Footer() {
  return (
    <footer className="bg-graphite text-primary-foreground pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-primary-foreground/10">
          <div className="md:col-span-2">
            <div className="font-display text-3xl">
              United<span className="text-gold">Hair</span>
            </div>
            <p className="mt-5 text-primary-foreground/70 max-w-sm font-light">
              Premium salon fryzjerski w Katowicach. Styl, precyzja i komfort
              w jednym miejscu.
            </p>
            <div className="flex gap-3 mt-8">
              <a
                href="https://www.instagram.com/unitedhair_kato?igsh=ajZrb3kwcXpzcXp5&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 inline-flex items-center justify-center border border-primary-foreground/20 hover:bg-gold hover:border-gold hover:text-graphite transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100091896117180"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 inline-flex items-center justify-center border border-primary-foreground/20 hover:bg-gold hover:border-gold hover:text-graphite transition-all"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-gold mb-5">Nawigacja</div>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><a href="#o-nas" className="hover:text-gold transition-colors">O nas</a></li>
              <li><a href="#oferta" className="hover:text-gold transition-colors">Oferta</a></li>
              <li><a href="#galeria" className="hover:text-gold transition-colors">Galeria</a></li>
              <li><a href="#opinie" className="hover:text-gold transition-colors">Opinie</a></li>
              <li><a href="#kontakt" className="hover:text-gold transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-gold mb-5">Kontakt</div>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>Ceglana 65/1<br />40-514 Katowice</li>
              <li><a href="tel:+48535593386" className="hover:text-gold transition-colors">535 593 386</a></li>
              <li>
                <a href={BOOKSY} target="_blank" rel="noreferrer" className="text-gold hover:underline">
                  Umów wizytę →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider text-primary-foreground/50">
          <div>© {new Date().getFullYear()} UnitedHair. Wszelkie prawa zastrzeżone.</div>
          <div>Premium hair studio · Katowice</div>
        </div>
      </div>
    </footer>
  );
}
