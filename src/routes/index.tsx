import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { CookieConsent } from "@/components/site/CookieConsent";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Custom Care | Consultoria Tecnológica" },
      {
        name: "description",
        content:
          "Consultoria tecnológica para estruturar, orientar e escalar o seu negócio. Transformamos desafios em estratégias que geram resultado.",
      },
      { property: "og:title", content: "Custom Care | Consultoria Tecnológica" },
      {
        property: "og:description",
        content:
          "Consultoria tecnológica para estruturar, orientar e escalar o seu negócio. Transformamos desafios em estratégias que geram resultado.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <CookieConsent />
    </div>
  );
}
