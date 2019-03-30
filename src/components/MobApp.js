import React, { Component } from 'react';

export default class Row extends Component {

    style = {
        width: 100,
        height: 130,
    };

    render() {

        return <div>
            <div style={this.style}>App1</div>
        </div>
            ;
    }
}