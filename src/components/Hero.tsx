import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { resumeData } from '../data/resume';
import { Terminal, Activity, Cpu, Server, Network, Database, Zap, Clock, ShieldCheck, Bug } from 'lucide-react';

export default function Hero() {
  const { language, t } = useLanguage();
  const data = resumeData[language];
  const [metrics, setMetrics] = useState({ cpu: '12%', mem: '44%', uptime: '0d 0h 0m 0s' });
  const [activeEvent, setActiveEvent] = useState('SYSTEM_INIT_COMPLETE');
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ['DevOps Engineer', 'SRE', 'Platform Engineer'];
  const typingSpeed = 100;
  const deletingSpeed = 50;

  useEffect(() => {
    const start = Date.now();
    const timer = setInterval(() => {
      const diff = Date.now() - start;
      const s = Math.floor(diff / 1000) % 60;
      const m = Math.floor(diff / 60000) % 60;
      const h = Math.floor(diff / 3600000) % 24;
      setMetrics({
        cpu: `${(Math.random() * 5 + 8).toFixed(1)}%`,
        mem: `${(Math.random() * 2 + 42).toFixed(1)}%`,
        uptime: `0d ${h}h ${m}m ${s}s`
      });
    }, 1000);

    const eventList = [
      'POD_REPLICA_SCALED_UP', 'CERT_RENEWAL_SUCCESS', 'TRAFFIC_LOAD_BALANCED',
      'INGRESS_RULES_UPDATED', 'BACKUP_SNAPSHOT_CREATED', 'THREAT_DETECTION_IDLE'
    ];
    const eventTimer = setInterval(() => {
      setActiveEvent(eventList[Math.floor(Math.random() * eventList.length)]);
    }, 4000);

    return () => {
      clearInterval(timer);
      clearInterval(eventTimer);
    };
  }, []);

  useEffect(() => {
    const currentFullRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedRole === currentFullRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else {
          setDisplayedRole(currentFullRole.slice(0, displayedRole.length + 1));
        }
      } else {
        if (displayedRole === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
          setDisplayedRole(currentFullRole.slice(0, displayedRole.length - 1));
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex]);

  return (
    <section id="hero" className="min-h-screen pt-32 pb-20 px-6 cluster-grid relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-k8s-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-status-success/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Side: Identity & Health */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="status-badge status-online">
              <span className="w-1.5 h-1.5 rounded-full bg-status-success animate-pulse" />
              SYSTEM_READY: v1.14.4
            </div>
            <div className="text-[10px] font-mono text-cloud-muted uppercase tracking-[0.2em] border-l border-cloud-border pl-3">
              K8S-CLUSTER-V1.24
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <span className="text-k8s-blue font-mono text-[10px] uppercase tracking-[0.3em] mb-1">NODE_ID: L-MACHADO-01</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter leading-none">
              {data.name}<span className="text-k8s-blue">_</span>
            </h1>
          </div>

          <div className="flex items-center gap-4 text-xl md:text-2xl font-mono text-white mb-8 min-h-[40px]">
            <Terminal className="text-k8s-blue" />
            <span className="opacity-40">{"<"}</span>
            <span className="font-bold border-r-2 border-k8s-blue px-2 animate-cursor">
              {displayedRole}
            </span>
            <span className="opacity-40">{"/>"}</span>
          </div>

          <p className="text-cloud-muted max-w-xl mb-10 leading-relaxed text-sm md:text-base">
            {data.profile}
          </p>

          {/* Cluster Health Dashboard */}
          <div className="grid grid-cols-3 gap-4 p-5 bg-cloud-dark/50 border border-cloud-border rounded-xl backdrop-blur-md mb-8">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[9px] font-mono text-cloud-muted uppercase">
                <Cpu size={12} className="text-k8s-blue" /> CPU_LOAD
              </div>
              <div className="text-base font-mono text-white font-bold">{metrics.cpu}</div>
            </div>
            <div className="space-y-1 border-x border-cloud-border px-4">
              <div className="flex items-center gap-2 text-[9px] font-mono text-cloud-muted uppercase">
                <Activity size={12} className="text-status-warning" /> MEM_USED
              </div>
              <div className="text-base font-mono text-white font-bold">{metrics.mem}</div>
            </div>
            <div className="space-y-1 pl-2">
              <div className="flex items-center gap-2 text-[9px] font-mono text-cloud-muted uppercase">
                <Clock size={12} className="text-status-success" /> UPTIME
              </div>
              <div className="text-[10px] h-6 font-mono text-white font-bold flex items-center">{metrics.uptime}</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#experience"
              className="px-8 py-3 bg-k8s-blue text-white rounded font-bold uppercase tracking-widest text-xs hover:bg-k8s-blue/80 transition-all shadow-[0_4px_20px_rgba(50,108,230,0.3)]"
            >
              Analyze Resources
            </a>
            <a
              href={`mailto:${data.contact.email}`}
              className="px-8 py-3 border border-cloud-border text-white rounded font-bold uppercase tracking-widest text-xs hover:border-k8s-blue transition-all"
            >
              Connect to Console
            </a>
          </div>
        </motion.div>

        {/* Right Side: Resource Topology */}
        <div className="relative h-[400px] hidden lg:block">
          {/* Topology Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60" viewBox="0 0 400 400">
            {/* Connection Paths */}
            <path id="path-ctrl-wkr-a" d="M 200 80 L 72 220" stroke="currentColor" fill="none" className="connection-line connection-active text-cloud-border" strokeWidth="1.5" />
            <path id="path-ctrl-wkr-b" d="M 200 80 L 328 220" stroke="currentColor" fill="none" className="connection-line connection-active text-cloud-border" strokeWidth="1.5" />
            <path id="path-wkr-a-data" d="M 72 220 L 200 310" stroke="currentColor" fill="none" className="connection-line text-cloud-border" strokeWidth="1.5" />
            <path id="path-wkr-b-data" d="M 328 220 L 200 310" stroke="currentColor" fill="none" className="connection-line text-cloud-border" strokeWidth="1.5" />

            {/* Traffic Packets - Animated along paths */}
            <motion.circle r="2.5" fill="var(--color-k8s-blue)" initial={{ offsetDistance: "0%" }} animate={{ offsetDistance: "100%" }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} style={{ motionPath: 'path("M 200 80 L 72 220")' }} />
            <motion.circle r="2.5" fill="var(--color-status-success)" initial={{ offsetDistance: "0%" }} animate={{ offsetDistance: "100%" }} transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }} style={{ motionPath: 'path("M 200 80 L 328 220")' }} />
            <motion.circle r="2.5" fill="var(--color-k8s-blue)" initial={{ offsetDistance: "0%" }} animate={{ offsetDistance: "100%" }} transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 2 }} style={{ motionPath: 'path("M 328 220 L 200 310")' }} />
          </svg>

          {/* Infrastructure Blocks */}
          <motion.div initial={{ y: 0 }} animate={{ y: [0, -4, 0] }} transition={{ duration: 4, repeat: Infinity }} className="infra-block absolute top-[40px] left-1/2 -translate-x-1/2 w-44 text-center !p-4 bg-cloud-dark/80">
            <ShieldCheck size={20} className="text-k8s-blue mx-auto mb-2" />
            <div className="text-[10px] font-mono font-bold uppercase">Control-Plane</div>
            <div className="mt-2 h-1 w-full bg-cloud-darker rounded-full overflow-hidden">
              <div className="h-full bg-k8s-blue w-3/4" />
            </div>
          </motion.div>

          <div className="infra-block absolute top-[180px] left-[0px] w-36 text-center !p-4 bg-cloud-dark/80">
            <Server size={18} className="text-status-success mx-auto mb-2" />
            <div className="text-[10px] font-mono font-bold uppercase">Worker-A</div>
            <div className="text-[8px] text-status-success font-mono font-bold">READY</div>
            <div className="mt-2 h-1 w-full bg-cloud-darker rounded-full overflow-hidden">
              <div className="h-full bg-status-success w-1/2" />
            </div>
          </div>

          <div className="infra-block absolute top-[180px] right-[0px] w-36 text-center !p-4 bg-cloud-dark/80">
            <Zap size={18} className="text-status-warning mx-auto mb-2" />
            <div className="text-[10px] font-mono font-bold uppercase">Gateway-X</div>
            <div className="text-[8px] text-status-warning font-mono font-bold">ACTIVE</div>
            <div className="mt-2 h-1 w-full bg-cloud-darker rounded-full overflow-hidden">
              <div className="h-full bg-status-warning w-2/3" />
            </div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="infra-block absolute top-[280px] left-1/2 -translate-x-1/2 w-44 text-center !p-4 bg-cloud-dark/80 border-dashed">
            <Database size={20} className="text-k8s-blue mx-auto mb-2" />
            <div className="text-[10px] font-mono font-bold uppercase">Persistence</div>
            <div className="text-[8px] text-cloud-muted font-mono">ETCD_SNAPSHOT_OK</div>
          </motion.div>
        </div>
      </div>

      {/* System Events Ticker */}
      <div className="max-w-7xl mx-auto mt-20 border-t border-cloud-border pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-6 overflow-hidden">
          <div className="flex items-center gap-2 text-[10px] font-mono text-k8s-blue shrink-0 font-bold">
            <Bug size={14} />
            <span>LAST_EVENTS:</span>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeEvent}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="text-[10px] font-mono text-cloud-muted uppercase whitespace-nowrap"
            >
              [{new Date().toLocaleTimeString()}] <span className="text-white">{activeEvent}</span> ... <span className="text-status-success">SUCCESS</span>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex items-center gap-6 text-[9px] font-mono text-cloud-muted uppercase tracking-widest">
          <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-status-success" /> GLOBAL-PRIMARY</div>
          <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-k8s-blue" /> MULTI-AZ-ENABLED</div>
        </div>
      </div>
    </section>
  );
}
