import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle2 } from "lucide-react";

export const Certifications = () => {
  const { t } = useLanguage();

  /* Using ANY type here to avoid strict type checking on the dynamic array */
  const certifications: any[] = t('certifications.list') || [];

  return (
    <section id="certifications" className="py-24 px-4 bg-muted/20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground inline-block">
            {t('certifications.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground/80 max-w-xl mx-auto">
            {t('certifications.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="group border-muted/60 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">

              
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-base font-bold leading-tight line-clamp-2 group-hover:text-primary transition-colors min-h-[2.5rem] flex items-center">
                    {cert.name}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                  <Badge variant="secondary" className="bg-secondary/50 font-normal">
                    {cert.provider}
                  </Badge>
                  <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                    {t('certifications.hours_label')}: <span className="text-foreground">{cert.hours}</span>
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
