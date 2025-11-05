import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { Zap } from "lucide-react";

export const Hero = () => {
  const whatsappLink = "https://chat.whatsapp.com/BhDq1VHJ1Eb3mFNiwRaWmi?mode=wwt";

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
        {/* Headline - Urgência */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-primary mb-4">
            ESSA É A ÚLTIMA OPORTUNIDADE DO ANO
          </h1>
        </div>

        {/* Video Section */}
        <div className="mb-10 max-w-3xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border-4 border-primary shadow-elegant animate-scale-in">
            <div className="aspect-video bg-card/30 backdrop-blur-sm">
              <video 
                controls 
                className="w-full h-full"
                poster="/videos/videoIP-poster.jpg"
              >
                <source src="/videos/videolP.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl text-foreground font-semibold mb-12 max-w-4xl mx-auto leading-relaxed">
          20 dias, 20 motivos, 20 oportunidades para transformar sua conta de luz.
        </p>

        {/* CTA Button */}
          <Button
              variant="hero"
              size="lg"
              className="
    flex items-center justify-center gap-3
    text-xs sm:text-sm md:text-base lg:text-lg
    font-semibold tracking-wide
    px-3 sm:px-5 md:px-8
    py-3 sm:py-4 md:py-5
    h-auto
    w-full sm:w-auto
    max-w-[320px] sm:max-w-none
    mx-auto
    break-words whitespace-normal text-center
    transition-all duration-300
    hover:scale-105 active:scale-95
  "
              onClick={() => window.open(whatsappLink, '_blank')}
          >
              <Zap className="mr-2 h-5 w-5 sm:h-6 sm:w-6 shrink-0" />
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
