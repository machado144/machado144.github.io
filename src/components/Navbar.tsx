import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languageCycle: Record<string, 'en' | 'pt' | 'es'> = { en: 'pt', pt: 'es', es: 'en' };
  const languageLabel: Record<string, string> = { en: 'EN', pt: 'PT', es: 'ES' };
  const toggleLanguage = () => setLanguage(languageCycle[language]);

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.achievements'), href: '#achievements' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.skills'), href: '#skills' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-cloud-darker/85 backdrop-blur-md border-cloud-border py-2.5'
          : 'bg-transparent backdrop-blur-sm border-transparent py-4'
      }`}
    >
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
                className="px-3 py-1.5 text-sm font-medium text-cloud-muted hover:text-white transition-colors"
              >
                {link.name}
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
        </div>

        <div className="md:hidden flex items-center gap-2">
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
                className="px-3 py-2 text-sm font-medium text-cloud-muted hover:text-white hover:bg-white/5 rounded"
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
