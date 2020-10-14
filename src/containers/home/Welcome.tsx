import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <h1
                style={{
                    fontSize: 60,
                    textAlign: 'center',
                    lineHeight: '900px',
                    color: 'skyblue'
                }}
            >
                欢迎登录考试系统
            </h1>
        );
    }
}

export default Welcome;