import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { resumeData } from '../data/resume';
import { Zap, TrendingUp, ShieldCheck, Cloud, Activity } from 'lucide-react';

const icons = [TrendingUp, Zap, Activity, Cloud, ShieldCheck];

export default function Achievements() {
  const { language, t } = useLanguage();
  const data = resumeData[language];

  return (
    <section id="achievements" className="py-24 px-6 bg-devops-darker">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4"
        >
          <span className="text-devops-accent font-mono text-2xl">02.</span>
          {t('achievements.title')}
          <div className="h-px bg-white/10 flex-grow ml-4"></div>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.achievements.map((achievement, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-devops-dark p-6 rounded-xl border border-white/5 hover:border-devops-accent/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-devops-darker flex items-center justify-center mb-4 group-hover:bg-devops-accent/10 transition-colors">
                  <Icon className="text-devops-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold text-devops-text mb-3">{achievement.title}</h3>
                <p className="text-devops-muted text-sm leading-relaxed">{achievement.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
