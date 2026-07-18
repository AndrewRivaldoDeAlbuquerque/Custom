import heroVideo from "@/assets/hero-tech.mp4";
import heroPoster from "@/assets/hero-bg.jpg";
import type { CSSProperties } from "react";
import { CountUp } from "@/components/site/Reveal";

const stats = [
  { end: 100, prefix: "+", suffix: "", label: "Projetos entregues" },
  { end: 98, prefix: "", suffix: "%", label: "Clientes satisfeitos" },
  { end: 10, prefix: "", suffix: "+", label: "Anos de experiência" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden text-white"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
        className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        src={heroVideo}
      />
      {/* Dark scrim so headline/CTA stay readable over the video */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)]"
      />

      <div className="relative mx-auto max-w-4xl px-6 py-32 text-center md:py-40">
        <h1
          className="hero-enter mt-1 text-4xl font-semibold leading-[1.05] drop-shadow-sm md:text-6xl"
          style={{ "--enter-delay": "80ms" } as CSSProperties}
        >
          Transformamos desafios em{" "}
          <span
            className="text-gradient-brand"
            style={{
              backgroundImage: "linear-gradient(135deg, #CBB1DE, #B391D0, #9968C6)",
            }}
          >
            estratégias tecnológicas
          </span>{" "}
          que geram resultado.
        </h1>
        <p
          className="hero-enter mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 drop-shadow-sm"
          style={{ "--enter-delay": "180ms" } as CSSProperties}
        >
          A Custom Care é a parceira de consultoria tecnológica que estrutura, orienta e
          escala o seu negócio. Do diagnóstico à evolução contínua, cuidamos de cada detalhe.
        </p>

        <div
          className="hero-enter mx-auto mt-14 grid max-w-md grid-cols-3 gap-6"
          style={{ "--enter-delay": "320ms" } as CSSProperties}
        >
          {stats.map((s, i) => (
            <div key={s.label}>
              <div className="font-display text-2xl font-semibold tabular-nums md:text-3xl">
                <CountUp
                  end={s.end}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  duration={2200}
                  delay={450 + i * 120}
                />
              </div>
              <div className="mt-1 text-xs text-white/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
