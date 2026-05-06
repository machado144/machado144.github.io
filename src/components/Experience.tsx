import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { resumeData } from '@/data/resume';
import { Calendar, MapPin, ChevronRight, Briefcase } from 'lucide-react';

export default function Experience() {
  const { language, t } = useLanguage();
  const data = resumeData[language];
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAllHighlights, setShowAllHighlights] = useState(false);
  const HIGHLIGHTS_PREVIEW = 4;

  const activeExp = data.experience[activeIndex];

  const eyebrow = language === 'pt' ? 'Trajetória' : language === 'es' ? 'Trayectoria' : 'Career';
  const sidebarLabel = language === 'pt' ? 'Empresas' : language === 'es' ? 'Empresas' : 'Companies';

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
          <div className="text-k8s-blue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            {eyebrow}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            {t('experience.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[500px]">
          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-1.5">
            <div className="px-1 py-2 text-[11px] font-semibold text-cloud-muted uppercase tracking-[0.2em] mb-3 flex items-center justify-between">
              <span>{sidebarLabel}</span>
              <span className="text-k8s-blue font-mono">{data.experience.length}</span>
            </div>
            {data.experience.map((exp, index) => (
              <button
                key={`${exp.company}-${index}`}
                onClick={() => { setActiveIndex(index); setShowAllHighlights(false); }}
                className={`w-full text-left px-4 py-3 rounded-lg border transition-all group flex items-center justify-between ${
                  activeIndex === index
                    ? 'bg-cloud-dark border-k8s-blue/40 text-white'
                    : 'bg-transparent border-transparent text-cloud-muted hover:bg-cloud-dark/50 hover:text-cloud-text'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`p-1.5 rounded bg-cloud-darker border shrink-0 ${
                    activeIndex === index ? 'border-k8s-blue/60 text-k8s-blue' : 'border-cloud-border text-cloud-muted'
                  }`}>
                    <Briefcase size={14} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-semibold truncate">{exp.company}</span>
                    <span className="text-[11px] text-cloud-muted truncate">{exp.period}</span>
                  </div>
                </div>
                <ChevronRight
                  size={14}
                  className={`shrink-0 transition-all ${
                    activeIndex === index ? 'translate-x-0 opacity-100 text-k8s-blue' : '-translate-x-2 opacity-0'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Detail */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="rounded-xl border border-cloud-border bg-cloud-dark p-6 md:p-8 h-full flex flex-col"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8 pb-6 border-b border-cloud-border">
                  <div>
                    <div className="text-sm font-semibold text-k8s-blue mb-1">{activeExp.company}</div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                      {activeExp.role}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-1.5 text-xs text-cloud-muted">
                    <div className="flex items-center gap-2">
                      <Calendar size={13} className="text-k8s-blue" />
                      {activeExp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={13} className="text-k8s-blue" />
                      {activeExp.location}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {activeExp.highlights.slice(0, HIGHLIGHTS_PREVIEW).map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + (i * 0.04) }}
                      className="flex items-start gap-3 text-cloud-text text-[14px] leading-relaxed"
                    >
                      <span className="text-k8s-blue mt-2 w-1 h-1 rounded-full bg-k8s-blue shrink-0" />
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
                        transition={{ duration: 0.2, delay: i * 0.03 }}
                        style={{ overflow: 'hidden' }}
                        className="flex items-start gap-3 text-cloud-text text-[14px] leading-relaxed"
                      >
                        <span className="text-k8s-blue mt-2 w-1 h-1 rounded-full bg-k8s-blue shrink-0" />
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>

                {activeExp.highlights.length > HIGHLIGHTS_PREVIEW && (
                  <button
                    onClick={() => setShowAllHighlights(!showAllHighlights)}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-k8s-blue hover:text-white transition-colors w-fit"
                  >
                    <motion.span animate={{ rotate: showAllHighlights ? 90 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronRight size={14} />
                    </motion.span>
                    {showAllHighlights
                      ? t('experience.role.showLess')
                      : `${t('experience.role.showMore')} (+${activeExp.highlights.length - HIGHLIGHTS_PREVIEW})`}
                  </button>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
