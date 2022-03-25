import React, { useEffect } from 'react';

import gsap from 'gsap';

import imgSalon from '../../img/salon.jpg';

import styles from '../../styles/index.module.css';
import custom from '../../styles/customs.module.css';

const StartAnim = ({ handleClick }) => {

    const tl = gsap.timeline();

    const mouseOn = () => tl.to( '#button', {y: '+=5', duration: 0.5 })
    const mouseOff = () => tl.to( '#button', {y: 0, duration: 0.5 })

    const enterPage = () => {
        tl.to( '#text__content', {alpha: 0, duration: 0.5})
        .to( '#container', { alpha: 0, duration: 2});
        setTimeout( () => handleClick(true), 3000);
    }

    useEffect( () => {
        tl.fromTo( '#box1', {y: '-=100%' }, {y: 0, duration: 1})
          .fromTo( '#box2', {y: '+=100%' }, {y: 0, duration: 1, delay: '-0.5'})
          .fromTo( '#box3', {y: '-=100%' }, {y: 0, duration: 1, delay: '-0.5'})
          .fromTo( '#text__content', {alpha: 0 }, {alpha: 1, duration: 1, delay: '0.5'})
          .fromTo( '#square', {alpha: 1 }, {alpha: 0, duration: 0.2})
          .fromTo( '#square', {alpha: 0 }, {alpha: 1, duration: 0.2})
          .fromTo( '#square', {alpha: 1 }, {alpha: 0, duration: 0.2})
          .fromTo( '#square', {alpha: 0 }, {alpha: 1, duration: 0.2})
          .fromTo( '#square', {alpha: 1 }, {alpha: 0, duration: 0.2})
          .fromTo( '#square', {alpha: 0 }, {alpha: 1, duration: 0.2})
          .fromTo( '#text__slide', {x: '+=95%' }, {x: 0, duration: 1})
          .fromTo( '#button', {alpha: 0 }, {alpha: 1, duration: 1, delay: 1})
          .fromTo( '#background', {alpha: 0 }, {alpha: 1, duration: 1})
          .fromTo( '#image', {alpha: 0 }, {alpha: 1, duration: 1})
    }, [])

    return(
        <div className={styles.container} id='container'>
            <div className={custom.container__Anim}>
                <div className={custom.animation__box} id='box1'> </div>
                <div className={custom.animation__box} id='box2'> </div>
                <div className={custom.animation__box} id='box3'> </div>

                <div className={custom.animation__content} id='text__content'> 
                    <div className={custom.animation__inner} id='text__slide'>
                        <div className={custom.animation__square} id='square'> </div>
                        <span className={custom.animation__text} > wika - studio </span>
                    </div>

                    <button 
                    className={custom.animation__button} 
                    id='button'
                    onMouseEnter={mouseOn}    
                    onMouseLeave={mouseOff}
                    onClick={enterPage}
                    > wejdź </button>

                    <div className={custom.animation__contentBackground} id='background'></div>
                </div>
                
                <img 
                    src={imgSalon} 
                    alt='img'
                    className={custom.animation__image}    
                    id='image'
                />
            </div>
        </div>
    )
}

export default StartAnim;