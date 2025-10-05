import { RiskScoreCard } from "./RiskScoreCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Share2, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const mockResults = [
  {
    score: 85,
    category: "Memory Function",
    status: "low" as const,
    trend: "stable" as const,
    lastAssessment: "2 days ago",
  },
  {
    score: 72,
    category: "Cognitive Processing",
    status: "moderate" as const,
    trend: "declining" as const,
    lastAssessment: "2 days ago",
  },
  {
    score: 90,
    category: "Speech Analysis",
    status: "low" as const,
    trend: "improving" as const,
    lastAssessment: "2 days ago",
  },
  {
    score: 68,
    category: "Visual Processing",
    status: "moderate" as const,
    trend: "stable" as const,
    lastAssessment: "2 days ago",
  },
];

export const ResultsSection = () => {
  const overallScore = Math.round(mockResults.reduce((sum, result) => sum + result.score, 0) / mockResults.length);
  const hasHighRisk = mockResults.some(result => result.status === "high" as any);
  const hasModerateRisk = mockResults.some(result => result.status === "moderate");
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="results" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Assessment Results & Risk Analysis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive cognitive analysis with AI-powered risk scoring and 
            personalized recommendations for healthcare professionals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <Card className={`lg:col-span-1 p-6 bg-gradient-card border-primary/10 text-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} hover:scale-105 hover:shadow-glow transition-all`}>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-primary">{overallScore}</div>
              <div className="text-sm text-muted-foreground">Overall Cognitive Score</div>
              <Badge 
                variant="outline" 
                className={`
                  ${hasHighRisk ? 'text-destructive border-destructive/30' : ''}
                  ${hasModerateRisk && !hasHighRisk ? 'text-warning border-warning/30' : ''}
                  ${!hasHighRisk && !hasModerateRisk ? 'text-secondary border-secondary/30' : ''}
                `}
              >
                {hasHighRisk ? 'High Risk' : hasModerateRisk ? 'Moderate Risk' : 'Low Risk'}
              </Badge>
              
              <div className="pt-4 space-y-2">
                <Button variant="hero" size="sm" className="w-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Follow-up
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {mockResults.map((result, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <RiskScoreCard
                  score={result.score}
                  category={result.category}
                  status={result.status}
                  trend={result.trend}
                  lastAssessment={result.lastAssessment}
                />
              </div>
            ))}
          </div>
        </div>

        {(hasHighRisk || hasModerateRisk) && (
          <Card className="p-6 bg-gradient-card border-warning/20">
            <div className="flex items-start gap-4">
              <FileText className="h-6 w-6 text-warning mt-1" />
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Clinical Recommendations</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {hasHighRisk && (
                    <p>• <strong>Immediate consultation</strong> with a neurologist or memory specialist recommended</p>
                  )}
                  {hasModerateRisk && (
                    <>
                      <p>• Follow-up assessment in 6 months to monitor cognitive changes</p>
                      <p>• Consider lifestyle interventions: regular exercise, cognitive training, social engagement</p>
                    </>
                  )}
                  <p>• Share these results with your primary care physician</p>
                  <p>• Continue regular monitoring with CogniCare AI assessments</p>
                </div>
                <Button variant="medical" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Clinical Report
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
};