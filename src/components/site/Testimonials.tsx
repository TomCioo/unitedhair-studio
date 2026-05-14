const reviews = [
  {
    text: "Najlepszy salon w Katowicach. Atmosfera klasy premium, a efekt koloryzacji przerósł moje oczekiwania. Włosy zdrowe i lśniące tygodniami.",
    name: "Karolina W.",
    role: "Klientka stała",
  },
  {
    text: "Profesjonalizm na najwyższym poziomie. Stylista doskonale doradził fryzurę dopasowaną do mojej twarzy i stylu życia.",
    name: "Michał K.",
    role: "Strzyżenie męskie",
  },
  {
    text: "Wnętrze, zapach, muzyka — wszystko dopracowane w najmniejszym detalu. Czuję się tu jak w paryskim atelier.",
    name: "Aleksandra M.",
    role: "Pakiet Editorial",
  },
  {
    text: "Po latach poszukiwań w końcu znalazłam swoje miejsce. Balayage wykonane perfekcyjnie, kondycja włosów rewelacyjna.",
    name: "Natalia P.",
    role: "Balayage",
  },
  {
    text: "Polecam każdemu, kto szuka czegoś więcej niż zwykłej wizyty u fryzjera. To prawdziwy rytuał piękna.",
    name: "Joanna L.",
    role: "Pakiet Glow",
  },
  {
    text: "Świetna obsługa, kompetentni stylistki, doskonałe kosmetyki. Każda wizyta to czysta przyjemność.",
    name: "Ewa S.",
    role: "Klientka stała",
  },
];

export function Testimonials() {
  return (
    <section id="opinie" className="py-28 lg:py-40 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="eyebrow">Opinie</span>
          <h2 className="font-display text-5xl md:text-6xl mt-5 leading-[1.05]">
            Zaufały nam <em className="text-gold not-italic">setki</em> klientów
          </h2>
          <div className="gold-divider w-24 mx-auto my-8" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="reveal bg-background p-10 hover-lift relative"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <div className="font-display text-7xl text-gold leading-none absolute top-4 right-6 opacity-30">
                ”
              </div>
              <div className="text-gold text-sm tracking-widest">★★★★★</div>
              <blockquote className="mt-5 text-foreground/85 font-light leading-relaxed">
                {r.text}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <div className="font-display text-xl">{r.name}</div>
                <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">
                  {r.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
