import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { resumeData } from '../data/resume';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

export default function Experience() {
  const { language, t } = useLanguage();
  const data = resumeData[language];
  const [showAllExp, setShowAllExp] = useState(false);
  const [expandedRoles, setExpandedRoles] = useState<Record<number, boolean>>({});

  const toggleRole = (index: number) => {
    setExpandedRoles(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const displayedExperiences = showAllExp ? data.experience : data.experience.slice(0, 3);

  return (
    <section id="experience" className="py-24 px-6 bg-devops-dark">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4"
        >
          <span className="text-devops-accent font-mono text-2xl">01.</span>
          {t('experience.title')}
          <div className="h-px bg-white/10 flex-grow ml-4"></div>
        </motion.h2>

        <div className="space-y-16">
          {displayedExperiences.map((exp, index) => {
            const isExpanded = expandedRoles[index];
            const displayedHighlights = isExpanded ? exp.highlights : exp.highlights.slice(0, 4);
            const hasMoreHighlights = exp.highlights.length > 4;

            return (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-[31px] top-8 bottom-[-64px] w-px bg-white/10 z-0 last:hidden"></div>
              
              <div className="md:grid md:grid-cols-12 gap-8 items-start relative z-10">
                {/* Timeline Dot */}
                <div className="hidden md:flex col-span-1 justify-center mt-1.5">
                  <div className="w-3 h-3 rounded-full bg-devops-accent shadow-[0_0_10px_var(--color-devops-accent)]"></div>
                </div>

                <div className="md:col-span-11 bg-devops-darker rounded-xl p-6 md:p-8 border border-white/5 hover:border-devops-accent/30 transition-colors shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-devops-text">
                        {exp.role} <span className="text-devops-accent">@ {exp.company}</span>
                      </h3>
                    </div>
                    <div className="flex flex-col gap-2 text-sm font-mono text-devops-muted">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-devops-accent" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-devops-accent" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mt-6">
                    {displayedHighlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-devops-muted leading-relaxed text-sm md:text-base">
                        <span className="text-devops-accent mt-1.5 text-xs">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {hasMoreHighlights && (
                    <button 
                      onClick={() => toggleRole(index)} 
                      className="flex items-center gap-1 text-devops-accent text-sm mt-4 hover:text-devops-accent-hover transition-colors font-mono"
                    >
                      {isExpanded ? (
                        <><ChevronUp size={16} /> {t('experience.role.showLess')}</>
                      ) : (
                        <><ChevronDown size={16} /> {t('experience.role.showMore')}</>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )})}
        </div>

        {data.experience.length > 3 && (
          <div className="mt-16 text-center relative z-10">
            <button
              onClick={() => setShowAllExp(!showAllExp)}
              className="px-6 py-3 border border-devops-accent text-devops-accent rounded hover:bg-devops-accent/10 transition-colors font-mono text-sm flex items-center gap-2 mx-auto"
            >
              {showAllExp ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              {showAllExp ? t('experience.showLess') : t('experience.showMore')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
