import React from 'react';
import Navigation from '../components/navigationBar.js';
import Login from '../components/loginAndSign.js';
import Bottom from '../components/bottom.js';

export default class login extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <Login />
                <Bottom />
            </div>
        )
    }
}