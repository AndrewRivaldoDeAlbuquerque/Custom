import { useEffect, useState } from "react";
import logo from "@/assets/logo-custom-care.png.asset.json";

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
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-18 flex items-center justify-between py-3">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo.url} alt="Custom Care" className="h-11 w-11 object-contain" />
          <span className="font-display font-semibold text-lg tracking-tight">
            Custom Care
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contato" className="btn-primary">
            Falar com especialista
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
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
                className="text-sm font-medium py-2"
              >
                {l.label}
              </a>
            ))}
            <a href="#contato" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Falar com especialista
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
