import g1 from "@/assets/g1.jpeg";
import g2 from "@/assets/g2.jpeg";
import g3 from "@/assets/g3.jpeg";
import g4 from "@/assets/g4.jpeg";
import g5 from "@/assets/g5.jpeg";
import g6 from "@/assets/g6.jpeg";

const items = [
  { src: g1, alt: "Brunet balayage", span: "row-span-2" },
  { src: g4, alt: "Stylizacja w salonie", span: "" },
  { src: g3, alt: "Platynowy blond", span: "" },
  { src: g2, alt: "Męskie strzyżenie", span: "row-span-2" },
  { src: g5, alt: "Wnętrze salonu", span: "" },
  { src: g6, alt: "Koloryzacja miedziana", span: "" },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-28 lg:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal">
          <div>
            <span className="eyebrow">Galeria</span>
            <h2 className="font-display text-5xl md:text-6xl mt-5 leading-[1.05]">
              Efekty naszej <em className="text-gold not-italic">pracy</em>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/unitedhair_kato"
            target="_blank"
            rel="noreferrer"
            className="text-xs tracking-[0.3em] uppercase text-muted-foreground hover:text-gold transition-colors"
          >
            Zobacz więcej na Instagramie →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[280px] gap-3 md:gap-5 mt-16">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`reveal group relative overflow-hidden ${it.span}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-graphite/0 group-hover:bg-graphite/30 transition-colors duration-500" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
