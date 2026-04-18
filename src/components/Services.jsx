import React from 'react';
import s from './Services.module.css';
const SVCS=[
  {icon:'🎨',title:'Social Media Design',desc:'Scroll-stopping posts for skincare brands, travel agencies & IT companies. Designed to convert and grow your audience.',tool:'Photoshop'},
  {icon:'✦',title:'Logo Design',desc:'Clean, memorable logos that build powerful brand identity and make you stand out from the competition.',tool:'Illustrator'},
  
  {icon:'🌐',title:'Web Design',desc:'We craft responsive, modern websites that look great and perform flawlessly across all devices.',tool:'Figma'},
  {icon:'📲',title:'App Design',desc:'We design sleek, user-friendly mobile apps that deliver smooth experiences and keep users engaged.',tool:'Figma'},
  {icon:'📦',title:'Product Design',desc:'End-to-end digital product design from wireframes to high-fidelity prototypes with full design systems.',tool:'Figma'},
];
export default function Services(){
  return(
    <section className={`sec ${s.sec}`} id="services">
      <div className={s.bg} aria-hidden="true"/>
      <div className="wrap">
        <div className={s.top}>
          <div>
            <span className="label">Service</span>
            <h2 className={`h2 ${s.h}`}>Crafting Value  Through<br/>Design</h2>
          </div>
          <a href="#contact" className={`btn-outline ${s.viewAll}`}>View All Services</a>
        </div>
        <div className={s.grid}>
          {SVCS.map((sv,i)=>(
            <div key={i} className={`glass ${s.card}`}>
              <div className={s.cardIcon}>{sv.icon}</div>
              <h3 className={`h3 ${s.cardTitle}`}>{sv.title}</h3>
              <p className={s.cardDesc}>{sv.desc}</p>
              <div className={s.cardFoot}>
                
                 
              
                <span className={s.tool}>{sv.tool}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
