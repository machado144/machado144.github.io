/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import CommandPalette from '@/components/CommandPalette';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-cloud-darker text-cloud-text font-sans selection:bg-k8s-blue selection:text-white">
        <Navbar />
        <CommandPalette />
        <main>
          <Hero />
          <Experience />
          <Achievements />
          <Projects />
          <Skills />
        </main>
        <footer className="py-12 bg-cloud-dark border-t border-cloud-border">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-k8s-blue font-mono font-bold">
              <span>lucas<span className="text-white">.</span>sh</span>
              <div className="status-badge status-online">PROD-ENV</div>
            </div>

            <p className="text-[10px] font-mono text-cloud-muted uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} Infrastructure Portfolio. Built for high-availability.
            </p>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
}
