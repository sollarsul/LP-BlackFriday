import { Percent, CreditCard, Zap, Award, Shield, Users } from "lucide-react";

const benefits = [
  {
    icon: Percent,
    title: "20% OFF",
    description: "À vista em todo o sistema",
  },
  {
    icon: CreditCard,
    title: "18x sem juros",
    description: "Parcelamento facilitado",
  },
  {
    icon: Zap,
    title: "Instalação Rápida",
    description: "Equipe experiente e ágil",
  },
  {
    icon: Award,
    title: "+10 Anos",
    description: "De experiência no mercado",
  },
  {
    icon: Shield,
    title: "Garantia Total",
    description: "Produtos e instalação",
  },
  {
    icon: Users,
    title: "Atendimento VIP",
    description: "Suporte personalizado",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-black to-muted/5 relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(45_100%_51%/0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-6">
            <span className="text-primary">POR QUE</span>{" "}
            <span className="text-foreground">SOLLAR SUL?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mais que energia solar. Uma parceria que transforma seu futuro.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-card border border-primary/20 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(45_100%_51%/0.3)] hover:-translate-y-2"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 inline-block p-4 bg-primary/10 rounded-xl border border-primary/30 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-black uppercase text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
