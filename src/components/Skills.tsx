import React from 'react';
import { motion } from 'motion/react'; // still used for section/card entrance animations
import { useLanguage } from '@/context/LanguageContext';
import { resumeData } from '@/data/resume';
import { Cpu, Terminal, Activity, ShieldCheck, Database, Layout } from 'lucide-react';

export default function Skills() {
  const { language, t } = useLanguage();
  const data = resumeData[language];

  // Manual categorization for improved "Kubernetes-like" feel
  const skillGroups = [
    {
      name: "ORCHESTRATION_&_OS",
      icon: <Cpu size={18} />,
      skills: ["Kubernetes", "Docker", "Linux", "Istio", "Kong Gateway"]
    },
    {
      name: "CLOUD_&_INFRASTRUCTURE",
      icon: <Layout size={18} />,
      skills: ["GCP", "AWS", "Terraform", "Pulumi", "Crossplane"]
    },
    {
      name: "CI_CD_&_GITOPS",
      icon: <Terminal size={18} />,
      skills: ["ArgoCD", "GitOps", "GitHub Actions", "Jenkins", "CircleCI"]
    },
    {
      name: "OBSERVABILITY_LAYER",
      icon: <Activity size={18} />,
      skills: ["Prometheus", "Grafana", "Datadog", "OpenTelemetry", "ELK Stack"]
    },
    {
      name: "RUNTIME_&_DEV",
      icon: <Database size={18} />,
      skills: ["Golang", "NodeJS", "Python", "Bash", "SQL/NoSQL"]
    },
    {
      name: "SECURITY_&_GAI",
      icon: <ShieldCheck size={18} />,
      skills: ["OPA", "Kyverno", "Snyk", "Trivy", "OpenWebUI"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-cloud-darker overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 text-k8s-blue font-mono text-sm mb-2 uppercase tracking-widest">
            <Cpu size={16} />
            <span>Resource_Allocation</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight">
            {t('skills.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.05 }}
              className="infra-block group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cloud-darker border border-cloud-border rounded text-k8s-blue group-hover:scale-110 transition-transform">
                  {group.icon}
                </div>
                <h3 className="text-xs font-bold text-white uppercase tracking-widest">
                  {group.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-[11px] font-mono font-semibold bg-cloud-darker border border-cloud-border rounded text-cloud-muted hover:border-k8s-blue/60 hover:text-white transition-all cursor-default"
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
