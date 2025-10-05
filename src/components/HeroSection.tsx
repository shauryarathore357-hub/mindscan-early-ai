import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, Globe, Users } from "lucide-react";
import heroImage from "@/assets/hero-brain-ai.jpg";

export const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden backdrop-blur-sm">
      <div className="absolute inset-0 bg-background/50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="border-primary-foreground/20 text-primary-foreground">
                AI-Powered Early Detection
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Detect Dementia
                <span className="block text-secondary-glow">Early & Accurately</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-lg">
                Our AI-powered platform assesses cognitive function, memory, and speech patterns 
                to identify early signs of dementia, supporting timely intervention and care.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Start Assessment
              </Button>
              <Button variant="outline" size="lg" className="text-lg border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <Shield className="h-8 w-8 text-secondary-glow mx-auto mb-2" />
                <p className="text-sm text-primary-foreground/70">HIPAA Compliant</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-secondary-glow mx-auto mb-2" />
                <p className="text-sm text-primary-foreground/70">5-Min Tests</p>
              </div>
              <div className="text-center">
                <Globe className="h-8 w-8 text-secondary-glow mx-auto mb-2" />
                <p className="text-sm text-primary-foreground/70">Multi-Language</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-secondary-glow mx-auto mb-2" />
                <p className="text-sm text-primary-foreground/70">Clinical Grade</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary/20 rounded-2xl blur-2xl"></div>
            <img 
              src={heroImage} 
              alt="AI Brain Analysis" 
              className="relative rounded-2xl shadow-glow w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};