import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { resumeData } from '@/data/resume';
import { ArrowUpRight, Github, Sparkles, Users, GraduationCap } from 'lucide-react';
import { handleSpotlightMove } from '@/components/spotlight';

export default function Projects() {
  const { language, t } = useLanguage();
  const data = resumeData[language];

  const eyebrow = language === 'pt' ? 'Construindo' : language === 'es' ? 'Construyendo' : 'Building';
  const featuredLabel = language === 'pt' ? 'Em destaque' : language === 'es' ? 'Destacado' : 'Featured';
  const visitLabel = language === 'pt' ? 'Visitar Academy' : language === 'es' ? 'Visitar Academy' : 'Visit Academy';

  const featured = data.projects[0];
  const others = data.projects.slice(1);

  const featuredHooks = {
    en: ['Real hiring requirements', 'Portfolio-driven curriculum', 'Senior mentorship'],
    pt: ['Requisitos reais de contratação', 'Currículo orientado a portfólio', 'Mentoria sênior'],
    es: ['Requisitos reales de contratación', 'Currículo basado en portafolio', 'Mentoría senior'],
  } as const;

  return (
    <section id="projects" className="py-28 px-6 bg-cloud-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cloud-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-k8s-blue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            {eyebrow}
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight">
              {t('projects.title')}
            </h2>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-cloud-border bg-cloud-darker">
              <img src="/axeforge-logo.png" alt="AxeForge" className="w-5 h-5 rounded-md object-cover" />
              <span className="text-xs font-bold text-cloud-text">AxeForge</span>
            </div>
          </div>
        </motion.div>

        {/* Featured */}
        <motion.a
          href={featured.url}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          onMouseMove={handleSpotlightMove}
          className="spotlight-card group block rounded-2xl border border-cloud-border bg-gradient-to-br from-cloud-darker via-cloud-dark to-cloud-darker p-2 mb-6 hover:border-k8s-blue/40 transition-colors"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-2">
            {/* Browser-mock preview */}
            <div className="lg:col-span-7 relative rounded-xl border border-cloud-border bg-cloud-darker overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-cloud-dark border-b border-cloud-border">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-3 px-3 py-1 rounded text-[11px] text-cloud-muted bg-cloud-darker font-mono border border-cloud-border text-center truncate">
                  axeforge.io
                </div>
                <div className="text-[10px] text-cloud-muted font-mono">⌘L</div>
              </div>

              <div className="relative p-8 md:p-10 min-h-[300px] md:min-h-[360px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-k8s-blue/12 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <img src="/axeforge-logo.png" alt="" className="w-10 h-10 rounded-lg" />
                    <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-k8s-blue font-bold">
                      AxeForge / Academy
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight leading-[1.05] mb-4">
                    {language === 'pt' && (<>Treine como times de elite.<br /><span className="text-k8s-blue">Sem teoria genérica.</span></>)}
                    {language === 'es' && (<>Entrena como equipos de élite.<br /><span className="text-k8s-blue">Sin teoría genérica.</span></>)}
                    {language === 'en' && (<>Train like elite teams.<br /><span className="text-k8s-blue">No generic theory.</span></>)}
                  </h3>

                  <ul className="space-y-2 mt-6">
                    {featuredHooks[language].map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-cloud-text">
                        <span className="w-1 h-1 rounded-full bg-k8s-blue" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right meta */}
            <div className="lg:col-span-5 p-5 lg:p-8 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={14} className="text-k8s-blue" />
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-k8s-blue">
                  {featuredLabel}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 group-hover:text-k8s-blue transition-colors tracking-tight">
                {featured.name}
              </h3>

              <p className="text-cloud-muted text-[14px] leading-relaxed mb-6 flex-grow">
                {featured.description}
              </p>

              <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="px-2 py-2 rounded-md bg-cloud-darker border border-cloud-border text-center">
                  <GraduationCap size={14} className="mx-auto text-k8s-blue mb-1" />
                  <div className="text-[10px] text-cloud-muted">QA</div>
                </div>
                <div className="px-2 py-2 rounded-md bg-cloud-darker border border-cloud-border text-center">
                  <Users size={14} className="mx-auto text-k8s-blue mb-1" />
                  <div className="text-[10px] text-cloud-muted">DevOps</div>
                </div>
                <div className="px-2 py-2 rounded-md bg-cloud-darker border border-cloud-border text-center">
                  <Sparkles size={14} className="mx-auto text-k8s-blue mb-1" />
                  <div className="text-[10px] text-cloud-muted">DevSecOps</div>
                </div>
              </div>

              <div className="inline-flex items-center justify-between gap-2 px-4 py-2.5 rounded-md bg-k8s-blue text-white font-semibold text-sm shadow-[0_8px_30px_rgba(249,115,22,0.25)] group-hover:bg-k8s-blue/90 transition-all">
                <span>{visitLabel}</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </motion.a>

        {/* Secondary projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {others.map((project, index) => {
            const isGithub = project.url.includes('github.com');
            return (
              <motion.a
                key={index}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onMouseMove={handleSpotlightMove}
                className="spotlight-card group flex flex-col rounded-xl border border-cloud-border bg-cloud-darker p-6 hover:border-k8s-blue/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="p-2 rounded-md bg-cloud-dark border border-cloud-border text-k8s-blue">
                    {isGithub ? <Github size={18} /> : <ArrowUpRight size={18} />}
                  </div>
                  <ArrowUpRight size={16} className="text-cloud-muted group-hover:text-k8s-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-k8s-blue transition-colors">
                  {project.name}
                </h3>

                <p className="text-cloud-muted text-[14px] leading-relaxed mb-5 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-semibold text-k8s-blue bg-k8s-blue/10 border border-k8s-blue/20 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
