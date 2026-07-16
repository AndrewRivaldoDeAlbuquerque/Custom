import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden gradient-hero text-white pt-32 pb-24 md:pt-40 md:pb-32">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40 mix-blend-screen"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div aria-hidden className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/40 blur-3xl animate-float" />
      <div aria-hidden className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-14 items-center">
        <div>
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
          <p className="mt-6 text-lg text-white/75 max-w-xl leading-relaxed">
            A Custom Care é a parceira tecnológica que estrutura, desenvolve e escala seu negócio.
            Do diagnóstico ao software pronto, cuidamos de cada detalhe.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contato" className="btn-primary">
              Solicitar diagnóstico gratuito
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#servicos" className="btn-ghost !text-white !border-white/25 hover:!bg-white/10">
              Conhecer serviços
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
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

        <div className="relative hidden md:block">
          <div className="relative aspect-square max-w-md ml-auto">
            <div className="absolute inset-0 rounded-full gradient-brand blur-3xl opacity-40 animate-float" />
            <div className="relative h-full w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-elegant">
              <div className="h-full w-full rounded-2xl border border-white/10 bg-black/20 p-5 font-mono text-xs text-white/80 overflow-hidden">
                <div className="flex gap-1.5 mb-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                </div>
                <pre className="leading-relaxed">
{`> customcare init

✓ analisando negócio...
✓ mapeando processos...
✓ desenhando arquitetura...
✓ desenvolvendo solução...

🚀 pronto para escalar.`}
                </pre>
                <div className="mt-6 space-y-2">
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-4/5 gradient-brand" />
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-3/5 gradient-brand" />
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-11/12 gradient-brand" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
