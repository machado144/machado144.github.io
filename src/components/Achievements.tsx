import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { resumeData } from '@/data/resume';
import { Zap, TrendingUp, ShieldCheck, Cloud, Activity, BarChart3, Target } from 'lucide-react';

const icons = [TrendingUp, Zap, Activity, Cloud, ShieldCheck];

export default function Achievements() {
  const { language, t } = useLanguage();
  const data = resumeData[language];

  return (
    <section id="achievements" className="py-24 px-6 bg-cloud-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-k8s-blue/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 text-k8s-blue font-mono text-sm mb-2 uppercase tracking-widest">
            <BarChart3 size={16} />
            <span>Optimization_Metrics</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
            {t('achievements.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.achievements.map((achievement, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="infra-block group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-2.5 bg-cloud-darker border border-cloud-border rounded-lg text-k8s-blue group-hover:scale-110 transition-transform">
                    <Target size={20} />
                  </div>
                  <div className="text-[10px] font-mono text-status-success bg-status-success/10 px-2 py-0.5 rounded border border-status-success/20">
                    OPTIMIZED
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-k8s-blue transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-cloud-muted text-sm leading-relaxed mb-6">
                  {achievement.description}
                </p>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
