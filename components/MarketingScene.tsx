import type { CSSProperties } from "react";
import styles from "./marketing.module.css";

type SceneKind = "ClearSpace" | "Fileio" | "Serenity" | "Deadline Lens" | "Privune" | "SafeUnfollow";

/** Abstract product illustrations, not screenshots or live product state. */
export default function MarketingScene({ kind }: { kind: SceneKind }) {
  const colors: Record<SceneKind, string> = {
    ClearSpace: "#68a59b", Fileio: "#5379d9", Serenity: "#8585b7",
    "Deadline Lens": "#6084ce", Privune: "#6a9f99", SafeUnfollow: "#9b80b7",
  };

  return (
    <div className={styles.scene} style={{ "--scene-accent": colors[kind] } as CSSProperties} aria-hidden="true">
      <svg viewBox="0 0 360 220" fill="none" className={styles.sceneSvg}>
        {kind === "ClearSpace" && <>
          <g transform="rotate(-12 145 115)"><rect x="72" y="36" width="116" height="158" rx="12" fill="white" stroke="#d6dddd" /><rect x="83" y="49" width="94" height="88" rx="6" fill="#dce9e5" /><path d="m84 116 28-32 18 18 22-32 25 46" stroke="#91b9ad" strokeWidth="3" /><path d="M87 151h65m-65 13h43" stroke="#d0dad6" strokeWidth="5" strokeLinecap="round" /></g>
          <g transform="rotate(9 224 118)"><rect x="166" y="37" width="116" height="158" rx="12" fill="white" stroke="#d6dddd" /><rect x="177" y="49" width="94" height="88" rx="6" fill="#edf2f0" /><circle cx="224" cy="92" r="22" stroke="#b1cbbf" strokeWidth="2" /><path d="M181 151h65m-65 13h43" stroke="#d0dad6" strokeWidth="5" strokeLinecap="round" /></g>
          <circle cx="278" cy="171" r="22" fill="#e5f1eb" stroke="#b3cdbf" /><path d="m269 171 6 6 12-13" stroke="#54876c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </>}
        {kind === "Fileio" && <>
          <g transform="rotate(-9 158 104)"><rect x="98" y="24" width="132" height="166" rx="10" fill="white" stroke="#cdd8eb" /><path d="M117 52h68m-68 16h91m-91 16h79" stroke="#d5e0f3" strokeWidth="5" strokeLinecap="round" /><rect x="117" y="104" width="91" height="60" rx="5" fill="#eaf0fa" /><path d="M131 146v-16m20 16v-29m20 29v-22m20 22v-35" stroke="#92ace0" strokeWidth="8" /></g>
          <path d="M82 114a10 10 0 0 1 10-10h58l15 16h102a10 10 0 0 1 10 10v54a12 12 0 0 1-12 12H94a12 12 0 0 1-12-12z" fill="#e9effb" stroke="#b8cbed" /><path d="M85 139h188" stroke="#c5d5ef" /><rect x="106" y="161" width="43" height="7" rx="3.5" fill="#96b0e0" />
        </>}
        {kind === "Serenity" && <>
          <circle cx="180" cy="109" r="78" stroke="#e2e1ec" /><circle cx="180" cy="109" r="59" stroke="#d1d0e3" /><circle cx="180" cy="109" r="40" fill="#e8e7f2" /><path d="M188 88a23 23 0 1 0 16 36 23 23 0 0 1-16-36" fill="#9c9bbe" />
          {[12,26,38,22,48,34,18,30,46,24,14].map((height, index) => <rect key={index} x={86 + index * 18} y={181-height/2} width="5" height={height} rx="2.5" fill="#a6a4c6" />)}
        </>}
        {kind === "Deadline Lens" && <>
          <g transform="rotate(-10 132 111)"><rect x="74" y="31" width="114" height="159" rx="10" fill="white" stroke="#d5dcea" /><path d="M93 66h71m-71 19h57m-57 19h71m-71 19h50" stroke="#d5dfef" strokeWidth="5" strokeLinecap="round" /><rect x="87" y="93" width="82" height="24" rx="4" stroke="#8aa8d8" strokeDasharray="4 3" /></g>
          <rect x="177" y="66" width="106" height="115" rx="12" fill="white" stroke="#b9cbe5" /><path d="M177 96h106m-80-37v16m54-16v16" stroke="#9bb3d9" strokeWidth="3" strokeLinecap="round" />
          {[0,1,2,3,4,5].map(i => <rect key={i} x={194+(i%3)*26} y={111+Math.floor(i/3)*28} width="16" height="16" rx="4" fill={i===4 ? "#698bc6" : "#e2eaf6"} />)}
        </>}
        {kind === "Privune" && <>
          <g transform="rotate(-5 180 108)"><rect x="84" y="38" width="192" height="139" rx="12" fill="white" stroke="#cbdedb" /><rect x="96" y="50" width="168" height="115" rx="6" fill="#e5efec" /><circle cx="138" cy="83" r="17" fill="#bdd5cc" /><path d="m98 155 49-44 31 23 39-59 47 80" fill="#c3d8d2" /><rect x="155" y="75" width="86" height="36" rx="5" fill="#658f88" /><path d="M98 59h17m-17 0v17m156-17h-17m17 0v17m-156 71h17m-17 0v-17m156 17h-17m17 0v-17" stroke="#759e97" strokeWidth="2" /></g>
          <circle cx="278" cy="168" r="23" fill="#e7f2ed" stroke="#b0cfc1" /><path d="m269 168 6 6 12-13" stroke="#578771" strokeWidth="3" strokeLinecap="round" />
        </>}
        {kind === "SafeUnfollow" && <>
          <path d="m122 65 117 22m-117-22 10 90m107-68-107 68m107-68 16 81m-123-13 123 13" stroke="#cec3df" strokeWidth="2" strokeDasharray="4 5" />
          {[[122,65],[239,87],[132,155],[255,168]].map(([x,y],i) => <g key={i}><circle cx={x} cy={y} r="27" fill="white" stroke="#d3c9df" /><circle cx={x} cy={y-5} r="8" fill="#b4a2c9" /><path d={`M${x-13} ${y+14}a13 13 0 0 1 26 0`} fill="#d0c1e0" /></g>)}
          <circle cx="183" cy="117" r="18" fill="#eee7f5" stroke="#bcabd1" /><path d="m176 117 5 5 9-10" stroke="#9275b3" strokeWidth="2.5" strokeLinecap="round" />
        </>}
      </svg>
    </div>
  );
}

export function WorkflowIcon({ step }: { step: number }) {
  return <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={styles.workflowIcon}>
    {step === 0 ? <><rect x="10" y="6" width="22" height="28" rx="4" /><path d="M16 14h10m-10 6h10m-10 6h5" /></> : step === 1 ? <><rect x="6" y="8" width="28" height="25" rx="4" /><path d="M6 16h28M16 16v17M25 16v17M6 24h28" /></> : <><path d="M12 27v-9a8 8 0 0 1 16 0v9l3 3H9zm5 7h6" /><circle cx="28" cy="10" r="4" fill="currentColor" stroke="white" /></>}
  </svg>;
}
