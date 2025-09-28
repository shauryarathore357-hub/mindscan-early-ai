import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
];

interface LanguageSelectorProps {
  onLanguageSelect: (language: string) => void;
  selectedLanguage: string;
}

export const LanguageSelector = ({ onLanguageSelect, selectedLanguage }: LanguageSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedLang = languages.find(lang => lang.code === selectedLanguage) || languages[0];

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="gap-2"
      >
        <Globe className="h-4 w-4" />
        <span className="text-lg">{selectedLang.flag}</span>
        {selectedLang.name}
      </Button>

      {isOpen && (
        <Card className="absolute top-full mt-2 z-50 bg-background/95 backdrop-blur-sm shadow-medical border border-primary/20">
          <div className="p-2 space-y-1">
            {languages.map((language) => (
              <Button
                key={language.code}
                variant="ghost"
                onClick={() => {
                  onLanguageSelect(language.code);
                  setIsOpen(false);
                }}
                className="w-full justify-start gap-3 h-auto py-2"
              >
                <span className="text-lg">{language.flag}</span>
                <span>{language.name}</span>
              </Button>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};