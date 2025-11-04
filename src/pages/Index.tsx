import { Hero } from "@/components/Hero";
import { BlackBox } from "@/components/BlackBox";
import { Benefits } from "@/components/Benefits";
import { Lives } from "@/components/Lives";
import { Urgency } from "@/components/Urgency";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <BlackBox />
      <Benefits />
      <Lives />
      <Urgency />
      <Footer />
    </main>
  );
};

export default Index;
