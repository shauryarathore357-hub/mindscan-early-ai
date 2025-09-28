import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Shield, Globe, Users, Zap, Award } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced machine learning algorithms trained on clinical data to detect subtle cognitive changes."
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Enterprise-grade security ensuring your health data remains private and protected."
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Assessments available in 50+ languages, including regional dialects and vernacular speech."
  },
  {
    icon: Users,
    title: "Clinical Integration",
    description: "Seamlessly integrates with electronic health records and clinical workflows."
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description: "Instant analysis and scoring with immediate feedback and recommendations."
  },
  {
    icon: Award,
    title: "Clinically Validated",
    description: "Validated against gold-standard neuropsychological assessments in clinical trials."
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20">
            Advanced Healthcare Technology
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Pioneering Early Dementia Detection
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            CogniCare AI combines cutting-edge artificial intelligence with clinical expertise 
            to provide accessible, accurate, and early detection of cognitive decline. Our platform 
            empowers healthcare providers and families with actionable insights for better care outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 bg-gradient-card border-primary/10 shadow-soft hover:shadow-medical transition-all duration-300 group">
                <div className={`p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">How It Works</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Comprehensive Assessment</h4>
                  <p className="text-muted-foreground text-sm">Multi-domain cognitive testing including memory, attention, language, and executive function.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">AI Analysis</h4>
                  <p className="text-muted-foreground text-sm">Advanced algorithms analyze patterns and compare against normative data and personal baselines.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Risk Scoring</h4>
                  <p className="text-muted-foreground text-sm">Generate evidence-based risk scores and personalized recommendations for clinical follow-up.</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-8 bg-gradient-primary text-primary-foreground">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold">Clinical Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-secondary-glow mb-2">85%</div>
                  <p className="text-primary-foreground/80 text-sm">Detection Accuracy</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary-glow mb-2">2-3</div>
                  <p className="text-primary-foreground/80 text-sm">Years Earlier Detection</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary-glow mb-2">50+</div>
                  <p className="text-primary-foreground/80 text-sm">Supported Languages</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary-glow mb-2">10k+</div>
                  <p className="text-primary-foreground/80 text-sm">Patients Assessed</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};