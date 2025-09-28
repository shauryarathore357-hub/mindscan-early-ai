import { AssessmentCard } from "./AssessmentCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const assessments = [
  {
    id: "memory",
    title: "Memory Assessment",
    description: "Test short-term and long-term memory recall abilities with visual and verbal cues.",
    duration: "5-7 minutes",
    type: "memory" as const,
  },
  {
    id: "cognitive",
    title: "Cognitive Tasks",
    description: "Evaluate attention, problem-solving, and executive function through interactive exercises.",
    duration: "8-10 minutes", 
    type: "cognitive" as const,
  },
  {
    id: "speech",
    title: "Speech Analysis",
    description: "Analyze speech patterns, fluency, and word-finding abilities through conversation.",
    duration: "3-5 minutes",
    type: "speech" as const,
  },
  {
    id: "visual",
    title: "Visual Processing",
    description: "Assess visual-spatial skills and pattern recognition abilities.",
    duration: "4-6 minutes",
    type: "visual" as const,
  },
];

export const AssessmentSection = () => {
  const [completedAssessments, setCompletedAssessments] = useState<string[]>([]);
  const [currentAssessment, setCurrentAssessment] = useState<string | null>(null);

  const handleStartAssessment = (id: string) => {
    setCurrentAssessment(id);
    // Simulate completion after 2 seconds
    setTimeout(() => {
      setCompletedAssessments(prev => [...prev, id]);
      setCurrentAssessment(null);
    }, 2000);
  };

  const progressPercentage = (completedAssessments.length / assessments.length) * 100;

  return (
    <section id="assessment" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Comprehensive Cognitive Assessment
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered assessment evaluates multiple cognitive domains to provide 
            a comprehensive analysis of brain health and early dementia indicators.
          </p>
        </div>

        {completedAssessments.length > 0 && (
          <Card className="mb-8 p-6 bg-gradient-card border-primary/10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-foreground">Assessment Progress</h3>
              <span className="text-sm text-muted-foreground">
                {completedAssessments.length} of {assessments.length} completed
              </span>
            </div>
            <Progress value={progressPercentage} className="h-3 mb-4" />
            {progressPercentage === 100 && (
              <div className="text-center">
                <Button variant="hero" className="mt-4">
                  View Detailed Results
                </Button>
              </div>
            )}
          </Card>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {assessments.map((assessment) => (
            <AssessmentCard
              key={assessment.id}
              title={assessment.title}
              description={assessment.description}
              duration={assessment.duration}
              type={assessment.type}
              onStart={() => handleStartAssessment(assessment.id)}
              isCompleted={completedAssessments.includes(assessment.id)}
            />
          ))}
        </div>

        {currentAssessment && (
          <Card className="mt-8 p-8 text-center bg-gradient-primary text-primary-foreground">
            <div className="space-y-4">
              <div className="animate-pulse">
                <div className="w-16 h-16 bg-primary-foreground/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary-foreground/40 rounded-full animate-ping"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Assessment in Progress</h3>
              <p className="text-primary-foreground/80">
                Running {assessments.find(a => a.id === currentAssessment)?.title}...
              </p>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
};