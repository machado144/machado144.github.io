import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { MessageSquare, X, Send, Bot, User, Terminal } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
}

export default function ChatBot() {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', type: 'bot', text: language === 'en' ? 'Hello! I am Lucas\'s AI assistant. How can I help you today?' : 'Olá! Sou o assistente de IA do Lucas. Como posso te ajudar hoje?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = (text: string = input) => {
    if (!text.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), type: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Mock response for regular chat
    setTimeout(() => {
      let botResponse = language === 'en'
        ? "I'm currently a mocked assistant. Soon I'll be connected to a Cloudflare Worker to answer questions about Lucas's resume in real-time!"
        : "Atualmente sou um assistente simulado. Em breve estarei conectado a um Cloudflare Worker para responder perguntas sobre o currículo do Lucas em tempo real!";

      if (text.toLowerCase().includes('kubernetes') || text.toLowerCase().includes('k8s')) {
        botResponse = language === 'en'
          ? "Lucas has extensive experience with Kubernetes, managing GKE and EKS clusters, implementing GitOps with ArgoCD, and writing custom Helm charts."
          : "Lucas tem vasta experiência com Kubernetes, gerenciando clusters GKE e EKS, implementando GitOps com ArgoCD e escrevendo Helm charts customizados.";
      } else if (text.toLowerCase().includes('ci/cd') || text.toLowerCase().includes('pipeline')) {
        botResponse = language === 'en'
          ? "He has built secure CI/CD pipelines using GitHub Actions, CircleCI, and Jenkins, including self-hosted runners and automated rollbacks."
          : "Ele construiu pipelines CI/CD seguros usando GitHub Actions, CircleCI e Jenkins, incluindo runners self-hosted e rollbacks automatizados.";
      } else if (text.toLowerCase().includes('language') || text.toLowerCase().includes('idioma')) {
        botResponse = language === 'en'
          ? "Lucas speaks Portuguese (Native), Spanish (Advanced), and English (Fluent)."
          : "Lucas fala Português (Nativo), Espanhol (Avançado) e Inglês (Fluente).";
      }

      const botMsg: Message = { id: (Date.now() + 1).toString(), type: 'bot', text: botResponse };
      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  const suggestions = [
    t('chat.suggestion.1'),
    t('chat.suggestion.2'),
    t('chat.suggestion.3')
  ];

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-k8s-blue text-white rounded-full shadow-lg z-50 ${isOpen ? 'hidden' : 'flex'} border-4 border-cloud-dark hover:border-k8s-blue/50 transition-all`}
      >
        <MessageSquare size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[500px] bg-cloud-darker border border-cloud-border rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-cloud-dark border-b border-cloud-border flex justify-between items-center">
              <div className="flex items-center gap-2 text-k8s-blue font-mono font-bold">
                <Terminal size={20} />
                <span>{t('chat.title')}</span>
                <div className="status-badge status-online h-4 text-[9px]">LIVE</div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-cloud-muted hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border border-cloud-border ${msg.type === 'user' ? 'bg-cloud-dark' : 'bg-k8s-blue/20 text-k8s-blue'}`}>
                    {msg.type === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div
                    className={`max-w-[75%] p-3 rounded-xl text-sm ${msg.type === 'user'
                        ? 'bg-cloud-dark text-white border border-cloud-border rounded-tr-none'
                        : 'bg-k8s-blue/5 text-cloud-text border border-k8s-blue/20 rounded-tl-none'
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            <div className="px-4 pb-2">
              {messages.length < 3 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {suggestions.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(s)}
                      className="text-[10px] font-mono font-bold px-3 py-1.5 bg-cloud-dark border border-cloud-border rounded-lg text-cloud-muted hover:text-k8s-blue hover:border-k8s-blue/50 transition-all text-left uppercase tracking-tighter"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-cloud-dark border-t border-cloud-border">
              <form
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t('chat.placeholder')}
                  className="flex-1 bg-cloud-darker border border-cloud-border rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-k8s-blue transition-colors font-mono"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="p-2 bg-k8s-blue text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-k8s-blue/80 transition-colors"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
