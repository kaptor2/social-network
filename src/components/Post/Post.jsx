import React from 'react';
import './PostPosition.css';
import { Foto } from '../Foto/Foto';

export const Post = (props) => {
  return (
    <div className={`${props.className} Post`}>
      <div>
        <Foto
          src={`${props.foto}`}
          className='Post_Foto--position'/>
        <p className='Post__p'>{props.name}</p>
      </div>
      <p className='Post__textarea--position'>{props.text}</p>
    </div>
  );
}
