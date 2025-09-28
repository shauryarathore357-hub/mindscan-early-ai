import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AssessmentSection } from "@/components/AssessmentSection";
import { ResultsSection } from "@/components/ResultsSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { ThreeBackground } from "@/components/ThreeBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ThreeBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <AssessmentSection />
          <ResultsSection />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
