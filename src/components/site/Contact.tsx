import { MapPin, Phone, Clock } from "lucide-react";

const hours = [
  { d: "Poniedziałek", h: "11:00 – 19:00" },
  { d: "Wtorek", h: "09:00 – 17:00" },
  { d: "Środa", h: "11:00 – 19:00" },
  { d: "Czwartek", h: "09:00 – 17:00" },
  { d: "Piątek", h: "11:00 – 19:00" },
  { d: "Sobota", h: "Zamknięte" },
  { d: "Niedziela", h: "Zamknięte" },
];

export function Contact() {
  return (
    <section id="kontakt" className="py-28 lg:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="eyebrow">Kontakt</span>
          <h2 className="font-display text-5xl md:text-6xl mt-5 leading-[1.05]">
            Odwiedź <em className="text-gold not-italic">nasz salon</em>
          </h2>
          <div className="gold-divider w-24 mx-auto my-8" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 mt-16">
          <div className="lg:col-span-2 space-y-8 reveal">
            <div className="flex gap-5">
              <MapPin className="text-gold shrink-0 mt-1" size={22} />
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground">Adres</div>
                <div className="font-display text-2xl mt-2">Ceglana 65/1</div>
                <div className="text-foreground/80">40-514 Katowice</div>
              </div>
            </div>
            <div className="flex gap-5">
              <Phone className="text-gold shrink-0 mt-1" size={22} />
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground">Telefon</div>
                <a href="tel:+48535593386" className="font-display text-2xl mt-2 block hover:text-gold transition-colors">
                  535 593 386
                </a>
              </div>
            </div>
            <div className="flex gap-5">
              <Clock className="text-gold shrink-0 mt-1" size={22} />
              <div className="w-full">
                <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-3">Godziny otwarcia</div>
                <ul className="space-y-2">
                  {hours.map((h) => (
                    <li key={h.d} className="flex justify-between text-sm border-b border-border/60 pb-2">
                      <span className="text-foreground/85">{h.d}</span>
                      <span className={h.h === "Zamknięte" ? "text-muted-foreground" : "text-graphite font-medium"}>
                        {h.h}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 reveal">
            <div className="w-full h-full min-h-[460px] overflow-hidden">
              <iframe
                title="Mapa UnitedHair Katowice"
                src="https://www.google.com/maps?q=Ceglana%2065%2F1%2C%2040-514%20Katowice&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[460px] grayscale contrast-[1.05]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
