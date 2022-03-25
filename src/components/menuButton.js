import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const Menu = ({ handleRef }) => {

    const styles = {
        position: 'absolute',
        top: '5%',
        left: '3%',
        
        width: '20px',
        height: '40px',

        lineHeight: '40px',
        textAlign: 'center',
        fontSize: '20px',
        border: '2px solid gray',
        borderRadius: '20px',
        cursor: 'pointer',
        backgroundColor: 'white',
        boxShadow: '2px 2px black'
    }

    return(
        <div style={styles} ref={handleRef} >
           <FontAwesomeIcon icon={faEllipsisV} />
        </div>
    )
}

export default Menu;