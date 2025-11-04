import blackBoxImg from "@/assets/black-box.jpg";
import { Gift, Clock } from "lucide-react";

export const BlackBox = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-black via-muted/10 to-black relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl">
              <img 
                src={blackBoxImg} 
                alt="Black Box Sollar Sul" 
                className="w-full h-auto animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            {/* Floating particles effect */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl animate-pulse-glow"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl animate-glow-pulse"></div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block bg-primary/10 border border-primary/30 px-4 py-2 rounded-full mb-4">
              <p className="text-sm font-bold text-primary uppercase tracking-wider flex items-center gap-2">
                <Gift className="w-4 h-4" />
                Exclusivo Novembro 2025
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight">
              <span className="text-primary">BLACK BOX</span>
              <br />
              <span className="text-foreground">SOLLAR SUL</span>
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground">
              <p className="leading-relaxed">
                Todos os dias úteis de novembro — de <strong className="text-primary">03 a 28</strong> — 
                uma nova caixa misteriosa é revelada.
              </p>
              
              <p className="leading-relaxed">
                Dentro dela: <strong className="text-primary">condições comerciais exclusivas</strong> que 
                você não vai encontrar em nenhum outro lugar + <strong className="text-primary">prêmios reais</strong> como 
                air fryer, forno elétrico, chaleira e mixer.
              </p>

              <div className="flex items-start gap-3 bg-card/50 border border-primary/20 rounded-lg p-4 mt-6">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-foreground">Atenção!</p>
                  <p className="text-sm">Cada Black Box fecha às 18h. Depois disso, só no próximo dia útil.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
