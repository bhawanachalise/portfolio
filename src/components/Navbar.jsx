import React,{useState,useEffect} from 'react';
import s from './Navbar.module.css';
const NAV=[{l:'Home',h:'#hero'},{l:'Services',h:'#services'},{l:'About',h:'#about'},{l:'My Work',h:'#work'},{l:'Blog',h:'#blogs'},{l:'Contact',h:'#contact'}];
const WA=`https://wa.me/9779817261864?text=${encodeURIComponent('Hi Bhawana, I found your portfolio.')}`;
export default function Navbar(){
  const [sc,setSc]=useState(false);
  const [op,setOp]=useState(false);
  useEffect(()=>{const f=()=>setSc(window.scrollY>40);window.addEventListener('scroll',f);return()=>window.removeEventListener('scroll',f)},[]);
  return(
    <nav className={`${s.nav} ${sc?s.sc:''}`}>
      <a href="#hero" className={s.logo}><span className={s.logoBox}>B</span>Bhawana</a>
      <ul className={`${s.links} ${op?s.open:''}`}>
        {NAV.map(n=><li key={n.h}><a href={n.h} className={s.link} onClick={()=>setOp(false)}>{n.l}</a></li>)}
      </ul>
      <a href={WA} target="_blank" rel="noreferrer" className={`btn-solid ${s.cta}`}>Contact</a>
      <button className={`${s.burger} ${op?s.bop:''}`} onClick={()=>setOp(o=>!o)} aria-label="Menu">
        <span/><span/><span/>
      </button>
    </nav>
  );
}
