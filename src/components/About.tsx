import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Code2, Quote, Sparkles, Users } from "lucide-react";

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground inline-block pb-2">
            {t('about.title')}
          </h2>
          <div className="h-1 w-20 bg-primary/20 mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {(t('about.features') || []).map((item: any, index: number) => {
            const icons = [Code2, Sparkles, Users];
            const delays = ["0", "100", "200"];
            const Icon = icons[index];
            
            return (
            <div 
              key={index}
              className="group relative"
              style={{ animationDelay: `${delays[index]}ms` }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <Card className="relative h-full border-muted/60 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="pt-8 text-center space-y-4 p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary/10 to-purple-500/10 ring-1 ring-primary/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-primary group-hover:text-purple-600 transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-xl">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </div>
            );
          })}
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500" />
          <Card className="relative border-muted/60 bg-card/80 backdrop-blur-md overflow-hidden">
            <CardContent className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="hidden md:block">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="space-y-4 flex-1">
                <h3 className="text-2xl font-bold text-foreground">
                  {t('about.subtitle')}
                </h3>
                <p className="text-foreground leading-relaxed text-lg">
                  {t('about.text1')}
                </p>
                <p className="text-foreground leading-relaxed text-lg">
                  {t('about.text2')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
