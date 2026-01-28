import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Desenvolvedor Full Stack",
      company: "Avante Tech Jr",
      period: "Jun/2025 - Atual",
      type: "Voluntário",
description: [
  "Desenvolvimento de aplicações web modernas utilizando Next.js e React, focando em performance e SEO.",
  "Atuação direta no projeto MJ Geradores, implementando interfaces responsivas com Tailwind CSS e integrando o front-end com APIs.",
  "Colaboração em equipe utilizando Git Flow para versionamento e reuniões de alinhamento baseadas em Scrum."
],
      skills: ["React", "Next.js", "Node.js", "TypeScript", "JavaScript", "Tailwind CSS", "Git"]
    },
    {
      title: "Estagiário de TI",
      company: "Fundo de Saúde Municipal de Horizonte",
      period: "Out/2021 - Fev/2022",
      type: "Estágio",
      description: [
        "Suporte técnico em hardware e software",
        "Administração de redes e sistemas Windows e Linux",
        "Desenvolvimento de pequenas soluções em PHP, JavaScript, HTML e CSS",
        "Documentação de processos e resolução de problemas técnicos"
      ],
      skills: ["PHP", "JavaScript", "Linux", "Windows", "Redes"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiência Profissional</h2>
          <p className="text-muted-foreground">
            Minha jornada no desenvolvimento de software
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {exp.title}
                    </CardTitle>
                    <p className="text-lg font-medium text-muted-foreground mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge variant="outline" className="w-fit">
                      <Calendar className="h-3 w-3 mr-1" />
                      {exp.period}
                    </Badge>
                    <Badge className="w-fit">{exp.type}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
