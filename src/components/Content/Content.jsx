import React from 'react';
import './ContentPosition.css';
import {Profile} from '../Profile/Profile';
import {Message} from '../Message/Message';
import {Route} from "react-router-dom";

export const Content = (props) => {
    return (
        <div className={`${props.className} Content`}>
            <Route path='/profile' component={Profile}/>
            {/*<Profile className='Content_Profile--position'/>*/}
            {/*<Message className='Content_Message--position'/>*/}
            <Route path='/message' component={Message}/>
        </div>
    );
}
