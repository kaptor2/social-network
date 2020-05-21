import React from 'react';
import './TopScreenPosition.css';

export const TopScreen = (props) => {
  return (
    <div className={`${props.className} TopScreen`}>
        <img src={`${props.src}`} className='TopScreen__pic'/>
    </div>
  );
}
