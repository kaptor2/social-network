import React from 'react';
import './Header.css';
import {Logo} from '../Logo/Logo.jsx';

export const Header = (props) => {
  return (
    <div className={`${props.className} Header`}>
      <Logo className='Header_Logo--position'/>
    </div>
  );
}
