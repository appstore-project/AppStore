import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SignIn from './SignIn';
import JssProvider from 'react-jss/lib/JssProvider'; // 'react-jss/lib/JssProvider';


let res =
    <HashRouter hashType='slash'>
        <>
            {(localStorage.getItem('user') == null) && <Redirect to='/login' />}

            <Switch >
                <Route path="/login" exact component={(props) => { return <SignIn {...props} />; }} />
                <Route path="/" component={(props) => { return <App {...props} />; }} />
            </Switch>
        </>
    </HashRouter>
    ;

ReactDOM.render(res, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
