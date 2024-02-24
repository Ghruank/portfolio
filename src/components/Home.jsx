import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import { BrowserRouter as Router, Route, Link, Switch, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Home = ()=>{
    // const [scrolling, setScrolling] = useState(false);

    // useEffect(() => {
    //   const handleScroll = () => {
    //     if (window.scrollY > 0) {
    //       setScrolling(true);
    //     } else {
    //       setScrolling(false);
    //     }
    //   };
  
    //   window.addEventListener('scroll', handleScroll);
  
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    // }, []);
    return(
        <header className="home {scrolling ? 'navbar scrolled' : 'navbar'}">
            <div className="navbar">
                <div>
                    <p className="header typing-cursor">Ghruank Kothare</p>
                </div>
                
                <ul>
                    <li href="#"><AnchorLink className='anchor' href='#aboutd'>About Me</AnchorLink></li>
                    <li href="#"><AnchorLink className='anchor' href='#skillsd'>Skills</AnchorLink></li>
                    <li href="#"><AnchorLink className='anchor' href='#projectsd'>Projects</AnchorLink></li>
                    <li href="#"><AnchorLink className='anchor' href='#Contact'>Contact</AnchorLink></li>
                </ul>
            </div>
        </header>
    );
}

export default Home;