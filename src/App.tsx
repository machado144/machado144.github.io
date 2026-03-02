/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ChatBot from './components/ChatBot';
import CommandPalette from './components/CommandPalette';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-devops-darker text-devops-text font-sans selection:bg-devops-accent selection:text-devops-darker">
        <Navbar />
        <CommandPalette />
        <main>
          <Hero />
          <Experience />
          <Achievements />
          <Projects />
          <Skills />
        </main>
        <ChatBot />
        
        <footer className="py-8 text-center text-sm font-mono text-devops-muted border-t border-white/5">
          <p>© {new Date().getFullYear()} Lucas Machado. All rights reserved.</p>
        </footer>
      </div>
    </LanguageProvider>
  );
}
