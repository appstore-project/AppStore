import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { homedir } from 'os';
import Home from './components/Home';
import AppBar from './AppBar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';
import AppInfo from './components/AppInfo';
import RoutingComponent from './RoutingComponent';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#228e22' },
    secondary: { main: '#4d4d4d' },
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Iran Sans, tahoma',
  },
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Route path='/' component={(props) => <AppBar {...this.props} />} />
        <Route path='/' exact component={(props) => <Home {...this.props} />} />
        <Route path="/appinfo/:id" render={(props) => { return <AppInfo {...this.props} appCode={this.props.match.params.id} />; }} />
      </MuiThemeProvider>
    );
  }
}

export default App;
