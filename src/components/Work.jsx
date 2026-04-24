import React from 'react';
import s from './Work.module.css';
const BEH='https://www.behance.net/bhawanachalise';
const WA=`https://wa.me/9779817261864?text=`;
const WORKS=[
  
  {n:'01',title:'Social Media Post Design',sub:'Skincare · Travel · IT Company',tool:'Photoshop',tags:['Social Media']},
  {n:'02',title:'Logo Design',sub:'Brand Identity & Mark',tool:'Illustrator',tags:['Branding','Identity']},
  {n:'03',title:'Brochure Design',sub:'',tool:'Indesign',tags:['Brand Identity']},
  {n:'04',title:'Web Design',sub:'Responsive Website Design',tool:'Figma',tags:['Web','Responsive']},
  {n:'05',title:'App Design',sub:'Mobile UI/UX Design',tool:'Figma',tags:['Mobile','App']},
  {n:'06',title:'Product Design',sub:'End-to-end Digital Product',tool:'Figma',tags:['Product','System']},
];
export default function Work(){
  return(
    <section className={`sec ${s.sec}`} id="work">
      <div className="wrap">
        <div className={s.top}>
          <div><span className="label">Portfolio</span><h2 className="h2">Let's Have a Look at<br/>my <span className="g">Work</span></h2></div>
          <a href={BEH} target="_blank" rel="noreferrer" className="btn-solid">See More ↗</a>
        </div>
        <div className={s.grid}>
          {WORKS.map(w=>(
            <div key={w.n} className={`glass ${s.card} ${w.featured?s.feat:''}`}>
              <div className={s.vis}>
                <span className={s.num}>{w.n}</span>
                <div className={s.tags}>{w.tags.map(t=><span key={t} className={s.tag}>{t}</span>)}</div>
              </div>
              <div className={s.body}>
                <div><h3 className={`h3 ${s.ct}`}>{w.title}</h3><p className={s.cs}>{w.sub}</p></div>
                <div className={s.foot}>
                  <span className={s.tool}>{w.tool}</span>
                  <a href={`${WA}${encodeURIComponent(`Hi Bhawana, I need ${w.title}.`)}`} target="_blank" rel="noreferrer" className={s.cb}></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
