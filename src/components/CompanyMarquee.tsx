import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { resumeData } from '@/data/resume';

export default function CompanyMarquee() {
  const { language } = useLanguage();
  const data = resumeData[language];

  // de-dup company names while preserving order
  const seen = new Set<string>();
  const companies = data.experience
    .map(e => e.company)
    .filter(c => {
      if (seen.has(c)) return false;
      seen.add(c);
      return true;
    });

  // duplicate so the loop is seamless
  const track = [...companies, ...companies];

  const label =
    language === 'pt' ? 'Empresas onde entreguei' :
    language === 'es' ? 'Empresas donde he entregado' :
    "Companies I've shipped at";

  return (
    <section
      aria-label="companies"
      className="relative py-10 border-y border-cloud-border bg-cloud-dark/60 overflow-hidden"
    >
      <div className="text-center text-[10.5px] text-cloud-muted uppercase tracking-[0.3em] mb-6 font-semibold">
        {label}
      </div>

      <div className="relative flex group">
        <div className="flex shrink-0 gap-12 md:gap-16 pr-12 md:pr-16 animate-marquee whitespace-nowrap will-change-transform group-hover:[animation-play-state:paused]">
          {track.map((c, i) => (
            <span
              key={i}
              className="text-xl md:text-3xl font-extrabold text-cloud-muted/70 hover:text-k8s-blue transition-colors tracking-tight"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-cloud-darker to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-cloud-darker to-transparent pointer-events-none" />
    </section>
  );
}
