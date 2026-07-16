import logo from "@/assets/logo-custom-care.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <img src={logo.url} alt="Custom Care" className="h-10 w-10 object-contain" />
              <span className="font-display font-semibold text-lg">Custom Care</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Softwares e consultoria tecnológica que impulsionam o crescimento do seu negócio.
            </p>
          </div>

          <div>
            <div className="font-semibold text-sm mb-3">Navegação</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a></li>
              <li><a href="#processo" className="hover:text-foreground transition-colors">Processo</a></li>
              <li><a href="#contato" className="hover:text-foreground transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-sm mb-3">Contato</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>contato@customcare.com.br</li>
              <li>+55 (11) 99999-9999</li>
              <li>São Paulo, Brasil</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Custom Care. Todos os direitos reservados.</div>
          <div>Softwares e Consultoria Tecnológica</div>
        </div>
      </div>
    </footer>
  );
}
