import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { resumeData } from '../data/resume';
import { Github, ExternalLink, Terminal } from 'lucide-react';

export default function Projects() {
  const { language, t } = useLanguage();
  const data = resumeData[language];

  return (
    <section id="projects" className="py-24 px-6 bg-devops-dark">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4"
        >
          <span className="text-devops-accent font-mono text-2xl">03.</span>
          {t('projects.title')}
          <div className="h-px bg-white/10 flex-grow ml-4"></div>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-devops-darker p-6 md:p-8 rounded-xl border border-white/5 hover:border-devops-accent/30 transition-all group flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-lg bg-devops-dark flex items-center justify-center group-hover:bg-devops-accent/10 transition-colors">
                  <Terminal className="text-devops-accent" size={24} />
                </div>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-devops-muted hover:text-devops-accent transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
              
              <h3 className="text-xl font-bold text-devops-text mb-3 group-hover:text-devops-accent transition-colors">
                <a href={project.url} target="_blank" rel="noreferrer">
                  {project.name}
                </a>
              </h3>
              
              <p className="text-devops-muted text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="text-xs font-mono text-devops-accent/80 bg-devops-accent/5 px-2 py-1 rounded"
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
