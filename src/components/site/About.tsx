import aboutImg from "@/assets/hero.jpg";

export function About() {
  return (
    <section id="o-nas" className="py-28 lg:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="reveal relative">
          <img
            src={aboutImg}
            alt="Wnętrze premium salonu UnitedHair"
            loading="lazy"
            width={1200}
            height={1400}
            className="w-full h-[560px] object-cover"
          />
          <div className="absolute -bottom-6 -right-6 hidden md:flex flex-col items-center justify-center w-44 h-44 bg-gold text-graphite">
            <span className="font-display text-5xl">5★</span>
            <span className="text-[10px] tracking-[0.3em] uppercase mt-1">Opinie klientów</span>
          </div>
        </div>

        <div className="reveal">
          <span className="eyebrow">O salonie</span>
          <h2 className="font-display text-5xl md:text-6xl mt-5 leading-[1.05]">
            Miejsce, w którym <em className="text-gold not-italic">styl</em> spotyka się z precyzją.
          </h2>
          <div className="gold-divider w-24 my-8" />
          <p className="text-muted-foreground text-lg leading-relaxed font-light">
            UnitedHair to katowicka pracownia fryzjerska stworzona dla osób, które
            cenią jakość, dyskrecję i indywidualne podejście. Nasi styliści łączą
            wieloletnie doświadczenie z najnowszymi trendami z paryskich i mediolańskich
            wybiegów.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light mt-5">
            Pracujemy wyłącznie na profesjonalnych kosmetykach renomowanych marek,
            dbając o kondycję włosów na każdym etapie wizyty. Przestrzeń salonu
            zaprojektowana została tak, by każda chwila była komfortem.
          </p>

          <div className="grid grid-cols-3 gap-8 mt-12 pt-10 border-t border-border">
            {[
              { n: "5+", l: "Lat doświadczenia" },
              { n: "1000+", l: "Zadowolonych klientów" },
              { n: "100%", l: "Premium kosmetyki" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-4xl text-graphite">{s.n}</div>
                <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
