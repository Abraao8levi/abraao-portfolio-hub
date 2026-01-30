"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check, Copy, Github, Globe, Linkedin, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "Leviabraao677@gmail.com";
  const { t } = useLanguage();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactInfo = [
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Abraao8levi",
      link: "https://github.com/Abraao8levi",
      color: "text-zinc-500 hover:text-foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Abraão Levi Vitoriano",
      link: "https://www.linkedin.com/in/abraaolevivitoriano",
      color: "text-blue-600 hover:text-blue-700"
    }
  ]; 



  return (
    <section id="contact" className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground inline-block">
            {t('contact.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground/80 max-w-xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Contact Actions */}
          <div className="space-y-6">
            <Card className="border-muted/60 bg-card/50 backdrop-blur-sm overflow-hidden group hover:shadow-xl hover:shadow-primary/5 transition-all">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold">{t('contact.email_label')}</h3>
                     <p className="text-muted-foreground">Envie uma mensagem direta</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 p-3 bg-background/50 rounded-xl border border-border/50">
                  <code className="flex-1 font-mono text-sm text-foreground/80 truncate px-2">
                    {email}
                  </code>
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    onClick={handleCopyEmail}
                    className="shrink-0 hover:bg-primary/10 hover:text-primary transition-colors h-8 w-8"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>

                <Button asChild className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground transition-opacity shadow-lg" size="lg">
                  <a href={`mailto:${email}`}>
                    {t('contact.send_email')}
                  </a>
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((contact, index) => {
                 const Icon = contact.icon;
                 return (
                   <a 
                     key={index}
                     href={contact.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="block"
                   >
                     <Card className="h-full border-muted/60 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer text-center">
                       <CardContent className="p-6 flex flex-col items-center justify-center gap-3">
                         <Icon className={`h-8 w-8 ${contact.color} transition-colors duration-300`} />
                         <span className="font-medium">{contact.label}</span>
                       </CardContent>
                     </Card>
                   </a>
                 )
              })}
            </div>
          </div>

          {/* Location & Details */}
          <div className="space-y-6">
             <Card className="h-full border-muted/60 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 transition-all p-2">
                <CardContent className="h-full p-6 flex flex-col justify-between gap-8">
                  
                  {/* Location Info */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                       <div className="p-2 bg-purple-500/10 rounded-lg text-purple-600">
                          <MapPin className="h-6 w-6" />
                       </div>
                       <h3 className="text-xl font-bold">{t('contact.location_title')}</h3>
                    </div>
                    <div className="pl-14">
                       <p className="text-lg text-foreground font-medium">{t('contact.location_text')}</p>
                       <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-sm font-medium">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                          </span>
                          {t('contact.available')}
                       </div>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="space-y-4">
                     <div className="flex items-center gap-3">
                       <div className="p-2 bg-blue-500/10 rounded-lg text-blue-600">
                          <Globe className="h-6 w-6" />
                       </div>
                       <h3 className="text-xl font-bold">{t('contact.languages_title')}</h3>
                    </div>
                    <div className="grid gap-3 pt-2">
                      <div className="flex justify-between items-center p-3 rounded-lg bg-background/50 border border-border/50">
                        <span className="font-medium">{t('contact.language_pt')}</span>
                        <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground bg-muted px-2 py-1 rounded-md">
                          {t('contact.level_native')}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-background/50 border border-border/50">
                        <span className="font-medium">{t('contact.language_en')}</span>
                        <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground bg-muted px-2 py-1 rounded-md">
                          {t('contact.level_intermediate')}
                        </span>
                      </div>
                    </div>
                  </div>

                </CardContent>
             </Card>
          </div>
        </div>
      </div>
    </section>
  );
};