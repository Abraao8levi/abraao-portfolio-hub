import { Card, CardContent } from "@/components/ui/card";
import { Code2, Sparkles, Users } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mim</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Desenvolvedor Full Stack com foco em criar experiências web modernas
            e eficientes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardContent className="pt-6 text-center space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">
                Desenvolvimento Full Stack
              </h3>
              <p className="text-sm text-muted-foreground">
                Desenvolvimento de aplicações Full Stack com React e Next.js no frontend, Node.js no backend e integração com bancos de dados SQL e NoSQL.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardContent className="pt-6 text-center space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">UI/UX Design</h3>
              <p className="text-sm text-muted-foreground">
                Criação de interfaces modernas e responsivas, com foco em usabilidade, utilizando Tailwind CSS, Bootstrap e MUI.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardContent className="pt-6 text-center space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Trabalho em Equipe</h3>
              <p className="text-sm text-muted-foreground">
                Atuação colaborativa em equipe, utilizando metodologias ágeis (Scrum) e versionamento com Git/GitHub.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2">
          <CardContent className="pt-6">
            <p className="text-muted-foreground leading-relaxed">
              Graduando em Sistemas de Informação com vivência prática em
              desenvolvimento Web Full Stack. Atuação destacada na Empresa
              Júnior Avante Tech Jr, desenvolvendo soluções responsivas e
              escaláveis utilizando React, Next.js e Tailwind CSS. Experiência
              prévia em suporte técnico e infraestrutura. Possuo perfil
              autodidata, com facilidade para trabalhar com metodologias ágeis
              Scrum e controle de versão Git.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
