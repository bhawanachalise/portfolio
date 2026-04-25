import React from 'react';
import s from './Ticker.module.css';
const ITEMS=['App Design','Web Design',,'Logo Design',,'Social Media Post Design','Product Design','Branding','App Design',,'Web Design','Logo Design','Social Media Post Design','Product Design','Branding','App Design','Web Design',,'Logo Design',,'Social Media Post Design','Product Design','Branding',];
export default function Ticker(){
  return(
    <div className={s.ticker} aria-hidden="true">
      <div className={s.track}>
        {ITEMS.map((item,i)=>(
          <span key={i} className={s.item}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="#0a0f0a" strokeWidth="1.5"/><path d="M4 6l1.5 1.5L8 4" stroke="#0a0f0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
