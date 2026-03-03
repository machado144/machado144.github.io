import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Terminal, Search, X, ChevronRight, Command, Info, ArrowUpRight } from 'lucide-react';

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const { t } = useLanguage();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && (e.target as HTMLElement).tagName !== 'INPUT')) {
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
      setTimeout(() => inputRef.current?.focus(), 100);
      setInput('');
    }
  }, [isOpen]);

  const runCommand = (cmdStr: string) => {
    const raw = cmdStr.toLowerCase().trim();
    setHistory(prev => [...prev, cmdStr]);

    if (raw.includes('get projects') || raw === 'get pods') {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    } else if (raw.includes('describe me') || raw.includes('get info')) {
      document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' });
    } else if (raw.includes('get exp') || raw.includes('get nodes')) {
      document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
    } else if (raw.includes('get skills') || raw.includes('get deploy')) {
      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
    } else if (raw === 'exit' || raw === 'quit') {
      setIsOpen(false);
      return;
    } else {
      // Default to search behavior if no direct command match
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const suggestions = [
    { cmd: 'kubectl get nodes', desc: 'Display infrastructure nodes (experience)' },
    { cmd: 'kubectl get services', desc: 'List deployed services (projects)' },
    { cmd: 'kubectl describe me', desc: 'View cluster metrics (achievements)' },
    { cmd: 'kubectl get deployments', desc: 'Show tech stack (skills)' }
  ];

  return (
    <>
      {/* Terminal Trigger */}
      <div
        className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-3 px-4 py-2.5 bg-cloud-darker/90 backdrop-blur-md border border-cloud-border rounded-xl shadow-2xl cursor-pointer hover:border-k8s-blue/50 transition-all group scale-90 origin-bottom-left"
        onClick={() => setIsOpen(true)}
      >
        <div className="p-1 px-1.5 bg-k8s-blue/20 rounded border border-k8s-blue/30">
          <Terminal size={14} className="text-k8s-blue" />
        </div>
        <span className="text-cloud-muted font-mono text-[10px] uppercase font-bold tracking-widest">{t('palette.tip')}</span>
        <kbd className="px-1.5 py-0.5 bg-cloud-dark border border-cloud-border rounded text-white font-mono text-[10px] shadow-sm">⌘K</kbd>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-2xl bg-cloud-darker border border-cloud-border rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] z-50 overflow-hidden flex flex-col font-mono"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-cloud-dark border-b border-cloud-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="text-[10px] text-cloud-muted font-bold tracking-widest uppercase">cloud-shell -- bash</div>
                <button onClick={() => setIsOpen(false)} className="text-cloud-muted hover:text-white transition-colors">
                  <X size={16} />
                </button>
              </div>

              {/* Terminal Body */}
              <div className="p-4 flex flex-col">
                <div className="flex items-center gap-3 text-k8s-blue font-bold mb-4">
                  <ChevronRight size={18} />
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && runCommand(input)}
                    placeholder="kubectl get pod..."
                    className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-cloud-muted/30"
                  />
                </div>

                <div className="space-y-4">
                  <div className="text-[11px] text-cloud-muted border-b border-cloud-border/30 pb-2 uppercase tracking-widest font-bold">
                    Available Commands
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {suggestions.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => runCommand(s.cmd)}
                        className="flex items-center justify-between group p-3 rounded-lg border border-transparent hover:border-k8s-blue/30 hover:bg-k8s-blue/5 transition-all text-left"
                      >
                        <div className="flex flex-col gap-1">
                          <code className="text-sm text-k8s-blue font-bold tracking-tighter group-hover:text-white transition-colors">
                            $ {s.cmd}
                          </code>
                          <span className="text-[10px] text-cloud-muted group-hover:text-cloud-text transition-colors">
                            {s.desc}
                          </span>
                        </div>
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-k8s-blue" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-cloud-border/30 flex justify-between items-center text-[9px] text-cloud-muted uppercase">
                  <span>Authorized user: machado144</span>
                  <span>Session: active</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
