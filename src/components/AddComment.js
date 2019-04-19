import { Ctrl as appsCtrl } from '../Controllers/AppsController';
import React, { Component } from 'react';

export default class AddComment extends Component {


    render() {

        return <div>
            <input type='text' ref={x => this.txt = x}></input>
            <button onClick={() => appsCtrl.addComment(this.txt.value)}>ثبت نظر</button>
        </div>;
    }
}


