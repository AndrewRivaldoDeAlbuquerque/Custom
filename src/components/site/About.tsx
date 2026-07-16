import team from "@/assets/team.jpg";
import { Check } from "lucide-react";

const points = [
  "Time sênior com experiência em projetos de grande porte",
  "Metodologia ágil com entregas rápidas e previsíveis",
  "Foco em resultado de negócio, não só em tecnologia",
  "Suporte contínuo e evolução do produto após o lançamento",
];

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-14 items-center">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-4 gradient-brand rounded-3xl opacity-20 blur-2xl" />
          <img
            src={team}
            alt="Time da Custom Care em reunião"
            width={1400}
            height={1000}
            loading="lazy"
            className="relative rounded-3xl shadow-elegant object-cover w-full aspect-[4/3]"
          />
          <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl bg-card border border-border shadow-card p-5 max-w-[220px]">
            <div className="text-3xl font-display font-semibold text-gradient-brand">100%</div>
            <div className="text-xs text-muted-foreground mt-1">
              dos nossos clientes recomendam a Custom Care
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary">
            Sobre nós
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold">
            Uma parceira que cuida da sua tecnologia como <span className="text-gradient-brand">se fosse dela</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            A Custom Care nasceu para aproximar empresas de todos os portes das melhores
            práticas de tecnologia. Atuamos com transparência, proximidade e domínio
            técnico — do primeiro código à operação em produção.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full gradient-brand text-white shrink-0">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-foreground/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
