import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'hero.greeting': 'Hi, I am',
    'hero.cta': 'View My Work',
    'hero.contact': 'Get In Touch',
    'about.title': 'Profile',
    'experience.title': 'Employment History',
    'experience.showMore': 'Show More Experiences',
    'experience.showLess': 'Show Less Experiences',
    'experience.role.showMore': 'Show More',
    'experience.role.showLess': 'Show Less',
    'achievements.title': 'What I Can Bring To You',
    'nav.achievements': 'Value',
    'projects.title': 'Open Source & Projects',
    'nav.projects': 'Projects',
    'skills.title': 'Skills & Technologies',
    'languages.title': 'Languages',
    'courses.title': 'Courses',
    'chat.placeholder': 'Ask me anything about Lucas...',
    'chat.title': 'DevOps Assistant',
    'chat.suggestions': 'Suggestions:',
    'chat.suggestion.1': 'What is your experience with Kubernetes?',
    'chat.suggestion.2': 'Tell me about your CI/CD skills.',
    'chat.suggestion.3': 'What languages do you speak?',
    'palette.tip': 'Press ⌘K or / for commands',
    'palette.search': 'Search commands...',
    'palette.empty': 'No commands found.',
    'palette.cmd.cloud': 'cat /skills/cloud_providers',
    'palette.desc.cloud': 'GCP, AWS, Azure, Cloudflare',
    'palette.cmd.k8s': 'kubectl get clusters',
    'palette.desc.k8s': 'Kubernetes, GKE, EKS, Helm, ArgoCD',
    'palette.cmd.email': 'mail -s "Hello" lucas',
    'palette.desc.email': 'lucas.dpmachado@gmail.com',
    'palette.cmd.linkedin': 'curl https://linkedin.com',
    'palette.desc.linkedin': 'View LinkedIn Profile',
  },
  pt: {
    'nav.about': 'Sobre',
    'nav.experience': 'Experiência',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contato',
    'hero.greeting': 'Olá, eu sou',
    'hero.cta': 'Ver Meu Trabalho',
    'hero.contact': 'Entre em Contato',
    'about.title': 'Perfil',
    'experience.title': 'Histórico Profissional',
    'experience.showMore': 'Mostrar Mais Experiências',
    'experience.showLess': 'Mostrar Menos Experiências',
    'experience.role.showMore': 'Mostrar Mais',
    'experience.role.showLess': 'Mostrar Menos',
    'achievements.title': 'O Que Posso Agregar',
    'nav.achievements': 'Valor',
    'projects.title': 'Open Source e Projetos',
    'nav.projects': 'Projetos',
    'skills.title': 'Habilidades e Tecnologias',
    'languages.title': 'Idiomas',
    'courses.title': 'Cursos',
    'chat.placeholder': 'Pergunte algo sobre o Lucas...',
    'chat.title': 'Assistente DevOps',
    'chat.suggestions': 'Sugestões:',
    'chat.suggestion.1': 'Qual sua experiência com Kubernetes?',
    'chat.suggestion.2': 'Fale sobre suas habilidades de CI/CD.',
    'chat.suggestion.3': 'Quais idiomas você fala?',
    'palette.tip': 'Pressione ⌘K ou / para comandos',
    'palette.search': 'Buscar comandos...',
    'palette.empty': 'Nenhum comando encontrado.',
    'palette.cmd.cloud': 'cat /skills/cloud_providers',
    'palette.desc.cloud': 'GCP, AWS, Azure, Cloudflare',
    'palette.cmd.k8s': 'kubectl get clusters',
    'palette.desc.k8s': 'Kubernetes, GKE, EKS, Helm, ArgoCD',
    'palette.cmd.email': 'mail -s "Olá" lucas',
    'palette.desc.email': 'lucas.dpmachado@gmail.com',
    'palette.cmd.linkedin': 'curl https://linkedin.com',
    'palette.desc.linkedin': 'Ver Perfil no LinkedIn',
  },
  es: {
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',
    'hero.greeting': 'Hola, soy',
    'hero.cta': 'Ver Mi Trabajo',
    'hero.contact': 'Contáctame',
    'about.title': 'Perfil',
    'experience.title': 'Historial Profesional',
    'experience.showMore': 'Ver Más Experiencias',
    'experience.showLess': 'Ver Menos Experiencias',
    'experience.role.showMore': 'Ver Más',
    'experience.role.showLess': 'Ver Menos',
    'achievements.title': 'Lo Que Puedo Aportarte',
    'nav.achievements': 'Valor',
    'projects.title': 'Código Abierto y Proyectos',
    'nav.projects': 'Proyectos',
    'skills.title': 'Habilidades y Tecnologías',
    'languages.title': 'Idiomas',
    'courses.title': 'Cursos',
    'chat.placeholder': 'Pregúntame algo sobre Lucas...',
    'chat.title': 'Asistente DevOps',
    'chat.suggestions': 'Sugerencias:',
    'chat.suggestion.1': '¿Cuál es tu experiencia con Kubernetes?',
    'chat.suggestion.2': 'Háblame de tus habilidades en CI/CD.',
    'chat.suggestion.3': '¿Qué idiomas hablas?',
    'palette.tip': 'Pulsa ⌘K o / para comandos',
    'palette.search': 'Buscar comandos...',
    'palette.empty': 'No se encontraron comandos.',
    'palette.cmd.cloud': 'cat /skills/cloud_providers',
    'palette.desc.cloud': 'GCP, AWS, Azure, Cloudflare',
    'palette.cmd.k8s': 'kubectl get clusters',
    'palette.desc.k8s': 'Kubernetes, GKE, EKS, Helm, ArgoCD',
    'palette.cmd.email': 'mail -s "Hola" lucas',
    'palette.desc.email': 'lucas.dpmachado@gmail.com',
    'palette.cmd.linkedin': 'curl https://linkedin.com',
    'palette.desc.linkedin': 'Ver Perfil de LinkedIn',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const lang = translations[language] as Record<string, string>;
    return lang[key] || (translations['en'] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
