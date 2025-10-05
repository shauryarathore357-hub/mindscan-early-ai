import { Button } from "@/components/ui/button";
import { LanguageSelector } from "./LanguageSelector";
import { Brain, Shield, Users } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  return (
    <header className="bg-background/80 backdrop-blur-sm border-b border-primary/10 sticky top-0 z-40 animate-fade-in">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Brain className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">CogniCare AI</h1>
              <p className="text-xs text-muted-foreground">Early Dementia Detection</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#assessment" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all hover:scale-110">
              Assessment
            </a>
            <a href="#results" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all hover:scale-110">
              Results
            </a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all hover:scale-110">
              About
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSelector 
              selectedLanguage={selectedLanguage}
              onLanguageSelect={setSelectedLanguage}
            />
            <Button variant="medical" size="sm">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};