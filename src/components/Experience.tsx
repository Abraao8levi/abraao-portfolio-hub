import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  const { t } = useLanguage();

  const experiences = t('experience.list') as any[];

  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background pointer-events-none" />
      
      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground inline-block">
            {t('experience.title')}
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full opacity-80" />
          <p className="text-lg text-muted-foreground/80 max-w-xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/50 via-purple-500/50 to-primary/50 rounded-full md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-background border-4 border-primary rounded-full z-10 md:-translate-x-1/2 mt-6 shadow-[0_0_10px_rgba(var(--primary),0.5)]">
                  <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-75" />
                </div>

                {/* Content Card */}
                <div className="ml-12 md:ml-0 md:w-1/2 group">
                  <Card className="border-muted/60 bg-card/60 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <CardHeader className="pb-3">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <CardTitle className="text-xl font-bold text-primary group-hover:text-purple-600 transition-colors duration-300">
                            {exp.title}
                          </CardTitle>
                          <Badge variant="outline" className="text-xs bg-primary/5 border-primary/20">
                            {exp.type}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground/90">{exp.company}</h3>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4 text-primary/70" />
                            {exp.period}
                          </span>
                          {exp.location && (
                            <span className="flex items-center gap-1.5">
                              <MapPin className="w-4 h-4 text-primary/70" />
                              {exp.location}
                            </span>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <ul className="space-y-2.5">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm md:text-base text-muted-foreground/90 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2 pt-3 border-t border-border/50">
                        {exp.skills.map((skill, i) => (
                          <Badge 
                            key={i} 
                            variant="secondary" 
                            className="bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty space for the other side of the timeline */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
