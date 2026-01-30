"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 px-4 border-t border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Abraão Levi. {t('footer.rights')}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/Abraao8levi" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/abraaolevivitoriano" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-blue-600 transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
           <a href="mailto:Leviabraao677@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <Button 
          variant="outline" 
          size="icon" 
          onClick={scrollToTop}
          className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      </div>
    </footer>
  );
};
