import { type MouseEvent } from "react";
import { ArrowRight, Cloud, LineChart, ShieldCheck, Cpu, Users } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: LineChart,
    title: "Consultoria Estratégica",
    desc: "Diagnóstico e roadmap para alinhar TI ao resultado do negócio.",
    benefit: "Clareza em semanas",
    featured: true,
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Infraestrutura escalável, deploys automáticos e monitoramento contínuo.",
    benefit: "Operação mais estável",
  },
  {
    icon: Cpu,
    title: "Automação & IA",
    desc: "Automações e IA aplicadas a processos que consomem tempo e custo.",
    benefit: "Menos retrabalho",
  },
  {
    icon: ShieldCheck,
    title: "Segurança & LGPD",
    desc: "Proteção de dados, conformidade e auditorias sem frear a operação.",
    benefit: "Risco sob controle",
  },
  {
    icon: Users,
    title: "Squads Dedicadas",
    desc: "Times de tecnologia sob demanda, como extensão do seu time interno.",
    benefit: "Velocidade com foco",
  },
];

function onSpotlightMove(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
  el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
}

export function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 tech-grid opacity-25" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            O que fazemos
          </span>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
            Consultoria tecnológica{" "}
            <span className="text-gradient-brand">com impacto real</span>.
          </h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-primary via-primary-glow to-transparent" />
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Do diagnóstico à evolução contínua — estratégia e execução no mesmo time.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            const n = String(i + 1).padStart(2, "0");

            return (
              <Reveal
                key={s.title}
                delay={i * 80}
                className={cn(s.featured && "sm:col-span-2 lg:col-span-2")}
              >
                <article
                  onMouseMove={onSpotlightMove}
                  className={cn(
                    "spotlight-card tech-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/80 p-7 shadow-card backdrop-blur-sm",
                    s.featured && "md:min-h-[240px] md:flex-row md:items-stretch md:gap-8 md:p-8",
                  )}
                >
                  <div className="spotlight-card-glow" aria-hidden />
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className={cn("flex flex-1 flex-col", s.featured && "md:max-w-md")}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="tech-card-icon inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary backdrop-blur-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-display text-sm font-semibold tabular-nums text-primary/35">
                        {n}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-semibold md:text-xl">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                      <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                        {s.benefit}
                      </span>
                      <a
                        href="#contato"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-dark"
                      >
                        Saiba mais
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </div>

                  {s.featured && (
                    <div
                      aria-hidden
                      className="pointer-events-none relative mt-6 hidden flex-1 overflow-hidden rounded-xl border border-primary/15 bg-gradient-to-br from-primary/10 via-transparent to-primary-glow/10 md:mt-0 md:block"
                    >
                      <div className="absolute inset-0 tech-grid opacity-50" />
                      <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="text-xs font-semibold uppercase tracking-widest text-primary/70">
                          Ponto de partida
                        </div>
                        <div className="mt-2 font-display text-2xl font-semibold text-foreground/90">
                          Diagnóstico gratuito
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
