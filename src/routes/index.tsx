import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Booking } from "@/components/site/Booking";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UnitedHair Katowice — Premium salon fryzjerski" },
      {
        name: "description",
        content:
          "UnitedHair to premium salon fryzjerski w Katowicach. Strzyżenie, koloryzacja, balayage, regeneracja i stylizacja na najwyższym poziomie. Rezerwacja online.",
      },
      { property: "og:title", content: "UnitedHair Katowice — Premium salon fryzjerski" },
      {
        property: "og:description",
        content: "Piękno, styl i precyzja w jednym miejscu. Salon fryzjerski premium w Katowicach.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: "UnitedHair",
          image: "/og-image.jpg",
          telephone: "+48535593386",
          priceRange: "$$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Ceglana 65/1",
            postalCode: "40-514",
            addressLocality: "Katowice",
            addressCountry: "PL",
          },
          url: "https://unitedhair.pl",
          sameAs: [
            "https://www.instagram.com/unitedhair_kato",
            "https://www.facebook.com/profile.php?id=100091896117180",
            "https://booksy.com/pl-pl/234739_unitedhair_fryzjer_11597_katowice",
          ],
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "11:00", closes: "19:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "09:00", closes: "17:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "11:00", closes: "19:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "09:00", closes: "17:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "11:00", closes: "19:00" },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Booking />
      <Gallery />
      <Testimonials />
      <Contact />
      <Faq />
      <Footer />
    </main>
  );
}
