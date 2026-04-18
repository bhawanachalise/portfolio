import React from 'react';
import s from './Footer.module.css';
export default function Footer(){
  return(
    <footer className={s.footer}>
      <p className={s.copy}>© {new Date().getFullYear()} Bhawana Chalise — Graphic &amp; UI Designer. All rights reserved.</p>
    </footer>
  );
}
