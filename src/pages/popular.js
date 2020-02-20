import React from 'react';
import Navigation from '../components/navigationBar.js';
import Container from '../components/container.js';
import Bottom from '../components/bottom.js';

export default class Popular extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <Container />
                <Bottom/>
            </div>
        )
    }
}