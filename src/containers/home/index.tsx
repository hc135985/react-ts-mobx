import React, { Component } from 'react';
import MyMenu from './Menu'
import RouterView from '@/router';
class Home extends Component<any> {
    render() {
        return (
            <div className='home'>
                <div className="header">header</div>
                <div className="main">
                    <div className="main-left">
                        <MyMenu />
                    </div>
                    <div className="main-right">
                        <RouterView routes={this.props.routes} />
                    </div>
                </div>
                <div className="footer">footer</div>
            </div>
        );
    }
}

export default Home;