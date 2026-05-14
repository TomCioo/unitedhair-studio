import heroImg from "@/assets/about.jpeg";

const BOOKSY = "https://booksy.com/pl-pl/234739_unitedhair_fryzjer_11597_katowice#ba_s=seo";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Wnętrze salonu UnitedHair w Katowicach"
          className="w-full h-full object-cover scale-105"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/60 via-graphite/45 to-graphite/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-24 pb-20 text-primary-foreground">
        <div className="max-w-3xl animate-[fade-up_1.1s_cubic-bezier(0.22,1,0.36,1)_both]">
          <span className="eyebrow text-gold-soft">Premium Hair Studio · Katowice</span>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] mt-6 tracking-tight">
            United<span className="italic text-gold">Hair</span>
          </h1>
          <div className="gold-divider w-40 mt-8" />
          <p className="mt-8 text-lg md:text-xl text-primary-foreground/85 max-w-xl font-light leading-relaxed">
            Piękno, styl i precyzja w jednym miejscu. Salon dla kobiet i mężczyzn,
            którzy oczekują rezultatów najwyższej klasy.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href={BOOKSY}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center px-9 py-4 text-xs tracking-[0.3em] uppercase bg-gold text-graphite hover:bg-primary-foreground transition-colors duration-500"
            >
              Zarezerwuj wizytę
            </a>
            <a
              href="#oferta"
              className="inline-flex items-center px-9 py-4 text-xs tracking-[0.3em] uppercase border border-primary-foreground/40 text-primary-foreground hover:border-gold hover:text-gold transition-colors duration-500"
            >
              Poznaj ofertę
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-primary-foreground/60 text-[10px] tracking-[0.4em] uppercase animate-pulse">
        Scroll
      </div>
    </section>
  );
}
