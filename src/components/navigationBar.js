import React from 'react';
import { Link } from 'react-router-dom';
import './navigationBar.css';

export default class NavigationBar extends React.Component {
    render() {
        return (
            <div className="basicPanelNavWrapper">
                <div className="basicPanelNav">

                    <Link className="naviBlock" to="/">
                        <img src={require('../images/re.png')} alt="Bao躁老哥" className="block-re" />
                    </Link>
                    <Link className="naviBlock" to="/latest">
                        <img src={require('../images/xin.png')} alt="Bao躁老哥" className="block-xin" />
                    </Link>
                    <Link className="naviBlock" to="/catalog">
                        <img src={require('../images/mai.png')} alt="Bao躁老哥" className="block-mai" />
                    </Link>
                    <Link className="naviBlock" to="/user">
                        <img src={require('../images/hao.png')} alt="Bao躁老哥" className="block-hao" />
                    </Link>
                    <Link className="naviBlock" to="/login">
                        <img src={require('../images/zhu.png')} alt="Bao躁老哥" className="block-zhu" />
                    </Link>
                    <div className="naviBlockTitle"><img src={require('../images/logo2.png')} alt="Bao躁老哥" className="block-logo" /></div>
                </div>
            </div>
        )
    }
}