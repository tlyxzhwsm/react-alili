import React from 'react';
import { Link } from 'react-router-dom';
import './container.css';
import Popular from './component01.js';

export default class Container extends React.Component {
    render() {
        return (
            <div className="basicPanelWrapper">
            <div className="basicPanel">
               <Popular/>
            </div>
            </div>
        )
    }
}