import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    { name: "Bootcamp Santander 2025 - Back-End com Python", provider: "DIO", hours: "58h" },
    { name: "Python AI Backend Developer", provider: "DIO", hours: "67h" },
    { name: "Bootcamp Python Data Analytics", provider: "DIO", hours: "68h" },
    { name: "Projeto de Sistemas Web", provider: "IFRS", hours: "30h" },
    { name: "Bootcamp Front-End com AngularJS", provider: "DIO", hours: "68h" },
    { name: "Linux Zero", provider: "DIO", hours: "44h" },
    { name: "Introdução ao JavaScript", provider: "Fundação Bradesco", hours: "20h" },
    { name: "Projetos de Sistemas de TI", provider: "Fundação Bradesco", hours: "15h" },
    { name: "Conceitos e Melhores Práticas com PostgreSQL", provider: "DIO", hours: "9h" },
    { name: "Introdução à Programação em Python", provider: "DIO", hours: "8h" }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificações</h2>
          <p className="text-muted-foreground">
            Cursos e certificações concluídas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm mb-2 leading-tight">
                      {cert.name}
                    </h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="secondary" className="text-xs">
                        {cert.provider}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {cert.hours}
                      </Badge>
                    </div>
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
