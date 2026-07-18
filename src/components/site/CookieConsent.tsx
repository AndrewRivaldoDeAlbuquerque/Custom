import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";
import config from "@/config.json";

const COOKIE_NAME = config.cookie.name;
const COOKIE_MAX_AGE = 60 * 60 * 24 * config.cookie.maxAgeDays;

type ConsentValue = "accepted" | "declined";

function readConsent(): ConsentValue | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${COOKIE_NAME}=`));
  if (!match) return null;
  const value = match.split("=")[1];
  if (value === "accepted" || value === "declined") return value;
  return null;
}

function writeConsent(value: ConsentValue) {
  const secure =
    typeof window !== "undefined" && window.location.protocol === "https:"
      ? "; Secure"
      : "";
  document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax${secure}`;
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(readConsent() === null);
  }, []);

  const choose = (value: ConsentValue) => {
    writeConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="fixed inset-x-4 bottom-24 z-[60] mx-auto max-w-lg md:inset-x-auto md:bottom-6 md:left-6 md:right-auto"
    >
      <div className="rounded-2xl border border-border bg-card/95 p-5 shadow-elegant backdrop-blur-xl">
        <div className="flex gap-3">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl gradient-brand text-white shadow-soft">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <div>
            <h2 id="cookie-consent-title" className="font-display text-base font-semibold">
              Privacidade e cookies
            </h2>
            <p id="cookie-consent-desc" className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Usamos cookies essenciais e, com o seu consentimento, cookies para melhorar a
              experiência e entender como o site é usado. Você pode aceitar ou recusar. Sua
              escolha fica salva neste navegador.
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => choose("declined")}
            className="btn-ghost px-4 py-2.5 text-sm"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="btn-primary px-4 py-2.5 text-sm"
          >
            Aceitar cookies
          </button>
        </div>
      </div>
    </div>
  );
}
