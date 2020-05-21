import React from 'react';
import './LogoPosition.css';
import pic from './logo.svg';

export const Logo = (props) => {
  return (
    <div className={`${props.className}`}>
        <img src={`${pic}`} className='Logo__pic'/>
    </div>
  );
}
