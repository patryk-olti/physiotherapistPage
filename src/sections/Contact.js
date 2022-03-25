import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/index.module.css';
import custom from '../styles/customs.module.css';

const Contact = () => {

    const sectionRef = useRef();

    gsap.registerPlugin(ScrollTrigger);

    useEffect( () => {
        gsap.fromTo( sectionRef.current, { y: '+=100', alpha: 0}, { y: 0, alpha: 1, duration: 1.5, scrollTrigger: {
            trigger: '#contact',
            start: 'top 40%',
            end: 'top top',
            scrub: 1
        }})
    }, [])

    return(
        <div className={styles.container} id='contact'>
            <div className={styles.content__flexColumn} ref={sectionRef}>
                <div className={styles.content}>
                    <div className={custom.tile} >
                        <a href="#" className={styles.iconLarge}> <FontAwesomeIcon icon={faLocationDot} /> </a>
                        <h1> Wrocław </h1>
                        <h2> ul. Najnowsza 35/2 </h2>
                    </div>

                    <div className={custom.tile}>
                        <a href="#" className={styles.iconLarge}> <FontAwesomeIcon icon={faPhone} /> </a>
                        <h1> telefon </h1>
                        <h2> 123-456-789 </h2>
                    </div>

                    <div className={custom.tile}>
                        <a href="#" className={styles.iconLarge}> <FontAwesomeIcon icon={faEnvelope} /> </a>
                        <h1> e-mail </h1>
                        <h2> przyklad@gmail.com </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;