import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { homedir } from 'os';
import Home from './components/Home';
import AppBar from './AppBar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
      primary: { main: '#228e22' },
      secondary: { main: '#4d4d4d' },
  },
  typography: {
      useNextVariants: true,
      fontFamily: 'Iran Sans", tahoma',
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}

        <AppBar></AppBar>
        <Home></Home>
      </MuiThemeProvider>
    );
  }
}

export default App;
