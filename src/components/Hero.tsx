import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { resumeData } from '@/data/resume';
import { ArrowUpRight, Mail, MapPin, Github, Linkedin, Briefcase, FileDown } from 'lucide-react';
import Terminal from '@/components/Terminal';
import { CV_URL, CV_FILENAME, cvLabel } from '@/data/cv';

export default function Hero() {
  const { language } = useLanguage();
  const data = resumeData[language];

  const ctaPrimary = language === 'pt' ? 'Ver experiência' : language === 'es' ? 'Ver experiencia' : 'View experience';
  const ctaSecondary = language === 'pt' ? 'Entrar em contato' : language === 'es' ? 'Contactar' : 'Get in touch';
  const availableLabel = language === 'pt' ? 'Disponível para colaborações' : language === 'es' ? 'Disponible para colaboraciones' : 'Available for collaborations';

  return (
    <section id="about" className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-[40rem] h-[40rem] bg-k8s-blue/8 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-k8s-blue/4 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full bg-status-success/10 border border-status-success/30">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-status-success opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-status-success" />
              </span>
              <span className="text-[11px] font-medium text-status-success tracking-wide">
                {availableLabel}
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tighter leading-[0.95] mb-6">
              {data.name.split(' ')[0]}
              <br />
              {data.name.split(' ').slice(1).join(' ')}
              <span className="text-k8s-blue">.</span>
            </h1>

            <div className="flex items-center gap-3 mb-6 text-base md:text-lg text-cloud-text">
              <Briefcase size={18} className="text-k8s-blue shrink-0" />
              <span className="font-semibold">{data.title}</span>
            </div>

            <p className="text-cloud-muted max-w-xl mb-8 leading-relaxed text-[15px]">
              {data.profile}
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-10 text-sm text-cloud-muted">
              <div className="flex items-center gap-1.5">
                <MapPin size={14} className="text-k8s-blue" />
                {data.contact.location}
              </div>
              <span className="w-1 h-1 rounded-full bg-cloud-border hidden sm:block" />
              <a
                href={`https://www.linkedin.com/in/${data.contact.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Linkedin size={14} className="text-k8s-blue" />
                /{data.contact.linkedin}
              </a>
              <span className="w-1 h-1 rounded-full bg-cloud-border hidden sm:block" />
              <a
                href="https://github.com/AxeForging"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github size={14} className="text-k8s-blue" />
                AxeForging
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={CV_URL}
                download={CV_FILENAME}
                className="btn-sheen group inline-flex items-center gap-2 px-6 py-3 bg-k8s-blue text-white rounded-md font-semibold text-sm hover:bg-k8s-blue/90 active:scale-[0.98] transition-all shadow-[0_8px_30px_rgba(249,115,22,0.25)]"
              >
                <FileDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
                {cvLabel[language]}
                <span className="text-[10px] font-mono font-normal text-white/70 border-l border-white/25 pl-2 ml-0.5">PDF</span>
              </a>
              <a
                href="#experience"
                className="group inline-flex items-center gap-2 px-6 py-3 border border-cloud-border text-white rounded-md font-semibold text-sm hover:border-k8s-blue/60 hover:bg-k8s-blue/5 active:scale-[0.98] transition-all"
              >
                {ctaPrimary}
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href={`mailto:${data.contact.email}`}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-cloud-muted hover:text-white transition-colors"
              >
                <Mail size={16} className="text-k8s-blue" />
                {ctaSecondary}
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <Terminal />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
