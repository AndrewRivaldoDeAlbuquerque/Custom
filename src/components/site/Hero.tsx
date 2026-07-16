import heroVideo from "@/assets/hero-tech.mp4.asset.json";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden text-white min-h-screen flex items-center justify-center">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo.url}
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/80" />
      <div aria-hidden className="absolute inset-0 gradient-hero opacity-60 mix-blend-multiply" />

      <div className="relative mx-auto max-w-4xl px-6 py-32 md:py-40 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-3.5 py-1.5 text-xs font-medium">
          <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
          Consultoria em Tecnologia & Software Sob Medida
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.05]">
          Transformamos ideias em{" "}
          <span className="text-gradient-brand" style={{ backgroundImage: "linear-gradient(135deg, #CBB1DE, #B391D0, #9968C6)" }}>
            soluções digitais
          </span>{" "}
          que geram resultado.
        </h1>
        <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
          A Custom Care é a parceira tecnológica que estrutura, desenvolve e escala seu negócio.
          Do diagnóstico ao software pronto, cuidamos de cada detalhe.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a href="#contato" className="btn-primary">
            Solicitar diagnóstico gratuito
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#servicos" className="btn-ghost !text-white !border-white/25 hover:!bg-white/10">
            Conhecer serviços
          </a>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-6 max-w-md mx-auto">
          {[
            { k: "+80", v: "Projetos entregues" },
            { k: "98%", v: "Clientes satisfeitos" },
            { k: "10+", v: "Anos de experiência" },
          ].map((s) => (
            <div key={s.v}>
              <div className="text-2xl md:text-3xl font-semibold font-display">{s.k}</div>
              <div className="text-xs text-white/60 mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
