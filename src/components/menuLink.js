import React from 'react';

import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all';

import index from '../styles/customs.module.css';

const menuLink = ({ scrollTarget }) => {

    gsap.registerPlugin(ScrollToPlugin);

    const moveTop = () => gsap.to(window, {duration: 1, ease: 'power2', scrollTo: `#${scrollTarget}`});

    return(
        <button className={index.menu__tile} onClick={() => moveTop(scrollTarget)} > </button>

    )    
}

export default menuLink;