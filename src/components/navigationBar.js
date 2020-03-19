import React from 'react';
import { Link } from 'react-router-dom';
import './navigationBar.css';

export default class NavigationBar extends React.Component {
    render() {
        return (
            <div className="basicPanelNavWrapper">
                <div className="basicPanelNav">

                    <Link className="naviBlock" to="/">
                        <label className="label-limit" >社论</label>
                    </Link>
                    <Link className="naviBlock" to="/latest">
                    <label className="label-limit" >新鲜</label>
                    </Link>
                    <Link className="naviBlock" to="/catalog">
                    <label className="label-limit" >大赏</label>
                    </Link>
                    <Link className="naviBlock" to="/user">
                    <label className="label-limit" >我的</label>
                    </Link>
                    <Link className="naviBlock" to="/login">
                    <label className="label-limit">登录</label>
                    </Link>
                    <div className="naviBlockTitle"><img src={require('../images/logo.png')} alt="Bao躁老哥" className="block-logo" /></div>
                </div>
            </div>
        )
    }
}