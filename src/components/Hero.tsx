import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-block">
              <span className="text-primary font-medium text-sm tracking-wider uppercase">
                Full Stack Developer
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Abraão Levi
              <span className="block text-muted-foreground mt-2">
                de Andrade Pessoa Vitoriano
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Graduando em Sistemas de Informação pela UFC, com experiência prática em desenvolvimento web Full Stack. 
              Apaixonado por criar soluções eficientes e elegantes.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                <a href="#contact">Entre em Contato</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#projects">Ver Projetos</a>
              </Button>
            </div>
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <Button asChild variant="ghost" size="icon">
                <a href="https://github.com/Abraao8levi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <a href="https://linkedin.com/in/abraãolevivitoriano" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <a href="mailto:Leviabraao677@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl" />
              <img 
                src={profilePhoto} 
                alt="Abraão Levi Vitoriano" 
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl ring-4 ring-background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
