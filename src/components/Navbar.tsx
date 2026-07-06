import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { Menu, X, Globe, FileDown } from 'lucide-react';
import { CV_URL, CV_FILENAME } from '@/data/cv';

const SECTION_IDS = ['about', 'achievements', 'experience', 'projects', 'skills'];

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const languageCycle: Record<string, 'en' | 'pt' | 'es'> = { en: 'pt', pt: 'es', es: 'en' };
  const languageLabel: Record<string, string> = { en: 'EN', pt: 'PT', es: 'ES' };
  const toggleLanguage = () => setLanguage(languageCycle[language]);

  const navLinks = [
    { name: t('nav.about'), href: '#about', id: 'about' },
    { name: t('nav.experience'), href: '#experience', id: 'experience' },
    { name: t('nav.achievements'), href: '#achievements', id: 'achievements' },
    { name: t('nav.projects'), href: '#projects', id: 'projects' },
    { name: t('nav.skills'), href: '#skills', id: 'skills' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-cloud-darker/85 backdrop-blur-md border-cloud-border py-2.5'
          : 'bg-transparent backdrop-blur-sm border-transparent py-4'
      }`}
    >
      <motion.div
        style={{ scaleX: progress }}
        className="absolute top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-k8s-blue/40 via-k8s-blue to-amber-400"
      />
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#about"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 font-extrabold text-base tracking-tight text-white"
        >
          <span className="text-white">lucas</span>
          <span className="text-k8s-blue">/</span>
          <span className="text-white">machado</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-1">
          <nav className="flex gap-0.5 mr-2">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`relative px-3 py-1.5 text-sm font-medium transition-colors ${
                  activeSection === link.id ? 'text-white' : 'text-cloud-muted hover:text-white'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-k8s-blue"
                  />
                )}
              </motion.a>
            ))}
          </nav>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={toggleLanguage}
            className="ml-2 flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-cloud-border hover:border-k8s-blue/50 hover:bg-k8s-blue/5 text-xs font-bold transition-all text-cloud-text"
          >
            <Globe size={12} className="text-k8s-blue" />
            {languageLabel[language]}
          </motion.button>

          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            href={CV_URL}
            download={CV_FILENAME}
            className="ml-2 flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-k8s-blue text-white text-xs font-bold hover:bg-k8s-blue/90 active:scale-[0.97] transition-all shadow-[0_4px_16px_rgba(249,115,22,0.3)]"
          >
            <FileDown size={13} />
            CV
          </motion.a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <a
            href={CV_URL}
            download={CV_FILENAME}
            aria-label="Download CV"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-k8s-blue text-white text-xs font-bold"
          >
            <FileDown size={13} />
            CV
          </a>
          <button onClick={toggleLanguage} className="px-2.5 py-1.5 text-xs font-bold text-cloud-text border border-cloud-border rounded-md">
            {languageLabel[language]}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-cloud-text"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-cloud-dark border-b border-cloud-border px-6 py-4"
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded ${
                  activeSection === link.id
                    ? 'text-white bg-k8s-blue/10 border-l-2 border-k8s-blue'
                    : 'text-cloud-muted hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}
