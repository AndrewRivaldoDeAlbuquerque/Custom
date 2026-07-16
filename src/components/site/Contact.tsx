import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="contato" className="py-24 md:py-32 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 gradient-hero opacity-[0.97]" />
      <div aria-hidden className="absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-primary/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 text-white">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary-glow">
              Vamos conversar
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold">
              Pronto para tirar seu <br />
              <span className="text-gradient-brand" style={{ backgroundImage: "linear-gradient(135deg, #CBB1DE, #B391D0)" }}>
                projeto do papel?
              </span>
            </h2>
            <p className="mt-5 text-white/70 text-lg leading-relaxed max-w-md">
              Conte para nós o desafio da sua empresa. Em até 24 horas retornamos com um
              diagnóstico inicial gratuito e sem compromisso.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { icon: Mail, label: "contato@customcare.com.br" },
                { icon: Phone, label: "+55 (81) 98787-1423" },
                { icon: MapPin, label: "Atendimento remoto no Brasil" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-white/80">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm">
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-6 md:p-8 shadow-elegant">
            {sent ? (
              <div className="text-center py-10">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full gradient-brand">
                  <CheckCircle2 className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">Mensagem enviada!</h3>
                <p className="mt-2 text-white/70">
                  Recebemos sua solicitação. Nosso time entrará em contato em breve.
                </p>
                <button onClick={() => setSent(false)} className="btn-ghost mt-6 !text-white !border-white/25">
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Nome" name="name" placeholder="Seu nome" required />
                  <Field label="Empresa" name="company" placeholder="Sua empresa" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="E-mail" name="email" type="email" placeholder="voce@empresa.com" required />
                  <Field label="Telefone" name="phone" placeholder="(11) 99999-9999" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-white/80">
                    Como podemos ajudar?
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Conte um pouco sobre seu projeto..."
                    className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary-glow focus:bg-white/10 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar mensagem"
                  )}
                </button>
                <p className="text-xs text-white/50 text-center">
                  Ao enviar, você concorda com o tratamento dos seus dados conforme a LGPD.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5 text-white/80">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary-glow focus:bg-white/10 transition-colors"
      />
    </div>
  );
}
