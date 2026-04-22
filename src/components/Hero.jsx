import React from 'react';
import photo from '../assets/photo.js';
import s from './Hero.module.css';

const WA  = `https://wa.me/9779817261864?text=${encodeURIComponent('Hi Bhawana! I want to hire you.')}`;
const BEH = 'https://www.behance.net/bhawanachalise';

export default function Hero(){
  return(
    <section className={s.hero} id="hero">
      <div className={s.orbL} aria-hidden="true"/>
      <div className={s.orbR} aria-hidden="true"/>
      <div className="wrap">
        <div className={s.inner}>

          {/* LEFT */}
          <div className={s.left}>
            <div className={`${s.badge} fu d1`}>
              <span className={s.badgeRect}/>Hello There
            </div>
            <h1 className={`h1 ${s.heading} fu d2`}>
              Creative Graphic<br/>
              <span className={s.hGreen}> & UI Designer</span>
            </h1>
            <p className={`${s.sub} fu d3`}>
              Helping brands grow through eye-catching graphics, user-friendly UI, and strategic design.
            </p>
            <div className={`${s.btns} fu d4`}>
              <a href={BEH} target="_blank" rel="noreferrer" className="btn-solid">
                View My Work
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="https://drive.google.com/file/d/1v6fPIAbrNb2xJlZ4MGlu6s2WqIooPaqN/view?usp=sharing" target="_blank" rel="" className="btn-outline">Resume </a>
            </div>

            {/* Floating tags — like reference */}
            <div className={`${s.tagRow} fu d4`}>
              
              
            </div>
          </div>

          {/* CENTER PHOTO — green circle bg exactly like reference */}
          <div className={s.photoCol}>
            <div className={s.circleWrap}>
              <div className={s.circle}/>
              <img src={photo} alt="Bhawana Chalise" className={s.photo}/>
              {/* Floating label tags on photo */}
              <div className={`${s.floatLabel} ${s.fl1}`}>
                <span className={s.flDot}/>Web Design
              </div>
              <div className={`${s.floatLabel} ${s.fl2}`}>
                <span className={s.flDot}/>Social Media Post Design
              </div>
              
            </div>
            {/* Rotating ring */}
            <div className={s.ring}>
              <svg width="100" height="100" viewBox="0 0 100 100" style={{animation:'spinSlow 14s linear infinite'}}>
                <path id="rp" d="M50 8 A42 42 0 1 1 49.99 8" stroke="rgba(170,255,0,0.25)" strokeWidth="1" fill="none" strokeDasharray="3 6"/>
                <text fontSize="7" fill="rgba(221, 255, 0, 0.55)" fontFamily="Space Grotesk,sans-serif" letterSpacing="3">
                  <textPath href="#rp">• LET'S EXPLORE  • PORTFOLIO  • DESIGN  </textPath>
                </text>
              </svg>
              <div className={s.ringC}>↓</div>
            </div>
          </div>

          {/* RIGHT stats */}
          <div className={s.right}>
            <div className={s.statCard}>
              <div className={s.statVal}>10+</div>
              <div className={s.statLabel}>Happy Clients</div>
            </div>
            <div className={s.statCard}>
              <div className={s.statVal}>300+</div>
              <div className={s.statLabel}>Posts Designed</div>
            </div>
            <div className={s.statCard}>
              <div className={s.statVal}>3+</div>
              <div className={s.statLabel}>Years Experience</div>
            </div>
          </div>

        </div>
      </div>
      <style>{`@keyframes spinSlow{to{transform:rotate(360deg)}}`}</style>
    </section>
  );
}
