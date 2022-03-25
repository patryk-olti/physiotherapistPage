import { useState, useEffect } from 'react';

import gsap from 'gsap';

import imgPerson from '../img/person_background.jpg';

import styles from '../styles/index.module.css';

const Start = () => {

    const tl = gsap.timeline();

    useEffect( () => {
        tl.fromTo( '#title', {alpha:0, x: '+=300'}, {alpha: 1, x: 0, duration: 2 })
        .fromTo( '#text', {alpha:0, y: '+=100'}, {alpha: 1, y: 0, duration: 1, delay: '-1' })
        .fromTo( '#img', {alpha:0, x: '+=100'}, {alpha: 1, x: 0, duration: 1, delay: '-0.5' })
    })

    const textMessage = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

    return(
        <div className={styles.container}>
            <div className={styles.content__flexColumn}>
                <h1 className={styles.title} id='title'> studio masażu - Wika </h1>

                <div className={styles.content__flexRow}> 
                    <section className={styles.textArea} id='text'>
                        {textMessage}
                    </section>
                </div>    
            </div>

            <div className={styles.imageBox}>
                <img src={imgPerson} alt='person' id='img'/>
            </div>   
        </div>
    )
}

export default Start;