import { Button } from "@/components/ui/button";
import { Clock, Zap, AlertCircle } from "lucide-react";

export const Urgency = () => {
  const whatsappLink = "https://wa.me/"; // Add your WhatsApp group link here

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-black via-primary/5 to-black relative overflow-hidden">
      {/* Animated glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(45_100%_51%/0.15),transparent_70%)] animate-pulse-glow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Warning banner */}
          <div className="bg-primary text-black rounded-3xl p-8 md:p-12 mb-8 shadow-[0_0_60px_hsl(45_100%_51%/0.5)] animate-pulse-glow">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <AlertCircle className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 animate-pulse" />
              <div>
                <p className="text-2xl md:text-3xl lg:text-4xl font-black uppercase">
                  ATENÇÃO: TEMPO LIMITADO!
                </p>
                <p className="text-lg md:text-xl font-semibold mt-2">
                  Quem deixa pra depois, perde.
                </p>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="bg-card border-2 border-primary/40 rounded-3xl p-8 md:p-12 text-center">
            <div className="space-y-8">
              {/* Clock icon */}
              <div className="inline-block p-6 bg-primary/10 rounded-full border-2 border-primary/30">
                <Clock className="w-16 h-16 text-primary animate-pulse" />
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase">
                <span className="text-foreground">OFERTAS VÁLIDAS ATÉ</span>
                <br />
                <span className="text-primary text-4xl md:text-5xl lg:text-6xl">28 DE NOVEMBRO</span>
              </h2>

              {/* Description */}
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Depois disso, você terá que esperar até <strong className="text-primary">2026</strong> para 
                ter acesso a condições como essas.
              </p>

              {/* Highlights */}
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto py-6">
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                  <p className="font-bold text-primary text-lg">A caixa do dia fecha às 18h</p>
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                  <p className="font-bold text-primary text-lg">Vagas limitadas no grupo VIP</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Button 
                  variant="hero"
                  size="lg"
                  className="text-xl px-10 py-8 h-auto"
                  onClick={() => window.open(whatsappLink, '_blank')}
                >
                  <Zap className="mr-3 h-7 w-7" />
                  Quero Entrar no Grupo VIP Agora!
                </Button>
              </div>

              {/* Final urgency text */}
              <p className="text-sm text-muted-foreground italic mt-6">
                💡 Não perca a chance de transformar sua conta de luz em 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
