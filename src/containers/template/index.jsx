import React, { Component } from 'react';
import './index.scss'
import Tb from './components/Tb'
import Zx from './components/Zx'
class Template extends Component {
    render() {
        return (
            <div className='temp'>
                <Tb></Tb>
                <Zx />
            </div>
        );
    }
}

export default Template;