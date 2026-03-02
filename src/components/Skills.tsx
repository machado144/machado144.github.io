import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { resumeData } from '../data/resume';
import { Code, Server, Globe, Terminal } from 'lucide-react';

export default function Skills() {
  const { language, t } = useLanguage();
  const data = resumeData[language];

  return (
    <section id="skills" className="py-24 px-6 bg-devops-darker">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4"
        >
          <span className="text-devops-accent font-mono text-2xl">04.</span>
          {t('skills.title')}
          <div className="h-px bg-white/10 flex-grow ml-4"></div>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Main Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-3">
              {data.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-devops-dark border border-white/10 rounded-full text-sm font-mono text-devops-text hover:border-devops-accent hover:text-devops-accent transition-colors cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages & Courses */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-devops-text">
                <Globe className="text-devops-accent" />
                {t('languages.title')}
              </h3>
              <div className="space-y-4">
                {data.languages.map((lang, index) => (
                  <div key={lang.name} className="flex justify-between items-center bg-devops-dark p-4 rounded-lg border border-white/5">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-sm font-mono text-devops-accent">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-devops-text">
                <Terminal className="text-devops-accent" />
                {t('courses.title')}
              </h3>
              <ul className="space-y-4">
                {data.courses.map((course, index) => (
                  <li key={index} className="flex items-start gap-3 bg-devops-dark p-4 rounded-lg border border-white/5">
                    <span className="text-devops-accent mt-1">▹</span>
                    <span className="text-sm text-devops-muted">{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
