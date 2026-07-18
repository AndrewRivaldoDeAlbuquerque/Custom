import { type MouseEvent } from "react";
import { Search, Map, Rocket, LineChart } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const steps = [
  {
    n: "01",
    icon: Search,
    title: "Diagnóstico",
    desc: "Entendemos seu negócio, seus processos e onde a tecnologia pode gerar mais valor.",
    deliverable: "Mapa de dores + oportunidades",
  },
  {
    n: "02",
    icon: Map,
    title: "Planejamento",
    desc: "Desenhamos a arquitetura, o escopo, os prazos e o roadmap da solução.",
    deliverable: "Escopo, prazos e roadmap",
  },
  {
    n: "03",
    icon: Rocket,
    title: "Execução",
    desc: "Conduzimos a implementação em ciclos com entregas contínuas, transparência e acompanhamento próximo.",
    deliverable: "Entregas em ciclos acompanhados",
  },
  {
    n: "04",
    icon: LineChart,
    title: "Evolução",
    desc: "Acompanhamos a operação, monitoramos resultados, otimizamos e evoluímos junto com o seu negócio.",
    deliverable: "Métricas, otimização e suporte",
  },
];

function onSpotlightMove(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
  el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
}

export function Process() {
  return (
    <section id="processo" className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full gradient-brand opacity-10 blur-3xl animate-glow-pulse"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 tech-grid" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Como trabalhamos
          </span>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
            Do complexo ao resultado,{" "}
            <span className="text-gradient-brand">em 4 etapas</span>.
          </h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-primary via-primary-glow to-transparent" />
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Um processo simples, transparente e alinhado ao lema: se tá complexo, está errado.
          </p>
        </Reveal>

        {/* Desktop: horizontal timeline */}
        <div className="relative mt-14 hidden md:grid md:grid-cols-4 md:gap-5">
          <div
            aria-hidden
            className="absolute top-[2.75rem] right-8 left-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          />
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.n} delay={i * 100} className="relative">
                <article
                  onMouseMove={onSpotlightMove}
                  className="spotlight-card tech-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/80 p-6 shadow-card backdrop-blur-sm"
                >
                  <div className="spotlight-card-glow" aria-hidden />
                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <div className="tech-card-icon inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand font-display text-lg font-semibold text-white shadow-elegant">
                      {s.n}
                    </div>
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="relative z-10 mt-5 text-lg font-semibold">{s.title}</h3>
                  <p className="relative z-10 mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                  <span className="relative z-10 mt-5 inline-flex rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                    {s.deliverable}
                  </span>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="relative mt-12 space-y-6 md:hidden">
          <div
            aria-hidden
            className="absolute top-4 bottom-4 left-[1.7rem] w-px bg-gradient-to-b from-primary/50 via-primary/25 to-transparent"
          />
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.n} delay={i * 90} className="relative pl-16">
                <div className="absolute top-0 left-0 z-10 flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand font-display text-lg font-semibold text-white shadow-elegant">
                  {s.n}
                </div>
                <article
                  onMouseMove={onSpotlightMove}
                  className="spotlight-card tech-card group relative overflow-hidden rounded-2xl border border-border bg-card/80 p-5 shadow-card backdrop-blur-sm"
                >
                  <div className="spotlight-card-glow" aria-hidden />
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="text-base font-semibold">{s.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <span className="mt-4 inline-flex rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                    {s.deliverable}
                  </span>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
