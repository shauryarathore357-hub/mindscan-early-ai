import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AssessmentSection } from "@/components/AssessmentSection";
import { ResultsSection } from "@/components/ResultsSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AssessmentSection />
        <ResultsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
