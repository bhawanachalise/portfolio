import React from 'react';
import s from './Blogs.module.css';
const MED='https://medium.com/@bhawanachalise626';
const BLOGS=[
  {tag:'Design Tips',title:'5 Principles of Clean Logo Design That Every Brand Needs',date:'April 2025',link:`${MED}/logo-design`},
  {tag:'Social Media',title:'How I Design 30 Social Media Posts in a Single Day',date:'March 2025',link:`${MED}/30-posts`},
  {tag:'UI/UX',title:'My Figma Workflow for Web & App Design Projects',date:'Feb 2025',link:`${MED}/figma-workflow`},
];
export default function Blogs(){
  return(
    <section className={`sec ${s.sec}`} id="blogs">
      <div className="wrap">
        <div className={s.top}>
          <div><span className="label">Articles</span><h2 className="h2">From my <span className="g">Blog Post</span></h2></div>
          <a href={MED} target="_blank" rel="noreferrer" className="btn-outline">View All ↗</a>
        </div>
        <div className={s.grid}>
          {BLOGS.map((b,i)=>(
            <a key={i} href={b.link} target="_blank" rel="noreferrer" className={`glass ${s.card}`}>
              <div className={s.img}>
                <div className={s.medIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(170,255,0,0.4)"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
                </div>
              </div>
              <div className={s.body}>
                <span className={s.tag}>{b.tag}</span>
                <h3 className={s.title}>{b.title}</h3>
                <div className={s.foot}><span className={s.date}>{b.date}</span><span className={s.read}>Read ↗</span></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
