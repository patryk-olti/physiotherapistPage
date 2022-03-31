import React, { useEffect, useRef } from "react";

import gsap from 'gsap';

const ScoreAnim = ({ percent=4, name='   ' }) => {

    const circleRef = useRef();
    const tl = gsap.timeline();

    useEffect( () => {
        if(percent > 10){ percent=10 }
        if(percent < 0){ percent=0 }
        gsap.fromTo( circleRef.current, { rotate: 180 }, { rotate: (180 + ( (180*percent) / 10 )) , duration: 3, delay: 1,
        scrollTrigger: {
            trigger: '#scores',
            start: 'top 40%',
            end: 'top top',
            scrub: 1
        }})
    }, [])

    const innerStyles = {
        container: {
            position: 'relative',
            margin: '40px',
            width: '200px',
            height: '200px',
            lineHeight: '200px',
            textAlign: 'center',
            overflow: 'hidden'
        },
        circle: {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            transform: 'rotate(190deg)',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '1px solid #e2e7eb',
            backgroundColor: 'brown'
        },
        circle__inner: {
            width: '70%',
            height: '70%',
            borderRadius: '50%',
            backgroundColor: '#e2e7eb'
        },
        container__diff: {
            position: 'absolute',
            bottom: '0',
            width: '100%',
            height: '50%',
            backgroundColor: '#e2e7eb'
        },
        circle__diff: {
            position: 'absolute',
            bottom: '0',
            width: '100%',
            height: '50%',
            backgroundColor: '#e2e7eb'
        },
        circle__text: {
            position: 'absolute',
            width: '100%',
            fontSize: '40px',
            fontWeight: 'bold',
            textAlign: 'center',
        },
        description: {
            position: 'absolute',
            bottom: '-40%',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            fontSize: '1.25rem',
        }
    }

    return(
        <div style={innerStyles.container}> 
            <div style={innerStyles.circle} ref={circleRef} > 
                <div style={innerStyles.circle__inner}> </div>  
                <div style={innerStyles.circle__diff}>  </div>  
            </div>
            <div style={innerStyles.container__diff}>  </div>  

            <div style={innerStyles.circle__text}> {percent>10 ? 10 : percent<0 ? 0 : percent}/10 </div>
            <div style={innerStyles.description}> {name} </div>
    </div>
    )
}

export default ScoreAnim;