import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowUpRight, Code2, ExternalLink, Github, Globe, Rocket } from "lucide-react";

export const Projects = () => {
  const { t } = useLanguage();

  /* Define icon map since we can't store components in JSON */
  const iconMap: any = {
    Rocket: Rocket,
    Code2: Code2,
    Globe: Globe
  };

  const projects = t('projects.projects_list') || [];

  return (
    <section id="projects" className="py-24 px-4 bg-muted/20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block animate-bounce delay-1000">
             <span className="text-primary font-medium text-xs tracking-[0.2em] uppercase bg-primary/10 px-4 py-1.5 rounded-full border border-primary/10">
              Portfolio
             </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            {t('projects.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group flex flex-col h-full border-muted/60 bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-300 overflow-hidden relative">
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${project.gradient}`} />
              
              <CardHeader className="pb-4 relative">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${project.gradient} bg-opacity-10 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {(() => {
                      const IconComponent = iconMap[project.iconName];
                      return IconComponent ? <IconComponent className="h-6 w-6 text-white" /> : null;
                    })()}
                  </div>
                  <Button asChild size="icon" variant="ghost" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Ver projeto">
                      <ArrowUpRight className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
                <div>
                  <CardTitle className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide opacity-80">{project.subtitle}</p>
                </div>
              </CardHeader>
              
              <CardContent className="flex flex-col flex-1 space-y-6">
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-secondary/40 hover:bg-primary/10 hover:text-primary transition-colors cursor-default border border-transparent hover:border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button asChild className="w-full rounded-full group-hover:bg-primary/90 transition-all shadow-lg shadow-primary/10">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      {t('projects.view_details')}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Card className="flex flex-col h-full border-2 border-dashed border-muted-foreground/20 bg-transparent hover:bg-muted/30 hover:border-primary/50 transition-all duration-300 cursor-pointer group justify-center items-center p-8">
            <div className="text-center space-y-6">
              <div className="p-4 bg-muted rounded-full w-20 h-20 flex items-center justify-center mx-auto group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                <Github className="h-10 w-10 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Mais no GitHub</h3>
                <p className="text-muted-foreground max-w-[200px] mx-auto">
                  Explore outros experimentos e contribuições open source.
                </p>
              </div>
              <Button asChild variant="outline" className="rounded-full border-primary/20 hover:bg-primary/10 hover:text-primary">
                <a href="https://github.com/Abraao8levi" target="_blank" rel="noopener noreferrer">
                  Acessar Perfil
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
