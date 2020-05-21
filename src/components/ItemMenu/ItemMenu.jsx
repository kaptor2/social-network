import React from 'react';
import './ItemMenuPosition.css';
import {NavLink} from "react-router-dom";

export const ItemMenu = (props) => {
  return (
    <NavLink to={props.href} className={`${props.className}`}>
        <img src={`${props.src}`} className='ItemMenu__pic'/>
    </NavLink>
  );
}
