import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Layers, Terminal, Wrench } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagens",
      icon: Code,
      skills: ["Python", "JavaScript", "TypeScript", "Java"]
    },
    {
      title: "Front-End",
      icon: Layers,
      skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "MUI"]
    },
    {
      title: "Back-End",
      icon: Terminal,
      skills: ["APIs REST", "Node.js", "Java Spring"]
    },
    {
      title: "Banco de Dados",
      icon: Database,
      skills: ["SQL", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Ferramentas",
      icon: Wrench,
      skills: ["Git", "GitHub", "Figma", "Agile/Scrum", "Windows", "Linux"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Habilidades Técnicas</h2>
          <p className="text-muted-foreground">
            Tecnologias e ferramentas que domino
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
