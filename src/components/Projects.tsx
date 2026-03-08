import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { resumeData } from '@/data/resume';
import { Github, ExternalLink, Box, Globe, Cpu, Workflow, Zap } from 'lucide-react';

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
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
            {t('projects.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="infra-block group flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-2.5 bg-cloud-darker border border-cloud-border rounded-lg text-k8s-blue group-hover:scale-110 transition-transform">
                  <Box size={24} />
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-cloud-darker border border-cloud-border rounded text-cloud-muted hover:text-white hover:border-k8s-blue/50 transition-all"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-k8s-blue transition-colors">
                  {project.name}
                </h3>
                <div className="status-badge status-online py-0 px-1.5 h-5">
                  <span className="w-1 h-1 rounded-full bg-status-success" />
                  STABLE
                </div>
              </div>

              <p className="text-cloud-muted text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6 border-y border-cloud-border/30 py-4 font-mono text-[9px] uppercase tracking-wider text-cloud-muted">
                <div className="flex items-center gap-2">
                  <Cpu size={12} className="text-k8s-blue" />
                  <span>TYPE: LoadBalancer</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={12} className="text-status-warning" />
                  <span>VERSION: v2.0.4</span>
                </div>
              </div>

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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
