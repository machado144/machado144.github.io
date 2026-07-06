/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';
import { resumeData } from '@/data/resume';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CompanyMarquee from '@/components/CompanyMarquee';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import CommandPalette from '@/components/CommandPalette';
import ParticleNetwork from '@/components/ParticleNetwork';
import { Mail, Linkedin, Github, FileDown } from 'lucide-react';
import { CV_URL, CV_FILENAME, cvLabel } from '@/data/cv';

function Footer() {
  const { language } = useLanguage();
  const data = resumeData[language];
  const tagline = language === 'pt'
    ? 'Construído à mão em Sevilha.'
    : language === 'es'
      ? 'Hecho a mano en Sevilla.'
      : 'Hand-built in Seville.';

  return (
    <footer className="py-10 bg-cloud-dark border-t border-cloud-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="flex items-center gap-3">
          <span className="font-extrabold text-white">
            lucas<span className="text-k8s-blue">/</span>machado
          </span>
          <span className="text-xs text-cloud-muted">{tagline}</span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={CV_URL}
            download={CV_FILENAME}
            className="flex items-center gap-1.5 px-3 py-1.5 mr-1 text-xs font-semibold text-cloud-text border border-cloud-border rounded-md hover:border-k8s-blue/50 hover:text-white transition-all"
          >
            <FileDown size={13} className="text-k8s-blue" />
            {cvLabel[language]}
          </a>
          <a
            href={`mailto:${data.contact.email}`}
            aria-label="Email"
            className="p-2 text-cloud-muted hover:text-k8s-blue transition-colors"
          >
            <Mail size={16} />
          </a>
          <a
            href={`https://www.linkedin.com/in/${data.contact.linkedin}`}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 text-cloud-muted hover:text-k8s-blue transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://github.com/AxeForging"
            target="_blank"
            rel="noreferrer"
            aria-label="AxeForging on GitHub"
            className="p-2 text-cloud-muted hover:text-k8s-blue transition-colors"
          >
            <Github size={16} />
          </a>
        </div>

        <p className="text-[11px] text-cloud-muted">
          © {new Date().getFullYear()} Lucas Machado
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-cloud-darker text-cloud-text font-sans selection:bg-k8s-blue selection:text-white">
        <ParticleNetwork fixed />
        <div className="grain-overlay" aria-hidden="true" />
        <Navbar />
        <CommandPalette />
        <main>
          <Hero />
          <CompanyMarquee />
          <Achievements />
          <Experience />
          <Projects />
          <Skills />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
