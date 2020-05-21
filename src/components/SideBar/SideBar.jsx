import React from 'react';
import './SideBarPosition.css';
import {ItemMenu} from '../ItemMenu/ItemMenu.jsx'
import {res} from './res/res';

export const SideBar = (props) => {
  return (
    <div className={`${props.className} SideBar`}>
      <ItemMenu href='/profile' src={res.profile} className='SideBar_ItemMenu--position'/>
      <ItemMenu href='/message' src={res.message} className='SideBar_ItemMenu--position'/>
      <ItemMenu href='/news' src={res.news} className='SideBar_ItemMenu--position'/>
      <ItemMenu href='/music' src={res.music} className='SideBar_ItemMenu--position'/>
      <ItemMenu href='/settings' src={res.settings} className='SideBar_ItemMenu--position'/>
    </div>
  );
}
