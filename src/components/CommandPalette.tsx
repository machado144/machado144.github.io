import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { Search, X, ArrowUpRight, Briefcase, Sparkles, Code, Mail, Linkedin, Github } from 'lucide-react';

type Action = {
  label: string;
  hint: string;
  icon: React.ReactNode;
  run: () => void;
};

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
      setInput('');
    }
  }, [isOpen]);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const actions: Action[] = useMemo(() => [
    { label: 'Experience', hint: 'Career timeline', icon: <Briefcase size={15} />, run: () => goTo('experience') },
    { label: 'Impact', hint: 'Outcomes & numbers', icon: <Sparkles size={15} />, run: () => goTo('achievements') },
    { label: 'Building', hint: 'AxeForge & projects', icon: <Code size={15} />, run: () => goTo('projects') },
    { label: 'Stack', hint: 'Tools and tech', icon: <Code size={15} />, run: () => goTo('skills') },
    { label: 'Email Lucas', hint: 'lucas.dpmachado@gmail.com', icon: <Mail size={15} />, run: () => { window.location.href = 'mailto:lucas.dpmachado@gmail.com'; setIsOpen(false); } },
    { label: 'LinkedIn', hint: 'lucaspmachado', icon: <Linkedin size={15} />, run: () => { window.open('https://www.linkedin.com/in/lucaspmachado', '_blank'); setIsOpen(false); } },
    { label: 'AxeForging on GitHub', hint: 'github.com/AxeForging', icon: <Github size={15} />, run: () => { window.open('https://github.com/AxeForging', '_blank'); setIsOpen(false); } },
  ], []);

  const filtered = useMemo(() => {
    if (!input.trim()) return actions;
    const q = input.toLowerCase();
    return actions.filter(a => a.label.toLowerCase().includes(q) || a.hint.toLowerCase().includes(q));
  }, [input, actions]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2.5 px-3.5 py-2.5 bg-cloud-dark/90 backdrop-blur-md border border-cloud-border rounded-lg shadow-xl hover:border-k8s-blue/50 transition-all group"
      >
        <Search size={14} className="text-k8s-blue" />
        <span className="text-cloud-muted text-xs font-medium">Quick nav</span>
        <kbd className="px-1.5 py-0.5 bg-cloud-darker border border-cloud-border rounded text-cloud-text font-mono text-[10px]">⌘K</kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.15 }}
              className="fixed top-[18%] left-1/2 -translate-x-1/2 w-full max-w-xl bg-cloud-dark border border-cloud-border rounded-xl shadow-2xl z-50 overflow-hidden"
            >
              <div className="flex items-center gap-3 px-4 py-3 border-b border-cloud-border">
                <Search size={16} className="text-k8s-blue" />
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && filtered[0]) filtered[0].run();
                  }}
                  placeholder="Search…"
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-cloud-muted text-sm"
                />
                <button onClick={() => setIsOpen(false)} className="text-cloud-muted hover:text-white transition-colors">
                  <X size={16} />
                </button>
              </div>

              <div className="p-2 max-h-[400px] overflow-y-auto">
                {filtered.length === 0 ? (
                  <div className="px-3 py-8 text-center text-sm text-cloud-muted">No matches.</div>
                ) : (
                  filtered.map((a, i) => (
                    <button
                      key={i}
                      onClick={a.run}
                      className="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-md hover:bg-k8s-blue/10 group transition-colors text-left"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="text-k8s-blue shrink-0">{a.icon}</div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-white truncate">{a.label}</div>
                          <div className="text-[11px] text-cloud-muted truncate">{a.hint}</div>
                        </div>
                      </div>
                      <ArrowUpRight size={14} className="text-cloud-muted opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </button>
                  ))
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
