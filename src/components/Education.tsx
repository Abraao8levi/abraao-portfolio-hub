import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, GraduationCap } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "Bacharelado em Sistemas de Informação",
      institution: "Universidade Federal do Ceará (UFC)",
      location: "Campus Quixadá",
      period: "2023 - Atual",
      status: "Em andamento"
    },
    {
      degree: "Técnico em Informática",
      institution: "EEEP Maria Dolores Alcântara e Silva",
      location: "Horizonte - CE",
      period: "2019 - 2021",
      status: "Concluído"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Formação Acadêmica</h2>
          <p className="text-muted-foreground">
            Minha trajetória educacional
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="flex items-center gap-2 text-xl mb-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      {edu.degree}
                    </CardTitle>
                    <p className="text-lg font-medium text-muted-foreground">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {edu.location}
                    </p>
                  </div>
                  <Badge variant={edu.status === "Em andamento" ? "default" : "secondary"}>
                    {edu.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{edu.period}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
