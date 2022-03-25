import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';

import imgPerson from '../img/person_background.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

import Menu from '../components/menu';

import styles from '../styles/index.module.css';

const Start = () => {

    const menuRef = useRef();

    const tl = gsap.timeline();

    useEffect( () => {
        tl.fromTo( '#title', {alpha:0, x: '+=300'}, {alpha: 1, x: 0, duration: 2 })
        .fromTo( '#text', {alpha:0, y: '+=100'}, {alpha: 1, y: 0, duration: 1, delay: '-1' })
        .fromTo( '#img', {alpha:0, x: '+=100'}, {alpha: 1, x: 0, duration: 1, delay: '-0.5' })
        .fromTo( '#icon1', {alpha:0, y: '+=10'}, {alpha: 1, y: 0, duration: 0.5, delay: '-0.25' })
        .fromTo( '#icon2', {alpha:0, y: '+=10'}, {alpha: 1, y: 0, duration: 0.5, delay: '-0.25' })
        .fromTo( '#icon3', {alpha:0, y: '+=10'}, {alpha: 1, y: 0, duration: 0.5, delay: '-0.25' })
        .fromTo( menuRef.current, {alpha:0, x: '-=5'}, {alpha: 1, x: 0, duration: 0.5, delay: '-0.25' })
    })

    const textMessage = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

    return(
        <div className={styles.container} id='home'>
            <div className={styles.content__flexColumn}>
                <h1 className={styles.title} id='title'> Studio Masażu - Wika </h1>

                <div className={styles.content__flexColumnStart}>
                    <div className={styles.content__flexRow}> 
                        <section className={styles.textArea} id='text'>
                            {textMessage}
                        </section>
                    </div>

                    <div className={styles.content__flexRow}>
                        <a href="#" className={styles.icon} id='icon1'> <FontAwesomeIcon icon={faInstagram} /> </a>
                        <a href="#" className={styles.icon} id='icon2'> <FontAwesomeIcon icon={faFacebook} /> </a>
                        <a href="#" className={styles.icon} id='icon3'> <FontAwesomeIcon icon={faTwitter} /> </a>
                    </div> 
                </div>
            </div>

            <div className={styles.imageBox}>
                <img src={imgPerson} alt='person' id='img'/>
            </div>   

            <Menu handleRef={menuRef} />
        </div>
    )
}

export default Start;