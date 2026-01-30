export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      skills: "Habilidades",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou",
      role: "Desenvolvedor Full Stack",
      description: "Graduando em Sistemas de Informação pela UFC, com foco no desenvolvimento de aplicações funcionais, bem estruturadas e orientadas a uma excelente experiência do usuário, unindo técnica, organização e usabilidade.",
      contact_btn: "Entrar em Contato",
      projects_btn: "Ver Projetos",
      scroll: "Role para explorar"
    },
    about: {
      title: "Sobre Mim",
      subtitle: "Minha jornada profissional",
      text1: "Graduando em Sistemas de Informação, com experiência na Empresa Júnior Avante Tech Jr, atuando no desenvolvimento de aplicações escaláveis e no fortalecimento de habilidades como comunicação, liderança e trabalho em equipe.",
      text2: "Foco em código bem estruturado, boas decisões de arquitetura e na experiência do usuário. Mantenho aprendizado contínuo para acompanhar novas tecnologias e evoluir como desenvolvedor.",
      features: [
        {
          title: "Full Stack",
          description: "Desenvolvimento completo com React, Next.js, Node.js e bancos de dados SQL/NoSQL."
        },
        {
          title: "UI/UX Design",
          description: "Interfaces modernas, responsivas e intuitivas com Tailwind CSS e bibliotecas de componentes."
        },
        {
          title: "Colaboração",
          description: "Trabalho em equipe com metodologias ágeis (Scrum), Gitflow e comunicação efetiva."
        }
      ]
    },
    experience: {
      title: "Experiência Profissional",
      subtitle: "Minha trajetória de carreira",
      list: [
        {
          title: "Desenvolvedor Full Stack",
          company: "Avante Tech Jr",
          period: "Jun/2025 - Atual",
          type: "Voluntário",
          location: "Remoto",
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
          location: "Horizonte, CE",
          description: [
            "Suporte técnico em hardware e software",
            "Administração de redes e sistemas Windows e Linux",
            "Desenvolvimento de pequenas soluções em PHP, JavaScript, HTML e CSS",
            "Documentação de processos e resolução de problemas técnicos"
          ],
          skills: ["PHP", "JavaScript", "Linux", "Windows", "Redes"]
        }
      ]
    },
    projects: {
      title: "Meus Projetos",
      subtitle: "Destaques do meu portfólio",
      view_details: "Ver Detalhes",
      more_github: "Mais no GitHub",
      projects_list: [
        {
          title: "Lúmina AI",
          subtitle: "Inteligência Financeira",
          description: "O futuro do seu controle financeiro. Dashboard inteligente com insights de IA para maximizar seu patrimônio e simplificar sua vida financeira.",
          link: "https://github.com/Abraao8levi/l-mina-ai---intelig-ncia-financeira",
          technologies: ["React", "Node.js", "Python", "Tailwind CSS"],
          gradient: "from-blue-500 to-cyan-500",
          iconName: "Rocket"
        },
        {
          title: "Letterboxd V2",
          subtitle: "Rede Social de Filmes",
          description: "API robusta para uma plataforma social de cinema. Permite registrar, avaliar e compartilhar opiniões com performance escalável.",
          link: "https://github.com/Abraao8levi/trabalho-iii-persistencia-2025.2",
          technologies: ["FastAPI", "MongoDB", "Supabase", "Pydantic"],
          gradient: "from-purple-500 to-pink-500",
          iconName: "Code2"
        },
        {
          title: "MJ Geradores",
          subtitle: "Portal Corporativo",
          description: "Website institucional de alta performance. Design responsivo, SEO otimizado e integração completa com sistemas internos.",
          link: "https://www.mjgeradores.com.br/",
          technologies: ["Next.js", "React", "TypeScript", "Tailwind"],
          gradient: "from-emerald-500 to-teal-500",
          iconName: "Globe"
        }
      ]
    },
    skills: {
      title: "Habilidades Técnicas",
      subtitle: "Tecnologias e ferramentas que domino"
    },
    education: {
      title: "Formação Acadêmica",
      subtitle: "Minha base educacional",
      list: [
         {
          degree: "Bacharelado em Sistemas de Informação",
          institution: "Universidade Federal do Ceará (UFC)",
          location: "Campus Quixadá",
          period: "2023 - Atual",
          status: "Em andamento",
          ongoing: true
        },
        {
          degree: "Técnico em Informática",
          institution: "EEEP Maria Dolores Alcântara e Silva",
          location: "Horizonte - CE",
          period: "2019 - 2021",
          status: "Concluído",
          ongoing: false
        }
      ]
    },
    certifications: {
      title: "Certificações",
      subtitle: "Cursos e certificações concluídas",
      hours_label: "Carga horária",
      list: [
        { name: "Bootcamp Santander 2025 - Back-End com Python", provider: "DIO", hours: "58h" },
        { name: "Python AI Backend Developer", provider: "DIO", hours: "67h" },
        { name: "Bootcamp Python Data Analytics", provider: "DIO", hours: "68h" },
        { name: "Projeto de Sistemas Web", provider: "IFRS", hours: "30h" },
        { name: "Bootcamp Front-End com AngularJS", provider: "DIO", hours: "68h" },
        { name: "Linux Zero", provider: "DIO", hours: "44h" },
        { name: "Introdução ao JavaScript", provider: "Fundação Bradesco", hours: "20h" },
        { name: "Projetos de Sistemas de TI", provider: "Fundação Bradesco", hours: "15h" },
        { name: "Conceitos e Melhores Práticas com PostgreSQL", provider: "DIO", hours: "9h" },
        { name: "Introdução à Programação em Python", provider: "DIO", hours: "8h" },
        { name: "Inglês Básico com Ênfase em TI", provider: "Universidade Estadual do Ceará", hours: "40h" },
        { name: "Metodologias Ágeis para Desenvolvimento de Software", provider: "Universidade Estadual do Ceará", hours: "25h" }
      ]
    },
    contact: {
      title: "Entre em Contato",
      subtitle: "Estou disponível para novos projetos e desafios.",
      email_label: "Email",
      location_title: "Localização",
      location_text: "Fortaleza, Ceará, Brasil",
      available: "Disponível para Remote & Híbrido",
      languages_title: "Idiomas",
      send_email: "Escrever Agora",
      language_pt: "Português",
      language_en: "Inglês",
      level_native: "Nativo",
      level_intermediate: "Intermediário"
    },
    footer: {
      rights: "Todos os direitos reservados.",
      developed_by: "Desenvolvido com ❤️ e React."
    }
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I am",
      role: "Full Stack Developer",
      description: "Information Systems undergraduate at UFC, focused on developing functional, well-structured applications oriented towards excellent user experience, combining technique, organization, and usability.",
      contact_btn: "Get in Touch",
      projects_btn: "View Projects",
      scroll: "Scroll to explore"
    },
    about: {
      title: "About Me",
      subtitle: "My professional journey",
      text1: "Information Systems undergraduate with experience at Junior Enterprise Avante Tech Jr, working on scalable application development and strengthening skills such as communication, leadership, and teamwork.",
      text2: "Focused on well-structured code, sound architectural decisions, and user experience. I maintain continuous learning to keep up with new technologies and evolve as a developer.",
      features: [
        {
          title: "Full Stack",
          description: "Full Stack development with React, Next.js, Node.js and SQL/NoSQL databases."
        },
        {
          title: "UI/UX Design",
          description: "Modern, responsive, and intuitive interfaces with Tailwind CSS and component libraries."
        },
        {
          title: "Collaboration",
          description: "Teamwork with Agile methodologies (Scrum), Gitflow, and effective communication."
        }
      ]
    },
    experience: {
      title: "Professional Experience",
      subtitle: "My career trajectory",
      list: [
        {
          title: "Full Stack Developer",
          company: "Avante Tech Jr",
          period: "Jun/2025 - Present",
          type: "Volunteer",
          location: "Remote",
          description: [
            "Development of modern web applications using Next.js and React, focusing on performance and SEO.",
            "Direct involvement in the MJ Geradores project, implementing responsive interfaces with Tailwind CSS and integrating the front-end with APIs.",
            "Team collaboration using Git Flow for versioning and Scrum-based alignment meetings."
          ],
          skills: ["React", "Next.js", "Node.js", "TypeScript", "JavaScript", "Tailwind CSS", "Git"]
        },
        {
          title: "IT Intern",
          company: "Fundo de Saúde Municipal de Horizonte",
          period: "Oct/2021 - Feb/2022",
          type: "Internship",
          location: "Horizonte, CE",
          description: [
            "Technical support in hardware and software",
            "Network and system administration (Windows and Linux)",
            "Development of small solutions in PHP, JavaScript, HTML, and CSS",
            "Process documentation and technical problem resolution"
          ],
          skills: ["PHP", "JavaScript", "Linux", "Windows", "Networking"]
        }
      ]
    },
    projects: {
      title: "My Projects",
      subtitle: "Portfolio highlights",
      view_details: "View Details",
      more_github: "More on GitHub",
      projects_list: [
        {
          title: "Lúmina AI",
          subtitle: "Financial Intelligence",
          description: "The future of your financial control. Smart dashboard with AI insights to maximize your wealth and simplify your financial life.",
          link: "https://github.com/Abraao8levi/l-mina-ai---intelig-ncia-financeira",
          technologies: ["React", "Node.js", "Python", "Tailwind CSS"],
          gradient: "from-blue-500 to-cyan-500",
          iconName: "Rocket"
        },
        {
          title: "Letterboxd V2",
          subtitle: "Movie Social Network",
          description: "Robust API for a social cinema platform. Allows registering, rating, and sharing opinions with scalable performance.",
          link: "https://github.com/Abraao8levi/trabalho-iii-persistencia-2025.2",
          technologies: ["FastAPI", "MongoDB", "Supabase", "Pydantic"],
          gradient: "from-purple-500 to-pink-500",
          iconName: "Code2"
        },
        {
          title: "MJ Geradores",
          subtitle: "Corporate Portal",
          description: "High-performance institutional website. Responsive design, optimized SEO, and complete integration with internal systems.",
          link: "https://www.mjgeradores.com.br/",
          technologies: ["Next.js", "React", "TypeScript", "Tailwind"],
          gradient: "from-emerald-500 to-teal-500",
          iconName: "Globe"
        }
      ]
    },
    skills: {
      title: "Technical Skills",
      subtitle: "Technologies and tools I master"
    },
    education: {
      title: "Education",
      subtitle: "My educational background",
      list: [
         {
          degree: "Bachelor of Information Systems",
          institution: "Federal University of Ceará (UFC)",
          location: "Campus Quixadá",
          period: "2023 - Present",
          status: "In Progress",
          ongoing: true
        },
        {
          degree: "IT Technician",
          institution: "EEEP Maria Dolores Alcântara e Silva",
          location: "Horizonte - CE",
          period: "2019 - 2021",
          status: "Completed",
          ongoing: false
        }
      ]
    },
    certifications: {
      title: "Certifications",
      subtitle: "Completed courses and certifications",
      hours_label: "Hours",
      list: [
        { name: "Santander Bootcamp 2025 - Back-End with Python", provider: "DIO", hours: "58h" },
        { name: "Python AI Backend Developer", provider: "DIO", hours: "67h" },
        { name: "Python Data Analytics Bootcamp", provider: "DIO", hours: "68h" },
        { name: "Web Systems Design", provider: "IFRS", hours: "30h" },
        { name: "Front-End Bootcamp with AngularJS", provider: "DIO", hours: "68h" },
        { name: "Linux Zero", provider: "DIO", hours: "44h" },
        { name: "Introduction to JavaScript", provider: "Fundação Bradesco", hours: "20h" },
        { name: "IT Systems Projects", provider: "Fundação Bradesco", hours: "15h" },
        { name: "PostgreSQL Concepts and Best Practices", provider: "DIO", hours: "9h" },
        { name: "Introduction to Python Programming", provider: "DIO", hours: "8h" },
        { name: "Basic English for IT", provider: "Universidade Estadual do Ceará", hours: "40h" },
        { name: "Agile Methodologies for Software Development", provider: "Universidade Estadual do Ceará", hours: "25h" }
      ]
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Available for new projects and challenges.",
      email_label: "Email",
      location_title: "Location",
      location_text: "Fortaleza, Ceara, Brazil",
      available: "Available for Remote & Hybrid",
      languages_title: "Languages",
      send_email: "Write Now",
      language_pt: "Portuguese",
      language_en: "English",
      level_native: "Native",
      level_intermediate: "Intermediate"
    },
    footer: {
      rights: "All rights reserved.",
      developed_by: "Developed with ❤️ and React."
    }
  }
};
