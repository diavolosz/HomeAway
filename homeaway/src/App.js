import './App.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger)

function App() {


  const logoRef = useRef(null)

  useEffect(() => {

    const el = logoRef.current

    gsap.to(el, {
      rotate: 360,
      duration: 2,
      scrollTrigger: {
        trigger: el,
        start: 'top 50%',
        markers: true
      }
    })

  }, [])




  return (
    <div className="App">
     
    <header>Top of page</header>

    <section>
      <img src='logo192.png' alt='img' ref={logoRef}></img>
    </section>
    
    <footer>Bot of page</footer>


    </div>
  );
}

export default App;
