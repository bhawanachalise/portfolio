import React from 'react';
import s from './Services.module.css';
const SVCS=[
  {icon:'🎨',title:'Social Media Design',desc:'Eye-catching posts and graphics for skincare, travel, and tech brands — designed to engage your audience and grow your following.',tool:'Photoshop'},
  {icon:'✦',title:'Logo Design',desc:'Clean, memorable logos that communicate your brands identity clearly and help you stand out from the competition.',tool:'Illustrator'},
  
  {icon:'🌐',title:'Web Design',desc:'Modern, responsive websites that look great and work seamlessly across all screen sizes and devices.',tool:'Figma'},
  {icon:'📲',title:'App Design',desc:'Clean and intuitive mobile app interfaces that deliver a smooth user experience and keep people engaged.',tool:'Figma'},
  {icon:'📦',title:'Product Design',desc:'From wireframes to prototypes — clean, structured design that is ready to build.',tool:'Figma'},
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
