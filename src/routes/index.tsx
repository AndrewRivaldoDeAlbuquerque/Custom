import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Custom Care | Consultoria Tecnológica e Softwares Sob Medida" },
      {
        name: "description",
        content:
          "Consultoria tecnológica e desenvolvimento de software sob medida. Transformamos ideias em soluções digitais que geram resultado.",
      },
      { property: "og:title", content: "Custom Care | Consultoria Tecnológica e Softwares Sob Medida" },
      {
        property: "og:description",
        content:
          "Consultoria tecnológica e desenvolvimento de software sob medida. Transformamos ideias em soluções digitais que geram resultado.",
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
    </div>
  );
}
