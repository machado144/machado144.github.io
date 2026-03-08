import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { Terminal, Menu, X, Globe } from 'lucide-react';

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
  const languageLabel: Record<string, string> = { en: 'EN-US', pt: 'PT-BR', es: 'ES' };
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled
        ? 'bg-cloud-dark/95 backdrop-blur-md border-cloud-border py-2'
        : 'bg-cloud-darker/50 backdrop-blur-sm border-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-k8s-blue font-mono font-bold text-xl"
          >
            <Terminal size={20} className="text-k8s-blue" />
            <span className="tracking-tight text-white uppercase tracking-[0.1em]">cluster<span className="text-k8s-blue">:</span>production</span>
          </motion.div>

          <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-cloud-darker border border-cloud-border rounded text-[10px] font-mono text-cloud-muted">
            <span className="w-2 h-2 rounded-full bg-status-success animate-pulse" />
            <span>REGION: EU-WEST-1</span>
            <span className="mx-1 opacity-20">|</span>
            <span>ROLE: PLATFORM-ENG</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="px-3 py-1.5 text-xs font-medium text-cloud-muted hover:text-white hover:bg-white/5 rounded transition-all"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          <div className="h-4 w-[1px] bg-cloud-border mx-2" />

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded bg-cloud-darker border border-cloud-border hover:border-k8s-blue/50 text-[10px] font-bold transition-all text-cloud-text"
          >
            <Globe size={12} className="text-k8s-blue" />
            {languageLabel[language]}
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleLanguage} className="p-2 text-cloud-muted hover:text-white">
            <Globe size={18} />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-cloud-text"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-cloud-dark border-b border-cloud-border px-6 py-4"
        >
          <nav className="flex flex-col gap-2">
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
