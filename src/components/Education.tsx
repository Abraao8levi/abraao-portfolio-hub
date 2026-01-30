import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, GraduationCap, MapPin } from "lucide-react";

export const Education = () => {
  const { t } = useLanguage();

  const education = t('education.list') as any[];

  return (
    <section id="education" className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/20 to-background pointer-events-none" />
      
      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground inline-block">
            {t('education.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground/80 max-w-xl mx-auto">
            {t('education.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card key={index} className="group border-muted/60 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-purple-600 opacity-70 group-hover:opacity-100 transition-opacity" />
              
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <Badge variant={edu.ongoing ? "default" : "secondary"} className="uppercase tracking-wider text-[10px]">
                    {edu.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg font-medium text-foreground/80">
                    {edu.institution}
                  </p>
                </div>
                
                <div className="flex flex-col gap-2 pt-2 border-t border-border/50">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary/60" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary/60" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
