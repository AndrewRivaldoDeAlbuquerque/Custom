import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const items = [
  {
    quote:
      "A Custom Care entregou muito além do esperado. Reduzimos em 60% o tempo de operação com a automação que eles construíram.",
    name: "Marina Alves",
    role: "COO • Nexus Logística",
  },
  {
    quote:
      "Times parceiros, técnicos e transparentes. Em poucos meses reorganizamos nossa operação de TI e a evolução continua até hoje.",
    name: "Rafael Menezes",
    role: "CEO • FitLoop",
  },
  {
    quote:
      "A consultoria da Custom Care nos ajudou a reorganizar toda a arquitetura de dados. Ganhamos previsibilidade e velocidade.",
    name: "Camila Duarte",
    role: "Head de Tecnologia • Vibra Retail",
  },
  {
    quote:
      "O diagnóstico foi cirúrgico. Em semanas tínhamos um roadmap claro e prioridades alinhadas ao negócio — sem enrolação técnica.",
    name: "Bruno Ferreira",
    role: "Diretor de Operações • Atlas Health",
  },
  {
    quote:
      "Saímos do caos de ferramentas espalhadas para uma operação de TI organizada. A Custom Care conduziu a mudança com muita clareza.",
    name: "Juliana Costa",
    role: "Gerente de TI • Horizonte Educacional",
  },
  {
    quote:
      "Segurança e LGPD deixaram de ser dor de cabeça. A adequação foi prática, documentada e sem interromper o dia a dia da equipe.",
    name: "Pedro Nogueira",
    role: "CISO • CrediMais Financeira",
  },
  {
    quote:
      "Cloud e DevOps no ponto. Deploy mais rápido, monitoramento real e custo sob controle. Recomendo de olhos fechados.",
    name: "Ana Beatriz Lima",
    role: "CTO • Orbit SaaS",
  },
  {
    quote:
      "A squad dedicada se integrou como se fosse nosso time interno. Produtividade subiu e a comunicação nunca foi um problema.",
    name: "Lucas Andrade",
    role: "Product Lead • Verde Agro Tech",
  },
  {
    quote:
      "Automação com IA aplicada no atendimento cortou retrabalho e melhorou a experiência do cliente. Resultado mensurável em 90 dias.",
    name: "Fernanda Rocha",
    role: "Head de CX • Pulse Telecom",
  },
];

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const id = window.setInterval(() => {
      api.scrollNext();
    }, 4500);

    return () => window.clearInterval(id);
  }, [api]);

  return (
    <section id="depoimentos" className="overflow-hidden bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Depoimentos
          </span>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
            Quem confia na Custom Care{" "}
            <span className="text-gradient-brand">recomenda</span>.
          </h2>
        </Reveal>

        <Reveal className="relative mt-14" delay={120}>
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {items.map((t) => (
                <CarouselItem
                  key={t.name}
                  className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
                >
                  <figure className="tech-card group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-card">
                    <Quote className="h-8 w-8 text-primary/30 transition-colors duration-300 group-hover:text-primary/55" />
                    <blockquote className="mt-4 flex-1 leading-relaxed text-foreground/90">
                      "{t.quote}"
                    </blockquote>
                    <figcaption className="mt-6 border-t border-border pt-6">
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-sm text-muted-foreground">{t.role}</div>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-8 flex items-center justify-end gap-2">
              <CarouselPrevious className="static top-auto left-auto right-auto translate-y-0 border-border bg-card text-foreground shadow-soft hover:bg-primary hover:text-primary-foreground disabled:opacity-40" />
              <CarouselNext className="static top-auto left-auto right-auto translate-y-0 border-border bg-card text-foreground shadow-soft hover:bg-primary hover:text-primary-foreground disabled:opacity-40" />
            </div>
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
