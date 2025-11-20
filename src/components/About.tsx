import { Card, CardContent } from "@/components/ui/card";
import { Code2, Sparkles, Users } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mim</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Desenvolvedor Full Stack com foco em criar experiências web modernas e eficientes
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardContent className="pt-6 text-center space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Desenvolvimento Full Stack</h3>
              <p className="text-sm text-muted-foreground">
                Experiência com React, Next.js, Node.js e bancos de dados SQL e NoSQL
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
                Criação de interfaces modernas com Tailwind CSS, Bootstrap e MUI
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
                Colaboração efetiva usando metodologias Agile/Scrum e Git/GitHub
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2">
          <CardContent className="pt-6">
            <p className="text-muted-foreground leading-relaxed">
              Atualmente cursando Bacharelado em Sistemas de Informação na Universidade Federal do Ceará (UFC), 
              com experiência prática desde 2019 em desenvolvimento web, suporte técnico e administração de sistemas. 
              Atuando como Desenvolvedor Full Stack voluntário na Avante Tech Jr., participando de projetos envolvendo 
              React, Next.js, JavaScript, Java, Python, Tailwind CSS, SQL, PostgreSQL e MongoDB. 
              Perfil proativo, organizado e focado em entregar soluções eficientes que fazem a diferença.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
