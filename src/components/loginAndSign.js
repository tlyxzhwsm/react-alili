import React from 'react';
import { Link } from 'react-router-dom';
import './loginAndSign.css';

export default class LoginAndSign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uname: "kjk",
            pwd: "sf"
        };
    }
//双向绑定，处理onChange事件
    handleChange(event) {
        if(event.target.name=="id"){
            this.setState({
                uname: event.target.value,
            })
            console.log(this.state.uname);
        }
        if(event.target.name=="password"){
            this.setState({
                pwd:event.target.value
            })
            console.log(this.state.pwd);
        }
    }
    //处理onClick事件
    submitForm(event) {
        console.log(this.state.uname);
        //将id，pwd进行fetch请求发到后端
        
    }

    render() {
        return (
            <div className="basicPanel-loginWrapper">
                <div className="basicPanel-login">
                    <div className="block-zhu-loginWrapper" >
                        <img src={require('../images/sign.png')} alt="Bao躁老哥" className="block-sign-login" />
                        <form>
                            <input name="id" value={this.state.uname} onChange={this.handleChange.bind(this)} type="text" className="block-sign-login-text" />
                            <input name="password" value={this.state.pwd} onChange={this.handleChange.bind(this)} type="password" className="block-sign-login-pwd" />
                            <div className="block-sign-login-submitWrapper" >
                                <img src={require('../images/submit.png')} alt="Bao躁老哥" className="block-sign-login-submit"
                                    onClick={this.submitForm.bind(this)}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}