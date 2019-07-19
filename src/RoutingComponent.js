
import React, { Component } from 'react';
import { HashRouter, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SignIn from './SignIn';
import App from './App';

export default class RoutingComponent extends Component {

    constructor(props) {
        super(props);

        if (localStorage.getItem('user') == null)
            this.state = { loggedIn: false };
        else
            this.state = { loggedIn: true };
    }

    loginDoneFunc = () => {  
 
        //alert('خوش آمدید !');//
        this.setState({ loggedIn: true });
    }

    render() {

        console.log('login:',this.state.loggedIn);
        if (!this.state.loggedIn)
            return (<SignIn loginDone={this.loginDoneFunc} />);
        else
            return <HashRouter hashType='slash'>
                <Switch >
                    <Route path="/" history={window.history} component={() => { return <App />; }} />
                </Switch>
            </HashRouter>;

        // return <HashRouter hashType='slash'>
        //     {(localStorage.getItem('user') == null && window.location.hash !== '#/login') ? <SignIn loginDone={loginDoneFunc} />//<Redirect to='/login' />
        //         : <>
        //             {
        //                 <Switch >
        //                     <Route path="/login" exact history={window.history} component={() => { return <SignIn history={window.history} />; }} />
        //                     <Route path="/" history={window.history} component={() => { return <App />; }} />
        //                 </Switch>
        //             }
        //         </>
        //     }
        // </HashRouter>
    }
}

