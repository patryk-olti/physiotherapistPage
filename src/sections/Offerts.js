import React, { useEffect, useRef, useContext } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import imgStones from '../img/kamienie.jpg';

import styles from '../styles/index.module.css';

const Offerts = () => {

    const sectionRef = useRef();

    gsap.registerPlugin(ScrollTrigger);

    useEffect( () => {
        gsap.fromTo( sectionRef.current, { y: '+=100', alpha: 0}, { y: 0, alpha: 1, duration: 1.5, scrollTrigger: {
            trigger: '#offerts',
            start: 'top 40%',
            end: 'top top',
            scrub: 1
        }})
    }, [])

    return(
        <div className={styles.container} id='offerts'>
            <div className={styles.content__flexColumn} ref={sectionRef} >

                <div className={styles.content__flexColumn}>
                    <h1> Technika Nr. 1 </h1>
                    <div className={styles.content__flexRow}> 
                        <section className={styles.textArea}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </section>
                        <section className={styles.textArea}>
                            <img src={imgStones} alt='img' className={styles.imgMedium} />
                        </section>
                    </div>
                </div>

                <div className={styles.content__flexColumn}>
                    <h1> Technika Nr. 2 </h1>
                    <div className={styles.content__flexRow}> 
                        <section className={styles.textArea}>
                            <img src={imgStones} alt='img' className={styles.imgMedium} />
                        </section>

                        <section className={styles.textArea}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </section>
                    </div>
                </div>

                <div className={styles.content__flexColumn}>
                    <h1> Technika Nr. 3 </h1>
                    <div className={styles.content__flexRow}> 
                        <section className={styles.textArea}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </section>
                        <section className={styles.textArea}>
                            <img src={imgStones} alt='img' className={styles.imgMedium} />
                        </section>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Offerts;