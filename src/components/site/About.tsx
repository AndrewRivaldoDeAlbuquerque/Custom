import team from "@/assets/team.jpg";
import { Lightbulb, Zap, Shuffle, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import config from "@/config.json";

const { founders, brand } = config;

const values = [
  {
    icon: Lightbulb,
    title: "Inovação",
    desc: "Sempre na vanguarda tecnológica",
  },
  {
    icon: Zap,
    title: "Agilidade",
    desc: "Entregas rápidas e eficientes",
  },
  {
    icon: Shuffle,
    title: "Flexibilidade",
    desc: "Adaptação às suas necessidades",
  },
  {
    icon: ShieldCheck,
    title: "Integridade",
    desc: "Transparência em todas as relações",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-surface py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 tech-grid opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <Reveal className="relative order-2 md:order-1" delay={100}>
            <div className="absolute -inset-4 rounded-3xl gradient-brand opacity-20 blur-2xl animate-glow-pulse" />
            <img
              src={team}
              alt="Time da Custom Care"
              width={1400}
              height={1000}
              loading="lazy"
              className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-elegant"
            />
            <div className="absolute -bottom-6 -right-6 hidden max-w-[220px] rounded-2xl border border-border bg-card p-5 shadow-card md:block">
              <div className="font-display text-3xl font-semibold text-gradient-brand">100%</div>
              <div className="mt-1 text-xs text-muted-foreground">
                de fidelidade inicial com nossos clientes
              </div>
            </div>
          </Reveal>

          <Reveal className="order-1 md:order-2">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary">
              Sobre a {brand.name}
            </span>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              Se tá complexo,{" "}
              <span className="text-gradient-brand">está errado</span>.
            </h2>
            <div className="mt-4 h-px w-24 bg-gradient-to-r from-primary via-primary-glow to-transparent" />
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              A {brand.name} nasceu da união entre a visão técnica de{" "}
              <span className="font-medium text-foreground">
                {founders.cto.name} ({founders.cto.role})
              </span>{" "}
              e a visão estratégica de{" "}
              <span className="font-medium text-foreground">
                {founders.ceo.name} ({founders.ceo.role})
              </span>
              , para combater um mercado de atendimento impessoal.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Sob o lema <em className="text-foreground">“Se tá complexo, está errado”</em>,
              criamos soluções que se adaptam ao cliente, com simplicidade e performance.
              Começando com pequenas empresas, consolidamos relacionamentos de longo prazo e{" "}
              <span className="font-medium text-foreground">100% de fidelidade inicial</span>,
              alinhando conhecimento de negócio com intervenções tecnológicas estratégicas que
              geram impacto mensurável.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-2">
          <Reveal delay={80}>
            <div className="tech-card h-full rounded-2xl border border-border bg-card/80 p-7 shadow-card backdrop-blur-sm">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Nossa Missão
              </span>
              <p className="mt-3 text-xl font-semibold leading-snug md:text-2xl">
                Simplificar o complexo e gerar resultados reais através da tecnologia
              </p>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="tech-card h-full rounded-2xl border border-border bg-card/80 p-7 shadow-card backdrop-blur-sm">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Nossa Visão
              </span>
              <p className="mt-3 text-xl font-semibold leading-snug md:text-2xl">
                Ser o hub de soluções tecnológicas na Revolução 4.0, conectando clientes a um
                ecossistema de possibilidades
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16" delay={100}>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Nossos Valores
          </span>
          <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
            O que guia cada decisão
          </h3>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.title} delay={120 + i * 70}>
                <div className="tech-card group h-full rounded-2xl border border-border bg-card/80 p-6 shadow-card backdrop-blur-sm">
                  <div className="tech-card-icon inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 text-lg font-semibold">{v.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
