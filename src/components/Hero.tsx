import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { resumeData } from '@/data/resume';
import { Terminal, Activity, Cpu, Server, Network, Database, Zap, Clock, ShieldCheck, Bug, Cloud, Box } from 'lucide-react';
import { ReactFlow, Handle, Position, Background, Edge, Node, getBezierPath, BaseEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Custom Node Component for Infrastructure Blocks with floating animation
const InfraNode = ({ data }: any) => {
  const Icon = data.icon;
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: data.delay || 0 }}
      className={`infra-block text-center !p-4 bg-cloud-dark/95 min-w-[160px] pointer-events-auto backdrop-blur-sm ${data.className || ''}`}
    >
      <Handle type="target" position={Position.Top} className="!bg-k8s-blue !w-1 !h-1 !border-none !-top-1 opacity-0" />
      <div className="relative">
        <div className={`absolute inset-0 blur-lg opacity-20 ${data.iconColor || 'bg-k8s-blue'}`} />
        <Icon size={data.iconSize || 20} className={`${data.iconColor || 'text-k8s-blue'} mx-auto mb-2 relative z-10`} />
      </div>
      <div className="text-[10px] font-mono font-bold uppercase tracking-wider">{data.label}</div>
      {data.status && <div className={`text-[8px] font-mono font-bold mt-1 ${data.statusColor || 'text-cloud-muted'}`}>{data.status}</div>}
      {data.showProgress && (
        <div className="mt-3 h-1 w-full bg-cloud-darker rounded-full overflow-hidden border border-cloud-border/30">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: data.progress || '50%' }}
            transition={{ duration: 2, delay: 0.5 }}
            className={`h-full ${data.progressColor || 'bg-k8s-blue'}`}
          />
        </div>
      )}
      <Handle type="source" position={Position.Bottom} className="!bg-k8s-blue !w-1 !h-1 !border-none !-bottom-1 opacity-0" />
    </motion.div>
  );
};

// Custom Edge to create "Glowing Flow" effect
const DataEdge = (props: any) => {
  const { sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, style = {}, markerEnd } = props;
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={{ ...style, stroke: '#30363d', strokeWidth: 1 }} />
      <path
        d={edgePath}
        fill="none"
        stroke={style.stroke || 'var(--color-k8s-blue)'}
        strokeWidth={2}
        className="connection-line connection-active"
        style={{
          filter: `drop-shadow(0 0 3px ${style.stroke || 'var(--color-k8s-blue)'})`,
          opacity: 0.6
        }}
      />
    </>
  );
};

const nodeTypes = {
  infra: InfraNode,
};

const edgeTypes = {
  data: DataEdge,
};

// Vertical Networking Flow Layout
const initialNodes: Node[] = [
  {
    id: 'gke-lb',
    type: 'infra',
    position: { x: 250, y: 0 },
    data: {
      label: 'GKE L7 LB',
      icon: Cloud,
      iconColor: 'text-k8s-blue',
      status: 'EXTERNAL_INGRESS',
      statusColor: 'text-k8s-blue',
      showProgress: true,
      progress: '100%',
      progressColor: 'bg-k8s-blue',
      delay: 0
    },
  },
  {
    id: 'gateway-api',
    type: 'infra',
    position: { x: 250, y: 140 },
    data: {
      label: 'Gateway API',
      icon: Network,
      iconColor: 'text-status-warning',
      status: 'ROUTING_RULES',
      statusColor: 'text-status-warning',
      showProgress: true,
      progress: '80%',
      progressColor: 'bg-status-warning',
      delay: 0.5
    },
  },
  {
    id: 'kong',
    type: 'infra',
    position: { x: 250, y: 280 },
    data: {
      label: 'Kong API Gateway',
      icon: ShieldCheck,
      iconColor: 'text-status-success',
      status: 'AUTH_&_RATE_LIMIT',
      statusColor: 'text-status-success',
      showProgress: true,
      progress: '60%',
      progressColor: 'bg-status-success',
      className: 'shadow-[0_0_30px_rgba(46,160,67,0.1)] border-status-success/30',
      delay: 1
    },
  },
  {
    id: 'app-a',
    type: 'infra',
    position: { x: 50, y: 440 },
    data: {
      label: 'Service-A',
      icon: Box,
      status: 'mTLS : ISTIO-PROXY',
      statusColor: 'text-k8s-blue',
      className: 'border-dashed',
      delay: 1.5
    },
  },
  {
    id: 'app-b',
    type: 'infra',
    position: { x: 250, y: 440 },
    data: {
      label: 'Service-B',
      icon: Box,
      status: 'mTLS : ISTIO-PROXY',
      statusColor: 'text-k8s-blue',
      className: 'border-dashed',
      delay: 1.7
    },
  },
  {
    id: 'app-c',
    type: 'infra',
    position: { x: 450, y: 440 },
    data: {
      label: 'Service-C',
      icon: Box,
      status: 'NO_SIDECAR',
      statusColor: 'text-cloud-muted',
      className: 'border-dashed',
      delay: 1.9
    },
  },
];

const initialEdges: Edge[] = [
  { id: 'lb-gw', source: 'gke-lb', target: 'gateway-api', type: 'data', style: { stroke: 'var(--color-k8s-blue)' } },
  { id: 'gw-kong', source: 'gateway-api', target: 'kong', type: 'data', style: { stroke: 'var(--color-status-warning)' } },
  { id: 'kong-a', source: 'kong', target: 'app-a', type: 'data', style: { stroke: 'var(--color-status-success)' } },
  { id: 'kong-b', source: 'kong', target: 'app-b', type: 'data', style: { stroke: 'var(--color-status-success)' } },
  { id: 'kong-c', source: 'kong', target: 'app-c', type: 'data', style: { stroke: 'var(--color-cloud-border)' } },
];

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
    <section id="about" className="min-h-screen pt-32 pb-20 px-6 cluster-grid relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-k8s-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-k8s-blue/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Identity & Health */}
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
            <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-tighter leading-none">
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
        <div key="topology-container" className="relative h-[550px] hidden lg:block pointer-events-none">
          <ReactFlow
            nodes={initialNodes}
            edges={initialEdges}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            fitView
            fitViewOptions={{ padding: 0.1 }}
            panOnDrag={false}
            zoomOnScroll={false}
            zoomOnPinch={false}
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable={false}
            preventScrolling={false}
            proOptions={{ hideAttribution: true }}
            className="!bg-transparent"
          >
            <Background color="var(--color-cloud-border)" gap={24} size={1} />
          </ReactFlow>
        </div>
      </div>

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
