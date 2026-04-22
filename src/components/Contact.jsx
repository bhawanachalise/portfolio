import React from 'react';
import s from './Contact.module.css';
const WA=`https://wa.me/9779817261864?text=`;
const SVCS=[
  
  {l:'📱 Social Media Posts',m:'Hi Bhawana! I need social media post designs.'},
  {l:'🖥 Web / App Design',m:'Hi Bhawana! I need web or app design.'},
  {l:'🎨 Logo Design',m:'Hi Bhawana! I need a logo design.'},
  
  {l:'📚 Online Class Booking',m:'Hi Bhawana! I want to book a design class.'},
  {l:'💬 General Inquiry',m:'Hi Bhawana! I saw your portfolio.'},
];
export default function Contact(){
  return(
    <section className={`sec ${s.sec}`} id="contact">
      <div className={s.bg} aria-hidden="true"/>
      <div className="wrap">
        <div className={s.grid}>
          <div className={s.left}>
            <span className="label">Get in Touch</span>
            <h2 className="h2">Have An Awesome Project<br/>Idea? <span className="g">Let's Discuss</span></h2>
            <p className={s.desc}>Ready to bring your vision to life? I'm available for freelance projects worldwide. Let's create something amazing together!</p>
            <div className={s.checks}>
              {['Quick Response',].map(c=>(
                <div key={c} className={s.check}><span className={s.chk}>✓</span>{c}</div>
              ))}
            </div>
            <div className={s.socials}>
              {[{n:'Behance',h:'https://behance.net/bhawanachalise'},{n:'LinkedIn',h:'https://www.linkedin.com/in/bhawana-chalise-/'},{n:'YouTube',h:'https://www.youtube.com/@chalisebhawana'},{n:'Facebook',h:'https://www.facebook.com/bhawana.chalise.2025'},{n:'Pinterest',h:'https://www.pinterest.com/bhawanachalise626/'},{n:'Github',h:'https://github.com/bhawanachalise'}].map(s2=>(
                <a key={s2.n} href={s2.h} target="_blank" rel="noreferrer" className={s.soc}>{s2.n} ↗</a>
              ))}
            </div>
          </div>
          <div className={`glass ${s.waCard}`}>
            <div className={s.waHead}>
              <div className={s.waAv}>B</div>
              <div>
                <div className={s.waName}>Bhawana Chalise</div>
                <div className={s.waSt}><span className={s.waDot}/>Online · Graphic &amp; UI Designer</div>
              </div>
            </div>
            <div className={s.waBody}>
              <div className={s.waBub}>👋 Hi! I'm Bhawana. Which service can I help you with?</div>
              <p className={s.waHint}>Tap a service to message me directly:</p>
              <div className={s.waItems}>
                {SVCS.map(sv=>(
                  <a key={sv.l} href={`${WA}${encodeURIComponent(sv.m)}`} target="_blank" rel="noreferrer" className={s.waItem}>
                    {sv.l}<span className={s.waArr}>→</span>
                  </a>
                ))}
              </div>
            </div>
            <div className={s.waFoot}>
              <a href={`${WA}${encodeURIComponent('Hi Bhawana! I saw your portfolio.')}`} target="_blank" rel="noreferrer" className={s.waCta}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Open WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
