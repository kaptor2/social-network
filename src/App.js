import React from 'react';
import './AppPosition.css';
import {Header} from './components/Header/Header';
import {SideBar} from './components/SideBar/SideBar';
import {Content} from './components/Content/Content';
import {BrowserRouter} from "react-router-dom";

export const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="App_container--position">
                    <Header className="App_header--position"/>
                    <SideBar className="App_side-menu--position"/>
                    <Content className="App_body--position"/>
                </div>
            </div>
        </BrowserRouter>
    );
}
