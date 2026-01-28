import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
     title: "Lúmina AI - Inteligência Financeira",
     description: "O futuro do seu controle financeiro. Um dashboard inteligente com insights de IA para maximizar seu patrimônio e simplificar sua vida financeira.",
     link: "https://github.com/Abraao8levi/l-mina-ai---intelig-ncia-financeira",
     technologies: ["React", "Node.js", "Express", "Sqlite3", "Python", "Tailwind CSS", "TypeScript"]
    },
    {
      title: "Letterboxd",
      description: "Criação de uma FastAPI para um aplicativo de rede social focado em filmes, permitindo aos usuários registrar, avaliar e compartilhar suas opiniões sobre filmes.",
      link: "https://github.com/Abraao8levi/trabalho-iii-persistencia-2025.2",
      technologies: ["Python", "FastAPI", "SQLAlchemy", "Pydantic", "MongoDB", "Supabase"]
    },
    {
      title: "MJ Geradores",
      description: "Website institucional desenvolvido para empresa especializada em geradores de energia. Projeto completo incluindo prototipação, desenvolvimento front-end responsivo e integração com APIs.",
      link: "https://www.mjgeradores.com.br/",
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos</h2>
          <p className="text-muted-foreground">
            Alguns trabalhos que desenvolvi
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button asChild size="sm" variant="outline">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Projeto
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Card className="border-2 border-dashed hover:border-primary/50 transition-colors flex items-center justify-center min-h-[300px]">
            <CardContent className="text-center space-y-3">
              <Github className="h-12 w-12 text-muted-foreground mx-auto" />
              <p className="text-muted-foreground">
                Mais projetos disponíveis no meu GitHub
              </p>
              <Button asChild variant="outline">
                <a href="https://github.com/Abraao8levi" target="_blank" rel="noopener noreferrer">
                  Ver GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
