import { Quote } from "lucide-react";

const items = [
  {
    quote:
      "A Custom Care entregou muito além do esperado. Reduzimos em 60% o tempo de operação com a automação que eles construíram.",
    name: "Marina Alves",
    role: "COO • Nexus Logística",
  },
  {
    quote:
      "Times parceiros, técnicos e transparentes. Nosso app foi ao ar em 4 meses e a evolução continua até hoje.",
    name: "Rafael Menezes",
    role: "CEO • FitLoop",
  },
  {
    quote:
      "A consultoria da Custom Care nos ajudou a reorganizar toda a arquitetura de dados. Ganhamos previsibilidade e velocidade.",
    name: "Camila Duarte",
    role: "Head de Tecnologia • Vibra Retail",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary">
            Depoimentos
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold">
            Quem confia na Custom Care <span className="text-gradient-brand">recomenda</span>.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {items.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-2xl border border-border bg-card p-7 shadow-card"
            >
              <Quote className="h-8 w-8 text-primary/30" />
              <blockquote className="mt-4 text-foreground/90 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
