import React, { useState, useEffect, useRef } from 'react';

type LineKind = 'success' | 'arrow' | 'output' | 'url' | 'muted' | 'header' | 'data';
type Line = { text: string; kind?: LineKind; delay?: number };
type Command = { prompt: string; lines: Line[] };

const COMMANDS: Command[] = [
  {
    prompt: 'axeforge env new --pr=423',
    lines: [
      { text: '▸ Synthesizing GitOps manifests', kind: 'arrow', delay: 380 },
      { text: '✓ Provisioned ephemeral cluster', kind: 'success', delay: 280 },
      { text: '✓ Synced via ArgoCD', kind: 'success', delay: 260 },
      { text: '✓ Smoke tests passed', kind: 'success', delay: 260 },
      { text: '', delay: 120 },
      { text: 'https://pr-423.preview.axeforge.io', kind: 'url', delay: 220 },
      { text: 'ready in 47s', kind: 'muted', delay: 1400 },
    ],
  },
  {
    prompt: 'axeforge cost analyze --workspace=prod',
    lines: [
      { text: 'Workload          Current     Recommended', kind: 'header', delay: 360 },
      { text: 'api-gateway       $1,240/mo   $890/mo', kind: 'data', delay: 220 },
      { text: 'worker-pool       $890/mo     $620/mo', kind: 'data', delay: 220 },
      { text: 'ingestion         $2,310/mo   $1,890/mo', kind: 'data', delay: 220 },
      { text: '', delay: 200 },
      { text: '↓ projected savings: $1,040/mo (-19%)', kind: 'success', delay: 1400 },
    ],
  },
  {
    prompt: 'axeforge deploy --service=checkout',
    lines: [
      { text: '✓ Image built (sha:7e9a2c1)', kind: 'success', delay: 320 },
      { text: '✓ Helm template rendered', kind: 'success', delay: 240 },
      { text: '✓ Policy check (OPA, Kyverno)', kind: 'success', delay: 240 },
      { text: '✓ Rollout 100% — health OK', kind: 'success', delay: 240 },
      { text: '', delay: 120 },
      { text: 'deployed to gke://prod-eu in 38s', kind: 'muted', delay: 1400 },
    ],
  },
];

const lineColor = (kind?: LineKind) => {
  switch (kind) {
    case 'success': return 'text-status-success';
    case 'arrow': return 'text-k8s-blue';
    case 'url': return 'text-k8s-blue underline underline-offset-2';
    case 'muted': return 'text-cloud-muted';
    case 'header': return 'text-white font-semibold';
    case 'data': return 'text-cloud-text';
    default: return 'text-cloud-text';
  }
};

const sleep = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms));

export default function Terminal() {
  const [typed, setTyped] = useState('');
  const [visibleLines, setVisibleLines] = useState(0);
  const [cmdIndex, setCmdIndex] = useState(0);
  const cancelledRef = useRef(false);

  useEffect(() => {
    cancelledRef.current = false;

    async function loop() {
      let i = 0;
      while (!cancelledRef.current) {
        const cmd = COMMANDS[i % COMMANDS.length];
        setCmdIndex(i % COMMANDS.length);
        setTyped('');
        setVisibleLines(0);
        await sleep(420);
        if (cancelledRef.current) return;

        for (let c = 1; c <= cmd.prompt.length; c++) {
          await sleep(34 + Math.random() * 28);
          if (cancelledRef.current) return;
          setTyped(cmd.prompt.slice(0, c));
        }
        await sleep(380);
        if (cancelledRef.current) return;

        for (let l = 0; l < cmd.lines.length; l++) {
          setVisibleLines(l + 1);
          await sleep(cmd.lines[l].delay ?? 240);
          if (cancelledRef.current) return;
        }

        await sleep(2400);
        i++;
      }
    }

    loop();
    return () => { cancelledRef.current = true; };
  }, []);

  const cmd = COMMANDS[cmdIndex];

  return (
    <div className="rounded-xl border border-cloud-border bg-cloud-darker overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7),0_0_0_1px_rgba(249,115,22,0.04)] backdrop-blur-md">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-cloud-dark border-b border-cloud-border">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 text-center text-[11px] text-cloud-muted font-mono">
          axeforge — bash
        </div>
        <div className="text-[10px] font-mono text-cloud-muted">
          {(cmdIndex + 1).toString().padStart(2, '0')}/{COMMANDS.length.toString().padStart(2, '0')}
        </div>
      </div>

      <div className="p-5 md:p-6 font-mono text-[12.5px] leading-relaxed h-[320px] md:h-[340px] overflow-hidden">
        <div className="flex items-center gap-2 text-white">
          <span className="text-k8s-blue font-bold select-none">$</span>
          <span className="break-all">{typed}</span>
          <span className="inline-block w-[7px] h-4 bg-k8s-blue animate-pulse" />
        </div>

        <div className="mt-3 space-y-1">
          {cmd.lines.slice(0, visibleLines).map((line, i) => (
            <div
              key={`${cmdIndex}-${i}`}
              className={`${lineColor(line.kind)} whitespace-pre animate-[fadeIn_0.2s_ease-out]`}
            >
              {line.text || ' '}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
