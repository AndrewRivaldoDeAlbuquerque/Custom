import { Code2, Cloud, LineChart, ShieldCheck, Cpu, Users } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento de Software",
    desc: "Aplicações web e mobile sob medida, construídas com tecnologias modernas e foco em performance.",
  },
  {
    icon: LineChart,
    title: "Consultoria Estratégica",
    desc: "Diagnóstico de processos e roadmap tecnológico para alinhar TI e resultados de negócio.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Infraestrutura escalável, automação de deploys e monitoramento contínuo em nuvem.",
  },
  {
    icon: Cpu,
    title: "Automação & IA",
    desc: "Integração de inteligência artificial e automações que economizam tempo e reduzem custos.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança & LGPD",
    desc: "Proteção de dados, adequação à LGPD e auditorias para manter sua operação em conformidade.",
  },
  {
    icon: Users,
    title: "Squads Dedicadas",
    desc: "Times de tecnologia alocados sob demanda, atuando como extensão do seu time interno.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary">
            O que fazemos
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold">
            Soluções tecnológicas <span className="text-gradient-brand">sob medida</span> para o seu negócio.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Combinamos consultoria estratégica e desenvolvimento técnico para entregar
            valor real em cada etapa do seu projeto.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant hover:border-primary/30"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-brand text-white shadow-soft">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
