import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, Globe, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { InteractiveBrainAnimation } from "./InteractiveBrainAnimation";

export const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-gradient-hero relative overflow-hidden backdrop-blur-sm">
      <div className="absolute inset-0 bg-background/50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
              {[
                { icon: Shield, text: "HIPAA Compliant", delay: "delay-100" },
                { icon: Clock, text: "5-Min Tests", delay: "delay-200" },
                { icon: Globe, text: "Multi-Language", delay: "delay-300" },
                { icon: Users, text: "Clinical Grade", delay: "delay-[400ms]" }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx}
                    className={`text-center transition-all duration-700 ${item.delay} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-8 w-8 text-secondary-glow mx-auto mb-2 animate-float" style={{ animationDelay: `${idx * 0.2}s` }} />
                    <p className="text-sm text-primary-foreground/70">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <InteractiveBrainAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};