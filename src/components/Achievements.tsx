import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import CountUp from '@/components/CountUp';

type Stat = {
  numeric?: { end: number; prefix?: string; suffix?: string };
  static?: string;
  label: string;
  detail: string;
};

export default function Achievements() {
  const { language } = useLanguage();

  const eyebrow = language === 'pt' ? 'Impacto' : language === 'es' ? 'Impacto' : 'Impact';
  const heading =
    language === 'pt' ? 'Em números' :
    language === 'es' ? 'En números' :
    'In numbers';
  const subheading =
    language === 'pt' ? 'Resultados que ficaram em produção depois que saí.' :
    language === 'es' ? 'Resultados que quedaron en producción después de irme.' :
    'Outcomes that stayed in production after I left.';

  const labels = {
    en: {
      years: 'years', built: 'building cloud platforms',
      gcp: 'GCP cost', cut: 'reduced via Cloud Run + GKE',
      saved: '/mo saved', savedDetail: 'cleaned up legacy cloud waste',
      roles: 'roles', countries: 'across 7 countries · 4 industries',
      clouds: 'clouds', prod: 'in production · AWS · GCP · Azure',
      iso: 'ISO 27001', gdpr: 'GDPR readiness · network topology · DR',
    },
    pt: {
      years: 'anos', built: 'construindo plataformas cloud',
      gcp: 'custo GCP', cut: 'reduzido com Cloud Run + GKE',
      saved: '/mês economizados', savedDetail: 'eliminando desperdício em infra legada',
      roles: 'cargos', countries: 'em 7 países · 4 indústrias',
      clouds: 'clouds', prod: 'em produção · AWS · GCP · Azure',
      iso: 'ISO 27001', gdpr: 'prontidão GDPR · topologia · DR',
    },
    es: {
      years: 'años', built: 'construyendo plataformas cloud',
      gcp: 'coste GCP', cut: 'reducido con Cloud Run + GKE',
      saved: '/mes ahorrados', savedDetail: 'limpiando desperdicio en infra legacy',
      roles: 'puestos', countries: 'en 7 países · 4 industrias',
      clouds: 'clouds', prod: 'en producción · AWS · GCP · Azure',
      iso: 'ISO 27001', gdpr: 'cumplimiento GDPR · topología · DR',
    },
  } as const;

  const L = labels[language];

  const stats: Stat[] = [
    { numeric: { end: 10, suffix: '+' }, label: L.years, detail: L.built },
    { numeric: { end: 20, suffix: '%' }, label: L.gcp, detail: L.cut },
    { numeric: { end: 10, prefix: '$', suffix: 'K+' }, label: L.saved, detail: L.savedDetail },
    { numeric: { end: 14 }, label: L.roles, detail: L.countries },
    { numeric: { end: 3 }, label: L.clouds, detail: L.prod },
    { static: L.iso, label: '', detail: L.gdpr },
  ];

  return (
    <section id="achievements" className="py-28 px-6 bg-cloud-darker relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-k8s-blue/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <div className="text-k8s-blue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            {eyebrow}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            {heading}
          </h2>
          <p className="text-cloud-muted text-base md:text-lg">{subheading}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-cloud-border rounded-xl overflow-hidden border border-cloud-border">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-cloud-darker p-6 md:p-8 group hover:bg-cloud-dark transition-colors"
            >
              <div className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter leading-none mb-3 group-hover:text-k8s-blue transition-colors">
                {s.numeric ? (
                  <CountUp end={s.numeric.end} prefix={s.numeric.prefix} suffix={s.numeric.suffix} />
                ) : (
                  s.static
                )}
              </div>
              {s.label && (
                <div className="text-sm font-semibold text-cloud-text mb-1">
                  {s.label}
                </div>
              )}
              <div className="text-xs text-cloud-muted leading-relaxed">
                {s.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
