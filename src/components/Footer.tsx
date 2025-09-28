import { Brain, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary">
                <Brain className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold">CogniCare AI</h3>
                <p className="text-sm text-background/70">Early Dementia Detection</p>
              </div>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Empowering early detection and intervention through advanced AI technology 
              and clinical expertise.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Platform</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Assessment</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Results Dashboard</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Clinical Reports</a></li>
              <li><a href="#" className="hover:text-background transition-colors">API Documentation</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Clinical Studies</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Healthcare Providers</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Patient Education</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Support Center</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@cognicare.ai</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>1-800-COGNI-AI</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Healthcare Innovation Hub</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/70">
            © 2024 CogniCare AI. All rights reserved. | HIPAA Compliant | FDA Cleared
          </p>
          <div className="flex gap-4 text-sm text-background/70">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-background transition-colors">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};