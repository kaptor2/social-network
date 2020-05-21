import React from 'react';
import './FotoPosition.css';

export const Foto = (props) => {
  return (
    <div className={`${props.className}`}>
        <img src={`${props.src}`} className='Foto__pic'/>
    </div>
  );
}
