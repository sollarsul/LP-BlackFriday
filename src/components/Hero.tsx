import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { Zap } from "lucide-react";

export const Hero = () => {
  const whatsappLink = "https://wa.me/"; // Add your WhatsApp group link here

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
      
      {/* Animated glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow-pulse"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Main Title */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-4">
            <span className="block bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              BLACK DAS BLACKS
            </span>
            <span className="block text-primary flex items-center justify-center gap-3 mt-2">
              SOLLAR SUL <Zap className="w-12 h-12 md:w-16 md:h-16 animate-pulse-glow" />
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl text-foreground font-semibold mb-12 max-w-4xl mx-auto leading-relaxed">
          20 dias, 20 motivos, 20 oportunidades para transformar sua conta de luz.
        </p>

        {/* CTA Button */}
        <Button 
          variant="hero"
          size="lg"
          className="text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 h-auto"
          onClick={() => window.open(whatsappLink, '_blank')}
        >
          <Zap className="mr-3 h-6 w-6" />
          Entrar no Grupo VIP da Black das Blacks
        </Button>

        {/* Floating badge */}
        <div className="mt-12 animate-float">
          <div className="inline-block bg-card border-2 border-primary px-6 py-3 rounded-full">
            <p className="text-sm md:text-base font-bold text-primary uppercase tracking-wider">
              🔥 Válido de 03 a 28 de Novembro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
