import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, Clock } from "lucide-react";

interface RiskScoreCardProps {
  score: number;
  category: string;
  status: "low" | "moderate" | "high";
  trend: "improving" | "stable" | "declining";
  lastAssessment: string;
}

const statusConfig = {
  low: { 
    color: "text-secondary", 
    bg: "bg-secondary/10", 
    icon: CheckCircle,
    label: "Low Risk",
    description: "Cognitive function within normal range"
  },
  moderate: { 
    color: "text-warning", 
    bg: "bg-warning/10", 
    icon: Clock,
    label: "Moderate Risk",
    description: "Some cognitive changes detected - monitoring recommended"
  },
  high: { 
    color: "text-destructive", 
    bg: "bg-destructive/10", 
    icon: AlertTriangle,
    label: "High Risk",
    description: "Significant changes detected - clinical consultation advised"
  },
};

export const RiskScoreCard = ({ 
  score, 
  category, 
  status, 
  trend, 
  lastAssessment 
}: RiskScoreCardProps) => {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <Card className="bg-gradient-card backdrop-blur-sm border border-primary/10 shadow-soft hover:shadow-medical transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${config.bg}`}>
              <Icon className={`h-5 w-5 ${config.color}`} />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{category}</h3>
              <Badge variant="outline" className={`${config.color} border-current`}>
                {config.label}
              </Badge>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-foreground">{score}</div>
            <div className="text-xs text-muted-foreground">out of 100</div>
          </div>
        </div>

        <Progress 
          value={score} 
          className="mb-4 h-2" 
        />

        <p className="text-sm text-muted-foreground mb-3">{config.description}</p>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Last assessment: {lastAssessment}</span>
          <Badge 
            variant="outline" 
            className={`
              ${trend === 'improving' ? 'text-secondary border-secondary/30' : ''}
              ${trend === 'stable' ? 'text-info border-info/30' : ''}
              ${trend === 'declining' ? 'text-warning border-warning/30' : ''}
            `}
          >
            {trend === 'improving' ? '↗️' : trend === 'stable' ? '→' : '↘️'} {trend}
          </Badge>
        </div>
      </div>
    </Card>
  );
};