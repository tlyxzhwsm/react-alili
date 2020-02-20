import React from 'react';
import { Link } from 'react-router-dom';
import './container.css';
import Component01 from './component01.js';
import Component02 from './component02.js';

export default class Container extends React.Component {
    render() {
        return (
            <div className="basicPanelWrapper">
            <div className="basicPanel">
               <Component01/>
            </div>
            </div>
        )
    }
}