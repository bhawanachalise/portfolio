import React from 'react';
import s from './YouTube.module.css';
const YT='https://www.youtube.com/@chalisebhawana';
const VID=[
  {title:'Easy Liquify Filter in Photoshop'},
  {title:'Create Stunning Backgrounds in Photoshop',},
  {title:'Body Shape Correction in Photoshop',},
];
export default function YouTube(){
  return(
    <section className={`sec ${s.sec}`} id="youtube">
      <div className={s.bg} aria-hidden="true"/>
      <div className="wrap">
        <div className={s.top}>
          <div><span className="label">Tutorials</span><h2 className="h2">My <span className="g">YouTube</span></h2></div>
          <a href={YT} target="_blank" rel="noreferrer" className={s.ytBtn}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2s-.3-1.9-1.2-2.7c-1.1-1.2-2.4-1.2-3-1.3C16.8 2 12 2 12 2s-4.8 0-7.3.2c-.6.1-1.9.1-3 1.3C.8 4.3.5 6.2.5 6.2S.2 8.4.2 10.6v2.1c0 2.2.3 4.4.3 4.4s.3 1.9 1.2 2.7c1.1 1.2 2.6 1.1 3.3 1.2C7 21.1 12 21.1 12 21.1s4.8 0 7.3-.3c.6-.1 1.9-.1 3-1.2.9-.8 1.2-2.7 1.2-2.7s.3-2.2.3-4.4v-2C23.8 8.4 23.5 6.2 23.5 6.2zM9.7 14.9V8.3l6.5 3.3-6.5 3.3z"/></svg>
            Visit Channel ↗
          </a>
        </div>
        <div className={s.grid}>
          {VID.map((v,i)=>(
            <a key={i} href={YT} target="_blank" rel="noreferrer" className={`glass ${s.card}`}>
              <div className={s.thumb}>
                <div className={s.play}><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><polygon points="3,2 12,7 3,12" fill="#aaff00"/></svg></div>
                <span className={s.dur}>Tutorial</span>
              </div>
              <div className={s.body}>
                <h3 className={s.title}>{v.title}</h3>
                <p className={s.meta}>{v.views}  {v.ago}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
