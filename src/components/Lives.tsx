import { Video, Gift, Calendar, Zap } from "lucide-react";

export const Lives = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-muted/5 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-glow-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="text-center mb-8">
            <div className="inline-block bg-primary/10 border border-primary/30 px-6 py-3 rounded-full">
              <p className="text-sm font-bold text-primary uppercase tracking-wider flex items-center gap-2">
                <Video className="w-5 h-5" />
                Lives Premiadas
              </p>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-center mb-8">
            <span className="text-foreground">PRÊMIOS</span>{" "}
            <span className="text-primary">TODOS OS DIAS</span>
          </h2>

          {/* Content Card */}
          <div className="bg-card border-2 border-primary/30 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
            
            <div className="relative z-10 space-y-6 text-center">
              {/* Date badge */}
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 bg-primary px-6 py-3 rounded-full">
                  <Calendar className="w-5 h-5 text-black" />
                  <span className="font-bold text-black text-lg">03 a 28 de Novembro</span>
                </div>
              </div>

              {/* Main text */}
              <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                <strong className="text-primary">Lives diárias</strong> com convidados especiais, 
                sorteios exclusivos e a revelação das <strong className="text-primary">Black Box</strong> do dia.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-primary/20">
                <div className="space-y-2">
                  <Gift className="w-8 h-8 text-primary mx-auto" />
                  <p className="font-bold text-foreground">Sorteios</p>
                  <p className="text-sm text-muted-foreground">Diários e especiais</p>
                </div>
                <div className="space-y-2">
                  <Video className="w-8 h-8 text-primary mx-auto" />
                  <p className="font-bold text-foreground">Convidados</p>
                  <p className="text-sm text-muted-foreground">Especialistas e parceiros</p>
                </div>
                <div className="space-y-2">
                  <Zap className="w-8 h-8 text-primary mx-auto" />
                  <p className="font-bold text-foreground">Black Box</p>
                  <p className="text-sm text-muted-foreground">Revelação diária</p>
                </div>
              </div>

              {/* CTA text */}
              <p className="text-lg text-muted-foreground pt-6">
                Acompanhe, participe e garanta suas vantagens antes que acabem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
