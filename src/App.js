import React,{useEffect,useRef} from 'react';
import './styles/global.css';
import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import Ticker   from './components/Ticker';
import About    from './components/About';
import Services from './components/Services';
import Work     from './components/Work';

import YouTube  from './components/YouTube';

import Contact  from './components/Contact';
import Footer   from './components/Footer';

const T=['Design is thinking made visual.','Every pixel has a purpose.','Less, but better.','White space breathes.','Typography is voice.','Details make perfection.','Form follows function.','Design with intention.'];

export default function App(){
  const pen=useRef(null);
  const thought=useRef(null);
  const idx=useRef(0);
  useEffect(()=>{
    let timer;
    const mv=e=>{
      if(pen.current){pen.current.style.left=e.clientX+'px';pen.current.style.top=e.clientY+'px';pen.current.classList.add('on')}
      if(thought.current){thought.current.style.left=e.clientX+'px';thought.current.style.top=e.clientY+'px';thought.current.classList.add('on')}
      clearTimeout(timer);
      timer=setTimeout(()=>{idx.current=(idx.current+1)%T.length;if(thought.current)thought.current.textContent=T[idx.current]},2200);
    };
    const ml=()=>{pen.current?.classList.remove('on');thought.current?.classList.remove('on')};
    window.addEventListener('mousemove',mv);
    document.addEventListener('mouseleave',ml);
    return()=>{window.removeEventListener('mousemove',mv);document.removeEventListener('mouseleave',ml);clearTimeout(timer)};
  },[]);

  return(
    <>
      <div className="grid-bg" aria-hidden="true"/>
      <div className="c-pen" ref={pen}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M17 3a2.83 2.83 0 014 4L7.5 20.5 2 22l1.5-5.5L17 3z" stroke="#aaff00" strokeWidth="1.6" fill="rgba(170,255,0,0.1)" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 5l4 4" stroke="#aaff00" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="c-thought" ref={thought}>{T[0]}</div>
      <Navbar/>
      <main>
        <Hero/>
        <Ticker/>
        <About/>
        <Services/>
        <Work/>
       
        <YouTube/>
    
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}
