import { useEffect, useState } from "react";
import logo from "@/assets/logo-custom-care.png";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#processo", label: "Processo" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/70 shadow-[0_8px_32px_-12px_rgba(119,40,198,0.18)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-18 flex items-center justify-between py-3">
        <a href="#top" className="group flex items-center gap-2.5">
          <img
            src={logo}
            alt=""
            className="h-10 w-10 object-contain md:h-11 md:w-11"
          />
          <span
            className="font-display text-lg font-semibold tracking-tight text-gradient-brand transition-all duration-300 group-hover:bg-none group-hover:text-white group-hover:[-webkit-text-fill-color:white]"
            style={{
              backgroundImage: "linear-gradient(135deg, #CBB1DE, #B391D0, #9968C6)",
            }}
          >
            Custom Care
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-[#9968C6] hover:text-[#7728C6]"
                  : "text-[#B391D0] hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contato" className="btn-primary animate-attention">
            Falar com especialista
          </a>
        </div>

        <button
          className={`md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border transition-colors duration-300 ${
            scrolled
              ? "border-primary/40 hover:border-primary hover:bg-primary/5"
              : "border-[#B391D0] hover:border-white hover:bg-white/10"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 rounded-full transition-colors duration-300 ${
                scrolled ? "bg-primary" : "bg-[#B391D0]"
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full transition-colors duration-300 ${
                scrolled ? "bg-primary" : "bg-[#B391D0]"
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full transition-colors duration-300 ${
                scrolled ? "bg-primary" : "bg-[#B391D0]"
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-[#B391D0] transition-colors duration-300 hover:text-[#7728C6]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="btn-primary animate-attention mt-2"
            >
              Falar com especialista
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
