import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Code, Database, Layers, Terminal, Wrench } from "lucide-react";

export const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: "Linguagens",
      icon: Code,
      skills: ["Python", "JavaScript", "TypeScript", "Java"],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "Front-End",
      icon: Layers,
      skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "MUI"],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      title: "Back-End",
      icon: Terminal,
      skills: ["APIs REST", "Node.js", "Java Spring"],
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10"
    },
    {
      title: "Banco de Dados",
      icon: Database,
      skills: ["SQL", "PostgreSQL", "MongoDB"],
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      title: "Ferramentas",
      icon: Wrench,
      skills: ["Git", "GitHub", "Figma", "Agile/Scrum", "Windows", "Linux"],
      color: "text-pink-500",
      bgColor: "bg-pink-500/10"
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden bg-background">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute -left-20 top-40 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute -right-20 bottom-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block animate-bounce delay-1000">
             <span className="text-primary font-medium text-xs tracking-[0.2em] uppercase bg-primary/10 px-4 py-1.5 rounded-full border border-primary/10">
              Expertise
             </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            {t('skills.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index} 
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="h-full border-muted/60 bg-card/40 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${category.color.replace('text-', '')} to-transparent opacity-50 group-hover:opacity-100 transition-opacity`} />
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${category.bgColor} ${category.color} ring-1 ring-inset ring-black/5 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xl font-bold text-foreground/80 group-hover:text-foreground transition-colors">
                        {category.title}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill, i) => (
                        <Badge 
                          key={i} 
                          variant="secondary" 
                          className="bg-secondary/40 hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default border border-transparent hover:border-primary/20 px-3 py-1 text-sm font-normal"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
