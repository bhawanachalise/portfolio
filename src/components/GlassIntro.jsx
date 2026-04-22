import React,{useEffect,useRef,useState} from 'react';
import s from './GlassIntro.module.css';

/* Pre-computed shard polygons covering the full screen */
const SHARDS=[
  {id:0,  pts:'0,0 320,0 280,180 80,220',    tx:-180, ty:-200, rot:-35},
  {id:1,  pts:'320,0 680,0 650,160 280,180',  tx:80,  ty:-220, rot:25},
  {id:2,  pts:'680,0 1000,0 960,150 650,160', tx:220, ty:-180, rot:-20},
  {id:3,  pts:'1000,0 1440,0 1380,180 960,150',tx:300,ty:-200, rot:30},
  {id:4,  pts:'0,0 80,220 40,480 0,480',      tx:-260,ty:80,   rot:-45},
  {id:5,  pts:'80,220 280,180 320,380 120,460',tx:-120,ty:140, rot:28},
  {id:6,  pts:'280,180 650,160 680,360 320,380',tx:0, ty:200,  rot:-15},
  {id:7,  pts:'650,160 960,150 940,380 680,360',tx:80,ty:180,  rot:20},
  {id:8,  pts:'960,150 1380,180 1440,420 940,380',tx:200,ty:120,rot:-32},
  {id:9,  pts:'1380,180 1440,180 1440,420',    tx:320,ty:100,  rot:40},
  {id:10, pts:'0,480 40,480 120,460 60,700',   tx:-240,ty:180, rot:-38},
  {id:11, pts:'120,460 320,380 360,640 100,720',tx:-100,ty:220,rot:22},
  {id:12, pts:'320,380 680,360 700,620 360,640',tx:20, ty:280,  rot:-18},
  {id:13, pts:'680,360 940,380 960,640 700,620',tx:120,ty:260,  rot:24},
  {id:14, pts:'940,380 1440,420 1440,680 960,640',tx:260,ty:200,rot:-28},
  {id:15, pts:'0,700 60,700 100,720 0,900',    tx:-280,ty:260, rot:-42},
  {id:16, pts:'100,720 360,640 400,880 140,920',tx:-80,ty:320,  rot:30},
  {id:17, pts:'360,640 700,620 720,900 400,880',tx:40, ty:360,  rot:-20},
  {id:18, pts:'700,620 960,640 980,900 720,900',tx:140,ty:340,  rot:26},
  {id:19, pts:'960,640 1440,680 1440,900 980,900',tx:300,ty:280,rot:-34},
  {id:20, pts:'0,900 0,960 140,920 0,900',     tx:-320,ty:340, rot:-50},
  {id:21, pts:'140,920 400,880 440,960 180,960',tx:-60,ty:400,  rot:35},
  {id:22, pts:'400,880 720,900 740,960 440,960',tx:60, ty:420,  rot:-22},
  {id:23, pts:'720,900 980,900 1000,960 740,960',tx:180,ty:400, rot:28},
  {id:24, pts:'980,900 1440,900 1440,960 1000,960',tx:320,ty:360,rot:-36},
];

export default function GlassIntro({shattered,onShatter}){
  const [autoTriggered,setAutoTriggered]=useState(false);
  const [hint,setHint]=useState(false);

  useEffect(()=>{
    /* Show hint after 1s */
    const t1=setTimeout(()=>setHint(true),800);
    /* Auto-shatter after 3s if user hasn't clicked */
    const t2=setTimeout(()=>{
      if(!shattered){setAutoTriggered(true);onShatter();}
    },3200);
    return()=>{clearTimeout(t1);clearTimeout(t2)};
  },[]);

  return(
    <div
      className={`${s.intro} ${shattered?s.breaking:''}`}
      onClick={()=>{if(!shattered)onShatter()}}
    >
      {/* Background behind glass — shows the content vaguely */}
      <div className={s.bgBlur}/>

      {/* GLASS SVG — full screen, shards */}
      <svg
        className={s.glassSvg}
        viewBox="0 0 1440 960"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Frosted glass filter */}
          <filter id="frost" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise"/>
            <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
            <feBlend in="SourceGraphic" in2="gray" mode="multiply" result="blend"/>
            <feGaussianBlur in="blend" stdDeviation="2.5" result="blur"/>
            <feComposite in="blur" in2="SourceGraphic" operator="in"/>
          </filter>
          {/* Glass gradient */}
          <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DAF1DE" stopOpacity="0.18"/>
            <stop offset="40%" stopColor="#8EB69B" stopOpacity="0.12"/>
            <stop offset="100%" stopColor="#235347" stopOpacity="0.22"/>
          </linearGradient>
          {/* Crack lines pattern */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
        </defs>

        {/* Each shard */}
        {SHARDS.map(sh=>(
          <polygon
            key={sh.id}
            className={s.shard}
            points={sh.pts}
            style={{
              '--tx':`${sh.tx}px`,
              '--ty':`${sh.ty}px`,
              '--rot':`${sh.rot}deg`,
              '--delay':`${sh.id*0.028}s`,
            }}
          />
        ))}

        {/* Crack lines on the glass surface */}
        <g className={s.cracks} filter="url(#glow)">
          <line x1="720" y1="480" x2="200" y2="80"  stroke="#DAF1DE" strokeWidth="1.2" strokeOpacity="0"/>
          <line x1="720" y1="480" x2="1100" y2="120" stroke="#DAF1DE" strokeWidth="1" strokeOpacity="0"/>
          <line x1="720" y1="480" x2="100"  y2="600" stroke="#DAF1DE" strokeWidth="0.8" strokeOpacity="0"/>
          <line x1="720" y1="480" x2="1350" y2="700" stroke="#DAF1DE" strokeWidth="1.1" strokeOpacity="0"/>
          <line x1="720" y1="480" x2="400"  y2="900" stroke="#DAF1DE" strokeWidth="0.9" strokeOpacity="0"/>
          <line x1="720" y1="480" x2="1100" y2="880" stroke="#DAF1DE" strokeWidth="1"  strokeOpacity="0"/>
          <line x1="720" y1="480" x2="720"  y2="20"  stroke="#DAF1DE" strokeWidth="0.7" strokeOpacity="0"/>
          <circle cx="720" cy="480" r="6" fill="#DAF1DE" fillOpacity="0"/>
        </g>

        {/* Glass surface — main overlay */}
        <rect
          x="0" y="0" width="1440" height="960"
          fill="url(#glassGrad)"
          className={s.glassFill}
        />

        {/* Edge highlight */}
        <rect
          x="0" y="0" width="1440" height="960"
          fill="none"
          stroke="#DAF1DE" strokeWidth="1" strokeOpacity="0.15"
        />

        {/* Top gloss sheen */}
        <ellipse
          cx="500" cy="180" rx="400" ry="120"
          fill="#DAF1DE" fillOpacity="0.06"
          className={s.sheen}
        />
      </svg>

      {/* ── CENTER CONTENT on glass ── */}
      <div className={`${s.center} ${hint?s.hintVisible:''}`}>
        <div className={s.nameTag}>
          <span className={s.initials}>B</span>
          <div>
            <div className={s.name}>Bhawana Chalise</div>
            <div className={s.role}>Graphic & UI/UX Designer</div>
          </div>
        </div>
        <div className={s.tapHint}>
          <div className={s.tapRing}/>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 2v8M8 6l4-4 4 4" stroke="#8EB69B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="6" y="10" width="12" height="12" rx="2" stroke="#8EB69B" strokeWidth="1.5"/>
          </svg>
          <span>Tap to shatter</span>
        </div>
      </div>
    </div>
  );
}
