import { useState, type ComponentProps } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import {
  contactSchema,
  formatPhoneBR,
  sanitizeEmailInput,
  type ContactFormValues,
} from "@/lib/contact";
import { submitContactFn } from "@/server/contact";
import config from "@/config.json";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setServerError(null);
    try {
      const result = await submitContactFn({ data });
      window.open(result.whatsappUrl, "_blank", "noopener,noreferrer");
      setSent(true);
      reset();
    } catch (err) {
      const fieldErrors = extractFieldErrors(err);
      if (fieldErrors) {
        for (const [field, message] of Object.entries(fieldErrors)) {
          setError(field as keyof ContactFormValues, { message });
        }
        return;
      }
      setServerError(
        "Não foi possível validar o formulário. Confira os dados e tente novamente.",
      );
    }
  };

  return (
    <section id="contato" className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden className="absolute inset-0 gradient-hero opacity-[0.97]" />
      <div
        aria-hidden
        className="absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-primary/40 blur-3xl animate-glow-pulse"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 tech-grid-light" />

      <div className="relative mx-auto max-w-7xl px-6 text-white">
        <div className="grid items-start gap-14 md:grid-cols-2">
          <Reveal>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-glow">
              Vamos conversar
            </span>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              Pronto para tirar seu <br />
              <span
                className="text-gradient-brand"
                style={{ backgroundImage: "linear-gradient(135deg, #CBB1DE, #B391D0)" }}
              >
                projeto do papel?
              </span>
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">
              Conte para nós o desafio da sua empresa. Em até 24 horas retornamos com um
              diagnóstico inicial gratuito e sem compromisso.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { icon: Mail, label: config.contact.email },
                { icon: Phone, label: config.contact.phoneDisplay },
                { icon: MapPin, label: config.company.location },
              ].map(({ icon: Icon, label }, i) => (
                <Reveal
                  key={label}
                  delay={120 + i * 80}
                  className="flex items-center gap-3 text-white/80"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(179,145,208,0.35)]">
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-elegant backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_20px_60px_-20px_rgba(153,104,198,0.35)] md:p-8">
              {sent ? (
                <div className="py-10 text-center">
                  <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full gradient-brand">
                    <CheckCircle2 className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">Abrindo o WhatsApp…</h3>
                  <p className="mt-2 text-white/70">
                    Sua mensagem foi validada e montada com os dados do formulário. Basta
                    enviar no WhatsApp para falar com a Custom Care.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="btn-ghost mt-6 !border-white/25 !text-white"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Nome"
                      placeholder="Seu nome"
                      autoComplete="name"
                      error={errors.name?.message}
                      {...register("name")}
                    />
                    <Field
                      label="Empresa"
                      placeholder="Sua empresa"
                      autoComplete="organization"
                      error={errors.company?.message}
                      {...register("company")}
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <Field
                          label="E-mail"
                          type="email"
                          inputMode="email"
                          autoComplete="email"
                          placeholder="voce@empresa.com"
                          error={errors.email?.message}
                          name={field.name}
                          ref={field.ref}
                          onBlur={field.onBlur}
                          value={field.value}
                          onChange={(e) => field.onChange(sanitizeEmailInput(e.target.value))}
                        />
                      )}
                    />
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field }) => (
                        <Field
                          label="Telefone"
                          type="tel"
                          inputMode="numeric"
                          autoComplete="tel"
                          placeholder={config.contact.phoneMaskPlaceholder}
                          maxLength={15}
                          error={errors.phone?.message}
                          name={field.name}
                          ref={field.ref}
                          onBlur={field.onBlur}
                          value={field.value}
                          onChange={(e) => field.onChange(formatPhoneBR(e.target.value))}
                          onKeyDown={(e) => {
                            // Allow control keys + digits only
                            const allowed = [
                              "Backspace",
                              "Delete",
                              "Tab",
                              "Escape",
                              "Enter",
                              "ArrowLeft",
                              "ArrowRight",
                              "Home",
                              "End",
                            ];
                            if (allowed.includes(e.key) || e.ctrlKey || e.metaKey) return;
                            if (!/^\d$/.test(e.key)) e.preventDefault();
                          }}
                        />
                      )}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-sm font-medium text-white/80"
                    >
                      Como podemos ajudar?
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Conte um pouco sobre seu desafio..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                      className={cn(
                        "w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 transition-colors focus:bg-white/10 focus:outline-none",
                        errors.message
                          ? "border-red-400/70 focus:border-red-400"
                          : "border-white/15 focus:border-primary-glow",
                      )}
                      {...register("message")}
                    />
                    {errors.message && (
                      <p
                        id="contact-message-error"
                        className="mt-1.5 text-xs text-red-300"
                        role="alert"
                      >
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {serverError && (
                    <p className="text-center text-sm text-red-300" role="alert">
                      {serverError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Validando...
                      </>
                    ) : (
                      "Enviar mensagem"
                    )}
                  </button>
                  <p className="text-center text-xs text-white/50">
                    Ao enviar, os dados são validados no servidor e você é redirecionado ao
                    WhatsApp com a mensagem pronta. Tratamos seus dados conforme a LGPD.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function extractFieldErrors(err: unknown): Record<string, string> | null {
  if (!err || typeof err !== "object") return null;

  const message = "message" in err && typeof err.message === "string" ? err.message : "";

  // TanStack may serialize Zod issues into the error message as JSON
  try {
    const parsed = JSON.parse(message) as unknown;
    if (Array.isArray(parsed)) {
      const out: Record<string, string> = {};
      for (const issue of parsed) {
        if (
          issue &&
          typeof issue === "object" &&
          "path" in issue &&
          "message" in issue &&
          Array.isArray(issue.path) &&
          typeof issue.message === "string" &&
          typeof issue.path[0] === "string"
        ) {
          out[issue.path[0]] = issue.message;
        }
      }
      return Object.keys(out).length ? out : null;
    }
  } catch {
    // ignore
  }

  return null;
}

function Field({
  label,
  error,
  className,
  id,
  ...props
}: ComponentProps<"input"> & {
  label: string;
  error?: string;
}) {
  const fieldId = id ?? props.name;

  return (
    <div>
      <label htmlFor={fieldId} className="mb-1.5 block text-sm font-medium text-white/80">
        {label}
      </label>
      <input
        id={fieldId}
        aria-invalid={!!error}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        className={cn(
          "w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 transition-colors focus:bg-white/10 focus:outline-none",
          error
            ? "border-red-400/70 focus:border-red-400"
            : "border-white/15 focus:border-primary-glow",
          className,
        )}
        {...props}
      />
      {error && (
        <p id={`${fieldId}-error`} className="mt-1.5 text-xs text-red-300" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
