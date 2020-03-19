import React from 'react';
import { Link } from 'react-router-dom';
import './loginAndSign.css';

export default class LoginAndSign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uname: "",
            pwd: ""
        };
    }
    //双向绑定，处理onChange事件
    handleChange(event) {
        if (event.target.name == "id") {
            this.setState({
                uname: event.target.value,
            })
            console.log(this.state.uname);
        }
        if (event.target.name == "password") {
            this.setState({
                pwd: event.target.value
            })
            console.log(this.state.pwd);
        }
    }
    //处理onClick事件
    submitForm(event) {
        console.log(this.state.uname);
        //将id，pwd进行fetch请求发到后端
    this.componentDidMount()
    }

    componentDidMount() {
        fetch('/test2?account='+this.state.uname+'&pwd='+this.state.pwd, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          })
            .then(res => res.json())
            .then((messages) => {alert("恭喜你！\n"
            +this.state.uname+",注册成功\n"
            +"密码："+this.state.pwd);})
    }

    render() {
        return (
            <div className="basicPanel-loginWrapper">
                <div className="basicPanel-login">
                    <div className="block-zhu-loginWrapper" >
                        <label className="label-sign">注  册</label>
                        <form>
                            <input name="id" value={this.state.uname}  placeholder="请输入用户名"
                            onChange={this.handleChange.bind(this)} type="text" className="block-sign-login-text" />
                            <input name="password" value={this.state.pwd}  placeholder="请输入密码"
                            onChange={this.handleChange.bind(this)} type="password" className="block-sign-login-pwd" />
                            <div className="block-sign-login-submitWrapper" >
                            <label className="block-sign-login-submit"  onClick={this.submitForm.bind(this)}>up</label>
                             
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}