import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Jak przygotować włosy do wizyty?",
    a: "Włosy najlepiej umyć dzień przed wizytą — szczególnie przy strzyżeniu. Przy koloryzacji unikaj intensywnych kuracji odżywczych na 2 dni przed zabiegiem, by kolor lepiej się utrwalił.",
  },
  {
    q: "Jak dobrać odpowiednią fryzurę?",
    a: "Podczas konsultacji nasi styliści analizują kształt twarzy, strukturę włosa i Twój styl życia. Zachęcamy do przyniesienia inspiracji — wspólnie dopracujemy projekt idealny dla Ciebie.",
  },
  {
    q: "Czy mogę zarezerwować wizytę online?",
    a: "Tak, rezerwacja odbywa się przez system Booksy — szybko i wygodnie, 24/7. Wystarczy kliknąć przycisk „Umów wizytę online”.",
  },
  {
    q: "Na jakich kosmetykach pracujecie?",
    a: "Korzystamy wyłącznie z profesjonalnych marek premium, m.in. Olaplex, Kérastase i L’Oréal Professionnel. Wszystkie produkty dobierane są indywidualnie do potrzeb Twoich włosów.",
  },
  {
    q: "Ile trwa zabieg koloryzacji?",
    a: "W zależności od techniki: koloryzacja jednolita ok. 1,5–2 godz., balayage lub rozjaśnianie 3–5 godz. Dokładny czas potwierdzimy podczas konsultacji.",
  },
  {
    q: "Czy salon obsługuje również mężczyzn?",
    a: "Oczywiście. UnitedHair to salon unisex — oferujemy pełen zakres usług dla kobiet i mężczyzn, w tym strzyżenia klasyczne, modne fade'y i pielęgnację brody.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-28 lg:py-40 bg-cream">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="text-center reveal">
          <span className="eyebrow">FAQ</span>
          <h2 className="font-display text-5xl md:text-6xl mt-5 leading-[1.05]">
            Najczęstsze <em className="text-gold not-italic">pytania</em>
          </h2>
          <div className="gold-divider w-24 mx-auto my-8" />
        </div>

        <Accordion type="single" collapsible className="mt-12 reveal">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
              <AccordionTrigger className="font-display text-xl md:text-2xl text-left hover:text-gold py-6">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed text-base pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
