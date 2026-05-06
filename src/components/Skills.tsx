import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { Cpu, Terminal, Activity, ShieldCheck, Database, Cloud } from 'lucide-react';

export default function Skills() {
  const { language, t } = useLanguage();

  const groupTitles = {
    en: {
      orchestration: 'Orchestration & Mesh',
      cloud: 'Cloud & Infrastructure',
      cicd: 'CI/CD & GitOps',
      observability: 'Observability',
      runtime: 'Runtime & Languages',
      security: 'Security & Policy',
    },
    pt: {
      orchestration: 'Orquestração e Mesh',
      cloud: 'Cloud e Infraestrutura',
      cicd: 'CI/CD e GitOps',
      observability: 'Observabilidade',
      runtime: 'Runtime e Linguagens',
      security: 'Segurança e Política',
    },
    es: {
      orchestration: 'Orquestación y Mesh',
      cloud: 'Cloud e Infraestructura',
      cicd: 'CI/CD y GitOps',
      observability: 'Observabilidad',
      runtime: 'Runtime y Lenguajes',
      security: 'Seguridad y Política',
    },
  } as const;

  const titles = groupTitles[language];
  const eyebrow = language === 'pt' ? 'Stack' : language === 'es' ? 'Stack' : 'Stack';

  const skillGroups = [
    { name: titles.orchestration, icon: <Cpu size={16} />, skills: ['Kubernetes', 'Docker', 'Linux', 'Istio', 'Kong Gateway', 'Helm'] },
    { name: titles.cloud, icon: <Cloud size={16} />, skills: ['GCP', 'AWS', 'Azure', 'Terraform', 'Pulumi', 'Crossplane', 'Cloudflare'] },
    { name: titles.cicd, icon: <Terminal size={16} />, skills: ['ArgoCD', 'GitOps', 'GitHub Actions', 'Jenkins', 'CircleCI', 'Azure Pipelines'] },
    { name: titles.observability, icon: <Activity size={16} />, skills: ['Datadog', 'Prometheus', 'Grafana', 'OpenTelemetry', 'Elastic Stack', 'NewRelic'] },
    { name: titles.runtime, icon: <Database size={16} />, skills: ['Go', 'TypeScript', 'Python', 'Node.js', 'Ruby', 'Lua', 'Bash'] },
    { name: titles.security, icon: <ShieldCheck size={16} />, skills: ['OPA', 'Kyverno', 'Snyk', 'Trivy', 'Workload Identity', 'Vault'] },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-cloud-darker overflow-hidden">
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
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            {t('skills.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.05 }}
              className="rounded-xl border border-cloud-border bg-cloud-dark p-6 hover:border-k8s-blue/40 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-md bg-cloud-darker border border-cloud-border text-k8s-blue group-hover:scale-105 transition-transform">
                  {group.icon}
                </div>
                <h3 className="text-sm font-bold text-white">
                  {group.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-[12px] font-medium bg-cloud-darker border border-cloud-border rounded-md text-cloud-text hover:border-k8s-blue/50 hover:text-white transition-all cursor-default"
                  >
                    {skill}
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
