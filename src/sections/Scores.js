import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import ScoreAnim from '../containers/animation/scoreAnim';

import styles from '../styles/index.module.css';
import custom from '../styles/customs.module.css';

const Contact = () => {

    const sectionRef = useRef();

    gsap.registerPlugin(ScrollTrigger);

    useEffect( () => {
        gsap.fromTo( sectionRef.current, { y: '+=100', alpha: 0}, { y: 0, alpha: 1, duration: 1.5, scrollTrigger: {
            trigger: '#scores',
            start: 'top 40%',
            end: 'top top',
            scrub: 1
        }})
    }, [])

    return(
        <div className={styles.container} id='scores'>
            <div className={styles.content__flexColumn} ref={sectionRef}>
                <h1> Oceny </h1>
                <div className={styles.content}>
                    <ScoreAnim percent={9.2} name='ocena klientów' />
                    <ScoreAnim percent={8.9} name='terminowość' />
                    <ScoreAnim percent={8.9} name='produkty' />
                </div>
            </div>
        </div>
    )
}

export default Contact;