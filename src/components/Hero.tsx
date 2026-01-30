import profilePhoto from "@/assets/profile-photo.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500/30 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-500/30 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTU2LCAxNjMsIDE3NSwgMC4xKSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </div>
      
      <div className="container max-w-6xl mx-auto z-10 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center md:text-left animate-in slide-in-from-left duration-700 fade-in">
            <div className="inline-block relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <span className="relative inline-flex items-center rounded-full border border-white/10 px-4 py-1.5 text-sm font-medium tracking-wide transition-colors bg-white/5 backdrop-blur-sm text-foreground">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
                {t('hero.role')}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Abraão{' '}
              <span className="text-primary animate-gradient">
                Levi
              </span>
              <span className="block text-xl md:text-2xl text-muted-foreground mt-4 font-normal h-8">
                de Andrade Pessoa Vitoriano
              </span>
            </h1>

           <p className="text-lg md:text-xl text-muted-foreground/90 max-w-xl text-balance leading-relaxed">
            {t('hero.description')}
           </p>


            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300">
                <a href="#contact">{t('hero.contact_btn')}</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-primary/20 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300">
                <a href="#projects">{t('hero.projects_btn')}</a>
              </Button>
            </div>

            <div className="flex gap-4 justify-center md:justify-start pt-4 items-center">
              <div className="h-px w-12 bg-border hidden md:block" />
              {[
                { icon: Github, href: "https://github.com/Abraao8levi", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/abraaolevivitoriano", label: "LinkedIn" },
                { icon: Mail, href: "mailto:Leviabraao677@gmail.com", label: "Email" }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.label}
                  className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end animate-in slide-in-from-right duration-700 delay-200 fade-in">
            <div className="relative group animate-float">
              {/* Glowing ring/backdrop */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-blue-600 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" />
              
              {/* Image Container */}
              <div className="relative rounded-full p-2 bg-background ring-2 ring-primary/20">
                <img 
                  src={profilePhoto} 
                  alt="Abraão Levi Vitoriano" 
                  className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce">
        <a href="#about" aria-label="Scroll down" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300">
          <span className="text-xs tracking-widest uppercase opacity-50">{t('hero.scroll')}</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
