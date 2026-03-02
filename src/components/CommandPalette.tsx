import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Terminal, Cloud, Server, Mail, Linkedin, Search, Command } from 'lucide-react';

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const { t } = useLanguage();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // Open on Cmd+K, Ctrl+K, or /
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && (e.target as HTMLElement).tagName !== 'INPUT')) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      
      // Close on Escape
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setSearch('');
    }
  }, [isOpen]);

  const commands = [
    {
      id: 'cloud',
      icon: Cloud,
      cmd: t('palette.cmd.cloud'),
      desc: t('palette.desc.cloud'),
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    },
    {
      id: 'k8s',
      icon: Server,
      cmd: t('palette.cmd.k8s'),
      desc: t('palette.desc.k8s'),
      action: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    },
    {
      id: 'email',
      icon: Mail,
      cmd: t('palette.cmd.email'),
      desc: t('palette.desc.email'),
      action: () => {
        window.location.href = 'mailto:lucas.dpmachado@gmail.com';
        setIsOpen(false);
      }
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      cmd: t('palette.cmd.linkedin'),
      desc: t('palette.desc.linkedin'),
      action: () => {
        window.open('https://www.linkedin.com/in/lucaspmachado/', '_blank');
        setIsOpen(false);
      }
    }
  ];

  const filteredCommands = commands.filter(
    (c) => c.cmd.toLowerCase().includes(search.toLowerCase()) || c.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Floating Tip */}
      <div 
        className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-3 px-4 py-2.5 bg-devops-darker/80 backdrop-blur-md border border-white/10 rounded-xl shadow-lg cursor-pointer hover:border-devops-accent/50 transition-colors group"
        onClick={() => setIsOpen(true)}
      >
        <Terminal size={16} className="text-devops-accent group-hover:scale-110 transition-transform" />
        <span className="text-devops-muted font-mono text-xs">{t('palette.tip')}</span>
        <div className="flex gap-1">
          <kbd className="px-1.5 py-0.5 bg-devops-dark border border-white/20 rounded text-devops-text font-mono text-xs shadow-sm">⌘K</kbd>
        </div>
      </div>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.15 }}
              className="fixed top-[15%] left-1/2 -translate-x-1/2 w-full max-w-2xl bg-devops-darker border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
            >
              {/* Search Input */}
              <div className="flex items-center px-4 py-4 border-b border-white/10 bg-devops-dark">
                <Search size={20} className="text-devops-muted mr-3" />
                <input
                  ref={inputRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={t('palette.search')}
                  className="flex-1 bg-transparent border-none outline-none text-devops-text font-mono text-sm placeholder:text-devops-muted/50"
                />
                <kbd className="hidden sm:inline-block px-2 py-1 bg-devops-darker border border-white/10 rounded text-devops-muted font-mono text-xs ml-3">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-[60vh] overflow-y-auto p-2">
                {filteredCommands.length === 0 ? (
                  <div className="py-12 text-center text-devops-muted font-mono text-sm">
                    {t('palette.empty')}
                  </div>
                ) : (
                  <div className="space-y-1">
                    {filteredCommands.map((cmd) => {
                      const Icon = cmd.icon;
                      return (
                        <button
                          key={cmd.id}
                          onClick={cmd.action}
                          className="w-full flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-devops-accent/10 hover:text-devops-accent transition-colors group text-left"
                        >
                          <div className="w-8 h-8 rounded-lg bg-devops-dark flex items-center justify-center group-hover:bg-devops-accent/20 transition-colors shrink-0">
                            <Icon size={16} className="text-devops-muted group-hover:text-devops-accent transition-colors" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-mono text-sm text-devops-text group-hover:text-devops-accent truncate">
                              <span className="text-devops-accent/50 mr-2">$</span>
                              {cmd.cmd}
                            </div>
                            <div className="text-xs text-devops-muted truncate mt-0.5">
                              {cmd.desc}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
