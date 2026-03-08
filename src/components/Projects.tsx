import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { resumeData } from '@/data/resume';
import { ExternalLink, Globe } from 'lucide-react';

export default function Projects() {
  const { language, t } = useLanguage();
  const data = resumeData[language];

  return (
    <section id="projects" className="py-24 px-6 bg-cloud-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cloud-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 text-k8s-blue font-mono text-sm mb-2 uppercase tracking-widest">
            <Globe size={16} />
            <span>Service_Discovery</span>
          </div>
          <div className="flex items-center gap-5">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight">
              {t('projects.title')}
            </h2>
            <div className="flex items-center gap-2 border border-cloud-border bg-cloud-darker rounded-xl px-3 py-1.5">
              <img src="/axeforge-logo.png" alt="AxeForge" className="w-6 h-6 rounded-md object-cover" />
              <span className="text-[11px] font-mono font-bold text-cloud-muted uppercase tracking-widest">AxeForge</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {data.projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="infra-block group flex flex-col h-full cursor-pointer"
            >
              <div className="flex justify-end items-start mb-6">
                <div className="p-2 bg-cloud-darker border border-cloud-border rounded text-cloud-muted group-hover:text-white group-hover:border-k8s-blue/50 transition-all">
                  <ExternalLink size={16} />
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-k8s-blue transition-colors">
                  {project.name}
                </h3>
                <div className="status-badge status-online py-0 px-1.5 h-5">
                  <span className="w-1 h-1 rounded-full bg-status-success" />
                  LIVE
                </div>
              </div>

              <p className="text-cloud-muted text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-bold font-mono text-k8s-blue/80 bg-k8s-blue/10 border border-k8s-blue/20 px-2 py-0.5 rounded uppercase tracking-tighter"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
