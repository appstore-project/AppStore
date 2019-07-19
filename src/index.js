import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SignIn from './SignIn';
import JssProvider from 'react-jss/lib/JssProvider'; // 'react-jss/lib/JssProvider';
import RoutingComponent from './RoutingComponent';


// let res =// (localStorage.getItem('user') == null) ? <SignIn />
//     //:
//     <HashRouter hashType='slash'>
//         <>
//             {/* {(localStorage.getItem('user') == null) && <Redirect to='/login' />} */}

//             <Switch>
//                 {/* <Route path="/app" exact component={(props) => { return <Redirect to='/' />; }} /> */}
//                 {/* {localStorage.getItem('user') == null && <Route path="/" component={(props) => { return <SignIn {...props} />; }} />} */}
//                 <Route path="/" component={(props) => { return <App {...props} />; }} />
//             </Switch>
//         </>
//     </HashRouter>
//     ;

// ReactDOM.render(res, document.getElementById('root'));

ReactDOM.render( <RoutingComponent />, document.getElementById('root'));

 serviceWorker.unregister();
