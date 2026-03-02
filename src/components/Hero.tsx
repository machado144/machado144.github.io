import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { resumeData } from '../data/resume';
import { Terminal, MapPin, Mail, Phone, Linkedin } from 'lucide-react';

export default function Hero() {
  const { language, t } = useLanguage();
  const data = resumeData[language];

  const [displayName, setDisplayName] = React.useState('');
  const [displayTitle, setDisplayTitle] = React.useState('');
  const [nameComplete, setNameComplete] = React.useState(false);
  const [titleIndex, setTitleIndex] = React.useState(0);

  const titles = language === 'en' 
    ? ["DevOps Engineer", "Platform Engineer", "Automation Engineer", "SRE"]
    : ["Engenheiro DevOps", "Engenheiro de Plataforma", "Engenheiro de Automação", "SRE"];

  React.useEffect(() => {
    setDisplayName('');
    setNameComplete(false);
    
    let nameTimer: NodeJS.Timeout;
    const typeName = (text: string, i: number) => {
      if (i <= text.length) {
        setDisplayName(text.slice(0, i));
        nameTimer = setTimeout(() => typeName(text, i + 1), 100);
      } else {
        setNameComplete(true);
      }
    };

    typeName(data.name, 0);
    return () => clearTimeout(nameTimer);
  }, [data.name, language]);

  React.useEffect(() => {
    if (!nameComplete) return;

    let isDeleting = false;
    let textIdx = 0;
    let currentTitleIdx = 0;
    let timer: NodeJS.Timeout;

    const tick = () => {
      const currentTitle = titles[currentTitleIdx];
      
      if (isDeleting) {
        setDisplayTitle(currentTitle.slice(0, textIdx - 1));
        textIdx--;
      } else {
        setDisplayTitle(currentTitle.slice(0, textIdx + 1));
        textIdx++;
      }

      let delta = isDeleting ? 50 : 100;

      if (!isDeleting && textIdx === currentTitle.length) {
        isDeleting = true;
        delta = 2000; // Pause at the end
      } else if (isDeleting && textIdx === 0) {
        isDeleting = false;
        currentTitleIdx = (currentTitleIdx + 1) % titles.length;
        delta = 500; // Pause before typing next
      }

      timer = setTimeout(tick, delta);
    };

    tick();
    return () => clearTimeout(timer);
  }, [nameComplete, language]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(var(--color-devops-dark) 1px, transparent 1px), linear-gradient(90deg, var(--color-devops-dark) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-4xl w-full z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-devops-accent mb-4"
        >
          &gt; {t('hero.greeting')}
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 min-h-[1.2em] flex items-center">
          {displayName}
          {!nameComplete && <span className="animate-pulse inline-block w-2 h-12 md:w-3 md:h-16 bg-devops-accent ml-2"></span>}
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold text-devops-muted mb-8 min-h-[1.2em] flex items-center">
          {displayTitle}
          {nameComplete && <span className="animate-pulse inline-block w-2 h-8 md:w-3 md:h-12 bg-devops-muted ml-2"></span>}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-devops-muted max-w-2xl mb-10 leading-relaxed"
        >
          {data.profile}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 font-mono text-sm"
        >
          <a href="#experience" className="px-6 py-3 bg-devops-accent text-devops-darker font-bold rounded hover:bg-devops-accent-hover transition-colors flex items-center gap-2">
            <Terminal size={18} />
            {t('hero.cta')}
          </a>
          <a href={`mailto:${data.contact.email}`} className="px-6 py-3 border border-devops-accent text-devops-accent rounded hover:bg-devops-accent/10 transition-colors">
            {t('hero.contact')}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex flex-wrap gap-6 text-devops-muted font-mono text-xs md:text-sm"
        >
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-devops-accent" />
            {data.contact.location}
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-devops-accent" />
            {data.contact.email}
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-devops-accent" />
            {data.contact.phone}
          </div>
          <a href="https://www.linkedin.com/in/lucaspmachado/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-devops-accent transition-colors">
            <Linkedin size={16} className="text-devops-accent" />
            {data.contact.linkedin}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
