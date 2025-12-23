import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MapPin, Globe } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Leviabraao677@gmail.com",
      link: "mailto:Leviabraao677@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Abraao8levi",
      link: "https://github.com/Abraao8levi"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Abraão Levi Vitoriano",
      link: "https://www.linkedin.com/in/abraao-levi-vitoriano"
    }
  ]; 

  const languages = [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Intermediário" }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-muted-foreground">
            Vamos trabalhar juntos! Entre em contato comigo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6">
                    <a 
                      href={contact.link}
                      target={contact.link.startsWith('http') ? '_blank' : undefined}
                      rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 group"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="space-y-6">
            <Card className="border-2">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <Globe className="h-5 w-5 text-primary" />
                  Idiomas
                </div>
                <div className="space-y-3">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="flex items-center justify-center gap-2 text-primary">
                  <MapPin className="h-5 w-5" />
                  <span className="font-medium">Fortaleza-CE, Brasil</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Disponível para oportunidades presenciais e remotas
                </p>
                <Button asChild className="w-full" size="lg">
                  <a href="mailto:Leviabraao677@gmail.com">
                    Enviar Email
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};