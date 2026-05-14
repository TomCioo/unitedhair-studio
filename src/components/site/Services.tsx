const BOOKSY = "https://booksy.com/pl-pl/234739_unitedhair_fryzjer_11597_katowice#ba_s=seo";

const categories = [
  {
    title: "Strzyżenie",
    desc: "Damskie i męskie strzyżenia dopasowane do kształtu twarzy, struktury włosa i Twojego stylu życia.",
    items: [
      { name: "Strzyżenie damskie", price: "od 150 zł" },
      { name: "Strzyżenie męskie", price: "od 90 zł" },
      { name: "Strzyżenie dziecięce", price: "od 60 zł" },
    ],
  },
  {
    title: "Koloryzacja",
    desc: "Naturalne refleksy, balayage, ombre i pełna zmiana koloru — z dbałością o kondycję włosa.",
    items: [
      { name: "Koloryzacja jednolita", price: "od 230 zł" },
      { name: "Balayage / Sombre", price: "od 450 zł" },
      { name: "Rozjaśnianie + toner", price: "od 380 zł" },
    ],
  },
  {
    title: "Pielęgnacja",
    desc: "Profesjonalne rytuały pielęgnacyjne dobrane do typu i potrzeb Twoich włosów.",
    items: [
      { name: "Rytuał nawilżający", price: "od 120 zł" },
      { name: "Kuracja proteinowa", price: "od 140 zł" },
      { name: "Botox dla włosów", price: "od 250 zł" },
    ],
  },
  {
    title: "Stylizacja",
    desc: "Modelowanie, fale, koki i upięcia okolicznościowe — od minimalizmu po editorial.",
    items: [
      { name: "Modelowanie", price: "od 90 zł" },
      { name: "Fale / Loki", price: "od 130 zł" },
      { name: "Upięcie okolicznościowe", price: "od 250 zł" },
    ],
  },
  {
    title: "Zabiegi regeneracyjne",
    desc: "Intensywna odbudowa pasm zniszczonych koloryzacją lub stylizacją termiczną.",
    items: [
      { name: "Olaplex", price: "od 100 zł" },
      { name: "Keratynowe prostowanie", price: "od 600 zł" },
      { name: "Nanoplastia", price: "od 700 zł" },
    ],
  },
  {
    title: "Pakiety premium",
    desc: "Łączymy zabiegi w pełne rytuały dla efektu, który zachwyci Cię na tygodnie.",
    items: [
      { name: "Pakiet Glow", price: "od 320 zł" },
      { name: "Pakiet Editorial", price: "od 550 zł" },
      { name: "Pakiet Bridal", price: "od 800 zł" },
    ],
  },
];

export function Services() {
  return (
    <section id="oferta" className="py-28 lg:py-40 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="eyebrow">Oferta</span>
          <h2 className="font-display text-5xl md:text-6xl mt-5 leading-[1.05]">
            Usługi szyte na <em className="text-gold not-italic">miarę</em>
          </h2>
          <div className="gold-divider w-24 mx-auto my-8" />
          <p className="text-muted-foreground font-light">
            Pełen zakres usług fryzjerskich dla kobiet i mężczyzn — od klasycznych
            strzyżeń po editorialowe stylizacje i zaawansowane zabiegi pielęgnacyjne.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border mt-20">
          {categories.map((c, i) => (
            <article
              key={c.title}
              className="reveal group bg-cream p-10 lg:p-12 hover-lift hover:bg-background"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <div className="flex items-start justify-between">
                <h3 className="font-display text-3xl">{c.title}</h3>
                <span className="text-xs tracking-[0.2em] text-gold">0{i + 1}</span>
              </div>
              <div className="gold-divider w-12 my-6 opacity-70" />
              <p className="text-muted-foreground text-sm leading-relaxed font-light">{c.desc}</p>
              <ul className="mt-8 space-y-3">
                {c.items.map((it) => (
                  <li key={it.name} className="flex items-baseline justify-between gap-4 text-sm">
                    <span className="text-foreground">{it.name}</span>
                    <span className="flex-1 border-b border-dashed border-border/70 mx-2 translate-y-[-3px]" />
                    <span className="text-graphite font-medium">{it.price}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="text-center mt-16 reveal">
          <a
            href={BOOKSY}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-9 py-4 text-xs tracking-[0.3em] uppercase bg-graphite text-primary-foreground hover:bg-gold hover:text-graphite transition-colors duration-500"
          >
            Zobacz pełen cennik na Booksy
          </a>
        </div>
      </div>
    </section>
  );
}
