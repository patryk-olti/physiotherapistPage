import React from "react";

import MenuLink from "./menuLink";

import index from '../styles/customs.module.css';

const menuList = [
    { id: 1, name: 'home' },
    { id: 2, name: 'offerts' },
    { id: 3, name: 'contact' }
];

const Menu = ({ handleRef }) => {

    return(
        <div className={index.menu__container} ref={handleRef}>
            { 
                menuList.map( item => <MenuLink key={item.id} scrollTarget={item.name}> </MenuLink>)
            }
        </div>
    )
}

export default Menu;