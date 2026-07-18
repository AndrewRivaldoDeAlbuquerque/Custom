import logo from "@/assets/logo-custom-care.png";
import config from "@/config.json";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { brand, company, contact } = config;

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="" className="h-10 w-10 object-contain" />
              <span
                className="font-display text-lg font-semibold tracking-tight text-gradient-brand"
                style={{
                  backgroundImage: "linear-gradient(135deg, #CBB1DE, #B391D0, #9968C6)",
                }}
              >
                {brand.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {brand.description}
            </p>
          </div>

          <div>
            <div className="mb-3 text-sm font-semibold">Navegação</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#servicos" className="transition-colors hover:text-foreground">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="transition-colors hover:text-foreground">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#processo" className="transition-colors hover:text-foreground">
                  Processo
                </a>
              </li>
              <li>
                <a href="#contato" className="transition-colors hover:text-foreground">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-3 text-sm font-semibold">Contato</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{contact.email}</li>
              <li>{contact.phoneDisplay}</li>
              <li>{company.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-end md:justify-between">
          <div className="space-y-1">
            <div>
              © {currentYear} {company.legalName}. Todos os direitos reservados.
            </div>
            <div>CNPJ {company.cnpj}</div>
          </div>
          <div>{brand.tagline}</div>
        </div>
      </div>
    </footer>
  );
}
