import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { resumeData } from '@/data/resume';
import { Calendar, MapPin, Search, Database, Terminal, Layers, Box, Activity, ChevronRight } from 'lucide-react';

export default function Experience() {
  const { language, t } = useLanguage();
  const data = resumeData[language];
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAllHighlights, setShowAllHighlights] = useState(false);
  const HIGHLIGHTS_PREVIEW = 4;

  const activeExp = data.experience[activeIndex];

  return (
    <section id="experience" className="py-24 px-6 bg-cloud-darker relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cloud-border to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 text-k8s-blue font-mono text-sm mb-2 uppercase tracking-widest">
            <Layers size={16} />
            <span>Resource_Explorer</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight">
            {t('experience.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[500px]">
          {/* Sidebar / Namespaces */}
          <div className="lg:col-span-4 space-y-2">
            <div className="px-4 py-2 text-[10px] font-mono text-cloud-muted uppercase tracking-widest border-b border-cloud-border mb-4 flex items-center justify-between">
              <span>Namespaces</span>
              <span className="text-k8s-blue">{data.experience.length} ACTIVE</span>
            </div>
            {data.experience.map((exp, index) => (
              <button
                key={`${exp.company}-${index}`}
                onClick={() => { setActiveIndex(index); setShowAllHighlights(false); }}
                className={`w-full text-left px-4 py-3 rounded-lg border transition-all group flex items-center justify-between ${activeIndex === index
                    ? 'bg-cloud-dark border-k8s-blue/50 text-white'
                    : 'bg-transparent border-transparent text-cloud-muted hover:bg-cloud-dark/50'
                  }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-1.5 rounded bg-cloud-darker border ${activeIndex === index ? 'border-k8s-blue text-k8s-blue' : 'border-cloud-border text-cloud-muted'
                    }`}>
                    <Box size={14} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold truncate max-w-[150px]">{exp.company}</span>
                    <span className="text-[10px] font-mono opacity-60">PROD-CLUSTER</span>
                  </div>
                </div>
                <ChevronRight size={14} className={`transition-transform ${activeIndex === index ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`} />
              </button>
            ))}
          </div>

          {/* Main Content / Resource Definition */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="infra-block h-full flex flex-col"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-cloud-border pb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
                        {activeExp.role}
                      </h3>
                      <div className="status-badge status-online">STABLE</div>
                    </div>
                    <div className="text-k8s-blue font-mono text-xs font-bold">
                      kind: EmploymentHistory | namespace: {activeExp.company.toLowerCase().replace(/\s+/g, '-')}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 text-[11px] font-mono text-cloud-muted uppercase">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-k8s-blue" />
                      {activeExp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-k8s-blue" />
                      {activeExp.location}
                    </div>
                  </div>
                </div>

                {/* Resource Specification */}
                <div className="space-y-6">
                  <div>
                    <div className="text-[10px] font-mono text-cloud-muted uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Terminal size={12} className="text-k8s-blue" />
                      spec.accomplishments
                    </div>
                    <ul className="grid grid-cols-1 gap-4">
                      {activeExp.highlights.slice(0, HIGHLIGHTS_PREVIEW).map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + (i * 0.05) }}
                          className="flex items-start gap-3 text-cloud-text text-sm leading-relaxed p-3 bg-cloud-darker/50 border border-cloud-border rounded-lg hover:border-k8s-blue/30 transition-colors"
                        >
                          <span className="text-k8s-blue mt-1"><Activity size={14} /></span>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                      <AnimatePresence initial={false}>
                        {showAllHighlights && activeExp.highlights.slice(HIGHLIGHTS_PREVIEW).map((highlight, i) => (
                          <motion.li
                            key={HIGHLIGHTS_PREVIEW + i}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, delay: i * 0.04, ease: 'easeInOut' }}
                            style={{ overflow: 'hidden' }}
                            className="flex items-start gap-3 text-cloud-text text-sm leading-relaxed p-3 bg-cloud-darker/50 border border-cloud-border rounded-lg hover:border-k8s-blue/30 transition-colors"
                          >
                            <span className="text-k8s-blue mt-1 shrink-0"><Activity size={14} /></span>
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </AnimatePresence>
                    </ul>
                    {activeExp.highlights.length > HIGHLIGHTS_PREVIEW && (
                      <button
                        onClick={() => setShowAllHighlights(!showAllHighlights)}
                        className="mt-4 flex items-center gap-2 text-[11px] font-mono font-bold text-k8s-blue hover:text-white transition-colors uppercase tracking-widest"
                      >
                        <motion.span animate={{ rotate: showAllHighlights ? 90 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronRight size={14} />
                        </motion.span>
                        {showAllHighlights ? t('experience.role.showLess') : `${t('experience.role.showMore')} (${activeExp.highlights.length - HIGHLIGHTS_PREVIEW} more)`}
                      </button>
                    )}
                  </div>

                  <div className="mt-8 pt-6 border-t border-cloud-border flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-cloud-muted">
                      <Database size={12} />
                      REPLICAS: 1
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-cloud-muted">
                      <Box size={12} />
                      CPU: 200m
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-cloud-muted">
                      <Activity size={12} />
                      MEMORY: 512Mi
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
