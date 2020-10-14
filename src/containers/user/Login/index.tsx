import React, { Component } from 'react';
import { _login } from '@/api/user'
console.log(_login);
class Login extends Component<any> {
    render() {
        return (
            <div>
                <button onClick={() => {
                    localStorage.setItem('token', '111111')
                    this.props.history.push('/')
                }}>登录</button>
            </div>
        );
    }
}

export default Login;