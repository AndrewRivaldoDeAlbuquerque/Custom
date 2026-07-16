const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Entendemos seu negócio, seus processos e onde a tecnologia pode gerar mais valor.",
  },
  {
    n: "02",
    title: "Planejamento",
    desc: "Desenhamos a arquitetura, o escopo, os prazos e o roadmap da solução.",
  },
  {
    n: "03",
    title: "Execução",
    desc: "Desenvolvemos em sprints com entregas contínuas, transparência e acompanhamento próximo.",
  },
  {
    n: "04",
    title: "Evolução",
    desc: "Colocamos em produção, monitoramos, otimizamos e evoluímos junto com o seu negócio.",
  },
];

export function Process() {
  return (
    <section id="processo" className="py-24 md:py-32 relative overflow-hidden">
      <div aria-hidden className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full gradient-brand opacity-10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary">
            Como trabalhamos
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold">
            Um processo <span className="text-gradient-brand">simples</span> e comprovado.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-4 gap-6 relative">
          <div aria-hidden className="hidden md:block absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="relative z-10 h-16 w-16 rounded-2xl gradient-brand text-white font-display font-semibold text-xl flex items-center justify-center shadow-elegant">
                {s.n}
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
