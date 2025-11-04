import { Sun } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-primary/20 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary rounded-xl">
              <Sun className="w-8 h-8 text-black" />
            </div>
            <div className="text-left">
              <p className="text-2xl font-black uppercase text-primary">Sollar Sul</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Energia Solar</p>
            </div>
          </div>

          {/* Slogan */}
          <p className="text-lg md:text-xl font-semibold text-foreground max-w-md">
            Energia que transforma o seu amanhã.
          </p>

          {/* Divider */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>

          {/* Copyright */}
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>© 2025 Sollar Sul Energia Solar. Todos os direitos reservados.</p>
            <p className="text-xs">
              BLACK DAS BLACKS 2025 - Campanha válida de 03 a 28 de novembro de 2025
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
    </footer>
  );
};
