import React from 'react';
import photo from '../assets/photo.js';
import s from './About.module.css';
const WA=`https://wa.me/9779817261864?text=${encodeURIComponent('Hi Bhawana! I want to hire you.')}`;
export default function About(){
  return(
    <section className={`sec ${s.sec}`} id="about">
      <div className={s.bg} aria-hidden="true"/>
      <div className="wrap">
        <div className={s.grid}>
          <div className={s.photoSide}>
            <div className={s.photoWrap}>
              <div className={s.photoBg}/>
              <img src={photo} alt="Bhawana Chalise" className={s.photo}/>
              <div className={s.photoBadge}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5.5" fill="#aaff00"/><path d="M3.5 6l2 2L8.5 4" stroke="#0a0f0a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Available for Projects
              </div>
            </div>
          </div>
          <div className={s.content}>
            <span className="label">About</span>
            <h2 className="h2">The Story Behind <span className="g">Bhawana</span></h2>
            <p className={s.desc}>I am a passionate designer and BCA graduate from Nepal. My journey into design began during my 4th semester when I explored UI/UX design out of curiosity, which soon turned into a serious passion and career path. Starting with UI/UX fundamentals like layouts and user-centered thinking, I gradually developed a strong interest in visual storytelling, leading me toward Graphic Design. Over time, I built skills in social media design, branding, creative content, and basic motion graphics. Along this journey, I gained valuable experience through internships, real-world design projects, and mentorship sessions where I shared knowledge with beginners. I also took on the role of Design Lead, managing and guiding creative work. These experiences have strengthened my creativity, design thinking, teamwork, and leadership skills.</p>
            <div className={s.stats}>
              <div className={s.stat}><div className={s.sv}>10+</div><div className={s.sl}>Happy Clients</div></div>
              <div className={s.sdiv}/>
              <div className={s.stat}><div className={s.sv}>300+</div><div className={s.sl}>Posts Designed</div></div>
              <div className={s.sdiv}/>
              <div className={s.stat}><div className={s.sv}>3+</div><div className={s.sl}>Years Experience</div></div>
            </div>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-solid">Hire Me →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
