const BOOKSY = "https://booksy.com/pl-pl/234739_unitedhair_fryzjer_11597_katowice#ba_s=seo";

export function Booking() {
  return (
    <section id="rezerwacja" className="relative py-28 lg:py-40 bg-graphite text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--gold)_0,_transparent_50%)]" />
      </div>
      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center reveal">
        <span className="eyebrow text-gold">Rezerwacja online</span>
        <h2 className="font-display text-5xl md:text-7xl mt-6 leading-[1]">
          Twój nowy <em className="text-gold not-italic">look</em> zaczyna się tutaj.
        </h2>
        <div className="gold-divider w-24 mx-auto my-10" />
        <p className="text-primary-foreground/75 max-w-xl mx-auto font-light text-lg">
          Wybierz dogodny termin i usługę bezpośrednio w systemie Booksy.
          Wygodnie, szybko i 24/7.
        </p>
        <a
          href={BOOKSY}
          target="_blank"
          rel="noreferrer"
          className="mt-12 inline-flex items-center px-12 py-5 text-xs tracking-[0.35em] uppercase bg-gold text-graphite hover:bg-primary-foreground transition-all duration-500"
        >
          Umów wizytę online
        </a>
      </div>
    </section>
  );
}
