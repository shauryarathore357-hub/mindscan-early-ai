import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Clock, Mic, Eye } from "lucide-react";

interface AssessmentCardProps {
  title: string;
  description: string;
  duration: string;
  type: "cognitive" | "memory" | "speech" | "visual";
  onStart: () => void;
  isCompleted?: boolean;
}

const typeConfig = {
  cognitive: { icon: Brain, color: "bg-primary" },
  memory: { icon: Clock, color: "bg-secondary" },
  speech: { icon: Mic, color: "bg-accent" },
  visual: { icon: Eye, color: "bg-info" },
};

export const AssessmentCard = ({ 
  title, 
  description, 
  duration, 
  type, 
  onStart,
  isCompleted = false 
}: AssessmentCardProps) => {
  const { icon: Icon, color } = typeConfig[type];

  return (
    <Card className="bg-gradient-card backdrop-blur-sm border border-primary/10 shadow-soft hover:shadow-medical transition-all duration-300 group">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-2 rounded-lg ${color}/10 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className={`h-6 w-6 text-primary`} />
          </div>
          {isCompleted && (
            <Badge variant="secondary" className="bg-secondary/20 text-secondary">
              Completed
            </Badge>
          )}
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground font-medium">
            ⏱️ {duration}
          </span>
          <Button 
            variant={isCompleted ? "outline" : "default"}
            size="sm"
            onClick={onStart}
            className="font-medium"
          >
            {isCompleted ? "Review" : "Start"}
          </Button>
        </div>
      </div>
    </Card>
  );
};