import React, { Component } from 'react';
import Color from './Color'
class Ee extends Component {
    constructor(props: any) {
        super(props)
        props.getRef(this)
    }
    hab() {

    }
    render() {
        console.log(this.props)
        return (
            <div>
                666
            </div>
        );
    }
}

export default Color({ add: '/' })(Ee);